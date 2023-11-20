import {Rule} from '@sanity/types'

export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Escolha o nome do seu produto.',
      validation: (Rule: Rule) => Rule.required().error('O nome é obrigatório.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      description: 'Escolha o nome do seu produto.',
      validation: (Rule: Rule) => Rule.required().error('A slug é obrigatória.'),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Adicione detalhes sobre o produto.',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Selecione a imagem do produto.',
      validation: (Rule: Rule) => Rule.required().error('A imagem é obrigatória.'),
    },
    {
      name: 'basePrice',
      title: 'Base Price',
      type: 'number',
      description: 'Determine o preço do seu produto.',
      validation: (Rule: Rule) => Rule.required().error('O preço é obrigatório.'),
    },
    {
      name: 'discountPercentage',
      title: 'Discount Percentage',
      type: 'number',
      defaultValue: 0,
      description: 'Determine a porcentagem de desconto do seu produto.',
    },
    {
      name: 'halloweenPromotional',
      title: 'Halloween Promotional',
      type: 'boolean',
      description: 'Determine se o produto faz parte da promoção de Halloween.',
    },
  ],
}
