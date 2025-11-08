"use client";
import React, { forwardRef, ReactElement, ReactNode, Ref, useRef } from "react";
import styles from "./index.module.css";
import Button, { ButtonProps } from "@mui/material/Button";
import clsx from "clsx";

// export interface ButtonProps
//   extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//
// }

export interface BasicButtonProps extends ButtonProps {
  size?: "small" | "medium" | "large";
  ref?: Ref<HTMLButtonElement>;
}

const BasicButton = ({ size = "medium", ...rest }: BasicButtonProps) => {
  return (
    <Button
      ref={rest.ref}
      className={clsx(styles.button, rest.className)}
      {...rest}
    >
      Test
    </Button>
  );
};

export default BasicButton;
