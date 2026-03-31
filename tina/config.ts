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
    list: true as const,
    ui: {
      validate: (value: string[] | undefined) => {
        if (value?.some((v) => !v)) {
          return 'Please remove empty image slots or select an image for each';
        }
      },
    },
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
        name: 'about',
        label: 'About',
        path: 'content/about',
        format: 'md',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: 'image' as const,
            name: 'profileImage',
            label: 'Profile photo',
          },
          {
            type: 'string' as const,
            name: 'description',
            label: 'Description',
            ui: { component: 'textarea' },
          },
        ],
      },
      {
        name: 'offers',
        label: 'Offers',
        path: 'content/offers',
        format: 'md',
        ui: { allowedActions: { create: false, delete: false } },
        fields: [
          {
            type: 'image' as const,
            name: 'spacesImage',
            label: 'Spaces — image',
          },
          {
            type: 'image' as const,
            name: 'identitiesImage',
            label: 'Identities — image',
          },
          {
            type: 'image' as const,
            name: 'moreImage',
            label: 'More — image',
          },
        ],
      },
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
