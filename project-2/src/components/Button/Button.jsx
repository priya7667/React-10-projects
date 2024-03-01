

import styles from './Button.module.css';


function Button(props) {
    const{isOutline,icon,text,...rest}=props;
    return (
        <button {...rest} className={isOutline?styles.outline_btn:styles.primary_btn}>
           
            {props.icon}
            {props.text}
           
        </button>
    );
}

export default Button
