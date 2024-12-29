import { type SchemaTypeDefinition } from 'sanity'
import  category  from './category'
import Highlightproducts from './highprod'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [category,Highlightproducts],
}
