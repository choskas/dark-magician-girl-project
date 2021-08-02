import Adapters from "next-auth/adapters";

// Extend the built-in models using class inheritance
export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  constructor(name, email, image, emailVerified, role) {
    super(name, email, image, emailVerified);
    if (role) {
      this.role = role;
    }
  }
}

export const UserSchema = {
  name: "User",
  target: User,
  columns: {
    ...Adapters.TypeORM.Models.User.schema.columns,
    role: {
      default: "client",
      type: "varchar",
    },
  },
};
