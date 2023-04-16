import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import {schemaTypes} from '@/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ""
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ""

export default defineConfig({
  name: 'default',
  title: 'blog',
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  apiVersion: "01/04/2023",
  projectId,
  dataset,

  plugins: [deskTool(),visionTool()],

  schema: {
    types: schemaTypes,
  },
})
