import styles from "./earbuds.module.css"
function Earbud1(){
    return (
        <>
        <img src="earbud1.webp" alt="" className={styles["erbudimg"]}/>
        <p className={styles["productname"]}>Zero Rover Wireless Earbuds</p>
        <b className={styles["productprice"]}><sup>RS</sup>4999</b>
        <ul className={styles["ul1"]}>
            <li className={styles["discount"]}><small><sup>RS</sup>7999</small></li>
            <li className={styles["dis"]}>55%off</li>
        </ul>
                </>
    )
}
export default Earbud1;   