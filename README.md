
##Live Project Link : https://clever-piroshki-c86ec6.netlify.app/

# Ayuvya - Ancient Wisdom, Modern Wellness

![Ayuvya Banner](https://images.unsplash.com/photo-1544367567-0f2fcb009e0b)

Ayuvya is a modern e-commerce platform that brings the ancient wisdom of Ayurveda to the digital age. Built with Next.js 13, TypeScript, and Tailwind CSS, it offers a seamless shopping experience for authentic Ayurvedic products.

## Features

- 🛍️ **Product Categories**
  - Skin & Hair Care
  - Weight & Power
  - Daily Intimate Care
  - Daily Health
  - Value Combos

- 🌟 **Key Functionalities**
  - User Authentication with Encryption
  - Shopping Cart Management
  - AI-Powered Health Consultation
  - Dark/Light Theme Support
  - Responsive Design
  - Product Search & Filtering
  - Today's Deals Section

- 💫 **UI/UX Features**
  - Animated Transitions
  - Interactive Product Cards
  - Dynamic Image Loading
  - Toast Notifications
  - Loading States
  - Responsive Navigation

## Tech Stack

- **Framework**: Next.js 13
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context
- **Authentication**: Custom implementation with encryption
- **Build Tool**: Vite

## Project Structure

```
ayuvya/
├── app/                    # Next.js 13 app directory
│   ├── about/             # About page
│   ├── ai-suggestions/    # AI consultation
│   ├── auth/             # Authentication pages
│   ├── blogs/            # Blog section
│   ├── cart/             # Shopping cart
│   ├── categories/       # Product categories
│   ├── contact/          # Contact page
│   ├── orders/           # Order management
│   ├── products/         # Product listings
│   └── settings/         # User settings
├── components/           # Reusable components
│   ├── home/            # Homepage components
│   └── ui/              # UI components
├── context/             # React Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utilities and configurations
└── public/             # Static assets
```

## Core Components

### Authentication System
- Secure user registration and login
- Password encryption
- Protected routes
- Session management

### Shopping Cart
- Add/Remove products
- Quantity management
- Price calculations
- Persistent storage

### Product Management
- Categorized listings
- Search functionality
- Price filtering
- Rating system

### AI Consultation
- Health concern analysis
- Personalized recommendations
- Product suggestions
- Natural remedies

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ayuvya.git
   cd ayuvya
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Environment Variables

Create a `.env` file in the root directory:

```env
NEXT_PUBLIC_API_URL=your_api_url
NEXT_PUBLIC_SITE_URL=your_site_url
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Developer

Developed by [Rishav Raushan](https://github.com/rishav-raushan)

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
