import React, {FC} from 'react';
import "./MyButton.css"

export interface MyButtonProps {
    big?: boolean;
    color: string;
    children: React.ReactNode;
}

const MyButton: FC<MyButtonProps> = ({
                                         children,
                                         color,
                                         big,
                                         ...props
                                     }) => {
    const classes = ['my-button'];
    if (big) {
        classes.push('my-button_big')
    }
    return (
        <button {...props} className={classes.join(' ')} style={{color}}>
            {children}
        </button>
    );
};

export default MyButton;
