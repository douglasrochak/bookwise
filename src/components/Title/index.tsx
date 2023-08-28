import { ChartLineUp } from '@phosphor-icons/react';
import { TitleContainer } from './styles';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <TitleContainer>
      <ChartLineUp size={32} />
      <h2>{title}</h2>
    </TitleContainer>
  );
}
