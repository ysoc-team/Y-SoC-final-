# Y-SoC (Youth Season of Code) 🌟

> **Empowering Youth Through Open Source Collaboration**

Y-SoC is a global community dedicated to fostering open-source development among young developers, providing mentorship, collaborative projects, and learning opportunities that bridge the gap between education and real-world software development.

## 🚀 Live Demo

Visit our live website: [Y-SoC Official Website](https://ysoc.in)

## ✨ Features

### 🏠 **Homepage**
- **Hero Section**: Dynamic event timeline (November to June) with engaging animations
- **Role Selection**: Interactive cards for Project Leads, Mentors, and Contributors
- **Call-to-Action**: Clear pathways for joining the community

### 👥 **Team Page**
- **Leadership Team**: Core team members with detailed profiles
- **Core Team**: 4-column responsive layout showcasing all team members
- **Interactive Cards**: Hover effects, social links, and skill badges
- **Responsive Design**: Optimized for all device sizes

### 🎯 **Recruitment Page**
- **Comprehensive Application Form**: Multi-step form with validation
- **Role Selection**: Choose from Project Lead, Mentor, or Contributor
- **Form Validation**: Real-time validation with visual feedback
- **Required Fields**: Experience level, time commitment, and contact information

### 🏆 **Mentors Page**
- **23+ Expert Mentors**: From top companies like Microsoft, Google, Amazon, and more
- **Diverse Expertise**: Covering AI/ML, Full-stack Development, DevOps, Data Science, and Product Management
- **Detailed Profiles**: Experience, specialties, availability, and contact information
- **Interactive Grid**: Searchable and filterable mentor profiles

### 🤝 **Sponsors Page**
- **Current Partners**: ETHIndia and Devfolio partnerships
- **Why Sponsor Section**: Benefits and opportunities for sponsors
- **Partnership Benefits**: Clear value proposition for potential sponsors

### 📋 **Additional Pages**
- **About**: Mission, values, and community guidelines
- **FAQ**: Frequently asked questions
- **Contact**: Get in touch with the team
- **Timeline**: Event schedule and important dates
- **Privacy Policy & Terms**: Legal documentation

## 🛠️ Technology Stack

### **Frontend**
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Smooth animations and transitions
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library

### **Backend & Database**
- **Supabase**: Backend-as-a-Service for data management
- **PostgreSQL**: Relational database
- **Real-time Subscriptions**: Live data updates

### **Deployment & Performance**
- **Vercel**: Hosting and deployment platform
- **Webpack**: Module bundling and optimization
- **Lighthouse**: Performance monitoring
- **Bundle Analysis**: Code splitting optimization

### **Development Tools**
- **ESLint**: Code linting and quality
- **Prettier**: Code formatting
- **Husky**: Git hooks for quality assurance
- **TypeScript**: Static type checking

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager
- Git for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ysoc-team/Y-SoC-final-.git
   cd Y-SoC-final-
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
Y-SoC-final-/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   ├── contact/           # Contact page
│   ├── faq/               # FAQ page
│   ├── mentors/           # Mentors page
│   ├── recruit/           # Recruitment page
│   ├── sponsors/          # Sponsors page
│   ├── team/              # Team page
│   ├── timeline/          # Timeline page
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
├── components/            # Reusable components
│   ├── ui/               # UI components (shadcn/ui)
│   ├── navigation.tsx    # Navigation component
│   ├── footer.tsx        # Footer component
│   └── ...               # Other components
├── data/                 # Static data
│   └── mentors.ts        # Mentors data
├── lib/                  # Utility functions
│   ├── utils.ts          # Common utilities
│   ├── animations.ts     # Animation configurations
│   └── supabaseClient.ts # Supabase client
├── public/               # Static assets
│   ├── images/          # Image assets
│   └── ...              # Other static files
└── styles/              # Additional styles
```

## 🎨 Design System

### **Color Palette**
- **Primary**: Blue gradient (`#3b82f6` to `#06b6d4`)
- **Secondary**: Purple accent (`#8b5cf6`)
- **Background**: Dark theme with gray gradients
- **Text**: White and gray variations for hierarchy

### **Typography**
- **Headings**: Bold, gradient text with responsive sizing
- **Body**: Clean, readable fonts with proper line heights
- **Code**: Monospace fonts for technical content

### **Components**
- **Cards**: Rounded corners, subtle shadows, hover effects
- **Buttons**: Gradient backgrounds, smooth transitions
- **Forms**: Clean inputs with validation states
- **Navigation**: Responsive, accessible menu system

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks

# Performance
npm run analyze      # Analyze bundle size
npm run lighthouse   # Run Lighthouse audit
npm run perf         # Build and run performance audit
```

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### **Ways to Contribute**
1. **Bug Reports**: Report issues and bugs
2. **Feature Requests**: Suggest new features
3. **Code Contributions**: Submit pull requests
4. **Documentation**: Improve documentation
5. **Design**: Help with UI/UX improvements

### **Contribution Guidelines**
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### **Code Standards**
- Follow TypeScript best practices
- Use Prettier for code formatting
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📊 Performance Metrics

- **Lighthouse Score**: 90+ across majority categories
- **First Contentful Paint**: < 0.2s
- **Largest Contentful Paint**: < 1.3s
- **Cumulative Layout Shift**: < 0
- **Time to Interactive**: < 3.5s

## 🌐 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📱 Responsive Design

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+
- **Large Desktop**: 1440px+

## 🔒 Security

- **Environment Variables**: Sensitive data stored securely
- **Input Validation**: All forms validated on client and server
- **HTTPS**: Secure connections enforced
- **Dependencies**: Regularly updated for security patches

## 📈 Analytics

- **Vercel Analytics**: Performance and usage metrics
- **User Interactions**: Tracked for UX improvements
- **Error Monitoring**: Real-time error tracking

## 🎯 Roadmap

### **Phase 1** ✅
- [x] Core website development
- [x] Team and mentor pages
- [x] Application form
- [x] Responsive design

### **Phase 2** 🚧
- [ ] User authentication system
- [ ] Mentor-mentee matching
- [ ] Project management dashboard
- [ ] Real-time notifications

### **Phase 3** 📋
- [ ] Mobile app development
- [ ] Advanced analytics
- [ ] Community forums
- [ ] Learning management system

## 📞 Contact & Support

- **Website**: [Y-SoC Official](https://ysoc.in)
- **Email**: team@ysoc.in
- **GitHub**: [ysoc-team/Y-SoC-final-](https://github.com/ysoc-team/Y-SoC-final-)
- **Issues**: [GitHub Issues](https://github.com/ysoc-team/Y-SoC-final-/issues)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Mentors**: Our amazing mentors from top tech companies
- **Contributors**: All community members who contribute
- **Sponsors**: ETHIndia and Devfolio for their support
- **Open Source**: Thanks to all the open-source libraries we use

---

<div align="center">

**Made with ❤️ by the Y-SoC Team**

*Empowering the next generation of developers through open source collaboration*

</div>
