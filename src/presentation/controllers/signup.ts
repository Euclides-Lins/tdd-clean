import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissimParamError } from '../errors/missing-params'
import { badRequest } from '../helpers/https-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissimParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissimParamError('email'))
    }

    return badRequest(new MissimParamError('name'))
  }
}
