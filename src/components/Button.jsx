import React, { useState } from 'react';
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white }) => {
  const [isHovered, setIsHovered] = useState(false);

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors ${
    isHovered ? 'hover:text-color-1' : ''
  } ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      {isHovered && <div className="gradient absolute inset-0 rounded transition-all animate-spin-slow pointer-events-none"></div>} {/* Dodaj gradient wewnątrz przycisku i zastosuj animację obracania się */}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
      {isHovered && <div className="gradient absolute inset-0 rounded transition-all animate-spin-slow pointer-events-none"></div>} {/* Dodaj gradient wewnątrz przycisku i zastosuj animację obracania się */}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
