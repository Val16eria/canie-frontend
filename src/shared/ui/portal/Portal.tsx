import { FC, useState, useEffect, PropsWithChildren } from 'react';
import ReactDOM from 'react-dom';

interface IPortal {}

export const Portal: FC<PropsWithChildren<IPortal>> = ({ children }) => {
    const [container] = useState(() => document.createElement('div'));

    useEffect(() => {
        document.body.appendChild(container);
        return () => {
            document.body.removeChild(container);
        };
    }, []);

    return ReactDOM.createPortal(children, container);
};
