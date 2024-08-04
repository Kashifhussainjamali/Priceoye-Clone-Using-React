import style from "./video1.module.css"
function Video5(){
    return(<>
    <video src="video5.mp4" autoPlay muted loop className={style["video"]}></video>
    <div className={style["imagediv"]}>
        <img src="earbud2.webp" alt="" className={style["image"]}/>
    </div>
    <div className={style["mainiv"]}>
    <p className={style["productname"]}>Earbuds Pro</p>
        <b className={style["productprice"]}><sup>RS</sup>2,999</b>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>5,000</small></li>
            <li className={style["dis"]}>40%off</li>
        </ul>
        </div>   
    </>)
}
export default Video5;