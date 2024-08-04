import style from "./section5.module.css"

function Section5(){
    return (<>
     <h4 className={style["shop"]}>Reason to Buy</h4>
     <ul className={style["ul1"]}>
        <li className={style["li"]}><img src="one.png" alt="" className={style["img"]}/></li>
        <li className={style["li"]}><img src="two.png" alt="" className={style["img"]}/></li>
     </ul>
     <ul className={style["ul1"]}>
        <li className={style["li"]}><img src="three.png" alt="" className={style["img"]}/></li>
        <li className={style["li"]}><img src="four.png" alt="" className={style["img"]}/></li>
     </ul>
     </>)
}
export default Section5