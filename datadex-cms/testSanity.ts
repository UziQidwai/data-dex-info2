import { sanityClient } from './client'

async function test() {
  try {
    const result = await sanityClient.fetch('*[_type == "token"][0]')
    console.log('Sanity fetch success:\n', result)
  } catch (err) {
    console.error('Sanity fetch error:\n', err)
  }
}

test()
