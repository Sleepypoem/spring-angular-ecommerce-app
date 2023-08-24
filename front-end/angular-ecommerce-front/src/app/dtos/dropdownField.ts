import { FieldBase } from './fieldBase';

export class DropdownField extends FieldBase<string> {
  override controlType = 'dropdown';
}
