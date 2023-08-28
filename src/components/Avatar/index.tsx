import Image from 'next/image';
import { AvatarContainer } from './styles';

interface AvatarProps {
  src: string;
  size: 'small' | 'large';
}

export function Avatar({ src, size }: AvatarProps) {
  const heighAndWidth = size === 'large' ? 72 : 40;
  return (
    <AvatarContainer>
      <Image alt='' src={src} height={heighAndWidth} width={heighAndWidth} />
    </AvatarContainer>
  );
}
