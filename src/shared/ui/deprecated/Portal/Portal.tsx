import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode;
    element?: HTMLElement;
}

/**
 * Устарел, использовать из папки redesigned
 * @deprecated
 */

export const Portal = ({ children, element = document.body }: PortalProps) =>
    createPortal(children, element);
