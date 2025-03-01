"use client";

import React from 'react';

import { RotatingLines } from 'react-loader-spinner';

import style from "./style.module.css";

const Spinner = ({ color = "var(--midnight-grey", size = "25", className = "" }) => {
    return (
        <div className={`${style.spinnerWrapper}${className ? ` ${className}` : ""}`}>
            <RotatingLines
                width={size}
                strokeColor={color}
                strokeWidth="4"
                animationDuration="0.75"
                ariaLabel="rotating-lines-loading"
            />
        </div>
    )
}

export default Spinner;