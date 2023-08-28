import { Star } from '@phosphor-icons/react';
import { StartContainer } from './styles';

interface StarsProps {
  rate: number;
}

export function Stars({ rate }: StarsProps) {
  const ratings = Array.from({ length: rate });
  const fullFillStars =
    5 - ratings.length > 0 ? Array.from({ length: 5 - ratings.length }) : null;

  return (
    <StartContainer>
      {ratings.map((_, i) => (
        <Star key={i} color='#8381D9' weight='fill' />
      ))}
      {fullFillStars &&
        fullFillStars.map((_, i) => <Star key={i} color='#8381D9' />)}
    </StartContainer>
  );
}
