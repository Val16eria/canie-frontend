import React, { FC } from 'react';
import { observer } from 'mobx-react-lite';

import sidebarModel from '../model/sidebarModel';

import { MultipleRangeSlider, BaseCheckbox } from '@shared/ui';

import './Sidebar.scss';

interface ISidebar {
    onChange: () => void;
}

export const Sidebar: FC<ISidebar> = observer(({ onChange }) => {
    const handleSetTypeOfPhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
        sidebarModel.handleChangeTypesOfPhotos(e);
        onChange();
    };

    return (
        <div className='flexable-column opacity-background sidebar__container'>
            <p className='text-medium text-small-size'>Фильтры:</p>
            <p className='text-medium text-small-size'>Цены за час:</p>
            <MultipleRangeSlider min={100} max={35000} onChange={onChange} />
            <div className='flexable-column sidebar__container_checkboxes'>
                <p>Виды фотосъемок:</p>
                <BaseCheckbox
                    value='wedding'
                    label='Свадебная'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
                <BaseCheckbox
                    value='love_story'
                    label='Love Story'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
                <BaseCheckbox
                    value='family'
                    label='Семейная'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
                <BaseCheckbox
                    value='pets'
                    label='Питомцы'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
                <BaseCheckbox
                    value='reportage'
                    label='Репортажная'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
                <BaseCheckbox
                    value='model_tests'
                    label='Модельные тесты'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
                <BaseCheckbox
                    value='tfp'
                    label='TFP'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        handleSetTypeOfPhotos(e)
                    }
                />
            </div>
        </div>
    );
});
