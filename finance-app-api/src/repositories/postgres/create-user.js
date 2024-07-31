import { PostgresHelper } from "../../db/postgres/connect/helper";

export class PostgresCreateUserRepository {
    async excute(createUserParams) {
        const results = await PostgresHelper.query(
            'INSERT INTO users (ID, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5)',
            [
                createUserParams.ID,
                createUserParams.first_name,
                createUserParams.last_name,
                createUserParams.email,
                createUserParams.password,
            ]
        )
    
        return results[0]
    }
}
