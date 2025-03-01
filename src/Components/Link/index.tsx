import React from 'react'
import Link from 'next/link';

import { LinkType } from '../../Types/components';
import { getLinkBehavior } from "../../helper/link";

const NextLink = (props: LinkType) => {
    const {
        className,
        href,
        children,
        submit,
        type = "button",
        onClick = () => { },
        ariaLabel,
    } = props;

    if (submit) {
        return (
            <button type='submit' className={className} aria-label={ariaLabel}>
                {children}
            </button>
        )
    }

    if (href) {
        return (
            <Link
                href={href}
                referrerPolicy="no-referrer"
                target={getLinkBehavior(href)}
                className={className}
                aria-label={ariaLabel}
            >
                {children}
            </Link>
        )
    }

    return (
        <button type={type} onClick={onClick} className={className} aria-label={ariaLabel}>
            {children}
        </button>
    )
}

export default NextLink;