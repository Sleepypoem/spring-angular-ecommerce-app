import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static notOnlyBlankSpaces(control: FormControl): ValidationErrors | null {
    if (control.value && control.value.trim() === '') {
      return { notOnlyBlankSpaces: true };
    }
    return null;
  }
}
