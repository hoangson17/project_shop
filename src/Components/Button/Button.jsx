import style from'./style.module.scss';

function MyButton() {
    return ( <>
        <button className={style.btn}>M</button>
        <button className={style.btn2}>X</button>
    </> );
    
}
export default MyButton;