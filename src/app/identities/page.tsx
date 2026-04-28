import { redirect } from 'next/navigation';

export default function IdentitiesPage(): never {
  redirect('/?filter=identities');
}
