import React, {PropsWithChildren} from "react";
import "./Button.scss";
import classnames from 'classnames';


export interface ButtonProps {
    children: string;
}

const Button: React.FC<ButtonProps> = (props: PropsWithChildren<ButtonProps>) => {
    const {children} = props;
    return <button>{children}</button>;
};

export default Button;
