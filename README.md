# WelNest 🏠

> Your Safe Space for Mental Wellness

WelNest is a culturally-sensitive mental health support platform designed specifically for international students from Asia, Africa, and Latin America. We provide a welcoming, stigma-free environment where students can access mental health resources tailored to their unique cultural backgrounds and experiences.

## ✨ Features

### For Students
- 🏠 **Welcome Experience**: Beautiful landing page with WelNest branding and introduction video
- 📚 **Cultural Resources**: Mental health content designed for diverse cultural backgrounds
  - Managing homesickness
  - Academic stress and cultural expectations
  - Building community in a new country
  - Understanding when to seek help
- 📝 **Feedback Survey**: Share your experience to help improve the platform
- 🔒 **Privacy First**: Comprehensive privacy policy ensuring university-blind support

### For Administrators
- 📊 **Analytics Dashboard**: Real-time survey response tracking
- 📈 **Success Metrics**: Track Cultural Fit Score (target: ≥4.0) and Trust Score (target: ≥4.0)
- 👥 **Demographics Insights**: Understand your user base
- 💬 **Qualitative Feedback**: Read detailed student responses

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/erictcarter/student-support-platform.git
cd student-support-platform
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
student-support-platform/
├── app/
│   ├── page.tsx                    # Landing page with WelNest branding
│   ├── layout.tsx                  # Root layout with navigation
│   ├── globals.css                 # Global styles
│   ├── survey/
│   │   ├── page.tsx                # Cultural Fit & Trust Assessment
│   │   └── thank-you/page.tsx      # Survey confirmation
│   ├── content/
│   │   └── page.tsx                # Mental health resources
│   ├── privacy/
│   │   └── page.tsx                # Privacy policy
│   ├── admin/
│   │   └── page.tsx                # Analytics dashboard
│   └── api/
│       └── survey/route.ts         # Survey API endpoint
├── components/
│   └── Logo.tsx                    # WelNest logo component
├── public/
│   └── intro-video.mp4             # Platform introduction video
├── data/
│   └── survey-responses.json       # Survey data storage
└── README.md                       # This file
```

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel
```

4. Follow the prompts to configure your deployment

### Method 2: Using Vercel Dashboard

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Configure build settings (auto-detected for Next.js)
6. Click "Deploy"

## Environment Variables

Currently, the application uses file-based storage for survey responses. For production, consider:

- Setting up Vercel Postgres, MongoDB, or another database
- Adding environment variables for database connection
- Implementing proper authentication for the admin dashboard

## Survey Features

The survey implements all questions from the MVP Testing Materials:

### Section A: Demographics
- Enrollment status
- Regional identification
- Previous counseling usage

### Section B: Cultural Fit Assessment
- 5-point Likert scale questions (CF1-CF5)
- Open-ended feedback (CF6)
- Sample culturally-sensitive content

### Section C: Trust Risk Assessment
- 5-point Likert scale questions (TR1-TR4)
- Privacy concerns (TR5)
- Policy improvement suggestions (TR6)
- Privacy policy summary

## Admin Dashboard

Access at `/admin` to view:
- Total responses count
- Average Cultural Fit Score (target: ≥4.0)
- Average Trust Score (target: ≥4.0)
- Demographics breakdown
- Individual response details

## 🛠️ Built With

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first styling
- **[React 19](https://react.dev/)** - UI library
- **File-based JSON** - Simple data storage (upgradable to database)

## 🎨 Design Philosophy

WelNest's design focuses on:
- **Warmth & Welcome**: Inviting colors and friendly language
- **Cultural Sensitivity**: Content that respects diverse backgrounds
- **Privacy & Trust**: Clear communication about data protection
- **Accessibility**: Responsive design for all devices

## 🔐 Privacy & Security

- ✅ University-blind architecture (schools cannot access individual data)
- ✅ End-to-end encryption for sensitive information
- ✅ FERPA, HIPAA, and GDPR compliant
- ✅ Transparent privacy policy
- ✅ User data rights (access, correction, deletion)

## 📊 Survey Methodology

The platform implements a comprehensive MVP testing framework:

**Section A: Demographics**
- Enrollment status (first-year, continuing, graduate)
- Regional identification (Asia, Africa, Latin America)
- Prior counseling usage

**Section B: Cultural Fit Assessment (CF1-CF6)**
- 5-point Likert scale questions measuring cultural relatability
- Open-ended feedback on content resonance
- Target Score: ≥4.0 average

**Section C: Trust Risk Assessment (TR1-TR6)**
- 5-point Likert scale questions measuring platform trust
- Privacy concerns and policy feedback
- Target Score: ≥4.0 average

## 🚀 Deployment

### GitHub Repository
```bash
# Push to GitHub
gh repo create student-support-platform --public --source=. --push
```

### Vercel Deployment (Recommended)

**Option 1: Vercel CLI**
```bash
npm install -g vercel
vercel login
vercel --prod
```

**Option 2: Vercel Dashboard**
1. Visit [vercel.com/new](https://vercel.com/new)
2. Import your GitHub repository
3. Click "Deploy" (auto-configured)

Your site will be live at: `https://student-support-platform.vercel.app`

## 🎯 Future Enhancements

- [ ] Database integration (PostgreSQL/MongoDB)
- [ ] User authentication system
- [ ] Real-time chat support
- [ ] Multilingual support
- [ ] Mobile app (React Native)
- [ ] AI-powered resource recommendations
- [ ] Integration with campus counseling services

## 📈 Success Metrics

- **Cultural Fit Score**: Measures how well content resonates with target audience
- **Trust Score**: Measures confidence in privacy and security
- **Response Rate**: Tracks survey participation
- **Demographic Reach**: Ensures diverse representation

## 🤝 Contributing

This is an MVP for research purposes. For questions or collaboration opportunities, please open an issue or contact the team.

## 📄 License

This project is for educational and research purposes.

## 💙 Acknowledgments

Created with care for international students navigating mental health challenges in unfamiliar environments. WelNest represents a commitment to culturally-sensitive, accessible mental health support.

---

**WelNest** - Your Safe Space for Mental Wellness 🏠
