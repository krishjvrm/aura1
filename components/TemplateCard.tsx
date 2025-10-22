
import React from 'react';
import { Link } from 'react-router-dom';
import { Template } from '../types';
import Button from './Button';

interface TemplateCardProps {
  template: Template;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ template }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg bg-dark-secondary shadow-lg transition-all duration-300 hover:shadow-brand-purple/20 hover:scale-105">
      <Link to={`/template/${template.id}`} className="block">
        <img src={template.imageUrl} alt={template.title} className="w-full h-auto object-cover aspect-[3/4]" loading="lazy"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <h3 className="text-white font-bold text-lg leading-tight truncate">{template.title}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${template.editor === 'VN' ? 'bg-green-600/20 text-green-300' : 'bg-blue-600/20 text-blue-300'}`}>
              {template.editor}
            </span>
            {template.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-xs font-semibold bg-dark-tertiary/50 text-gray-300 px-2 py-1 rounded-full">{tag}</span>
            ))}
          </div>
        </div>
      </Link>
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button to={`/template/${template.id}`} size="sm">Get Template</Button>
      </div>
    </div>
  );
};

export default TemplateCard;
