import { FC, memo } from 'react';

import ManIcon from '@/shared/assets/icons/ManIcon.svg';
import { classNames } from '@/shared/lib';
import { Button } from '@/shared/ui/Button';
import { Icon } from '@/shared/ui/Icon';
import { Text } from '@/shared/ui/Text';

import cls from './CallButton.module.scss';

interface CallButtonProps {
  className?: string;
}

export const CallButton: FC<CallButtonProps> = memo((props) => {
  const { className } = props;

  return (
    <Button
      addonLeft={<Icon Svg={ManIcon} />}
      variant='filled'
      size='m'
      fontSize='small'
      className={classNames(cls.callButton, [className], {})}
    >
      <Text text={'Вызов сотрудника'} className={cls.text} />
    </Button>
  );
});
