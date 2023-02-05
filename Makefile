generate.gql:
	npx gq http://localhost:8080/v1/graphql --introspect > schema.graphql && npm run codegen

