export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  discount?: number;
}

export const todaysDeals: Product[] = [
  {
    id: 'deal1',
    name: 'Premium Chyawanprash Special Pack',
    description: 'Immunity booster with pure herbs and natural ingredients',
    price: 999,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843',
    category: 'daily-health',
    rating: 4.9,
    reviews: 320,
    inStock: true,
    discount: 50
  },
  {
    id: 'deal2',
    name: 'Organic Hair Care Bundle',
    description: 'Complete hair care solution with natural oils',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc',
    category: 'skin-hair',
    rating: 4.8,
    reviews: 245,
    inStock: true,
    discount: 50
  },
  {
    id: 'deal3',
    name: 'Herbal Face Care Kit',
    description: 'Natural skincare routine for glowing skin',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    category: 'skin-hair',
    rating: 4.7,
    reviews: 189,
    inStock: true,
    discount: 50
  },
  {
    id: 'deal4',
    name: 'Ayurvedic Weight Management Pack',
    description: 'Natural supplements for healthy weight management',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1559841644-08984562005a',
    category: 'weight-power',
    rating: 4.6,
    reviews: 156,
    inStock: true,
    discount: 50
  },
  {
    id: 'deal5',
    name: 'Complete Wellness Bundle',
    description: 'Comprehensive health and wellness package',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    category: 'daily-health',
    rating: 4.9,
    reviews: 278,
    inStock: true,
    discount: 50
  }
];

export const products: Product[] = [
  // Skin & Hair Care Products
  {
    id: 'skin1',
    name: 'Natural Hair Oil Blend',
    description: 'Blend of coconut, almond, and herbs for healthy hair',
    price: 399,
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc',
    category: 'skin-hair',
    rating: 4.8,
    reviews: 156,
    inStock: true
  },
  {
    id: 'skin2',
    name: 'Neem Face Pack',
    description: 'Pure neem powder for clear skin',
    price: 299,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    category: 'skin-hair',
    rating: 4.7,
    reviews: 142,
    inStock: true
  },
  {
    id: 'skin3',
    name: 'Herbal Shampoo',
    description: 'Chemical-free natural shampoo',
    price: 449,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d',
    category: 'skin-hair',
    rating: 4.6,
    reviews: 98,
    inStock: true
  },
  {
    id: 'skin4',
    name: 'Aloe Vera Gel',
    description: 'Pure aloe vera for skin and hair',
    price: 199,
    image: 'https://images.unsplash.com/photo-1596467746663-c8bd67784ba9',
    category: 'skin-hair',
    rating: 4.9,
    reviews: 234,
    inStock: true
  },
  {
    id: 'skin5',
    name: 'Kumkumadi Oil',
    description: 'Traditional beauty oil for radiant skin',
    price: 599,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19',
    category: 'skin-hair',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },

  // Weight & Power Products
  {
    id: 'weight1',
    name: 'Ashwagandha Powder',
    description: 'Natural strength and immunity booster',
    price: 499,
    image: 'https://images.unsplash.com/photo-1611241893603-3c359704e0ee',
    category: 'weight-power',
    rating: 4.9,
    reviews: 245,
    inStock: true
  },
  {
    id: 'weight2',
    name: 'Protein Plus',
    description: 'Plant-based protein supplement',
    price: 899,
    image: 'https://images.unsplash.com/photo-1579722820308-d74e571900a9',
    category: 'weight-power',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'weight3',
    name: 'Muscle Gain Powder',
    description: 'Natural muscle building supplement',
    price: 799,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    category: 'weight-power',
    rating: 4.6,
    reviews: 156,
    inStock: true
  },
  {
    id: 'weight4',
    name: 'Energy Boost Tablets',
    description: 'Natural energy enhancer',
    price: 599,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843',
    category: 'weight-power',
    rating: 4.8,
    reviews: 178,
    inStock: true
  },
  {
    id: 'weight5',
    name: 'Mass Gainer',
    description: 'Herbal weight gain formula',
    price: 999,
    image: 'https://images.unsplash.com/photo-1559841644-08984562005a',
    category: 'weight-power',
    rating: 4.7,
    reviews: 145,
    inStock: true
  },

  // Daily Intimate Products
  {
    id: 'intimate1',
    name: 'Intimate Wash',
    description: 'Natural intimate hygiene wash',
    price: 349,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a',
    category: 'daily-intimate',
    rating: 4.8,
    reviews: 123,
    inStock: true
  },
  {
    id: 'intimate2',
    name: 'Hygiene Powder',
    description: 'Natural deodorizing powder',
    price: 249,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908',
    category: 'daily-intimate',
    rating: 4.7,
    reviews: 98,
    inStock: true
  },
  {
    id: 'intimate3',
    name: 'Care Oil',
    description: 'Soothing intimate care oil',
    price: 399,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19',
    category: 'daily-intimate',
    rating: 4.6,
    reviews: 87,
    inStock: true
  },
  {
    id: 'intimate4',
    name: 'Comfort Cream',
    description: 'Natural soothing cream',
    price: 299,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    category: 'daily-intimate',
    rating: 4.9,
    reviews: 156,
    inStock: true
  },
  {
    id: 'intimate5',
    name: 'Care Kit',
    description: 'Complete intimate care kit',
    price: 899,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a',
    category: 'daily-intimate',
    rating: 4.8,
    reviews: 178,
    inStock: true
  },

  // Daily Health Products
  {
    id: 'health1',
    name: 'Immunity Booster',
    description: 'Daily immunity support supplement',
    price: 599,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843',
    category: 'daily-health',
    rating: 4.9,
    reviews: 245,
    inStock: true
  },
  {
    id: 'health2',
    name: 'Digestive Aid',
    description: 'Natural digestive support',
    price: 399,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
    category: 'daily-health',
    rating: 4.7,
    reviews: 189,
    inStock: true
  },
  {
    id: 'health3',
    name: 'Sleep Support',
    description: 'Natural sleep aid supplement',
    price: 499,
    image: 'https://images.unsplash.com/photo-1511295742362-92c1f4a6a3dc',
    category: 'daily-health',
    rating: 4.8,
    reviews: 167,
    inStock: true
  },
  {
    id: 'health4',
    name: 'Brain Boost',
    description: 'Mental clarity supplement',
    price: 699,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
    category: 'daily-health',
    rating: 4.6,
    reviews: 145,
    inStock: true
  },
  {
    id: 'health5',
    name: 'Joint Care',
    description: 'Natural joint support formula',
    price: 799,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843',
    category: 'daily-health',
    rating: 4.7,
    reviews: 156,
    inStock: true
  }
];

export const bestSellers = [
  products[0], // Natural Hair Oil Blend
  products[5], // Ashwagandha Powder
  products[10], // Intimate Wash
  products[15], // Immunity Booster
  products[1], // Neem Face Pack
];

export const newLaunches = [
  products[2], // Herbal Shampoo
  products[7], // Energy Boost Tablets
  products[12], // Care Oil
  products[17], // Brain Boost
  products[4], // Kumkumadi Oil
];

export const popularCombos = [
  {
    id: 'combo1',
    name: 'Complete Wellness Pack',
    products: [
      { id: 'health1', name: 'Immunity Booster' },
      { id: 'health2', name: 'Digestive Aid' },
      { id: 'health3', name: 'Sleep Support' }
    ],
    price: 1299,
    image: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e',
    savings: 299
  },
  {
    id: 'combo2',
    name: 'Beauty Care Bundle',
    products: [
      { id: 'skin1', name: 'Natural Hair Oil Blend' },
      { id: 'skin2', name: 'Neem Face Pack' },
      { id: 'skin4', name: 'Aloe Vera Gel' }
    ],
    price: 899,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571',
    savings: 199
  },
  {
    id: 'combo3',
    name: 'Fitness Essentials',
    products: [
      { id: 'weight1', name: 'Ashwagandha Powder' },
      { id: 'weight2', name: 'Protein Plus' },
      { id: 'weight4', name: 'Energy Boost Tablets' }
    ],
    price: 1899,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438',
    savings: 399
  },
  {
    id: 'combo4',
    name: 'Daily Care Kit',
    products: [
      { id: 'intimate1', name: 'Intimate Wash' },
      { id: 'intimate2', name: 'Hygiene Powder' },
      { id: 'intimate4', name: 'Comfort Cream' }
    ],
    price: 799,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a',
    savings: 199
  },
  {
    id: 'combo5',
    name: 'Immunity Bundle',
    products: [
      { id: 'health1', name: 'Immunity Booster' },
      { id: 'health3', name: 'Sleep Support' },
      { id: 'health4', name: 'Brain Boost' }
    ],
    price: 1599,
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843',
    savings: 299
  }
];