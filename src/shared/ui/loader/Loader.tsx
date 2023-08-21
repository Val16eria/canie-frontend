import React, { FC } from 'react';

import Loading from '@assets/icons/loader.svg';
import './Loader.scss';

export const Loader: FC = () => <img src={Loading} alt='loading' />;
