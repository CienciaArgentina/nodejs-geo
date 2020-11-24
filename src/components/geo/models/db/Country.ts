import { Model } from 'objection';
import { TableNames } from '../../../../commons/constants';

export class Country extends Model {
  static get idColumn(): string {
    return 'id';
  }

  static get tableName() {
    return TableNames.Country;
  }
}
