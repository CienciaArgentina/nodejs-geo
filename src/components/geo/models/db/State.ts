import { Model } from 'objection';
import { TableNames } from '../../../../commons/constants';

export class State extends Model {
  static get idColumn(): string {
    return 'id';
  }
  country_id!: number;
  static get tableName() {
    return TableNames.State;
  }
}
