import { Suspense } from 'react';
import { getAllProjects } from '@/lib/content';
import HomeProjects from '@/components/HomeProjects/HomeProjects';

export default function HomePage(): React.JSX.Element {
  const projects = getAllProjects();
  return (
    <Suspense>
      <HomeProjects projects={projects} />
    </Suspense>
  );
}
