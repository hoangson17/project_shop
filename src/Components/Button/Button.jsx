import style from'./style.module.scss';
import classNames from 'classnames';

function Button({content,isPrimary = true}) {
    const {btn,primaryBtn,secondaryBtn}=style;
    return ( <>
        <button className={classNames(style.btn,{
            [primaryBtn]:isPrimary,
            [secondaryBtn]:!isPrimary
        })}>{content}</button>
    </> );
    
}
export default Button;