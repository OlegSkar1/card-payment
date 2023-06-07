import { memo } from 'react';

import { classNames } from '@/shared/lib';
import { Mods } from '@/shared/lib/classNames/classNames';

import cls from './Text.module.scss';

type TextAlign = 'left' | 'right' | 'center';
type Size = 'size_s' | 'size_m' | 'size_l' | 'size_xl';
type TextColorType = 'normal' | 'hint';

interface TextBaseProps {
  className?: string;
  text?: string;
  align?: TextAlign;
  size?: Size;
  tagname?: 'h1' | 'h2' | 'h3' | 'p';
  bold?: boolean;
  textColor?: TextColorType;
}
interface TextPriceProps extends TextBaseProps {
  price: true;
  decimal?: string;
  title?: undefined;
}

interface NotPriceTextProps extends TextBaseProps {
  price?: false;
  title?: string;
  decimal?: undefined;
}

type TextProps = TextPriceProps | NotPriceTextProps;

export const Text: React.FC<TextProps> = memo((props) => {
  const {
    className,
    title,
    text,
    price,
    decimal: span,
    align = 'left',
    size = 'size_m',
    tagname: Tag = 'h1',
    bold,
    textColor = 'normal',
  } = props;

  const additional = [className, cls[align], cls[size], cls[textColor]];
  const mods: Mods = { [cls.bold]: bold };

  if (price) {
    return (
      <p className={classNames(cls.paragraph, additional, mods)}>
        {span ? text + ',' : text}
        <span className={cls.priceSpan}>{span}</span>
        <span>₽</span>
      </p>
    );
  }

  return (
    <>
      {title && <Tag className={classNames(cls.title, additional, mods)}>{title}</Tag>}
      {text && <p className={classNames(cls.paragraph, additional, mods)}>{text}</p>}
    </>
  );
});
