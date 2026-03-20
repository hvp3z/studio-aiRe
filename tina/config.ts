import { defineConfig } from 'tinacms';

const sharedFields = [
  {
    type: 'string' as const,
    name: 'title',
    label: 'Title',
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
    label: 'Year',
    required: true,
  },
  {
    type: 'string' as const,
    name: 'client',
    label: 'Client',
    required: true,
  },
  {
    type: 'string' as const,
    name: 'description',
    label: 'Description',
    ui: { component: 'textarea' },
  },
  {
    type: 'string' as const,
    name: 'projectType',
    label: 'Project type',
    required: true,
  },
  {
    type: 'image' as const,
    name: 'coverImage',
    label: 'Cover image',
    required: true,
  },
  {
    type: 'image' as const,
    name: 'images',
    label: 'Project images',
    list: true,
  },
];

const spacesFields = [
  ...sharedFields,
  {
    type: 'string' as const,
    name: 'location',
    label: 'Location',
    required: true,
  },
  {
    type: 'string' as const,
    name: 'surface',
    label: 'Surface',
  },
  {
    type: 'image' as const,
    name: 'planImage',
    label: 'Plan',
  },
];

const identitiesFields = [
  ...sharedFields,
  {
    type: 'string' as const,
    name: 'mission',
    label: 'Mission',
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
        name: 'spaces',
        label: 'Spaces',
        path: 'content/projects/spaces',
        format: 'md',
        fields: spacesFields,
      },
      {
        name: 'identities',
        label: 'Identities',
        path: 'content/projects/identities',
        format: 'md',
        fields: identitiesFields,
      },
    ],
  },
});
