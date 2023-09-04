import { join } from "path";
import { DataSource } from "typeorm";
import { getProjectPath } from "../../utils/path.helper.js";

const dataSource = new DataSource({
    type: 'mysql',
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_SCHEMA,
    port: process.env.DB_PORT,
    entities: [
        join(getProjectPath(), "infra", "models", "*.entity.js")
    ],
    migrations: [
        join(getProjectPath(), "infra", "migrations", "**", "*.js")
    ],
    cli: {
        migrationsDir: join(getProjectPath(), "..", "migrations"),
        entitiesDir: join(getProjectPath(), "..", "models"),
    }
});

export default dataSource;
