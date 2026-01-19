import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
	overwrite: true,
	schema: 'https://spacex-production.up.railway.app/',
	documents: 'app/graphql/**/*.graphql',
	generates: {
		'app/graphql/generated/': {
			preset: 'client',
			plugins: [],
			config: {
				useTypeImports: true,
				onlyOperationTypes: true,
			},
		},
	},
}

export default config
