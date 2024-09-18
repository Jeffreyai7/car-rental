import { Clm } from '@/app/lib/utils';
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
  }

const Button = ({ children, className, onClick, disabled }: ButtonProps) => {
    return (
      <>
        <button
          className={Clm(
            "block px-10  text-nowrap  text-[.9rem] rounded-[8px] hover:shadow-btn-hover transition-shadow ",
            className,
            disabled ? "hover:shadow-0" : ""
          )}
          onClick={onClick}
          disabled={disabled}
        >
          {children}
        </button>
      </>
    );
  };
  
  export default Button;
  