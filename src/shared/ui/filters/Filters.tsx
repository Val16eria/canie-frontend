import React, { FC } from 'react';

import { BaseCheckbox } from '../base-checkbox';

import './Filters.scss';

export const Filters: FC = () => {
    return (
        <div className='flexable-column opacity-background filters__container'>
            <p className='text-medium text-small-size'>Фильтры:</p>
            <div className='flexable-column filters__container_price'>
                <p className='text-medium text-small-size'>Цены за час</p>
                <input type='range' min='100' max='35000' />
                <div className='flexable-row filters__price_count'>
                    <button>min</button>
                    <button>max</button>
                </div>
            </div>
            <div className='flexable-column filters__container_checkboxes'>
                <p>Виды фотосъемок:</p>
                <BaseCheckbox value='wedding' label='Свадебная' />
                <BaseCheckbox value='love_story' label='Love Story' />
                <BaseCheckbox value='family' label='Семейная' />
                <BaseCheckbox value='pets' label='Питомцы' />
                <BaseCheckbox value='reportage' label='Репортажная' />
                <BaseCheckbox value='Модельные тесты' label='model_tests' />
                <BaseCheckbox value='tfp' label='TFP' />
            </div>
        </div>
    );
};
