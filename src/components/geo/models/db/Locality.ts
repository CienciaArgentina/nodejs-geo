import { Model } from 'objection';
import { TableNames } from '../../../../commons/constants';

export class Locality extends Model {
  static get idColumn(): string {
    return 'id';
  }
  city_id!: number;
  static get tableName() {
    return TableNames.Locality;
  }
}
