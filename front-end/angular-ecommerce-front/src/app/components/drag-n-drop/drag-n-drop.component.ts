import { Component, EventEmitter, Input, Output } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.css'],
})
export class DragNDropComponent {
  @Input() defaultImage: string | null;
  @Output() imageEventEmitter = new EventEmitter<string>();
  imageServerUrl: string = environment.imageServerUrl;
  fallbackImage: string = environment.fallbackImage;
  previewImage: string;
  constructor() {}

  ngOnInit(): void {
    if (this.defaultImage != null) {
      this.previewImage = this.imageServerUrl + this.defaultImage;
    } else {
      this.previewImage = this.imageServerUrl + this.fallbackImage;
    }
  }

  public onImageDrop(file: File): void {
    if (file != null) {
      this.saveImage(file);
    }
  }

  public onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.saveImage(file);
    }
  }

  public saveImage(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.previewImage = reader.result as string;
      this.imageEventEmitter.emit(this.previewImage);
    };
  }
}
