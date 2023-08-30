import React, { FC, useState } from 'react';
import { observer } from 'mobx-react-lite';

import { Header } from '@widgets/header';
import { BaseButton, Filters, RoleToggle } from '@shared/ui';

import './SearchUsers.scss';

export const SearchUsers: FC = observer(() => {
    const [value, setValue] = useState<string>('photograph');

    const handleChangeActive = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    return (
        <div className='flexable-column application__container search-users__container'>
            <Header />
            <div className='flexable-column search-user__content'>
                <div className='flexable-row search-user__content_roles'>
                    <RoleToggle
                        value={value}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            handleChangeActive(e)
                        }
                    />
                </div>
                <div className='flexable-row search-user__content_search'>
                    <Filters role={value} />
                    <div className='result'>
                        <p>результат поиска</p>
                    </div>
                </div>
                <div className='search-user__content_show'>
                    <BaseButton btnText='Смотреть еще' isPurple={true} />
                </div>
            </div>
        </div>
    );
});
