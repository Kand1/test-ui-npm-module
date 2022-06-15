import React, {FC} from 'react';
import "./MyButton.css"

export interface MyButtonProps {
    big?: boolean;
    color: string;
    backgroundColor: string;
    label: string;
}

const MyButton: FC<MyButtonProps> = ({

                                         color,
                                         backgroundColor,
                                         big,
                                         label,
                                         ...props
                                     }) => {
    const classes = ['my-button'];
    if (big) {
        classes.push('my-button_big')
    }
    return (
        <button {...props} className={classes.join(' ')} style={
            {
                color,
                backgroundColor,
                border: backgroundColor ? 0 : `1px solid ${color ? color : "dimgray"}`
            }
        }>
            {label}
        </button>
    );
};

export default MyButton;
