import { Validators } from '@angular/forms';

export class FieldBase<T> {
  value: T | undefined;
  key: string;
  label: string;
  validators: any[] | undefined;
  controlType: string;
  type: string;
  maxValue: number | undefined;
  minValue: number | undefined;
  placeholder: string;
  disabled: boolean;
  customVaLidationMessages: Map<string, string>;
  options: { key: string; value: string }[];

  constructor(
    options: {
      value?: T;
      key?: string;
      label?: string;
      validators?: any[];
      placeholder?: string;
      controlType?: string;
      maxValue?: number;
      minValue?: number;
      disabled?: boolean;
      type?: string;
      customValidationMessages?: Map<string, string>;
      options?: { key: string; value: string }[];
    } = {}
  ) {
    this.value = options.value;
    this.key = options.key || '';
    this.label = options.label || '';
    this.validators = options.validators!;
    this.placeholder = options.placeholder || '';
    this.controlType = options.controlType || '';
    this.maxValue = options.maxValue;
    this.minValue = options.minValue;
    this.disabled = !!options.disabled;
    this.type = options.type || '';
    this.customVaLidationMessages =
      options.customValidationMessages || new Map<string, string>();
    this.options = options.options || [];
  }
}
