import { users } from "../dummyData/data.js";

const userResolver = {
	Query: {
		users: async (parent, args, context) => {

			return users;
		},
		authUser: async (parent, args, context) => {
			const user = users[0];
			return user;
		},
		getUserById: async (parent, args, context) => {
            const user = users[0];
			return user;
		},
	},
	Mutation: {
		signupUser: async (parent, args, context) => {
			const user = await context.models.User.create(args.input);
			return user;
		},
		loginUser: async (parent, args, context) => {
			const user = await context.models.User.findOne({ username: args.input.username });
			if (!user) {
				throw new Error("User not found");
			}
			const isMatch = await user.comparePassword(args.input.password);
			if (!isMatch) {
				throw new Error("Invalid password");
			}
			return user;
		},
		logoutUser: async (parent, args, context) => {
			return { message: "User logged out" };
		},
	},
};

export default userResolver;