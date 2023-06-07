import { FC, memo } from 'react';

import ManIcon from '@/shared/assets/icons/ManIcon.svg';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';

interface CallButtonProps {
  className?: string;
}

export const CallButton: FC<CallButtonProps> = memo((props) => {
  const { className } = props;

  return (
    <Button addonLeft={<Icon Svg={ManIcon} />} variant='filled' size='m' fontSize='small' className={className}>
      <Text text={'Вызов сотрудника'} />
    </Button>
  );
});
