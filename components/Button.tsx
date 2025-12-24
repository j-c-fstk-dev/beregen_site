import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  href, 
  children, 
  className = '',
  onClick,
  ...props 
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regen-highlight active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-regen-dark text-white shadow-lg shadow-regen-dark/20 hover:bg-regen-forest hover:shadow-xl hover:-translate-y-0.5 border border-transparent",
    accent: "bg-regen-accent text-white shadow-lg shadow-regen-accent/20 hover:bg-teal-700 hover:shadow-xl hover:-translate-y-0.5 border border-transparent",
    secondary: "bg-regen-sage text-regen-dark hover:bg-teal-200 shadow-md border border-transparent",
    outline: "bg-transparent border-2 border-current text-regen-dark hover:bg-regen-dark hover:text-white hover:border-regen-dark",
    ghost: "bg-transparent text-regen-dark hover:bg-regen-dark/5",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    if (onClick) onClick(e as any);

    if (href) {
      if (href.startsWith('/')) {
        e.preventDefault();
        
        // Handle hash anchors (e.g., /#about)
        if (href.includes('#')) {
          const [path, hash] = href.split('#');
          // If we are already on the path (usually '/'), just scroll
          if (location.pathname === path || (path === '/' && location.pathname === '/')) {
             const element = document.getElementById(hash);
             element?.scrollIntoView({ behavior: 'smooth' });
          } else {
             // Navigate to path with state to trigger scroll after render
             navigate(path, { state: { targetId: hash } });
          }
        } else {
          // Standard internal navigation
          navigate(href);
        }
      } 
      // External links are handled by the default <a> behavior or window.open if needed, 
      // but here we just let the button/anchor fall through if we wanted, 
      // however for semantic correctness we use <a> for external in the return below.
    }
  };

  if (href && !href.startsWith('/')) {
    return (
      <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  // Render as button but handle navigation programmatically for internal links
  return (
    <button className={combinedClasses} onClick={handleClick} {...props}>
      {children}
    </button>
  );
};

export default Button;