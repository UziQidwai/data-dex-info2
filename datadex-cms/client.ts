// Load environment variables from .env file
import dotenv from 'dotenv'
dotenv.config()

// Import the Sanity client constructor
import { createClient } from '@sanity/client'

// Export a configured client instance
export const sanityClient = createClient({
  projectId: 'o4sryq32',             // Your actual Sanity project ID
  dataset: 'mainnet',                // The dataset with your Data DAO content
  useCdn: false,                     // Disable CDN to fetch drafts + latest changes
  apiVersion: '2023-06-01',          // Use a pinned API version or 'v2025-06-20' to match Vision
  
  // Read-only or write-enabled token
  token: (import.meta as ImportMeta).env.VITE_SANITY_AUTH_TOKEN,

})