export type IEntity = {
    _id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
  };
  
  export type IBaseUser = IEntity & {
    login: string;
    password?: string;
    mainLanguage: Languages;
    avatar?: string;
  };
  
  export type IClient = IEntity & {
      login: string;
      password?: string;
      mainLanguage: Languages;
      avatar?: string;
    };
  
  type Languages = "en" | "ru";