import { EmailAlreadyInUseError } from "../errors/user.js";
import { PostgresGetUserByEmailRepository } from "../repositories/postgres/get-use-by-email.js"
import bcrypt from 'bcrypt'
import { PostgresUpdateUserRepository } from "../repositories/postgres/update-user.js";

export class UpdateUserUseCase {
    async execute(userId, updateUserParams) {
        // se o e-mail estiver sendo atualizado, verificar se ele já está em uso
        if (updateUserParams.email) {
            const postgresGetUserByEmailRepository = 
            new PostgresGetUserByEmailRepository()

            const userWithProvidedEmail =
                await postgresGetUserByEmailRepository.execute(
                    updateUserParams.email
                )
            
            if (userWithProvidedEmail) {
                throw new EmailAlreadyInUseError(updateUserParams.email)
            }
        }

        const user = {
            ...updateUserParams
        }

        // se a senha estiver sendo atualizada, criptografá-la
        if (updateUserParams.password) {
            const hashedPassword = await bcrypt.hash(
                updateUserParams.password,
                10
            )

            user.password = hashedPassword
        }
        // chamar o repository para atualilzar o usuário
        const postgresUpdateUserRepository = new PostgresUpdateUserRepository()

        const updateUser = await postgresUpdateUserRepository.execute(
            userId,
            user
        )

        return updateUser
    }
}