import React, { FC, useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';

import sidebarModel from '@entities/sidebar/model';

import { Header } from '@widgets/header';
import { Sidebar } from '@entities/sidebar/ui';
import { BaseButton, RoleToggle, UserRoleCard } from '@shared/ui';

import './SearchUsers.scss';

export const SearchUsers: FC = observer(() => {
    const [value, setValue] = useState<string>('photograph');

    const handleChangeActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleChangeFilters = () => {
        sidebarModel.getUsersByRole(value);
    };

    useEffect(() => {
        sidebarModel.getUsersByRole(value);
    }, [value]);

    return (
        <div className='flexable-column search-users__container'>
            <Header />
            <div className='background-style application__container background-style search-user__content'>
                <div className='flexable-row search-user__content_roles'>
                    <RoleToggle
                        value={value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                            handleChangeActive(e);
                            handleChangeFilters();
                        }}
                    />
                </div>
                <div className='search-user__content_search'>
                    <Sidebar onChange={handleChangeFilters} />
                    <div className='search-user__search_result'>
                        {sidebarModel.data.map((user, index) => (
                            <UserRoleCard key={index} user={user} />
                        ))}
                    </div>
                </div>
                <div className='search-user__content_show'>
                    <BaseButton btnText='Смотреть еще' isPurple={true} />
                </div>
            </div>
        </div>
    );
});
