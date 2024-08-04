import style from "./contaner2.module.css"
const Container2=( {children} )=>{
    return(<>
    <div className={style["cont2"]}>{children}</div>
    </>)
}
export default Container2;