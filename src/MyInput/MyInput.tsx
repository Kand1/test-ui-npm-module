import React, {FC} from 'react';

import "./MyInput.css"

export interface MyInputProps {
    big?: boolean;
    whitePlaceholder?: boolean;
    placeholder: string;
    label: string;
    color: string;
    backgroundColor: string;
}

const MyInput: FC<MyInputProps> = ({
                                       big,
                                       whitePlaceholder,
                                       placeholder,
                                       label,
                                       color,
                                       backgroundColor,
                                       ...props
                                    }) => {
    const inputClasses = ['my-input']
    const labelClasses = ['my-label']
    if (big) {
        inputClasses.push('my-input_big')
        labelClasses.push('my-label_big')
    }
    if (whitePlaceholder) {
        inputClasses.push('my-input_white')
    }
    return (
        <label>
            <span className={labelClasses.join(' ')} style={
                {
                    color,
                    backgroundColor,
                    border: `1px solid ${color ? color : "dimgray"}`
                }}>
                {label}
            </span>
            <input placeholder={placeholder} className={inputClasses.join(' ')} style={
                {
                    color,
                    backgroundColor,
                    border: `1px solid ${color ? color : "dimgray"}`
                }
            }/>
        </label>
    );
};

export default MyInput;
