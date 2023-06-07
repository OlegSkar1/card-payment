import { FC, memo } from 'react';

import { BackButton } from '@/features/BackButton';
import { CallButton } from '@/features/CallButton';
import { HStack } from '@/shared/ui/Stack';

interface CallBtnsWidgetProps {
  className?: string;
}

export const CallBtnsWidget: FC<CallBtnsWidgetProps> = memo((props) => {
  const { className } = props;

  return (
    <HStack gap='20' className={className}>
      <BackButton />
      <CallButton />
    </HStack>
  );
});
