import { v4 as uuidv4 } from 'uuid';
import dataSource from "./typeorm-data-source.js"
import User from '../models/user.entity.js';

async function seedDatabase() {
    try {
        console.log("Seeding database...");
        await dataSource.initialize();
        await createUser("admin", "admin@admin", "1234pass");
        await createUser("user", "user@user", "1234pass");
        console.log("Database seeded successfully");
    }
    catch(err) {
        console.error("Error seeding database: " + err.message);
    }
    finally {
        process.exit(0);
    }
}

async function createUser(username, email, password) {
    const id = uuidv4();
    const userRepository = dataSource.getRepository(User);
    const user = userRepository.create({ id, username, email, password });
    await userRepository.delete({ username: user.username });
    await userRepository.save(user);
}

(async () => await seedDatabase())();