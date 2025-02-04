import type { VxLoaderComponent } from './vx-load-panel.component';

/**
 * Loader Modes
 */
export type VxLoaderMode = 'spinner' | 'ajaxInner' | 'ajaxCircule';

/**
 * Loader Event Data
 */
export interface LoaderEvent {
  active: boolean;
  mode: VxLoaderMode;
}

export interface ContentReadyEvent {
  component: VxLoaderComponent;
}
export interface OptionChangedEvent {
  component: VxLoaderComponent;
  option: string;
  value: any;
  previous: any;
}

export interface StartLoadingEvent {
  component: VxLoaderComponent;
}
export interface EndLoadingEvent {
  component: VxLoaderComponent;
}

export type VxLoderSize = 'small' | 'medium' | 'large';
export interface VxLoaderOptions {
  mode?: VxLoaderMode;
  size?: VxLoderSize;
  color?: string;
}
