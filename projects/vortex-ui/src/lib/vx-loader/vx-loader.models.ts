import type { VxLoaderComponent } from './vx-loader.component';

/**
 * Loader Modes
 */
export type VxLoaderMode = 'spinner' | 'ajaxInner' | 'ajaxCircule';

/**
 * Loader Event Data
 */

export interface VxLoaderContentReadyEvent {
  component: VxLoaderComponent;
}
export interface VxLoaderOptionChangedEvent {
  component: VxLoaderComponent;
  option: string;
  value: any;
  previous: any;
}

export interface VxLoaderStartLoadingEvent {
  component: VxLoaderComponent;
}
export interface VxLoaderEndLoadingEvent {
  component: VxLoaderComponent;
}

export type VxLoderSize = 'small' | 'medium' | 'large';
export interface VxLoaderOptions {
  mode?: VxLoaderMode;
  size?: VxLoderSize;
  color?: string;
}
