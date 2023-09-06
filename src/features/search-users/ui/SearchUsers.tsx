import React, { FC, ChangeEvent } from 'react';
import { observer } from 'mobx-react-lite';

import sidebarModel from '@entities/sidebar/model';

import { TRoleTypes } from '../lib';
import { useSearchUsers } from '../model';

import { Sidebar } from '@entities/sidebar/ui';
import { BaseButton, Loader, RoleToggle, UserRoleCard } from '@shared/ui';

import './SearchUsers.scss';

export const SearchUsers: FC = observer(() => {
    const [role, changeRole] = useSearchUsers();

    const getUsersByRole = (role: TRoleTypes) => {
        sidebarModel.getUsersByRole(role);
    };

    const handleChangeActive = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        changeRole(value as TRoleTypes);
        getUsersByRole(value as TRoleTypes);
    };

    const handleChangeLimitUsers = () => {
        sidebarModel.handleChangeLimit();
        getUsersByRole(role);
    };
    return (
        <div className='background-style application__container background-style search-user__container'>
            <div className='flexable-row search-user__roles'>
                <RoleToggle role={role} onChange={handleChangeActive} />
                {sidebarModel.loading && <Loader />}
            </div>
            <div className='search-user__search'>
                <Sidebar getUsersByRole={getUsersByRole} />
                <div className='search-user__search_result'>
                    {sidebarModel.data.length ? (
                        <>
                            {sidebarModel.data.map((user) => (
                                <UserRoleCard key={user.id} user={user} />
                            ))}
                        </>
                    ) : (
                        <p>Совпадений не найдено</p>
                    )}
                </div>
            </div>
            <div className='search-user__show'>
                <BaseButton
                    btnText='Смотреть еще'
                    isPurple={true}
                    onClick={handleChangeLimitUsers}
                />
            </div>
        </div>
    );
});
