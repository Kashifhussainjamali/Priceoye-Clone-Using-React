import styles from "./earbuds.module.css"
function Earbud4(){
    return (
        <>
        <img src="earbud3.webp" alt="" className={styles["erbudimg"]}/>
        <p className={styles["productname"]}>1Hora HT22 Wireless Earbuds</p>
        <b className={styles["productprice"]}><sup>RS</sup>3,299</b>
        <ul className={styles["ul1"]}>
            <li className={styles["discount"]}><small><sup>RS</sup>6700</small></li>
            <li className={styles["dis"]}>51%off</li>
        </ul>
      
        </>
    )
}
export default Earbud4;  