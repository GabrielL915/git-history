import { ErrorResponseBuilder } from './error-response.builder';
import { Field, IErrorResponse } from 'shared-interfaces';

export class ErrorResponse implements IErrorResponse {
  title?: string;
  code?: string;
  message?: string;
  details?: string;
  messageCode?: string;
  fields: Field[] = [];

  constructor(data: IErrorResponse) {
    Object.assign(this, data);
  }

  static builder(): ErrorResponseBuilder {
    return new ErrorResponseBuilder();
  }
}
