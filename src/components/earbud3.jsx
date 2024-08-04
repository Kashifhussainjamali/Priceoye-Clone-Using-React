import styles from "./earbuds.module.css"
function Earbud3(){
    return (
        <>
        <img src="earbud6.webp" alt="" className={styles["erbudimg"]}/>
        <p className={styles["productname"]}>Anker Soundcore Life Headphones</p>
        <b className={styles["productprice"]}><sup>RS</sup>23,049</b>
        <ul className={styles["ul1"]}>
            <li className={styles["discount"]}><small><sup>RS</sup>30,000</small></li>
            <li className={styles["dis"]}>30%off</li>
        </ul>
      
        </>
    )
}
export default Earbud3;  