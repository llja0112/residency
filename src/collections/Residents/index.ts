import type { CollectionConfig } from 'payload'
import { authenticated } from '../../access/authenticated'
import { authenticatedOrPublished } from '../../access/authenticatedOrPublished'
import { generatePreviewPath } from '../../utilities/generatePreviewPath'

export const Residents: CollectionConfig = {
  slug: 'residents',
  labels: {
    singular: 'Resident',
    plural: 'Residents',
  },
  access: {
    create: authenticated,
    delete: authenticated,
    read: authenticatedOrPublished,
    update: authenticated,
  },
  defaultPopulate: {
    slug: true,
  },
  admin: {
    defaultColumns: [
      "Resident's name",
      'Resident Year',
      'Residency Start Date',
      'Expected Completion Date',
    ],
    useAsTitle: "Resident's name",
  },
  defaultSort: ["Resident's name"],
  fields: [
    {
      name: "Resident's name",
      type: 'text',
      required: true,
    },
    {
      name: 'Resident Year',
      type: 'number',
      required: true,
    },
    {
      name: 'Professional Image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'Residency Start Date',
      type: 'date',
    },
    {
      name: 'Expected Completion Date',
      type: 'date',
    },
    {
      name: 'Titles',
      type: 'richText',
    },
    {
      name: 'email',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
    },
    {
      name: 'Posting Sites',
      type: 'richText',
    },
    {
      name: 'Research Areas',
      type: 'richText',
    },
    {
      name: 'Preventive Medicine Interest Areas',
      type: 'richText',
    },
    {
      name: 'Academic / Professional Qualifications',
      type: 'richText',
    },
    {
      name: 'Career History',
      type: 'richText',
    },
    {
      name: 'Professional Activities',
      type: 'richText',
    },
  ],
}
