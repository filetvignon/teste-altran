class InputError extends Error {
  constructor(input) {
    super("Bad Input");
    this.name = "InputError";
    this.metadata = { input };
  }

  toString() {
    return `WARNING --> Bad input: ${this.metadata.input}`;
  }
}

class NotFoundError extends Error {
  constructor(code) {
    super("Zipcode not found");
    this.name = "NotFoundError";
    this.metadata = { zipcode: code };
  }

  toString() {
    return `WARNING --> Zipcode not found: ${this.metadata.zipcode}`;
  }
}

module.exports = {
  InputError,
  NotFoundError,
};
