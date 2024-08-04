import style from "./video1.module.css"
function Video2(){
    return(<>
    <video src="video2.mp4" autoPlay muted loop className={style["video"]}></video>
    <div className={style["imagediv"]}>
        <img src="tablet.webp" alt="" className={style["image"]}/>
    </div>
    <div className={style["mainiv"]}>
    <p className={style["productname"]}>Redme Pad SE</p>
        <b className={style["productprice"]}><sup>RS</sup>57,799</b>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>70,000</small></li>
            <li className={style["dis"]}>17%off</li>
        </ul>
        </div>   
    </>)
}
export default Video2;