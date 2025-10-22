
import React, { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TEMPLATES } from '../constants';
import TemplateCard from '../components/TemplateCard';
import Button from '../components/Button';

const TemplateDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const template = useMemo(() => TEMPLATES.find(t => t.id === id), [id]);

    const relatedTemplates = useMemo(() => {
        if (!template) return [];
        return TEMPLATES.filter(t => t.editor === template.editor && t.id !== template.id).slice(0, 4);
    }, [template]);

    if (!template) {
        return (
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl font-bold text-white">Template Not Found</h1>
                <p className="mt-4 text-gray-400">Sorry, we couldn't find the template you're looking for.</p>
                <div className="mt-8">
                    <Button to="/">Back to Home</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2">
                    {/* Video Preview */}
                    <div className="aspect-w-16 aspect-h-9 bg-dark-secondary rounded-lg overflow-hidden shadow-lg">
                        <iframe 
                            src={template.videoUrl} 
                            title={template.title} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full"
                        ></iframe>
                    </div>
                </div>

                <div className="lg:col-span-1">
                    {/* Template Details & Actions */}
                    <div className="bg-dark-secondary p-6 rounded-lg shadow-lg">
                        <Link to={`/category/${template.editor}`} className={`inline-block text-sm font-semibold px-3 py-1 mb-4 rounded-full ${template.editor === 'VN' ? 'bg-green-600/20 text-green-300' : 'bg-blue-600/20 text-blue-300'}`}>
                          {template.editor} TEMPLATE
                        </Link>
                        <h1 className="text-3xl font-extrabold text-white">{template.title}</h1>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {template.tags.map(tag => (
                                <span key={tag} className="text-xs font-semibold bg-dark-tertiary text-gray-300 px-2 py-1 rounded-full">{tag}</span>
                            ))}
                        </div>
                        <div className="mt-8">
                            <Button className="w-full text-center" size="lg">GET TEMPLATE</Button>
                        </div>
                        <div className="mt-8 pt-6 border-t border-dark-tertiary">
                            <h3 className="font-bold text-lg text-white mb-4">How to Use</h3>
                            <ol className="list-decimal list-inside space-y-3 text-gray-300">
                                <li>Open {template.editor} on your phone.</li>
                                <li>Scan the QR code to import the template.</li>
                                <li>Replace clips with your own media.</li>
                                <li>Export and share your video!</li>
                            </ol>
                            <div className="mt-6 flex justify-center">
                                <img src={template.qrCodeUrl} alt="QR Code" className="w-48 h-48 rounded-md border-4 border-dark-tertiary" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Templates Section */}
            {relatedTemplates.length > 0 && (
                <div className="mt-16 sm:mt-24">
                    <h2 className="text-3xl font-bold text-white mb-8">Related Templates</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                        {relatedTemplates.map(related => (
                            <TemplateCard key={related.id} template={related} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default TemplateDetailPage;
