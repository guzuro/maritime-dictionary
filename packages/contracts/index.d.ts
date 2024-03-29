export type IEntity = {
    _id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };

  export type UserRole = 'admin' | 'student'
  
  export type IBaseUser = IEntity & {
    login: string;
    password?: string;
    mainLanguage: Languages;
    avatar?: string;
    role: UserRole
  };
  
  export type IStudent = IEntity & {
      login: string;
      password: string;
      mainLanguage: Languages;
      avatar?: string;
    };
  
  type Languages = "en" | "ru";

  export type SignInData = Required<Pick<IBaseUser, 'role' | 'login' | 'password'>>
  export type SignUpData = Required<Pick<IBaseUser, 'login' | 'password'>>