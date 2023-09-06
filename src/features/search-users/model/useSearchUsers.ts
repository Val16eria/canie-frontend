import { useState } from 'react';

import { TRoleTypes } from '../lib';

export const useSearchUsers = (): [TRoleTypes, (role: TRoleTypes) => void] => {
    const [role, setRole] = useState<TRoleTypes>('photograph');

    const changeRole = (role: TRoleTypes) => {
        setRole(role);
    };

    return [role, changeRole];
};
