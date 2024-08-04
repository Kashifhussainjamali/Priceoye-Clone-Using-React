import styles from "./items.module.css"
const Items=({img1,text1})=>{
    return(<>
    <div className={styles["main"]}>
    <img src={img1} alt="" className={styles["image"]}/>
    <p className={styles["text"]}>{text1}</p>
    </div>
    </>)
}
export default Items