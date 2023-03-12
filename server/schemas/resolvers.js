const { AuthenticationError } = require("apollo-server-express");
const { User, Animal } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw new AuthenticationError("You need to be logged in!");
    },
  },
  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    saveAnimal: async (parent, { species, breed, name, age, sex}, context) => {
      if (context.user) {
        const animal = await Animal.create({species, breed, name, age, sex});

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { animal: animal._id } }
        );

        return animal;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
   
    removeAnimal: async (parent, { _Id }, context) => {
      if (context.user) {
        const animal = await Animal.findOneAndDelete({
          _id,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { animal: animal} }
        );

        return animal;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  
  },
};

module.exports = resolvers;
