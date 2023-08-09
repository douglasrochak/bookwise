import Image from 'next/image';
import { AuthButtonContainer } from './styles';

interface AuthButtonProps {
  title: string;
  icon?: string;
  iconAlt?: string;
  onClick?: () => void;
}

export function AuthButton({
  onClick,
  title,
  icon,
  iconAlt = '',
}: AuthButtonProps) {
  return (
    <AuthButtonContainer onClick={onClick} type='button'>
      {icon && <Image src={icon} width={32} height={32} alt={iconAlt} />}
      <span>{title}</span>
    </AuthButtonContainer>
  );
}
