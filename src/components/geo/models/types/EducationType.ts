interface EducationTypeInterface {
  number: 1 | 2 | 3 | 4 | 5
  name: 'secondary' | 'degree' | 'postdegree' | 'doctorate' | 'postdoc'
}

export namespace EducationType {
  export namespace p {
    export type id = number
    export type type_stage = EducationTypeInterface['number']
    export type type = EducationTypeInterface['name'] //TOOD: ver con giuliano
    export type date_start = Date
    export type date_end = Date
    export type institution = String
    export type additional = string
    export type date_deleted = Date | null
  }

  export namespace views {
    export interface default_view {
      type: EducationType.p.type
      date_start: EducationType.p.date_start
      date_end: EducationType.p.date_end
      institution: EducationType.p.institution
      additional: EducationType.p.additional
    }
  }

}