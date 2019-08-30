import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING,
      },
      { sequelize }
    );

    return this;
  }
}

export default User;