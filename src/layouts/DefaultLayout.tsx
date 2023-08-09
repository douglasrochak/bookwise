import { Sidebar } from '@/components/Sidebar';
import { DefaultLayoutContainer } from './styles';

export default function DefaultLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <DefaultLayoutContainer>
      <Sidebar />
      <main>{children}</main>
    </DefaultLayoutContainer>
  );
}
