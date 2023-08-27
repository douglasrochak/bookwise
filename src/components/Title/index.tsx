import { TitleContainer } from './styles';

interface TitleProps {
  title: string;
}

export function Title({ title }: TitleProps) {
  return (
    <TitleContainer>
      😀<h2>{title}</h2>
    </TitleContainer>
  );
}
