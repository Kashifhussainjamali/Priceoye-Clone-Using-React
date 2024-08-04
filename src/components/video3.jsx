import style from "./video1.module.css"
function Video3(){
    return(<>
    <video src="video3.mp4" autoPlay muted loop className={style["video"]}></video>
    <div className={style["imagediv"]}>
        <img src="powerbank.webp" alt="" className={style["image"]}/>
    </div>
    <div className={style["mainiv"]}>
    <p className={style["productname"]}>PowerBank</p>
        <b className={style["productprice"]}><sup>RS</sup>3,799</b>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>7,000</small></li>
            <li className={style["dis"]}>40%off</li>
        </ul>
        </div>   
    </>)
}
export default Video3;