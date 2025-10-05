import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { ProfessionalPage } from './pages/ProfessionalPage';
import { FreelancePage } from './pages/FreelancePage';
import { CommunityPage } from './pages/CommunityPage';
import { GamingPage } from './pages/GamingPage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { AwardsPage } from './pages/AwardsPage';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/professionnel" element={<ProfessionalPage />} />
          <Route path="/freelance" element={<FreelancePage />} />
          <Route path="/communautaire" element={<CommunityPage />} />
          <Route path="/gaming" element={<GamingPage />} />
          <Route path="/prix-certifications" element={<AwardsPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<ArticlePage />} />
        </Routes>
      </Layout>
    </Router>
  );
}