import { Model } from 'objection';
import { TableNames } from '../../../../commons/constants';

export class City extends Model {
  static get idColumn(): string {
    return 'id';
  }
  state_id!: number;

  static get tableName() {
    return TableNames.City;
  }
}
