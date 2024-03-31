import ApiError from "../ApiError.js";

export default class UserNotFoundException extends ApiError {
  constructor() {
    super("User not found", 404);
  }
}
