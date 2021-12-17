const bcrypt = require("bcryptjs");

const db = require("../config/db-mongodb");

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  async register() {
    const hashedPassword = await bcrypt.hash(this.password, 12);

    await db.getDB.collections("users").insertOne({
      username: this.username,
      email: this.email,
      password: hashedPassword,
    });
  }
}

module.exports = User;
