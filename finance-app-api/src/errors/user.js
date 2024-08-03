export class EmailAlreadyInUseError extends Error {
    constructor() {
        super('The provider e-mail is already in use.')
        this.name = 'EmailAlreadyInUseError'
    }
}