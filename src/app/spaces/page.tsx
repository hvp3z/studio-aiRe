import { redirect } from 'next/navigation';

export default function SpacesPage(): never {
  redirect('/?filter=spaces');
}
