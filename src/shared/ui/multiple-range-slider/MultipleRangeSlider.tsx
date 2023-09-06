import React, {
    ChangeEvent,
    FC,
    useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { observer } from 'mobx-react-lite';

import { TRoleTypes, useSearchUsers } from '@features/search-users';
import sidebarModel from '@entities/sidebar/model';

import './MultipleRangeSlider.scss';

interface IMultipleRangeSlider {
    minMultipleValue: number;
    maxMultipleValue: number;
    getUsersByRole: (role: TRoleTypes) => void;
}

export const MultipleRangeSlider: FC<IMultipleRangeSlider> = observer(
    ({ minMultipleValue, maxMultipleValue, getUsersByRole }) => {
        const [role] = useSearchUsers();

        const [minValue, setMinValue] = useState<number>(minMultipleValue);
        const [maxValue, setMaxValue] = useState<number>(maxMultipleValue);

        const minValueRef = useRef<HTMLInputElement>(null);
        const maxValueRef = useRef<HTMLInputElement>(null);
        const rangeRef = useRef<HTMLDivElement>(null);

        const handleChangeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
            const value = Math.min(+e.target.value, maxValue - 1);
            setMinValue(value);
            e.target.value = value.toString();
        };

        const handleChangeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
            const value = Math.max(+e.target.value, minValue + 1);
            setMaxValue(value);
            e.target.value = value.toString();
        };

        const getPercent = useCallback(
            (value: any) =>
                Math.round(
                    ((value - minMultipleValue) /
                        (maxMultipleValue - minMultipleValue)) *
                        100,
                ),
            [minMultipleValue, maxMultipleValue],
        );

        useEffect(() => {
            if (maxValueRef.current) {
                const minPercent = getPercent(minValue);
                const maxPercent = getPercent(+maxValueRef.current.value);

                if (rangeRef.current) {
                    rangeRef.current.style.left = `${minPercent}%`;
                    rangeRef.current.style.width = `${
                        maxPercent - minPercent
                    }%`;
                }
            }
            sidebarModel.handleChangePrice([minValue, maxValue]);
            getUsersByRole(role);
        }, [minValue, getPercent]);

        useEffect(() => {
            if (minValueRef.current) {
                const minPercent = getPercent(+minValueRef.current.value);
                const maxPercent = getPercent(maxValue);

                if (rangeRef.current) {
                    rangeRef.current.style.width = `${
                        maxPercent - minPercent
                    }%`;
                }
            }
            sidebarModel.handleChangePrice([minValue, maxValue]);
            getUsersByRole(role);
        }, [maxValue, getPercent]);

        return (
            <div className='slider__container'>
                <input
                    className={`thumb ${
                        minValue > maxMultipleValue - 100
                            ? 'slider__container_thumb--zindex-5'
                            : 'slider__container_thumb--zindex-3'
                    }`}
                    type='range'
                    min={minMultipleValue}
                    max={maxMultipleValue}
                    step={100}
                    value={minValue}
                    ref={minValueRef}
                    onChange={handleChangeMinValue}
                />
                <input
                    className='thumb slider__container_thumb--zindex-4'
                    type='range'
                    min={minMultipleValue}
                    max={maxMultipleValue}
                    step={100}
                    value={maxValue}
                    ref={maxValueRef}
                    onChange={handleChangeMaxValue}
                />
                <div className='flexable-column slider__container_progress'>
                    <div>
                        <div className='slider__progress_track' />
                        <div
                            className='slider__progress_range'
                            ref={rangeRef}
                        />
                    </div>

                    <div className='flexable-row slider__progress_counts'>
                        <span className='slider__counts_count'>{minValue}</span>
                        <span className='slider__counts_count'>{maxValue}</span>
                    </div>
                </div>
            </div>
        );
    },
);
