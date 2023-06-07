import { FC, memo } from 'react';

import checkImg from '@/shared/assets/icons/checkIcon.svg';
import { classNames } from '@/shared/lib';
import { Card } from '@/shared/ui/Card';
import { getHStack, getVStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CheckInfo.module.scss';

interface CheckInfoProps {
  className?: string;
}

export const CheckInfo: FC<CheckInfoProps> = memo((props) => {
  const { className } = props;

  return (
    <Card max className={classNames(cls.checkInfo, [className], {})}>
      <img src={checkImg} width={1071} height={888} className={cls.checkCard} />
      <Text text='Стоимость покупок' textColor='hint' className={classNames(cls.priceHeader, [getVStack({})])} />
      <Text
        price
        size='size_xl'
        bold
        text='820'
        decimal='95'
        className={classNames(cls.price, [getHStack({ align: 'baseline', justify: 'center' })])}
      />
      <Text
        text='Приложите'
        className={classNames(cls.priceTitle, [getHStack({ justify: 'center' })])}
        size='size_l'
        bold
      />
      <Text
        text='или прокатайте карту'
        className={classNames(cls.priceTitle, [getHStack({ justify: 'center' })])}
        size='size_l'
        bold
      />
    </Card>
  );
});
