import style from'./style.module.scss';

function MyButton({content}) {
    const {btn}=style;
    return ( <>
        <button className={btn}>{content}</button>
    </> );
    
}
export default MyButton;