# International Student Support Platform

A culturally-sensitive mental health support platform for international students from Asia, Africa, and Latin America.

## Features

- **Landing Page**: Overview of the platform and its mission
- **Survey Instrument**: Complete implementation of the Cultural Fit and Trust Risk Assessment
- **Content Resources**: Culturally-aware mental health support articles
- **Privacy Policy**: Comprehensive privacy policy addressing international student concerns
- **Admin Dashboard**: View and analyze survey responses with aggregate statistics

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd student-support-platform
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
student-support-platform/
├── app/
│   ├── page.tsx              # Landing page
│   ├── survey/
│   │   ├── page.tsx          # Survey form
│   │   └── thank-you/        # Survey confirmation
│   ├── content/
│   │   └── page.tsx          # Support resources
│   ├── privacy/
│   │   └── page.tsx          # Privacy policy
│   ├── admin/
│   │   └── page.tsx          # Admin dashboard
│   └── api/
│       └── survey/
│           └── route.ts      # Survey API endpoint
├── components/               # Reusable components
├── lib/                      # Utility functions
└── data/                     # Survey responses (JSON storage)
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

## Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- File-based JSON storage (can be upgraded to database)

## License

This project is for educational and research purposes.

## Contact

For questions or support, please contact the development team.
