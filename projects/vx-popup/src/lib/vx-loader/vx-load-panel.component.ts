import { CommonModule } from '@angular/common';
// vx-loader.component.ts
import { Component, EventEmitter, Input, Output } from '@angular/core';

import {
  ContentReadyEvent,
  EndLoadingEvent,
  OptionChangedEvent,
  StartLoadingEvent,
  VxLoaderMode,
  VxLoderSize,
} from './vx-loader.models';

@Component({
  selector: 'vx-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vx-loader.component.html',
  styleUrls: ['./vx-loader.component.scss'],
})
export class VxLoaderComponent {
  @Output() onStartLoading = new EventEmitter<StartLoadingEvent>();
  @Output() onEndLoading = new EventEmitter<EndLoadingEvent>();
  @Output() onOptionChanged = new EventEmitter<OptionChangedEvent>();
  @Input() onContentReady = new EventEmitter<ContentReadyEvent>();
  @Output() visibleChange = new EventEmitter<boolean>();

  private _visible: boolean = false;
  private _size: VxLoderSize = 'small';
  private _color: string = '#464646';
  private _mode: VxLoaderMode = 'spinner';

  // Visible property
  @Input()
  get visible(): boolean {
    return this._visible;
  }
  set visible(value: boolean) {
    this.onOptionChanged.emit({
      component: this,
      option: 'visible',
      value: value,
      previous: this._visible,
    });
    if (value) this.onStartLoading.emit({ component: this });
    else this.onStartLoading.emit({ component: this });
    this.visibleChange.emit(value);
    this._visible = value;
  }

  // Size property
  @Input()
  get size(): VxLoderSize {
    return this._size;
  }
  set size(value: VxLoderSize) {
    this.onOptionChanged.emit({
      component: this,
      option: 'size',
      value: value,
      previous: this._size,
    });
    this._size = value;
  }

  // Color property
  @Input()
  get color(): string {
    return this._color;
  }
  set color(value: string) {
    this.onOptionChanged.emit({
      component: this,
      option: 'color',
      value: value,
      previous: this._color,
    });
    this._color = value;
  }

  // Mode property
  @Input()
  get mode(): VxLoaderMode {
    return this._mode;
  }
  set mode(value: VxLoaderMode) {
    this.onOptionChanged.emit({
      component: this,
      option: 'mode',
      value: value,
      previous: this._mode,
    });
    this._mode = value;
  }

  ngAfterViewInit(): void {
    this.onContentReady.emit({ component: this });
  }
  // public method methodes

  public startLoading(): void {
    this.visible = true;
  }
  public endLoading(): void {
    this.visible = true;
  }
}
