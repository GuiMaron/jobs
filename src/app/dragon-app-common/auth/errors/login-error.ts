
import { AppError }         from '../../errors/errors/app-error'
import { LoginErrorFormat } from '../interfaces/login-error-format';





export class LoginError extends AppError
{

    constructor (errors : LoginErrorFormat)
    {
        super(errors)
    }

}
