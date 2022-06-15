import React, {FC} from 'react';

import "./MyInput.css"

export interface MyInputProps {
    big?: boolean;
    color: string;
    backgroundColor: string;
    placeholder: string;
    label: string;
    whitePlaceholder?: boolean;
}

const MyInput: FC<MyInputProps> = ({
                                       big,
                                       placeholder,
                                       label,
                                       color,
                                       whitePlaceholder,
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
