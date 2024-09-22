export abstract class StandardException extends Error {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, StandardException.prototype);
  }

  getMessage(): string {
    const message = super.message;
    return this.isNotBlank(message) ? message : this.getDefaultMessage();
  }

  abstract getDefaultMessage(): string;
  abstract getDefaultMessageKey(): string;

  private isNotBlank(str: string | null | undefined): boolean {
    return str !== null && str !== undefined && str.trim() !== '';
  }
}