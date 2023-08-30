import React, { FC } from 'react';

import { BaseCheckbox } from '../base-checkbox';
import { MultipleRangeSlider } from '../multiple-range-slider';

import './Filters.scss';

interface IFilters {
    role: string;
}

export const Filters: FC<IFilters> = ({ role }) => {
    const handleChangeFilters = () => {
        console.log('hey  hey');
        if (role === 'photograph') {
            console.log('get photographs');
            // get all photographs
        }
        if (role === 'model') {
            console.log('get models');
            // get all models
        }
    };

    return (
        <div className='flexable-column opacity-background filters__container'>
            <p className='text-medium text-small-size'>Фильтры:</p>
            <p className='text-medium text-small-size'>Цены за час:</p>
            <MultipleRangeSlider
                min={100}
                max={35000}
                onChange={handleChangeFilters}
            />
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
