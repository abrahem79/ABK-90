import { classNames } from '~/config/classNames';

export const getThemeManagerElement = (): HTMLElement | null => {
  if (typeof window === 'undefined') return null;
  return document.querySelector(`.${classNames.themeManager}`);
};
