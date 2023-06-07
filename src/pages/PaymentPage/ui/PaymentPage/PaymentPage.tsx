import { FC, memo } from 'react';

import { classNames } from '@/shared/lib';
import { CallBtnsWidget } from '@/widgets/CallBtnsWidget';
import { CheckWidget } from '@/widgets/CheckWidget';

import cls from './PaymentPage.module.scss';

interface PaymentPageProps {
  className?: string;
}

export const PaymentPage: FC<PaymentPageProps> = memo((props) => {
  const { className } = props;

  return (
    <div className={classNames(cls.paymentPage, [className], {})}>
      <CheckWidget />
      <CallBtnsWidget className={cls.callBtns} />
    </div>
  );
});
