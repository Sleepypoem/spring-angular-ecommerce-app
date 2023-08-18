import { Directive, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import {
  AbstractControl,
  ControlContainer,
  FormGroup,
  FormGroupDirective,
} from '@angular/forms';

@Directive({
  selector: '[invalidmessage]',
})
export class InvalidMessageDirective implements OnInit {
  @Input() fieldName: string;
  @Input() validationMessages: Map<string, string>;
  control: AbstractControl;
  baseForm: AbstractControl;
  errors: Map<string, string> = new Map([
    ['required', 'This field is mandatory'],
    ['minlength', 'This value is too short'],
    ['maxlength', 'This value is too long'],
    ['pattern', 'This value is not valid'],
  ]);

  constructor(
    private _fg: ControlContainer,
    private _el: ElementRef,
    private render: Renderer2
  ) {}

  ngOnInit() {
    this.control = this.form?.get(this.fieldName)!;
    this.baseForm = this.getBaseForm(this.control);

    this.baseForm.valueChanges?.subscribe(() => {
      this.setVisible();
    });
  }

  private setVisible() {
    if (this.control?.invalid) {
      if (this.control?.errors!) {
        Object.keys(this.control?.errors!).forEach((keyError) => {
          this._el.nativeElement.innerHTML = '';
          let errorParagraph = this.createErrorMessage(keyError);
          this.render.appendChild(this._el.nativeElement, errorParagraph);
        });
      }
    } else {
      this._el.nativeElement.innerHTML = '';
    }
  }

  private getBaseForm(formGroup: any): FormGroup {
    if (formGroup.parent == null) {
      return formGroup;
    }
    return this.getBaseForm(formGroup.parent);
  }

  private createErrorMessage(error: string): Node {
    let errorMessage = this.matchErrorAndGetMessage(error);
    const paragraphElement = this.render.createElement('p');
    const iconElement = this.render.createElement('i');

    this.render.addClass(iconElement, 'bi');
    this.render.addClass(iconElement, 'bi-exclamation-triangle');
    this.render.setStyle(iconElement, 'margin-right', '3px');
    this.render.setStyle(iconElement, 'display', 'block');
    iconElement.innerHTML = '&nbsp;&nbsp;' + errorMessage;

    return paragraphElement.appendChild(iconElement);
  }

  private matchErrorAndGetMessage(error: string): string {
    if (this.control && this.control.errors) {
      if (Object.keys(this.control.errors).indexOf(error) > -1) {
        if (this.validationMessages?.get(error) != null) {
          return this.validationMessages.get(error)!;
        } else {
          return this.errors.get(error)!;
        }
      }
    }
    return '';
  }

  get form() {
    return this._fg.formDirective
      ? (this._fg.formDirective as FormGroupDirective).form
      : null;
  }
}
