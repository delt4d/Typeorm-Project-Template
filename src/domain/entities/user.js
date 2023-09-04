import { randomUUID } from "crypto"

class User {
    constructor({
        username,
        email,
        password,
        createdAt,
        updatedAt,
    }, id) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt || new Date();
        this.updatedAt = updatedAt;
        this.id = id || randomUUID();
    }
}

export default User;