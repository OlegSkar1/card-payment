import { FC, memo } from 'react';

import { useTime } from '../../lib/hooks/useTime';

import { classNames } from '@/shared/lib';
import { HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text';

import cls from './CheckoutTime.module.scss';

interface CheckoutTimeProps {
  className?: string;
}

export const CheckoutTime: FC<CheckoutTimeProps> = memo((props) => {
  const { className } = props;
  const { currDate, currTime } = useTime();

  return (
    <HStack gap='20' className={classNames(cls.checkoutTime, [className], {})}>
      <Text text={currDate} textColor='hint' size='size_s' />
      <Text text={currTime} textColor='hint' size='size_s' />
      <Text textColor='hint' text={'Касса #1'} size='size_s' />
    </HStack>
  );
});
