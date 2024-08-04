import style from "./video1.module.css"
function Video4(){
    return(<>
    <video src="video4.mp4" autoPlay muted loop className={style["video"]}></video>
    <div className={style["imagediv"]}>
        <img src="earbud1.webp" alt="" className={style["image"]}/>
    </div>
    <div className={style["mainiv"]}>
    <p className={style["productname"]}>Wireless Earbuds</p>
        <b className={style["productprice"]}><sup>RS</sup>8,599</b>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>9,000</small></li>
            <li className={style["dis"]}>31%off</li>
        </ul>
        </div>   
    </>)
}
export default Video4;