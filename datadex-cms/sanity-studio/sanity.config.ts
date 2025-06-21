import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'


export default defineConfig({
  name: 'default',
  title: 'DataDAOS',
  projectId: 'o4sryq32',    // ✅ Your correct project ID
  dataset: 'mainnet',       // ✅ Must match your CMS data
  apiVersion: '2023-06-01', // Optional if not already defined
  useCdn: false,            // Optional, match with frontend config
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
})
