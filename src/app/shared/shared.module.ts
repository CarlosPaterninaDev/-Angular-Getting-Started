import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarComponent } from './components/star.component';
import { FormsModule } from '@angular/forms';
import { ConvertToSpacesPipe } from './pipe/convert-to-space.pipe';

@NgModule({
  declarations: [StarComponent, ConvertToSpacesPipe],
  imports: [CommonModule],
  exports: [StarComponent, ConvertToSpacesPipe , CommonModule, FormsModule],
})
export class SharedModule {}
