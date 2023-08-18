import { FieldBase } from './fieldBase';

export class FileField extends FieldBase<String> {
  override controlType = 'file';
}
