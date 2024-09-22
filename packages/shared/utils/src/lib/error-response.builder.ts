import { ErrorResponse } from './error-response';
import { IErrorResponse } from 'shared-interfaces';

export class ErrorResponseBuilder {
  private data: IErrorResponse = {
    fields: [],
  };

  setTitle(title: string): ErrorResponseBuilder {
    this.data.title = title;
    return this;
  }

  setCode(code: string): ErrorResponseBuilder {
    this.data.code = code;
    return this;
  }

  setMessage(message: string): ErrorResponseBuilder {
    this.data.message = message;
    return this;
  }

  setDetails(details: string): ErrorResponseBuilder {
    this.data.details = details;
    return this;
  }

  setMessageCode(messageCode: string): ErrorResponseBuilder {
    this.data.messageCode = messageCode;
    return this;
  }

  addField(name: string, message: string): ErrorResponseBuilder {
    this.data.fields.push({ name, message });
    return this;
  }

  build() {
    return new ErrorResponse(this.data);
  }
}
