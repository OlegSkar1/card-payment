import { FC, memo } from 'react';

import checkImg from '@/shared/assets/icons/check.svg';
import { classNames } from '@/shared/lib';
import { Card } from '@/shared/ui/Card';

import cls from './CheckInfo.module.scss';

interface CheckInfoProps {
  className?: string;
}

export const CheckInfo: FC<CheckInfoProps> = memo((props) => {
  const { className } = props;

  return (
    <Card max className={classNames(cls.checkInfo, [className], {})}>
      {/* <checkImg className={cls.checkCard} /> */}
      <img src={checkImg} width={1071} height={888} />
    </Card>
  );
});
