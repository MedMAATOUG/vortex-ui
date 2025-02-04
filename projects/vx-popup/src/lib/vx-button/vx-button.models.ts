import { TemplateRef } from '@angular/core';

import { VxButtonComponent } from './vx-button.component';

import type { VxLoaderOptions } from '../vx-loader/vx-loader.models';

export interface OptionChangedEvent {
  component: VxButtonComponent;
  option: string;
  value: any;
  previous: any;
}
export interface ContentReadyEvent {
  component: VxButtonComponent;
}
export interface ClickEvent {
  component: VxButtonComponent;
  event: MouseEvent | KeyboardEvent;
}
export interface DblClickEvent {
  component: VxButtonComponent;
  event: MouseEvent;
}
export interface HoverEvent {
  component: VxButtonComponent;
  event: MouseEvent;
}

export interface ContentReadyEvent {
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
