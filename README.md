# Prompt Queue - Social Media Post Scheduler

## 🚀 Hosted on Netlify: [https://prompt-queue.netlify.app](https://prompt-queue.netlify.app)

## 📝 Features

- **Post Scheduling**: Create and schedule posts for future publication
- **Real-time Timeline**: Visual timeline showing scheduled posts
- **Live Timer**: Real-time countdown to next scheduled post
- **Responsive Design**: Works seamlessly on desktop and mobile devices

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS
- **State Management**: Redux Toolkit
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Date Handling**: React DatePicker

## 📦 Prerequisites

- **Node.js**: v18.17.0 or higher (recommended: v23.6.0)
- **npm**: v8.0.0 or higher (recommended: v10.9.2)

You can check your current versions with:

```bash
node --version
npm --version
```

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd prompt-queue
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── hooks/              # Custom React hooks
├── pages/              # Page components
├── redux/              # State management
├── types/              # TypeScript type definitions
└── test/               # Test setup files
```

## 🔮 Future Improvements & Additional Features

- **User Authentication**: Login/signup system
- **Persist Data**: Use Local storage to persistent over refresh
- **Dark Mode**: Toggle between light and dark themes
- **Database Integration**: Persistent storage for posts
- **Post Templates**: Pre-defined templates for different content types
- **Post Categories**: Organize posts by topics or campaigns
- **Draft System**: Save posts as drafts before scheduling
- **Post Preview**: Preview how posts will look
- **Content Suggestions**: AI-powered content recommendations

## 🎯 Usage

1. **Create a Post**: Use the form on the left side to write your post content
2. **Schedule Time**: Pick a future date and time for your post
3. **View Timeline**: See all your scheduled posts on the timeline
4. **Real-time Updates**: Watch the timer countdown to your next post

## 🧪 Testing

Run the test suite:

```bash
npm test
```

Run tests in watch mode:

```bash
npm run test:watch
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking
