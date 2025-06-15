
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  titleClassName?: string;
  contentClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, icon, className, titleClassName, contentClassName }) => {
  // Clone the icon to ensure it gets the standard cyan color if it's a custom component like BriefcaseIcon etc.
  // This assumes icons are designed to accept a className prop for styling.
  const themedIcon = icon && React.isValidElement(icon) ? 
    React.cloneElement(icon as React.ReactElement<any>, { 
      className: `${((icon.props as { className?: string }).className) || ''} text-cyan-400`.trim() 
    })
    : icon;


  return (
    <section id={id} className={`py-12 md:py-16 ${className || ''}`}>
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <div className="flex items-center mb-8">
          {themedIcon && <span className="mr-3">{themedIcon}</span>}
          <h2 className={`text-3xl font-bold text-purple-300 ${titleClassName || ''}`}>
            {title}
          </h2>
        </div>
        <div className={contentClassName || ''}>
            {children}
        </div>
      </div>
    </section>
  );
};

export default Section;
