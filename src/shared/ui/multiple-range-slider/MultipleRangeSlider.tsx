import React, { FC, useCallback, useEffect, useRef, useState } from 'react';

import './MultipleRangeSlider.scss';

interface IMultipleRangeSlider {
    min: number;
    max: number;
    onChange: () => void;
}

export const MultipleRangeSlider: FC<IMultipleRangeSlider> = ({
    min,
    max,
    onChange,
}) => {
    const [minValue, setMinValue] = useState<number>(min);
    const [maxValue, setMaxValue] = useState<number>(max);

    const minValueRef = useRef<any>(null);
    const maxValueRef = useRef<any>(null);
    const rangeRef = useRef<any>(null);

    const handleChangeMinValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.min(+e.target.value, maxValue - 1);
        setMinValue(value);
        e.target.value = value.toString();
        onChange();
    };

    const handleChangeMaxValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(+e.target.value, minValue + 1);
        setMaxValue(value);
        e.target.value = value.toString();
        onChange();
    };

    const getPercent = useCallback(
        (value: any) => Math.round(((value - min) / (max - min)) * 100),
        [min, max],
    );

    useEffect(() => {
        if (maxValueRef.current) {
            const minPercent = getPercent(minValue);
            const maxPercent = getPercent(+maxValueRef.current.value);

            if (rangeRef.current) {
                rangeRef.current.style.left = `${minPercent}%`;
                rangeRef.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minValue, getPercent]);

    useEffect(() => {
        if (minValueRef.current) {
            const minPercent = getPercent(+minValueRef.current.value);
            const maxPercent = getPercent(maxValue);

            if (rangeRef.current) {
                rangeRef.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxValue, getPercent]);

    return (
        <div className='slider__container'>
            <input
                className={
                    minValue > max - 100
                        ? 'slider__container_thumb--zindex-5'
                        : 'thumb slider__container_thumb--zindex-3'
                }
                type='range'
                min={min}
                max={max}
                value={minValue}
                ref={minValueRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeMinValue(e)
                }
            />
            <input
                className='thumb slider__container_thumb--zindex-4'
                type='range'
                min={min}
                max={max}
                value={maxValue}
                ref={maxValueRef}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleChangeMaxValue(e)
                }
            />
            <div className='flexable-column slider__container_progress'>
                <div>
                    <div className='slider__progress_track' />
                    <div className='slider__progress_range' ref={rangeRef} />
                </div>

                <div className='flexable-row slider__progress_counts'>
                    <span className='slider__counts_count'>{minValue}</span>
                    <span className='slider__counts_count'>{maxValue}</span>
                </div>
            </div>
        </div>
    );
};
