import { Avatar } from '../Avatar';
import { AvatarWithInfoContainer, InfoContainer } from './styles';
import { timeToNow } from '@/utils/timeFromNow';

interface AvatarWithInfoProps {
  name: string;
  time: string;
  image: string;
}

export function AvatarWithInfo({ name, time, image }: AvatarWithInfoProps) {
  const formattedTime = timeToNow(time);

  return (
    <AvatarWithInfoContainer>
      <Avatar src={image} size='small' />
      <InfoContainer>
        <span>{name}</span>
        <time>{formattedTime}</time>
      </InfoContainer>
    </AvatarWithInfoContainer>
  );
}
