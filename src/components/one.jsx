import style from "./one.module.css"
const One=({mobile_1,mobile_1_img,after_1,before_1,off_1})=>{
    return<>
    <ul className={style["ul1"]}>
        <li><p className={style["text"]}>{mobile_1}</p></li>
        <li><img src={mobile_1_img} alt="" className={style["img"]}/></li>
    </ul>
    <b className={style["productprice"]}><sup>RS</sup>{after_1}</b>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>{before_1}</small></li>
            <li className={style["dis"]}>{off_1}</li>
        </ul>
    </>
}
export default One

