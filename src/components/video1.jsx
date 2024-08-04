import style from "./video1.module.css"
function Video1(){
    return(<>
    <video src="video1.mp4" autoPlay muted loop className={style["video"]}></video>
    <div className={style["imagediv"]}>
        <img src="mobiles.webp" alt="" className={style["image"]}/>
    </div>
    <div className={style["mainiv"]}>
    <p className={style["productname"]}>Samsung Galexy A35</p>
        <b className={style["productprice"]}><sup>RS</sup>105,500</b>
        <ul className={style["ul1"]}>
            <li className={style["discount"]}><small><sup>RS</sup>119,999</small></li>
            <li className={style["dis"]}>12%off</li>
        </ul>
        </div>   
    </>)
}
export default Video1;