import { HttpResponse, HttpRequest } from '../protocols/http'
import { MissimParamError } from '../errors/missing-params'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: (new MissimParamError('name'))
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: (new MissimParamError('email'))
      }
    }

    return {
      statusCode: 400,
      body: (new MissimParamError('name'))
    }
  }
}
