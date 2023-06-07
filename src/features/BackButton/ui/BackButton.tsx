import { FC, memo } from 'react';

import ArrowBtn from '@/shared/assets/icons/ArrowBtn.svg';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';

interface BackButtonProps {
  className?: string;
}

export const BackButton: FC<BackButtonProps> = memo((props) => {
  const { className } = props;

  return (
    <Button variant='filled' size='m' className={className}>
      <Icon Svg={ArrowBtn} />
    </Button>
  );
});
