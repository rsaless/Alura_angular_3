import { NgModule } from '@angular/core';
import { PhotoDetailComponent } from './photo-detail.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';

@NgModule({
    declarations: [PhotoDetailComponent, PhotoCommentsComponent],
    exports: [PhotoDetailComponent, PhotoCommentsComponent],
    imports: [CommonModule, PhotoModule]
})
export class PhotoDetailModule{

}