import { FieldBase } from './fieldBase';

export class PasswordField extends FieldBase<string> {
  override controlType = 'password';
}
