export enum ErrorCode {
  NotFound = 'user.profiles.not.found',
  BadRequest = 'user.profiles.bad.request',
  InternalServerError = 'user.profiles.internal.server.error',
  Unauthorized = 'user.profiles.unauthorized',
}

export enum ErrorDescription {
  NotFound = 'NotFound',
  Unauthorized = 'Unauthorized',
  BadRequest = 'BadRequest',
  InternalServerError = 'Internal Server Error',
}
