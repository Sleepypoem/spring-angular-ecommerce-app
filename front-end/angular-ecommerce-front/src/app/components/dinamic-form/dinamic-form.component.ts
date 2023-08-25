import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { FieldBase } from 'src/app/dtos/fieldBase';
import { FormCreatorService } from 'src/app/services/form-creator.service';

@Component({
  selector: 'app-dinamic-form',
  templateUrl: './dinamic-form.component.html',
  styleUrls: ['./dinamic-form.component.css'],
})
export class DinamicFormComponent {
  @Input() fields: FieldBase<string>[] | null = [];
  @Input() title: string | null = '';
  @Input() parentForm: FormGroup | null;
  @Input() formGroupName: string;
  form: FormGroup;
  payLoad = '';

  constructor(private formCreatorService: FormCreatorService) {}

  ngOnInit() {
    this.form = this.formCreatorService.toFormGroup(
      this.fields as FieldBase<string>[]
    );
    if (this.parentForm != null) {
      this.parentForm.addControl(this.formGroupName, this.form);
    }
  }
}
