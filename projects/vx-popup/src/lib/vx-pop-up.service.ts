import {
  ApplicationRef,
  ComponentRef,
  createComponent,
  EnvironmentInjector,
  Injectable,
  Injector,
} from '@angular/core';

import { VxPopupComponent } from './vx-popup.component';
import { VxPopupConfig } from './vx-popup.models';

@Injectable({
  providedIn: 'root',
})
export class VxPopUpService {
  private popups: ComponentRef<VxPopupComponent>[] = [];
  private popupsRef: {
    id: string;
    popupRef: ComponentRef<VxPopupComponent>;
  }[] = [];

  constructor(
    private injector: Injector,
    private appRef: ApplicationRef,
    private environmentInjector: EnvironmentInjector
  ) {}
  private upperZIndex: number = 1000;

  openPopup(properties: VxPopupConfig): VxPopupComponent {
    // Create the component dynamically with the correct injector
    const componentRef = createComponent(VxPopupComponent, {
      environmentInjector: this.environmentInjector,
      elementInjector: this.injector, // Pass the injector here
    });

    // Attach the component to the application ref
    this.appRef.attachView(componentRef.hostView);

    // Append the component's DOM element to the body
    const domElement = (componentRef.hostView as any)
      .rootNodes[0] as HTMLElement;
    // Apply dynamic styles or add a specific class for popup styling
    document.body.appendChild(domElement);
    const newPopupId = this.generatePopupId();
    this.assignPopupProperties(properties, componentRef.instance);
    componentRef.instance.visible = true;
    componentRef.instance.state.id = newPopupId;
    // Store the component reference
    this.popups.push(componentRef);
    this.popupsRef.push({ id: newPopupId, popupRef: componentRef });

    return componentRef.instance;
  }

  setDynamicStyle(domElement: HTMLElement): void {
    // Apply dynamic styles or add a specific class for popup styling
    domElement.style.setProperty('--popup-overlay-bg', 'rgba(0, 0, 0, 0.5)');
    domElement.style.setProperty('--popup-bg', 'white');
    domElement.style.setProperty(
      '--popup-shadow',
      '0 2px 10px rgba(123, 50, 50, 0.1)'
    );
    domElement.style.setProperty('--border-color', '#ddd');
    domElement.style.setProperty('--popup-header-height', '40px');
    domElement.style.setProperty('--popup-footer-height', '40px');
    domElement.style.setProperty('--resize-handle-size', '10px');
    domElement.style.setProperty('--resize-handle-bg', '#ccc');
    domElement.style.setProperty('--scrollbar-thumb-bg', '#888');
  }

  getZIndex(): number {
    this.upperZIndex += 2;
    return this.upperZIndex;
  }

  private generatePopupId(): string {
    return new Date().getTime().toString();
  }

  private assignPopupProperties(
    properties: VxPopupConfig,
    popup: VxPopupComponent
  ): void {
    // Assigning properties to the popup component
    if (properties.height !== undefined) popup.height = properties.height;
    if (properties.width !== undefined) popup.width = properties.width;
    if (properties.title !== undefined) popup.title = properties.title;
    if (properties.maxWidth !== undefined) popup.maxWidth = properties.maxWidth;
    if (properties.minWidth !== undefined) popup.minWidth = properties.minWidth;
    if (properties.maxHeight !== undefined)
      popup.maxHeight = properties.maxHeight;
    if (properties.minHeight !== undefined)
      popup.minHeight = properties.minHeight;
    if (properties.loading !== undefined) popup.loading = properties.loading;
    if (properties.draggable !== undefined)
      popup.draggable = properties.draggable;
    if (properties.resizable !== undefined)
      popup.resizable = properties.resizable;

    if (properties.shading !== undefined) popup.shading = properties.shading;
    if (properties.shadingColor !== undefined)
      popup.shadingColor = properties.shadingColor;
    if (properties.animation !== undefined)
      popup.animation = properties.animation;
    if (properties.position !== undefined) popup.position = properties.position;
    if (properties.positionXY !== undefined)
      popup.positionXY = properties.positionXY;
    if (properties.component !== undefined)
      popup.component = properties.component;
    if (properties.customTemplate !== undefined)
      popup.customTemplate = properties.customTemplate;
    if (properties.componentInputs !== undefined)
      popup.componentInputs = properties.componentInputs;
    if (properties.targetElemntId !== undefined)
      popup.targetElemntId = properties.targetElemntId;
    if (properties.buttons !== undefined) popup.buttons = properties.buttons;
    if (properties.showHeader !== undefined)
      popup.showHeader = properties.showHeader;
    if (properties.showCloseButton !== undefined)
      popup.showCloseButton = properties.showCloseButton;
    if (properties.showFooter !== undefined)
      popup.showFooter = properties.showFooter;
  }

  public closePopup(id: string): void {
    const componentRef = this.popupsRef.find((p) => p.id === id)?.popupRef;
    if (componentRef) {
      this.appRef.detachView(componentRef.hostView);
      componentRef.destroy();
      this.popups = this.popups.filter((ref) => ref !== componentRef);
    }
  }
}
