import type { CodegenConfig } from '@graphql-codegen/cli'
import { loadEnvConfig } from '@next/env'

const projectDir = process.cwd()
loadEnvConfig(projectDir)

const config: CodegenConfig = {
	overwrite: true,
	schema: {
		[`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`]:
			{
				headers: {
					'User-Agent': 'Codegen',
					Authorization: `Bearer ${process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN}`,
				},
			},
	},
	documents: ['src/**/*.ts'],
	generates: {
		'src/api/gql/': {
			preset: 'client',
		},
		'src/api/gql/schema.gql': {
			plugins: ['schema-ast'],
		},
	},
}

export default config
