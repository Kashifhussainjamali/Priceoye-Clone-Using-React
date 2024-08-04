import style from "./section6.module.css"

function Section6(){
    return(<>
    <ul className={style["main"]}>
        <li>
            <img src="approved.png" alt=""  className={style["img"]}/>
            <p className={style["p2"]}>PTA Approved</p>
            <p className={style["p"]}>Mobile Phone</p>
        </li>
        <li>
            <img src="brand.png" alt="" className={style["img"]}/>
            <p className={style["p2"]}>1 Year</p>
            <p className={style["p"]}>Brand Warranty</p>
        </li>
        <li>
            <img src="clock.png" alt="" className={style["img"]}/>
            <p className={style["p2"]}>48hr Delivery</p>
            <p className={style["p"]}>Open Parcel</p>
        </li>
        <li>
            <img src="deli.png" alt="" className={style["img"]}/>
            <p className={style["p2"]}>Free Delivery</p>
            <p className={style["p"]}>All Over Pakistan</p>
        </li>
    </ul>
    </>)
}
export default Section6