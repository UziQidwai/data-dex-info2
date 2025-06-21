
import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'o4sryq32',
  dataset: 'mainnet',
  apiVersion: '2023-06-01',
  useCdn: false,
  token: process.env.REACT_APP_SANITY_AUTH_TOKEN,
})
