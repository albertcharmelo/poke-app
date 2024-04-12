import Container from '@/components/Container';
import { SWRProvider } from '@/components/swr-provider';

export default function Home() {
  return (
    <main className="flex flex-col justify-center p-8">
      <Container />
    </main>
  );
}
