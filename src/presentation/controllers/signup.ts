import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissimParamError } from '../errors/missing-params'
import { badRequest } from '../helpers/https-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const requiredFields = ['name', 'email', 'password']
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissimParamError(field))
      }
    }
    return badRequest(new MissimParamError('name'))
  }
}
