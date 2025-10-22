
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { TEMPLATES } from '../constants';
import TemplateCard from '../components/TemplateCard';
import { Template } from '../types';

const CategoryPage: React.FC = () => {
    const { editor } = useParams<{ editor: 'VN' | 'CapCut' }>();

    const filteredTemplates = useMemo(() => {
        if (!editor) return [];
        return TEMPLATES.filter((template) => template.editor.toLowerCase() === editor.toLowerCase());
    }, [editor]);

    if (!editor || !['VN', 'CapCut'].includes(editor)) {
        return (
            <div className="text-center py-20">
                <h1 className="text-4xl font-bold">Category Not Found</h1>
                <p className="text-gray-400 mt-4">The editor you're looking for doesn't exist.</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-2">
                {editor} <span className="text-brand-purple">Templates</span>
            </h1>
            <p className="text-lg text-gray-400 mb-12">Browse all available templates for {editor}.</p>
            
            {filteredTemplates.length > 0 ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8">
                    {filteredTemplates.map((template: Template) => (
                        <TemplateCard key={template.id} template={template} />
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 bg-dark-secondary rounded-lg">
                    <p className="text-xl text-gray-300">No templates found for {editor} yet.</p>
                    <p className="text-gray-400 mt-2">Check back soon!</p>
                </div>
            )}
        </div>
    );
};

export default CategoryPage;
