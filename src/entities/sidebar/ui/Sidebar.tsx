import React, { ChangeEvent, FC } from 'react';
import { observer } from 'mobx-react-lite';

import sidebarModel from '../model/sidebarModel';

import { TTypesOfPhotos } from '../lib';

import { TRoleTypes, useSearchUsers } from '@features/search-users';
import { MultipleRangeSlider, BaseCheckbox } from '@shared/ui';

import './Sidebar.scss';

interface ISidebar {
    getUsersByRole: (role: TRoleTypes) => void;
}

export const Sidebar: FC<ISidebar> = observer(({ getUsersByRole }) => {
    const [role] = useSearchUsers();

    const handleSetTypeOfPhotos = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        sidebarModel.handleChangeTypesOfPhotos(
            value as TTypesOfPhotos,
            checked,
        );
        getUsersByRole(role);
    };

    return (
        <div className='flexable-column opacity-background sidebar__container'>
            <p className='text-medium text-small-size'>Фильтры:</p>
            <p className='text-medium text-small-size'>Цены за час:</p>
            <MultipleRangeSlider
                minMultipleValue={100}
                maxMultipleValue={35000}
                getUsersByRole={getUsersByRole}
            />
            <div className='flexable-column sidebar__container_checkboxes'>
                <p>Виды фотосъемок:</p>
                <BaseCheckbox
                    value='wedding'
                    label='Свадебная'
                    onChange={handleSetTypeOfPhotos}
                />
                <BaseCheckbox
                    value='love_story'
                    label='Love Story'
                    onChange={handleSetTypeOfPhotos}
                />
                <BaseCheckbox
                    value='family'
                    label='Семейная'
                    onChange={handleSetTypeOfPhotos}
                />
                <BaseCheckbox
                    value='pets'
                    label='Питомцы'
                    onChange={handleSetTypeOfPhotos}
                />
                <BaseCheckbox
                    value='reportage'
                    label='Репортажная'
                    onChange={handleSetTypeOfPhotos}
                />
                <BaseCheckbox
                    value='model_tests'
                    label='Модельные тесты'
                    onChange={handleSetTypeOfPhotos}
                />
                <BaseCheckbox
                    value='tfp'
                    label='TFP'
                    onChange={handleSetTypeOfPhotos}
                />
            </div>
        </div>
    );
});
