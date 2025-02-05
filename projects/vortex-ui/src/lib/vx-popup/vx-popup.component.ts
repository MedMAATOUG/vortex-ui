import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  inject,
  Inject,
  Input,
  Output,
  PLATFORM_ID,
  TemplateRef,
  Type,
} from '@angular/core';

import { VxButtonComponent } from '../vx-button/vx-button.component';
import { VxLoaderComponent } from '../vx-loader/vx-loader.component';
import {
  ButtonClickEvent,
  ClosedEvent,
  ContentLoadedEvent,
  OpenedEvent,
  OptionChangedEvent,
  VxPopupAnimationType,
  VxPopupDragEndEvent,
  VxPopupPositionType,
  VxPopupResizeEvent,
  VxPopupState,
} from './vx-popup.models';
import { VxPopUpService } from './vx-popup.service';

import type { VxButtonConfig } from '../vx-button/vx-button.models';

@Component({
  selector: 'popup-fusion',
  standalone: true,
  imports: [CommonModule, VxLoaderComponent, VxButtonComponent],
  templateUrl: './vx-popup.component.html',
  styleUrls: ['./vx-popup.component.scss'],
})
export class PopupFusionComponent {
  constructor(@Inject(PLATFORM_ID) private platformId: object) {}
  // Outputs
  @Output() visibleChange = new EventEmitter<boolean>();
  @Output() onOpened = new EventEmitter<OpenedEvent>();
  @Output() onClosed = new EventEmitter<ClosedEvent>();
  @Output() onOptionChanged = new EventEmitter<OptionChangedEvent>();
  @Output() onContentLoaded = new EventEmitter<ContentLoadedEvent>();
  @Output() onDrag = new EventEmitter<VxPopupDragEndEvent>();
  @Output() onResize = new EventEmitter<VxPopupResizeEvent>();
  @Output() onButtonClick = new EventEmitter<ButtonClickEvent>();

  // Inputs
  @Input() set visible(value: boolean) {
    if (value !== this.visible) {
      this.emitChangedOption('visible', value, this._visible);
      this._visible = value;
      this.visibleChange.emit(value);
      if (value) this.onOpened.emit({ component: this });
      else this.onClosed.emit({ component: this });
    }
  }
  get visible(): boolean {
    return this._visible;
  }

  @Input() set position(value: VxPopupPositionType) {
    if (value !== this._position) {
      this.emitChangedOption('position', value, this._position);
      this._position = value;
      if (isPlatformBrowser(this.platformId)) {
        this.updatePosition();
      }
    }
  }
  get position(): VxPopupPositionType {
    return this._position;
  }

  @Input() set component(value: Type<any>) {
    if (value !== this._component) {
      this.emitChangedOption('component', value, this._component);
      this._component = value;
    }
  }
  get component(): Type<any> | undefined {
    return this._component;
  }

  @Input() set customTemplate(value: TemplateRef<any> | undefined) {
    if (value !== this._customTemplate) {
      this.emitChangedOption('customTemplate', value, this._customTemplate);
      this._customTemplate = value;
    }
  }
  get customTemplate(): TemplateRef<any> | undefined {
    return this._customTemplate;
  }

  @Input() set componentInputs(value: Record<string, unknown>) {
    if (value !== this.componentInputs) {
      this.emitChangedOption('componentInputs', value, this._componentInputs);
      this._componentInputs = value;
    }
  }
  get componentInputs(): Record<string, unknown> | undefined {
    return this._componentInputs;
  }

  @Input() set targetElemntId(value: string) {
    if (value !== this._targetElemntId) {
      this.emitChangedOption('targetElemntId', value, this._targetElemntId);
      this._targetElemntId = value;
    }
  }
  get targetElemntId(): string {
    return this._targetElemntId;
  }

  @Input() set title(value: string | undefined) {
    if (value !== this._title) {
      this.emitChangedOption('title', value, this._title);
      this._title = value;
    }
  }
  get title(): string | undefined {
    return this._title;
  }

  @Input() set dragEnabled(value: boolean) {
    if (value !== this._dragEnabled) {
      this.emitChangedOption('dragEnabled', value, this._dragEnabled);
      this._dragEnabled = value;
    }
  }
  get dragEnabled(): boolean {
    return this._dragEnabled;
  }

  @Input() set resizeEnabled(value: boolean) {
    if (value !== this._resizable) {
      this.emitChangedOption('resizeEnabled', value, this._resizable);
      this._resizable = value;
    }
  }
  get resizeEnabled(): boolean {
    return this._resizable;
  }

  @Input() set width(value: number | undefined) {
    if (value !== this._width) {
      this.emitChangedOption('width', value, this._width);
      this._width = value;
    }
  }
  get width(): number | undefined {
    return this._width;
  }

  @Input() set height(value: number | undefined) {
    if (value !== this._height) {
      this.emitChangedOption('height', value, this._height);
      this._height = value;
    }
  }
  get height(): number | undefined {
    return this._height;
  }

  @Input() set maxWidth(value: string | undefined) {
    if (value !== this._maxWidth) {
      this.emitChangedOption('maxWidth', value, this._maxWidth);
      this._maxWidth = value;
    }
  }
  get maxWidth(): string | undefined {
    return this._maxWidth;
  }

  @Input() set minWidth(value: string) {
    if (value !== this._minWidth) {
      this.emitChangedOption('minWidth', value, this._minWidth);
      this._minWidth = value;
    }
  }
  get minWidth(): string {
    return this._minWidth;
  }

  @Input() set loading(value: boolean) {
    if (value !== this._loading) {
      this.emitChangedOption('loading', value, this._loading);
      this._loading = value;
    }
  }
  get loading(): boolean {
    return this._loading;
  }

  @Input() set maxHeight(value: string) {
    if (value !== this._maxHeight) {
      this.emitChangedOption('maxHeight', value, this._maxHeight);
      this._maxHeight = value;
    }
  }
  get maxHeight(): string {
    return this._maxHeight;
  }

  @Input() set minHeight(value: string) {
    if (value !== this._minHeight) {
      this.emitChangedOption('minHeight', value, this._minHeight);
      this._minHeight = value;
    }
  }
  get minHeight(): string {
    return this._minHeight;
  }

  @Input() set shading(value: boolean) {
    if (value !== this._shading) {
      this.emitChangedOption('shading', value, this._shading);
      this._shading = value;
    }
  }
  get shading(): boolean {
    return this._shading;
  }
  @Input() set showHeader(value: boolean) {
    if (value !== this.showHeader) {
      this.emitChangedOption('showHeader', value, this._showHeader);
      this._showHeader = value;
    }
  }
  get showHeader(): boolean {
    return this._showHeader;
  }
  @Input() set showFooter(value: boolean) {
    if (value !== this.showFooter) {
      this.emitChangedOption('showFooter', value, this._showFooter);
      this._showFooter = value;
    }
  }
  get showFooter(): boolean {
    return this._showFooter;
  }
  @Input() set showCloseButton(value: boolean) {
    if (value !== this.showCloseButton) {
      this.emitChangedOption('showCloseButton', value, this._showCloseButton);
      this._showCloseButton = value;
    }
  }
  get showCloseButton(): boolean {
    return this._showCloseButton;
  }

  @Input() set shadingColor(value: string) {
    if (value !== this.shadingColor) {
      this.emitChangedOption('shadingColor', value, this._shadingColor);
      this._shadingColor = value;
    }
  }
  get shadingColor(): string {
    return this._shadingColor;
  }
  @Input() set buttons(value: VxButtonConfig[]) {
    if (value !== this._buttons) {
      this.emitChangedOption('buttons', value, this._buttons);

      this._buttons = value.map((button) => {
        if (!button.position) {
          button.position = 'right';
        }
        if (button.visible === undefined) {
          button.visible = true;
        }
        return button;
      });
    }
  }
  get buttons(): VxButtonConfig[] {
    return this._buttons;
  }

  @Input() set animation(value: VxPopupAnimationType) {
    if (value !== this._animation) {
      this.emitChangedOption('animation', value, this._animation);
      this._animation = value;
    }
  }
  get animation(): VxPopupAnimationType {
    return this._animation;
  }

  @Input() set positionXY(value: { x: number; y: number }) {
    if (value !== this._positionXY) {
      this.emitChangedOption('positionXY', value, this._positionXY);
      this._positionXY = value;
    }
  }
  get positionXY(): { x: number; y: number } {
    return this._positionXY;
  }
  public state: VxPopupState = {
    visible: this.visible,
    positionXY: this.positionXY,
    size: {
      width: this.width || default_popup_properties.width,
      height: this.height || default_popup_properties.height,
    },
    shadingColor: this.shadingColor,
    isResizing: false,
    isDragging: false,
    dragStart: { x: 0, y: 0 },
    id: '',
    zIndex: 1000,
  };
  // Private
  private _visible: boolean = default_popup_properties.visible;
  private _position: VxPopupPositionType = default_popup_properties.position;
  private _component?: Type<any>;
  private _customTemplate?: TemplateRef<any>;
  private _componentInputs!: Record<string, unknown>;
  private _targetElemntId!: string;
  private _title: string | undefined = default_popup_properties.title;
  private _dragEnabled = default_popup_properties.dragEnabled;
  private _resizable = default_popup_properties.resizeEnabled;
  private _width: number | undefined = default_popup_properties.width;
  private _height: number | undefined = default_popup_properties.height;
  private _maxWidth: string | undefined = default_popup_properties.maxWidth;
  private _minWidth: string = default_popup_properties.minWidth;
  private _loading: boolean = default_popup_properties.loading;
  private _maxHeight: string = default_popup_properties.maxHeight;
  private _minHeight: string = default_popup_properties.minHeight;
  private _shading: boolean = default_popup_properties.shading;
  private _showHeader: boolean = default_popup_properties.showHeader;
  private _showFooter: boolean = default_popup_properties.showFooter;
  private _showCloseButton: boolean = default_popup_properties.showCloseButton;
  private _shadingColor: string = default_popup_properties.shadingColor;
  private _animation: VxPopupAnimationType =
    default_popup_properties.animation as VxPopupAnimationType;
  private _positionXY = default_popup_properties.positionXY;
  private _buttons: VxButtonConfig[] = default_popup_properties.buttons;
  private _isComponentReady = false;
  private service = inject(VxPopUpService);
  private cdr = inject(ChangeDetectorRef);
  ngOnInit() {
    this.state.size = {
      width: this.width || default_popup_properties.width,
      height: this.height || default_popup_properties.height,
    };
    this.state.zIndex = this.service.getZIndex();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.updatePosition();
    }
    this._isComponentReady = true;
    this.onContentLoaded.emit({ component: this, content: this.component });
  }
  private updatePosition(): void {
    const { innerWidth: viewportWidth, innerHeight: viewportHeight } = window;
    const scrollTop =
      document.documentElement.scrollTop || document.body.scrollTop;
    const scrollLeft =
      document.documentElement.scrollLeft || document.body.scrollLeft;

    const positions: Record<string, () => void> = {
      'center-center': () => {
        this.positionXY = {
          x: (viewportWidth - this.state.size.width) / 2 + scrollLeft,
          y: (viewportHeight - this.state.size.height) / 2 + scrollTop,
        };
      },
      'top-left': () => {
        this.positionXY = { x: 10 + scrollLeft, y: 10 + scrollTop };
      },
      'top-right': () => {
        this.positionXY = {
          x: viewportWidth - this.state.size.width - 10 + scrollLeft,
          y: 10 + scrollTop,
        };
      },
      'bottom-left': () => {
        this.positionXY = {
          x: 10 + scrollLeft,
          y: viewportHeight - this.state.size.height - 10 + scrollTop,
        };
      },
      'bottom-right': () => {
        this.positionXY = {
          x: viewportWidth - this.state.size.width - 10 + scrollLeft,
          y: viewportHeight - this.state.size.height - 10 + scrollTop,
        };
      },
      'left-center': () => {
        this.positionXY = {
          x: 10 + scrollLeft,
          y: (viewportHeight - this.state.size.height) / 2 + scrollTop,
        };
      },
      target: () => {
        const targetElement = document.getElementById(this.targetElemntId);
        if (targetElement) {
          const { left, top } = targetElement.getBoundingClientRect();
          this.positionXY = { x: left + scrollLeft, y: top + scrollTop };
        }
      },
    };

    positions[this._position]?.();
    this.cdr.detectChanges();
  }

  private emitChangedOption(option: string, value: any, previous: any): void {
    this._isComponentReady &&
      this.onOptionChanged.emit({
        component: this,
        option,
        value,
        previous,
      });
  }

  onMouseDown(event: MouseEvent) {
    if (
      !this.dragEnabled ||
      (event.target as HTMLElement).classList.contains('resize-handle')
    ) {
      return;
    }
    this.onOptionChanged.emit({
      value: {
        x: event.clientX - this.positionXY.x,
        y: event.clientY - this.positionXY.y,
      },
      previous: this.state.dragStart,
      component: this,
      option: 'dragStart',
    });
    this.onDrag.emit({
      component: this,
      position: {
        x: event.clientX - this.positionXY.x,
        y: event.clientY - this.positionXY.y,
      },
      previousPosition: this.state.dragStart,
    });
    this.state.isDragging = true;
    this.state.dragStart = {
      x: event.clientX - this.positionXY.x,
      y: event.clientY - this.positionXY.y,
    };

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onResizeMouseDown(event: MouseEvent) {
    if (!this.resizeEnabled) return;

    event.stopPropagation();
    this.state.isResizing = true;
    this.state.dragStart = {
      x: event.clientX,
      y: event.clientY,
    };
    this.onResize.emit({
      component: this,
      width: this.width,
      height: this.height,
    });
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  }

  onMouseMove = (event: MouseEvent) => {
    if (this.state.isDragging) {
      this.positionXY = {
        x: event.clientX - this.state.dragStart.x,
        y: event.clientY - this.state.dragStart.y,
      };
    } else if (this.state.isResizing) {
      const dx = event.clientX - this.state.dragStart.x;
      const dy = event.clientY - this.state.dragStart.y;

      this.state.size = {
        width: Math.max(200, this.state.size.width + dx),
        height: Math.max(150, this.state.size.height + dy),
      };

      this.state.dragStart = {
        x: event.clientX,
        y: event.clientY,
      };
    }
  };

  onMouseUp = () => {
    this.state.isDragging = false;
    this.state.isResizing = false;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
  };

  close() {
    this.visible = false;
    this.service.closePopup(this.state.id);
  }

  open() {
    this.visible = true;
  }

  startLoading() {
    this.loading = true;
  }

  stopLoading() {
    this.loading = false;
  }
}

const default_popup_properties = {
  visible: false,
  animation: 'fade', // Default animation when the popup opens
  width: 400, // Default width in pixels
  height: 300, // Default height in pixels
  maxWidth: '90vw', // Max width as a percentage of the viewport width
  minWidth: '400px', // Min width as a fixed pixel value
  maxHeight: '90vh', // Max height as a percentage of the viewport height
  minHeight: '200px', // Min height as a fixed pixel value
  loading: false, // Indicates if the popup is loading
  dragEnabled: true, // Popup is dragEnabled by default
  resizeEnabled: true, // Popup can be resized by default
  shading: true, // Apply shading (background overlay) by default
  shadingColor: 'rgba(0, 0, 0, 0.2)', // Default color for shading overlay
  title: '', // Default title for the popup (empty string means no title by default)
  position: 'center-center' as VxPopupPositionType, // Default position of the popup within the viewport
  component: undefined, // No default component to load
  customTemplate: undefined, // No default custom template
  componentInputs: {}, // Default empty component inputs
  targetElemntId: undefined, // No target element ID by default
  animationType: 'fade-in' as VxPopupAnimationType, // Default animation type when showing the popup
  positionXY: { x: 0, y: 0 }, // Default position of the popup in pixels
  buttons: [],
  showCloseButton: true, // Show x close button
  showFooter: true, // Show footer
  showHeader: true, // Show header
};
