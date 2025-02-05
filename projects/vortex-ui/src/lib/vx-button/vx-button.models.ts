import { TemplateRef } from '@angular/core';
import { VxButtonComponent } from './vx-button.component';
import type { VxLoaderOptions } from '../vx-loader/vx-loader.models';

export interface VxButtonOptionChangedEvent {
  component: VxButtonComponent;
  option: string;
  value: any;
  previous: any;
}
export interface VxButtonContentReadyEvent {
  component: VxButtonComponent;
}
export interface VxButtonClickEvent {
  component: VxButtonComponent;
  event: MouseEvent | KeyboardEvent;
}
export interface VxButtonDblClickEvent {
  component: VxButtonComponent;
  event: MouseEvent;
}
export interface VxButtonHoverEvent {
  component: VxButtonComponent;
  event: MouseEvent;
}

export interface VxButtonContentReadyEvent {
  component: VxButtonComponent;
}

export type VxButtonStylingMode = 'contained' | 'outlined';
export type VxButtonType =
  | 'danger'
  | 'info'
  | 'warning'
  | 'success'
  | 'default';
export type VxButtonSize = 'small' | 'medium' | 'large' | 'custom';
export interface VxButtonConfig {
  id: string;
  text?: string;
  stylingMode: 'contained' | 'outlined';
  icon?: string;
  disabled?: boolean;
  type?: 'danger' | 'info' | 'warning' | 'success' | 'default';
  position?: 'left' | 'right' | 'center';
  visible?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  loading?: boolean;
  loaderOptions?: VxButtonLoaderOptions;
  customTemplate?: TemplateRef<any>;
  size?: VxButtonSize;
  fullWidth?: boolean;
}

export type VxButtonLoaderOptions = VxLoaderOptions;
