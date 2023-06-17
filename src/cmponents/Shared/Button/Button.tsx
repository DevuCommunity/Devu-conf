import classNames from "classnames";
import "./Button.css";
import * as React from "react";

interface ButtonProps {
  children: React.ReactNode;
  handleClick?: any;
  borderColor?: "purple" | "radioactive";
  variant?: "bordered" | "hoverable"
}

export const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  borderColor = "purple",
  variant = "hoverable"
}) => {
  const isPurple = borderColor === "purple";
  const isRadioactive = borderColor === "radioactive";
  const isBordered = variant === "bordered";

  const className = classNames({
    "btn fredoka": true,
    'btn-border-purple': isPurple,
    'btn-border-radiactive': isRadioactive,
    'btn-bordered-purple': isBordered && isPurple,
    'btn-bordered-radiactive': isBordered && isRadioactive,
  })

  return (
    <button
      className={className}
      onClick={handleClick}>
      {children}
    </button>
  )
}
