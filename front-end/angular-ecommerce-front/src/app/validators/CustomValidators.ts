import { FormControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static notOnlyBlankSpaces(control: FormControl): ValidationErrors | null {
    if (control.value && control.value.trim() === '') {
      return { notOnlyBlankSpaces: true };
    }
    return null;
  }

  static passwordMatchValidator(control: FormControl) {
    let passwordControl = control.parent?.get('password');
    let confirmPasswordControl = control.parent?.get('confirmPassword');

    passwordControl?.valueChanges.subscribe(() => {
      if (passwordControl?.value !== confirmPasswordControl?.value) {
        confirmPasswordControl?.setErrors({ passwordMatch: true });
      } else {
        confirmPasswordControl?.setErrors(null);
      }
    });

    confirmPasswordControl?.valueChanges.subscribe(() => {
      if (passwordControl?.value !== confirmPasswordControl?.value) {
        confirmPasswordControl?.setErrors({ passwordMatch: true });
      } else {
        confirmPasswordControl?.setErrors(null);
      }
    });
  }
}
