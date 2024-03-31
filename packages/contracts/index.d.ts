export type IEntity = {
  _id?: string;
  created_at?: Date | string;
  updated_at?: Date | string;
};

export type UserRole = "admin" | "student";

export type IBaseUser = IEntity & {
  login: string;
  password?: string;
  avatar?: string;
  role: UserRole;
};

export type IAdmin = IBaseUser;

export type IStudent = IBaseUser & {
  mainLanguage: Languages;
};

type Languages = "en" | "ru";

export type SignInData = Required<
  Pick<IBaseUser, "role" | "login" | "password">
>;
export type SignUpData = Required<Pick<IBaseUser, "login" | "password">>;
