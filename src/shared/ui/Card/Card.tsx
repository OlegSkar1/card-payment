import { FC, HTMLAttributes, ReactNode } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Card.module.scss';

type TagNameType = keyof HTMLElementTagNameMap;
type CardVariant = 'normal' | 'dark';
type BorderRadiusType = 'round' | 'square';

interface CardProps extends HTMLAttributes<ValueOf<HTMLElementTagNameMap>> {
  className?: string;
  children: ReactNode;
  border?: BorderRadiusType;
  max?: boolean;
  tagname?: TagNameType;
  variant?: CardVariant;
}

export const Card: FC<CardProps> = (props) => {
  const {
    className,
    children,
    max,
    border = 'square',
    variant = 'normal',
    tagname: Tag = 'div',
    ...otherProps
  } = props;

  return (
    <Tag className={classNames('', [className, cls[variant], cls[border]], { [cls.max]: max })} {...otherProps}>
      {children}
    </Tag>
  );
};
