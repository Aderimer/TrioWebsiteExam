class UserService {
    constructor() {
        this.db = require('../models');
        this.User = this.db.User;
    }

    async createUser(userData) {
        try {
            const user = await this.User.create(userData);
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = UserService;