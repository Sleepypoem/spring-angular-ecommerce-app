import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldBase } from 'src/app/dtos/fieldBase';

@Component({
  selector: 'app-field',
  templateUrl: './dinamic-form-field.component.html',
  styleUrls: ['./dinamic-form-field.component.css'],
})
export class DinamicFormFieldComponent {
  @Input() field!: FieldBase<string>;
  @Input() form!: FormGroup;
  @Input() formName!: string;

  constructor() {}

  ngOnInit() {}

  get isInvalid() {
    return this.form.controls[this.field.key].invalid;
  }

  get isDirty() {
    return this.form.controls[this.field.key].dirty;
  }

  get isTouched() {
    return this.form.controls[this.field.key].touched;
  }

  get errors() {
    return this.form.controls[this.field.key].errors;
  }
}
