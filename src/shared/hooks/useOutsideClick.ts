import { MouseEventHandler, RefObject, useEffect } from 'react';

export const useOutsideClick = (
    ref: RefObject<HTMLDivElement>,
    callback: () => void | (MouseEventHandler<HTMLElement> | undefined),
) => {
    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (ref.current && !ref.current.contains(event.target as Node)) {
                callback();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [callback]);
};
