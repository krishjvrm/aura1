
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import TemplateCard from '../components/TemplateCard';
import { TEMPLATES } from '../constants';

const EditorCard: React.FC<{ editor: 'VN' | 'CapCut'; icon: React.ReactNode; description: string }> = ({ editor, icon, description }) => (
    <Link to={`/category/${editor}`} className="group block bg-dark-secondary rounded-xl p-8 transition-all duration-300 hover:bg-dark-tertiary hover:shadow-2xl hover:shadow-brand-purple/20 hover:-translate-y-2">
        <div className="flex items-center justify-center h-16 w-16 bg-dark-tertiary rounded-lg mb-6 group-hover:bg-brand-purple transition-colors duration-300">
            {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">{editor} Video Editor</h3>
        <p className="text-gray-400">{description}</p>
        <div className="mt-6 text-brand-purple font-semibold group-hover:text-white transition-colors duration-300">
            Browse Templates &rarr;
        </div>
    </Link>
);


const HomePage: React.FC = () => {
    const featuredTemplates = TEMPLATES.slice(0, 8);

    return (
        <>
            {/* Hero Section */}
            <section className="py-20 sm:py-32 bg-grid-pattern">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tighter">
                        Find Your Creative <span className="text-brand-purple">Aura</span>
                    </h1>
                    <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
                        Free, high-quality video templates for VN, CapCut, and more. Updated weekly.
                    </p>
                    <div className="mt-10">
                        <Button to="/category/VN" size="lg">Browse All Templates</Button>
                    </div>
                </div>
            </section>
            
            {/* Choose Editor Section */}
            <section className="py-16 sm:py-24">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Choose Your Editor</h2>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <EditorCard 
                            editor="VN"
                            description="Powerful and intuitive templates for the versatile VN editor."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
                            }
                        />
                        <EditorCard 
                            editor="CapCut"
                            description="Trending effects and transitions for the popular CapCut app."
                            icon={
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-purple group-hover:text-white transition-colors duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
                            }
                        />
                    </div>
                </div>
            </section>

            {/* Featured Templates Section */}
            <section className="py-16 sm:py-24 bg-dark-secondary">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">Trending Now</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {featuredTemplates.map((template) => (
                            <TemplateCard key={template.id} template={template} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;
