const userTypeDef = `
type User {
	_id: ID!
	username: String!
	name: String!
	password: String!
	profilePicture: String!
	gender: String!
}
type Query {
	users: [User!]
	authUser: User
    getUserById(id: ID!): User
}

type Mutation {
	signupUser(input: SignupUserInput!): User    
	loginUser(input: LoginUserInput!): User
    logoutUser: LogoutResponse
}

input SignupUserInput {
	username: String!
	name: String!
	password: String!
	profilePicture: String!
	gender: String!
}

input LoginUserInput {
	username: String!
	password: String!
}

type LogoutResponse {
	message: String!
}
`;  

export default userTypeDef;