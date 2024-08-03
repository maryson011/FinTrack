import { CreateUserUseCase } from "../use-cases/create-user.js"
import validator from 'validator'
import { badRequest, created, serverError } from "./helpers.js"
import { EmailAlreadyInUseError } from '../errors/user.js'

export class CreateUserController {
    async execute(httpRequest) {
        try {
            const params = httpRequest.body
            // validar a requisição (campos obrigatórios, tamanho se senha, email válido)
            const requireFields = ['first_name', 'last_name', 'email', 'password']
            
            for (const field of requireFields) {
                if (!params[field] || params[field].trim().length === 0) {
                    return badRequest({message: `Missing param: ${field}`})
                }
            }

            if (params.password.length < 6) {
                return badRequest({message: 'Password must be at least 6 caracters'})
            }

            const emailValido = validator.isEmail(params.email)
            if (!emailValido) {
                return badRequest({message: 'Invalid e-mail. Please provide a valid one.'})
            }
            // chamar o use case
            const createUserUseCase = new CreateUserUseCase()

            const createdUser = await createUserUseCase.execute(params)

            // retornar a resposta para o usuário (status code)
            return created(createdUser)
        } catch (e) {
            if (e instanceof EmailAlreadyInUseError) {
                return badRequest({ message: e.message })
            }
            console.log(e)
            return serverError()
        }
    }
}