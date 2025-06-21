import React, { useEffect, useState } from 'react'
import { DarkGreyCard } from 'components/Card'
import { AutoColumn } from 'components/Column'
import { TYPE } from 'theme'
import { fetchTokenDescription } from '../../lib/sanity/queries' //CMS query to fetch token description

interface TokenDescriptionProps {
  tokenAddress: string | undefined
}

const TokenDescription: React.FC<TokenDescriptionProps> = ({ tokenAddress }) => {
  const [description, setDescription] = useState<string | null>(null)

  useEffect(() => {
    if (!tokenAddress) return

    const fetchDescription = async () => {
      try {
        const data = await fetchTokenDescription(tokenAddress)
        setDescription(data?.description ?? 'No description found.')
      } catch (error) {
        console.error('Failed to fetch token description:', error)
        setDescription('Error loading description.')
      }
    }

    fetchDescription()
  }, [tokenAddress])

  if (!tokenAddress) return null

  return (
    <DarkGreyCard>
      <AutoColumn $gap="8px">
        <TYPE.main fontSize="20px">About This Token</TYPE.main>
        <TYPE.body>{description ?? 'Loading description...'}</TYPE.body>
      </AutoColumn>
    </DarkGreyCard>
  )
}

export default TokenDescription
