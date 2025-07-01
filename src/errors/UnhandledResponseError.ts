import { DataValidationError } from './DataValidationError';

export class UnhandledResponseError extends DataValidationError {
  constructor(message: string) {
    super(message);
    this.name = 'UnhandledResponseError';
    Object.setPrototypeOf(this, UnhandledResponseError.prototype);
  }
}
