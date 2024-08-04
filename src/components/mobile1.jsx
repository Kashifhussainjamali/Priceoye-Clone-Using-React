import style from "./mobile1.module.css"

function Mobile1(){
    return(<>
        <div className={style["main"]}>
            <p className={style["sam"]}>Samsung Galaxy A05s</p>
            <img src="samsung.jpg" alt="" className={style["img"]} /> <br />
        <p className={style["productprice"]}><sup>RS</sup>35,000</p>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>38,500</small></li>
            <li className={style["dis"]}>8%off</li>
        </ul>
        </div>
    </>)
}
export default Mobile1