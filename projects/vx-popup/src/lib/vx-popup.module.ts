import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VxPopupComponent } from './vx-popup.component';
import { VxLoaderComponent } from './vx-loader/vx-load-panel.component';
import { VxButtonComponent } from './vx-button/vx-button.component';
import { VxPopUpService } from './vx-pop-up.service';

@NgModule({
  declarations: [VxPopupComponent],
  imports: [CommonModule, VxLoaderComponent, VxButtonComponent],
  exports: [VxPopupComponent],
  providers: [VxPopUpService],
})
export class VxPopupModule {}
