import { Component, EventEmitter, Output, output } from '@angular/core';
import { AnimeService } from '../../services/anime.service';

@Component({
  selector: 'app-home-image-upload',
  templateUrl: './home-image-upload.component.html',
  styleUrl: './home-image-upload.component.scss',
})
export class HomeImageUploadComponent {
  selectedFile: File | null = null;
  @Output('fileSelectedEmit') public emitSelectedFile = new EventEmitter()


  onFileSelected($event: any) {
    this.selectedFile = $event.target.files[0];
  }
  onUpload() {
    console.log(this.selectedFile);
    this.emitSelectedFile.emit(this.selectedFile)
  }
}
