"use client";

import React from 'react';

import { ButtonType } from '../../Types/components';
import Spinner from '../Spinner';
import NextLink from '../Link';

import style from "./style.module.css";

const Button = (props: ButtonType) => {
    const { className, variant, label, href, fetching, disabled, type = "button", ariaLabel, onClick, submit } = props;

    const getBtnVariant = () => {
        if (variant === "defaultOutline") {
            return style.defaultOutline;
        }

        return style.default;
    };

    if (fetching) {
        return (
            <div className={`${getBtnVariant()} ${style.fetching}${className ? ` ${className}` : ""}`}>
                <Spinner />
            </div>
        )
    }

    if (disabled) {
        return (
            <div className={`${getBtnVariant()} ${style.disabled}${className ? ` ${className}` : ""}`} aria-label="Disabled Button">
                {label}
            </div>
        )
    }

    if (href) {
        return (
            <NextLink href={href} className={`${style.btn} ${getBtnVariant()}${className ? ` ${className}` : ""}`} ariaLabel={ariaLabel}>
                {label}
            </NextLink>
        )
    }

    if (submit) {
        return (
            <NextLink submit={true} className={`${style.btn} ${getBtnVariant()}${className ? ` ${className}` : ""}`} ariaLabel={ariaLabel}>
                {label}
            </NextLink>
        )
    }

    return (
        <NextLink type={type} className={`${style.btn} ${getBtnVariant()}${className ? ` ${className}` : ""}`} onClick={onClick} ariaLabel={ariaLabel}>
            {label}
        </NextLink>
    )
}

export default Button;