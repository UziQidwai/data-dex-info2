
import { sanityClient } from './client'

export async function fetchTokenDescription(tokenAddress: string) {
  const query = `*[_type == "dataDAO" && lower(tokenAddress) == $tokenAddress][0]{
    description
  }`

  const params = { tokenAddress: tokenAddress.toLowerCase() }

  return await sanityClient.fetch(query, params)
}