import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VxPopUpService } from 'vortex-ui';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

  providers: [VxPopUpService],
})
export class AppComponent {
  title = 'demo';
  popupService = inject(VxPopUpService);
  open() {
    this.popupService.openPopup({
      title: 'Popup Title',
      animation: 'fade',
      component: AppComponent,
      buttons: [
        {
          id: 'popup',
          text: 'Close',
          type: 'danger',
          stylingMode: 'outlined',
          loading: true,
        },
      ],
    });
  }
}
