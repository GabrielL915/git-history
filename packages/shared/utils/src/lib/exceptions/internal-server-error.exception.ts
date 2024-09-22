import { StandardException } from './standard.exception';

export class InternalServerErrorException extends StandardException {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, InternalServerErrorException.prototype);
  }

  getDefaultMessage() {
    return 'Internal server error';
  }
  getDefaultMessageKey() {
    return 'INTERNAL_SERVER_ERROR';
  }
}
