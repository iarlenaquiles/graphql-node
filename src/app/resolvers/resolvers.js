import User from '../models/User';

module.exports = {
  Query: {
    users: () => User.findAll(),
    user: id => User.findByPk(id),
  },

  Mutation: {
    createUser: (_, { name, last_name, email }) =>
      User.create({ name, last_name, email }),
  },
};
