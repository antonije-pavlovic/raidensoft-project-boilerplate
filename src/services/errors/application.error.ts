export default class ApplicationError extends Error {
  code: string;
  status: number;

  constructor(error, resource) {
    super();

    Error.captureStackTrace(this, this.constructor);
    this.code = error.code;

    this.message = error.message;

    if(resource) {
      this.message = `In ${resource}: ${this.message}`;
    }

    this.status = error.status || 500;
  }

}