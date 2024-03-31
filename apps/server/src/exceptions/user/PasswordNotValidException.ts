import ApiError from "../ApiError.js";

export default class PasswordNotValidException extends ApiError {
  constructor() {
    super("Password is incorrect", 401);
  }
}
