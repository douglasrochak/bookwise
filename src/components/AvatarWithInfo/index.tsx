import { Avatar } from '../Avatar';
import { AvatarWithInfoContainer, InfoContainer } from './styles';

interface AvatarWithInfoProps {
  name: string;
  time: string;
}

export function AvatarWithInfo({ name, time }: AvatarWithInfoProps) {
  return (
    <AvatarWithInfoContainer>
      <Avatar />
      <InfoContainer>
        <span>{name}</span>
        <time>{time}</time>
      </InfoContainer>
    </AvatarWithInfoContainer>
  );
}
