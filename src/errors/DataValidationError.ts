export class DataValidationError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'DataValidationError';
    Object.setPrototypeOf(this, DataValidationError.prototype);
  }

  /**
   * Returns a string representation of the error.
   * For log pupose.
   * @returns {string} The error message.
   */
  public toString(): string {
    return `${this.name}: ${this.message}`;
  }

  /**
   * Serializes the error to a string.
   * @returns {string} The serialized error.
   */
  public serialize(): string {
    return this.message;
  }
}
