# IVY Music School

A modern, responsive website for IVY Music School, offering professional and personalized piano lessons for all ages.

## Features

- **Responsive Design**: Mobile-first approach with modern UI/UX
- **Multi-language Support**: Korean and English language support
- **Modern Components**: Built with React, TypeScript, and Tailwind CSS
- **Beautiful Animations**: Smooth transitions and hover effects
- **Contact Integration**: Direct phone, SMS, and email integration

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Build Tool**: Vite
- **UI Components**: Custom component library with shadcn/ui
- **Icons**: Lucide React
- **Animations**: CSS animations and transitions

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or bun

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd ivymusicschool
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/            # Reusable UI components
│   └── ...            # Page-specific components
├── contexts/           # React contexts (Language, etc.)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── pages/              # Page components
└── assets/             # Images and static assets
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Customization

### Colors and Theme
The project uses a custom color palette defined in `tailwind.config.ts`. You can modify the colors to match your brand.

### Content
Update the content in the language context files to modify text and translations.

### Images
Replace images in the `src/assets/` directory with your own branded content.

## Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Recommended Hosting
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Contact

For questions about this project, contact the development team.
For questions about IVY Music School services, contact hjennykang@gmail.com
