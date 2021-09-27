import Adapters from "next-auth/adapters";

// Extend the built-in models using class inheritance
export default class User extends (<any>Adapters.TypeORM.Models.User.model) {
  constructor(name, email, image, emailVerified, role, address, contact, storeName, profileImageKey, favouriteArchetype) {
    super(name, email, image, emailVerified);
    if (role) {
      this.role = role;
    }
    if (role === 'store') {
      this.address = address;
      this.contact = contact;
      this.storeName = storeName;
      this.profileImageKey = profileImageKey;
      this.favouriteArchetype = favouriteArchetype;
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
    address: {
      default: {},
      type: "object",
    },
    contact: {
      default: {},
      type: "object",
    },
    storeName: {
      type: "varchar",
    },
    profileImageKey: {
      type: "varchar",
    },
    favouriteArchetype: {
      type: "varchar",
    }
  },
};
