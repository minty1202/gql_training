
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8080/v1/graphql",
  documents: ['./src/**/*.tsx', './src/**/*.ts'],
  generates: {
    './src/generated/graphql.tsx': {
        plugins: [
            'typescript',
            'typescript-operations',
            'typescript-react-apollo',
        ],
    },
    './graphql.schema.json': {
        plugins: ['introspection'],
    },
  },
};

export default config;
