import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeImageUploadComponent } from './home-image-upload/home-image-upload.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, HomeImageUploadComponent],
  imports: [CommonModule, FormsModule],
})
export class HomeModule {}
