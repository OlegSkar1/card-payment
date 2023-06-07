import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

type TextAlign = 'left' | 'right' | 'center';
type Size = 'size_s' | 'size_m' | 'size_l';
type TextColorType = 'normal' | 'hint';

interface TextProps {
  className?: string;
  title?: string;
  text?: string;
  align?: TextAlign;
  size?: Size;
  tagname?: 'h1' | 'h2' | 'h3';
  bold?: boolean;
  textColor?: TextColorType;
}

export const Text: React.FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    align = 'left',
    size = 'size_m',
    tagname: Tag = 'h1',
    bold,
    textColor = 'normal',
  } = props;

  const additional = [className, cls[align], cls[size], cls[textColor]];
  const mods: Mods = { [cls.bold]: bold };

  return (
    <>
      {title && <Tag className={classNames(cls.title, additional, mods)}>{title}</Tag>}
      {text && <p className={classNames(cls.paragraph, additional, mods)}>{text}</p>}
    </>
  );
});
