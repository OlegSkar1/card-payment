import { FC, memo } from 'react';

import ArrowBtn from '@/shared/assets/icons/ArrowBtn.svg';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

import cls from './BackButton.module.scss';

interface BackButtonProps {
  className?: string;
}

export const BackButton: FC<BackButtonProps> = memo((props) => {
  const { className } = props;

  return (
    <Button variant='filled' size='m' className={classNames(cls.backButton, [className], {})}>
      <Icon Svg={ArrowBtn} className={cls.icon} />
    </Button>
  );
});
