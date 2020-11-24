import { EducationType } from '.';

export namespace UserType {
  export namespace p {
    export type id = number;
    export type auth_id = number;
    export type username = string;
    export type email = string;
    export type name = string;
    export type last_name = string;
    export type birthdate = Date;
  }

  export namespace views {
    export interface public_view {
      username: UserType.p.username;
      name?: UserType.p.name;
      last_name?: UserType.p.last_name;
    }
    export interface cv_review {
      username: UserType.p.username;
      name: UserType.p.name;
      last_name: UserType.p.last_name;
      birthdate: UserType.p.birthdate;
    }
    export interface own {
      auth_id: UserType.p.auth_id;
      id: UserType.p.id;
      username: UserType.p.username;
      email: UserType.p.email;
      name?: UserType.p.name;
      last_name?: UserType.p.last_name;
      birthdate?: UserType.p.birthdate;
    }
  }

  export namespace responses {
    export type user_public_response = UserType.views.public_view & {
      education: EducationType.views.default_view[];
    };
    export type user_cv_review = UserType.views.cv_review & {
      education: EducationType.views.default_view[];
    };
    export type user_own = UserType.views.own & {
      education: EducationType.views.default_view[];
    };
    export type job_candidates = UserType.views.cv_review[];
  }
}
