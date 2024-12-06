const { ApolloServer, gql } = require('apollo-server');

// Definir el esquema (schema) con el tipo Query
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Implementar los resolvers
const resolvers = {
  Query: {
    hello: () => '¡Hola Mundo desde GraphQL!',
  },
};

// Crear la instancia del servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciar el servidor
server.listen({ port: 4000 }).then(({ url }) => {
  console.log(`🚀 Servidor GraphQL listo en ${url}`);
});
