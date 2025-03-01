import React from "react";

export type LinkType = {
    href?: string;
    type?: "button" | "submit" | "reset" | undefined;
    onClick?: () => never;
    submit?: boolean;
    ariaLabel?: string;
    children: React.ReactNode;
    className?: any;
}

export type ButtonType = {
    className?: any; 
    variant?: any; 
    label?: string; 
    href?: string; 
    fetching?: boolean; 
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    ariaLabel?: string;
    onClick?: () => never;
    submit?: boolean;
}