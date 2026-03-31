'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Project, ProjectCategory } from '@/lib/types';
import ProjectCard from '@/components/ProjectCard/ProjectCard';
import styles from './HomeProjects.module.css';

interface HomeProjectsProps {
  projects: Project[];
}

export default function HomeProjects({ projects }: HomeProjectsProps): React.JSX.Element {
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory | null>(
    (searchParams.get('filter') as ProjectCategory) ?? null
  );

  function handleFilter(category: ProjectCategory) {
    setActiveFilter((prev) => (prev === category ? null : category));
  }

  const displayed = activeFilter
    ? projects.filter((p) => p.category === activeFilter)
    : projects;

  return (
    <div className={styles.wrapper}>
      <div className={styles.filters}>
        <button
          className={`${styles.filterTitle} ${activeFilter === 'spaces' ? styles.active : ''}`}
          onClick={() => handleFilter('spaces')}
          data-text="SPACES"
        >
          SPACES
        </button>
        <button
          className={`${styles.filterTitle} ${activeFilter === 'identities' ? styles.active : ''}`}
          onClick={() => handleFilter('identities')}
          data-text="IDENTITIES"
        >
          IDENTITIES
        </button>
      </div>

      <div className={styles.grid}>
        {displayed.map((project) => (
          <ProjectCard
            key={project.slug}
            project={project}
            href={`/${project.category}/${project.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
