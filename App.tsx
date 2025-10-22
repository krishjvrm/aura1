
import React from 'react';
import { HashRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import TemplateDetailPage from './pages/TemplateDetailPage';
import Header from './components/Header';
import Footer from './components/Footer';

const Layout: React.FC = () => {
    const location = useLocation();

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/category/:editor" element={<CategoryPage />} />
          <Route path="/template/:id" element={<TemplateDetailPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
