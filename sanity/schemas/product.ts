export default {
  name: 'product',
  title: 'Produto',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nome do Produto',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug do Produto',
      type: 'slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'description',
      title: 'Descrição',
      type: 'text',
      description: 'Descrição opcional do produto',
    },
    {
      name: 'image',
      title: 'Imagem do Produto',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'basePrice',
      title: 'Preço Base',
      type: 'number',
      description: 'Preço base do produto sem contar descontos ou promoções.',
    },
    {
      name: 'discountPercentage',
      title: 'Porcentagem de Desconto',
      type: 'number',
      description: 'Pode ser 0 se não estiver em promoção ou mais se tiver desconto.',
    },
    {
      name: 'halloweenPromotional',
      title: 'Promoção de Halloween',
      type: 'boolean',
    },
  ],
}
