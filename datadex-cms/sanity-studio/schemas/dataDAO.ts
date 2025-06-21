export default {
  name: 'dataDAO',
  type: 'document',
  title: 'Data DAO',
  fields: [
    { name: 'name', type: 'string', title: 'Name' },
    { name: 'tokenSymbol', type: 'string', title: 'Token Symbol' },
    {
      name: 'tokenAddress',
      type: 'string',
      title: 'Token Address',
      description: 'Lowercase Ethereum address'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: { hotspot: true }
    }
  ],
}
