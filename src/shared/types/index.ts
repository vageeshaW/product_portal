import {ComponentType, ReactNode} from 'react';

export type TabObject = {
  screenName: string;
  component: ComponentType;
  labelKey: string;
  iconName: ReactNode;
};

export enum ToasterType {
  NORMAL = 'normal',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'danger',
}
