import { GetRocketDocument } from '~/graphql/generated/graphql'

export default defineNuxtRouteMiddleware(async (to) => {
    if (!to.params.id) return

    const rocketId = to.params.id as string

    const { data } = await useAsyncQuery(GetRocketDocument, { rocketId })

    if (!data.value?.rocket) {
        throw createError({
            statusCode: 404,
            statusMessage: 'Rocket not found',
            fatal: true,
        })
    }
})
