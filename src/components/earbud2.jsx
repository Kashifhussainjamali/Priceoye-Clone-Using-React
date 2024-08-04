import styles from "./earbuds.module.css"
function Earbud2(){
    return (
        <>
        <img src="earbud2.webp" alt="" className={styles["erbudimg"]}/>
        <p className={styles["productname"]}>Audionic Wireless Bluetooth Earbuds</p>
        <b className={styles["productprice"]}><sup>RS</sup>949</b>
        <ul className={styles["ul1"]}>
            <li className={styles["discount"]}><small><sup>RS</sup>2499</small></li>
            <li className={styles["dis"]}>70%off</li>
        </ul>
      
        </>
    )
}
export default Earbud2;   