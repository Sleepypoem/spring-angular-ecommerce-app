import { Injectable } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { FieldBase } from '../dtos/fieldBase';

@Injectable({
  providedIn: 'root',
})
export class FormCreatorService {
  toFormGroup(fields: FieldBase<string>[]) {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = new FormControl(
        { value: field.value, disabled: field.disabled },
        field.validators || []
      );
    });
    return new FormGroup(group);
  }
}
