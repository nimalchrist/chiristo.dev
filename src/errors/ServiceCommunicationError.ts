export class ServiceCommunicationError extends Error {
  constructor(
    private serviceName: string,
    public message: string = 'Unable to communicate with the service',
  ) {
    super(`Unable to communicate with ${serviceName}`);
    Object.setPrototypeOf(this, ServiceCommunicationError.prototype);
  }

  /**
   * Returns a string representation of the error.
   * For log pupose.
   * @returns {string} The error message.
   */
  public toString(): string {
    return `${this.serviceName}: ${this.message}`;
  }

  /**
   * Serializes the error to a string.
   * @returns {string} The serialized error.
   */
  public serialize(): string {
    return this.message;
  }
}
