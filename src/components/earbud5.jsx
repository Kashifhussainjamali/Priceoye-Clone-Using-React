import styles from "./earbuds.module.css"
function Earbud5(){
    return (
        <>
        <img src="earbud5.webp" alt="" className={styles["erbudimg"]}/>
        <p className={styles["productname"]}>Air 31 TWS Transparent Earbuds</p>
        <b className={styles["productprice"]}><sup>RS</sup>949</b>
        <ul className={styles["ul1"]}>
            <li className={styles["discount"]}><small><sup>RS</sup>4000</small></li>
            <li className={styles["dis"]}>76%off</li>
        </ul>
      
        </>
    )
}
export default Earbud5;   