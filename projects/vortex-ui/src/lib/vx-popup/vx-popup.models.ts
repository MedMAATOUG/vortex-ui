import { Type, TemplateRef } from '@angular/core';
import { PopupFusionComponent } from './vx-popup.component';
import { VxButtonConfig } from '../vx-button/vx-button.models';
import { VxButtonComponent } from '../vx-button/vx-button.component';

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
  dragEnabled?: boolean; // Determines if the popup is dragEnabled.
  resizeEnabled?: boolean; // Determines if the popup is resizeEnabled.
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
  component: PopupFusionComponent;
}
export interface ClosedEvent {
  component: PopupFusionComponent;
}
export interface OptionChangedEvent {
  component: PopupFusionComponent;
  option: string;
  value: any;
  previous: any;
}
export interface ButtonClickEvent {
  component: PopupFusionComponent;
  button: VxButtonComponent;
}
export interface ContentLoadedEvent {
  component: PopupFusionComponent;
  content: any;
}
export interface VxPopupDragEndEvent {
  component: PopupFusionComponent;
  position: { x: number; y: number };
  previousPosition: { x: number; y: number };
}
export interface VxPopupResizeEvent {
  component: PopupFusionComponent;
  width?: number;
  height?: number;
}

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
