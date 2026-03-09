import { defineConfig } from 'tinacms';

const projectFields = [
  {
    type: 'string' as const,
    name: 'title',
    label: 'Titre',
    required: true,
    isTitle: true,
  },
  {
    type: 'string' as const,
    name: 'slug',
    label: 'Slug (URL)',
    required: true,
  },
  {
    type: 'string' as const,
    name: 'year',
    label: 'Année',
    required: true,
  },
  {
    type: 'string' as const,
    name: 'client',
    label: 'Client',
    required: true,
  },
  {
    type: 'image' as const,
    name: 'coverImage',
    label: 'Image de couverture',
    required: true,
  },
  {
    type: 'image' as const,
    name: 'images',
    label: 'Images du projet',
    list: true,
  },
];

export default defineConfig({
  branch: process.env.NEXT_PUBLIC_TINA_BRANCH ?? 'main',
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',
  build: { outputFolder: 'admin', publicFolder: 'public' },
  media: { tina: { mediaRoot: 'images', publicFolder: 'public' } },
  schema: {
    collections: [
      {
        name: 'espaces',
        label: 'Espaces',
        path: 'content/projects/espaces',
        format: 'md',
        fields: projectFields,
      },
      {
        name: 'identites',
        label: 'Identités',
        path: 'content/projects/identites',
        format: 'md',
        fields: projectFields,
      },
    ],
  },
});
