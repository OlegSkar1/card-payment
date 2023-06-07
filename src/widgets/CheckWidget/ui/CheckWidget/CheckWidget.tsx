import { FC, memo } from 'react';

import { CheckoutTime } from '@/features/CheckoutTime';
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
      <VStack>
        <CheckoutTime />
      </VStack>
    </Card>
  );
});
