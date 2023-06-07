import { FC, memo } from 'react';

import { CheckInfo } from '@/features/CheckInfo';
import { CheckoutTime } from '@/features/CheckoutTime';
import arrowIcon from '@/shared/assets/icons/arrow.svg';
import { classNames } from '@/shared/lib';
import { Card } from '@/shared/ui/Card';
import { VStack } from '@/shared/ui/Stack';

import cls from './CheckWidget.module.scss';

interface CheckWidgetProps {
  className?: string;
}

export const CheckWidget: FC<CheckWidgetProps> = memo((props) => {
  const { className } = props;

  return (
    <Card tagname='article' border='round' className={classNames(cls.checkWidget, [className], {})}>
      <VStack max justify='between' className={cls.checkWrapper}>
        <CheckoutTime className={cls.checkoutTime} />
        <CheckInfo />
        <img src={arrowIcon} width={214} height={274} className={cls.arrow} />
      </VStack>
    </Card>
  );
});
