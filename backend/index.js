import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import { buildSchema } from "graphql"
import { mergedTypeDefs } from "./typeDefs/index.js"
import { mergedResolvers } from "./resolvers/index.js"

// const app = express()
 
const server = new ApolloServer({
  typeDefs:mergedTypeDefs,
  resolvers:mergedResolvers,
})
 
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },  // Change to any available port (e.g., 4001)
})
 
console.log(`🚀 Server ready at ${url}`)