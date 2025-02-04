import { TemplateRef, Type } from '@angular/core';

import { VxButtonComponent } from './vx-button/vx-button.component';
import { VxPopupComponent } from './vx-popup.component';

/**
 * Configuration interface for the VxPopup component.
 * It defines the structure of all available properties for the popup configuration.
 */
export interface VxPopupConfig {
  // Visibility control
  visible?: boolean; // Controls whether the popup is visible or hidden.

  // Popup position settings
  position?: VxPopupPositionType; // Defines the popup's position within the viewport (e.g., 'center-center', 'top-left', etc.)
  positionXY?: { x: number; y: number }; // Specific x and y coordinates for the popup's position.

  // Content settings
  component?: Type<any>; // The dynamic component to be displayed inside the popup.
  customTemplate?: TemplateRef<any>; // A custom template to be rendered inside the popup.
  componentInputs?: Record<string, any>; // Inputs to be passed to the dynamic component.

  // Animation settings
  animation?: VxPopupAnimationType; // Defines the animation type when showing or hiding the popup.

  // Size and layout options
  width?: number; // Width of the popup (in pixels).
  height?: number; // Height of the popup (in pixels).
  maxWidth?: string; // Maximum width (can be in px or percentage).
  minWidth?: string; // Minimum width (can be in px or percentage).
  maxHeight?: string; // Maximum height (can be in px or percentage).
  minHeight?: string; // Minimum height (can be in px or percentage).

  // Loading state
  loading?: boolean; // Indicates if the popup is in a loading state.

  // Interaction control options
  draggable?: boolean; // Determines if the popup is draggable.
  resizable?: boolean; // Determines if the popup is resizable.
  shading?: boolean; // Defines whether the popup has a background shading (overlay).
  shadingColor?: string; // The color of the shading overlay (default: 'rgba(0, 0, 0, 0.1)').

  // Target element settings for positioning
  targetElemntId?: string; // ID of the target element for positioning the popup relative to it.

  // Title of the popup
  title?: string; // Title of the popup.
  buttons?: VxButtonConfig[];
  showFooter?: boolean;
  showHeader?: boolean;
  showCloseButton?: boolean;
}

export type VxPopupAnimationType =
  | 'fade'
  | 'fade-in'
  | 'fade-out'
  | 'pop'
  | 'rotate'
  | 'scale'
  | 'slide-left'
  | 'slide-left-in'
  | 'slide-right'
  | 'slide-up'
  | 'slide-down'
  | 'flip-vertical'
  | 'flip-horizontal'
  | 'rotate-left'
  | 'rotate-right'
  | 'rotate-in'
  | 'rotate-top-left'
  | 'rotate-top-right'
  | 'rotate-bottom-left'
  | 'rotate-bottom-right';
export type VxPopupPositionType =
  | 'top-left'
  | 'top-right'
  | 'top-center'
  | 'bottom-left'
  | 'bottom-right'
  | 'bottom-center'
  | 'left-center'
  | 'right-center'
  | 'center-center'
  | 'target'
  | 'custom';
export interface OpenedEvent {
  component: VxPopupComponent;
}
export interface ClosedEvent {
  component: VxPopupComponent;
}
export interface OptionChangedEvent {
  component: VxPopupComponent;
  option: string;
  value: any;
  previous: any;
}
export interface ButtonClickEvent {
  component: VxPopupComponent;
  button: VxButtonComponent;
}
export interface ContentLoadedEvent {
  component: VxPopupComponent;
  content: any;
}
export interface DragStartEvent {
  component: VxPopupComponent;
  position: { x: number; y: number };
  previousPosition: { x: number; y: number };
}
export interface ResizeEvent {
  component: VxPopupComponent;
  width?: number;
  height?: number;
}
export interface DragEndEvent extends DragStartEvent {}

export interface VxPopupState extends VxPopupConfig {
  visible: boolean;
  positionXY: { x: number; y: number };
  size: { width: number; height: number };
  shadingColor: string;
  isResizing: boolean;
  isDragging: boolean;
  dragStart: { x: number; y: number };
  id: string;
  zIndex: number;
  [key: string]: any; // Allows dynamic access to any additional configuration properties.
}

export type VxLoaderMode = 'spinner' | 'ajaxInner' | 'ajaxCircule';

/**
 * Loader Event Data
 */
export interface LoaderEvent {
  active: boolean;
  mode: VxLoaderMode;
}

export type VxLoderSize = 'small' | 'medium' | 'large';
export interface VxLoaderOptions {
  mode?: VxLoaderMode;
  size?: VxLoderSize;
  color?: string;
}

// buttons model

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
