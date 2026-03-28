import { Product } from '../models/Product';

export const MOCK_PRODUCTS: Product[] = [
  { 
    id: 1, 
    name: 'Teclado Mecânico RGB', 
    price: 350.00, 
    category: { id: 1, title: 'Periféricos' },
    image: 'https://placehold.co/400x400?text=Teclado',
    description: 'Teclado de alta performance com switches azuis.'
  },
  { 
    id: 2, 
    name: 'Monitor 144Hz', 
    price: 1200.00, 
    category: { id: 2, title: 'Monitores' },
    image: 'https://placehold.co/400x400?text=Monitor',
    description: 'Tela Full HD para jogabilidade fluida.'
  }
];

