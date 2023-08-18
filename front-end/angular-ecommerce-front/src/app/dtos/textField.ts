import { FieldBase } from './fieldBase';

export class TextField extends FieldBase<string> {
  override controlType = 'text';
}
