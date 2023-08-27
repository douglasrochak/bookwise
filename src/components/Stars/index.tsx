import { Star } from '@phosphor-icons/react';
import { StartContainer } from './styles';

interface StarsProps {
  starsNumber: number;
}

export function Stars({ starsNumber }: StarsProps) {
  const ratings = Array.from({ length: starsNumber });
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
