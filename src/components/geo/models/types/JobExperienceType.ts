
export namespace JobExperienceType {

  export namespace p {
    export type id = number
    export type date_start = Date
    export type date_end = Date
    export type institution_name = string
    export type responsibilities = string
    export type additional = string
    export type date_deleted = Boolean
  }

  export namespace views {
    export interface default_view {
      id: JobExperienceType.p.id
      date_start: JobExperienceType.p.date_start
      date_end: JobExperienceType.p.date_end
      institution_name: JobExperienceType.p.institution_name
      responsibilities: JobExperienceType.p.responsibilities
      additional: JobExperienceType.p.additional
    }
  }

}
