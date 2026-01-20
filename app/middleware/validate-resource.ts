import type { TypedDocumentNode } from '@graphql-typed-document-node/core'

export interface ResourceValidation {
    /** The data to query */
    document: TypedDocumentNode<any, any>
    /** Function to extract the variable object from route params */
    getVariables: (params: Record<string, string | string[]>) => Record<string, unknown>
    /** Function to check if the response data is valid (returns true if valid) */
    isValid: (data: unknown) => boolean
    /** Optional custom error message */
    errorMessage?: string
}

declare module '#app' {
    interface PageMeta {
        resourceValidation?: ResourceValidation
    }
}

export default defineNuxtRouteMiddleware(async (to) => {
    const validation = to.meta.resourceValidation as ResourceValidation | undefined

    if (!validation) return

    const variables = validation.getVariables(to.params)
    const { data } = await useAsyncQuery(validation.document, variables)

    if (!validation.isValid(data.value)) {
        throw createError({
            statusCode: 404,
            statusMessage: validation.errorMessage || 'Resource not found',
            fatal: true,
        })
    }
})
