import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { SkeletonLoader } from './components/ui/Skeleton';
import { awards, certifications, teaching } from './data/content';
import { setDocumentMeta } from './utils/seo';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Research } from './pages/Research';
import { Projects } from './pages/Projects';
import { Publications } from './pages/Publications';
import { Experience } from './pages/Experience';
import { Education } from './pages/Education';
import { SimpleListPage } from './pages/SimpleListPage';
import { Skills } from './pages/Skills';
import { CV } from './pages/CV';
import { Contact } from './pages/Contact';
import { Legal } from './pages/Legal';
import { NotFound } from './pages/NotFound';

const Blog = lazy(() => import('./pages/Blog').then((module) => ({ default: module.Blog })));
const Gallery = lazy(() => import('./pages/Gallery').then((module) => ({ default: module.Gallery })));
const Downloads = lazy(() => import('./pages/Downloads').then((module) => ({ default: module.Downloads })));
const Resources = lazy(() => import('./pages/Resources').then((module) => ({ default: module.Resources })));

const meta: Record<string, { title: string; description: string }> = {
  '/': { title: 'Home', description: 'Academic portfolio for a researcher, data analyst, and future PhD candidate.' },
  '/about': { title: 'About', description: 'Biography and research philosophy.' },
  '/research': { title: 'Research', description: 'Research themes, methods, datasets, and impact.' },
  '/projects': { title: 'Projects', description: 'Research software and data products.' },
  '/publications': { title: 'Publications', description: 'Academic publications and working papers.' },
  '/contact': { title: 'Contact', description: 'Contact form and professional information.' }
};

function MetaManager() {
  const location = useLocation();
  useEffect(() => {
    const data = meta[location.pathname] ?? { title: 'Academic Portfolio', description: 'Modern academic portfolio website.' };
    setDocumentMeta(data.title, data.description, location.pathname);
  }, [location.pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <MetaManager />
      <Suspense fallback={<div className="px-4 pt-32"><SkeletonLoader /></div>}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="research" element={<Research />} />
            <Route path="projects" element={<Projects />} />
            <Route path="publications" element={<Publications />} />
            <Route path="experience" element={<Experience />} />
            <Route path="education" element={<Education />} />
            <Route path="awards" element={<SimpleListPage title="Awards" description="Honors, fellowships, prizes, scholarships, and academic recognition." items={awards} />} />
            <Route path="skills" element={<Skills />} />
            <Route path="teaching" element={<SimpleListPage title="Teaching" description="Courses, workshops, guest lectures, mentoring, and educational materials." items={teaching} />} />
            <Route path="certifications" element={<SimpleListPage title="Certifications" description="Professional certificates and research compliance credentials." items={certifications} />} />
            <Route path="blog" element={<Blog />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="resources" element={<Resources />} />
            <Route path="downloads" element={<Downloads />} />
            <Route path="cv" element={<CV />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Legal type="privacy" />} />
            <Route path="terms" element={<Legal type="terms" />} />
            <Route path="home" element={<Navigate to="/" replace />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
