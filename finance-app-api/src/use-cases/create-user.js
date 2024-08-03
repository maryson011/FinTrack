import { v4 as uuidv4} from 'uuid'
import bcrypt from 'bcrypt'
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js'
import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-use-by-email.js'

export class CreateUserUseCase {
    async execute(createUserParams) {
        // TODO verificar se o e-mail já está em uso
        const postgresGetUserByEmailRepository = new PostgresGetUserByEmailRepository()

        const userWithProvidedEmail = 
            await postgresGetUserByEmailRepository.execute(
                createUserParams.email
            )
        
        if (userWithProvidedEmail) {
            throw new Error('The provided e-mail is already in use.')
        }
        // gerar id usuário
        const userId = uuidv4()
        // criptografar a senha
        const hashePassword = await bcrypt.hash(createUserParams.password, 10)
        // inserir o usuário no banco de dados
        const user = {
            ...createUserParams,
            id: userId,
            password: hashePassword,
        }

        // chamar o repositório
        const postgresCreateUserRepository = new PostgresCreateUserRepository()

        const createUser = await postgresCreateUserRepository.execute(user)
        return createUser
    }
}