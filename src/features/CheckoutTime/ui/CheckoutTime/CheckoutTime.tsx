import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CheckoutTime.module.scss';

interface CheckoutTimeProps {
  className?: string;
}

export const CheckoutTime: FC<CheckoutTimeProps> = memo((props) => {
  const { className } = props;

  return (
    <HStack gap='20' justify='end' className={classNames(cls.checkoutTime, [className], {})}>
      <span>time</span>
      <Text textColor='hint' text={'Касса #1'} size='size_s' />
    </HStack>
  );
});
