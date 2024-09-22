import { StandardException } from './standard.exception';

export class ServiceUnavailableException extends StandardException {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
  
  getDefaultMessage() {
    return 'Network error or CORS issue';
  }
  getDefaultMessageKey() {
    return 'SERVICE_UNAVAILABLE';
  }
}
