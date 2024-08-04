import styles from "./container.module.css"

const Container=( {children} )=>{
    return(<>
    <div className={styles["countermain"]}>
    <div className={styles["counter"]}>{children}</div>
    </div>
    </>)
}
export default Container;