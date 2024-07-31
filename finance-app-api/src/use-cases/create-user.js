import { v4 as uuidv4} from 'uuid'
import bcrypt from 'bcrypt'
import { PostgresCreateUserRepository } from '../repositories/postgres/create-user.js'

export class CreateUserCase {
    async execute(createUserParams) {
        // TODO verificar se o e-mail já está em uso
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
        const PostgresCreateUserRepository = new PostgresCreateUserRepository()

        const createUser = await PostgresCreateUserRepository.execute(user)
        return createUser
    }
}