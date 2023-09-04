import * as dotenv from "dotenv";
import { join } from "path";
import { DataSource } from "typeorm";
import c from "../../utils/path.helper.js";

dotenv.config();

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    entities: [
        join(c.__dirname, "..", "models", "**", "*.entity.js")
    ],
    migrations: [
        join(c.__dirname, "..", "migrations", "**", "*.js")
    ],
    cli: {
        migrationsDir: join(c.__dirname, "..", "migrations"),
        entitiesDir: join(c.__dirname, "..", "models"),
    }
});

(async () => {
    try {
        await dataSource.initialize();
        console.log("Database initialized successfully");
    } catch (err) {
        console.error("Error on initializing the database: " + err);
    }
})();

export default dataSource;
