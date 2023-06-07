import { FC, memo } from 'react';

import cls from './[FTName].module.scss';

import { classNames } from '@/shared/lib';

interface [FTName]Props {
  className?: string;
}

export const [FTName]: FC<[FTName]Props> = memo((props) => {
  const { className } = props;

  return <div className={classNames(cls.[FTName | camelcase], [className], {})}></div>;
});
