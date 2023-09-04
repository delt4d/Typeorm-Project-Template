import { EntitySchema } from "typeorm";

const User = new EntitySchema({
    name: 'User',
    tableName: 'user',
    columns: {
        id: {
            type: 'varchar',
            primary: true,
            unique: true,
        },
        username: {
            type: 'varchar',
            length: 255,
            unique: true,
        },
        email: {
            type: 'varchar',
            length: 255,
            unique: true,
        },
        password: {
            type: 'varchar',
            length: 255,
        },
        created_at: {
            type: 'timestamp',
            createDate: true,
        },
        updated_at: {
            type: 'timestamp',
            updateDate: true,
        },
    },
});

export default User;