const transactionTypeDef = `
    type Transaction {
        _id: ID!
        userId: ID!
        description: String!
        category: String!
        amount: Float!
        paymentType: String!
        location: String
        date: String!
    }
        type Query {
            transactions: [Transaction!]
            transactionsById(id: ID!): Transaction
        }
        type Mutation {
                addTransaction(input: AddTransactionInput!): Transaction
                updateTransaction(input: UpdateTransactionInput!): Transaction
                deleteTransaction(id: ID!): Transaction
        }
                input AddTransactionInput {
                    userId: ID!
                    description: String!
                    category: String!
                    amount: Float!
                    paymentType: String!
                    location: String
                    date: String!
                }
                input UpdateTransactionInput {
                    id: ID!
                    description: String!
                    category: String!
                    amount: Float!
                    paymentType: String!
                    location: String
                    date: String!
                }       
`
export default transactionTypeDef;