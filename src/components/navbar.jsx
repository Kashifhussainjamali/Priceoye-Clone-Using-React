import style from "./navbar.module.css" 
function Navbar(){
    return(<>
    <ul className={style["nabvarmain"]}>
        <li className={style["logo"]}><img src="logo.png" alt="" /></li>
        <li className={style["inputall"]}><input type="text" placeholder="Search..." className={style["input"]}/><img src="mike.png" alt="" className={style["mike"]}/></li>
        <li><button className={style["login"]}>Login</button></li>
        <li ><button className={style["rigester"]} onClick={()=>alert("Sorry Try Latter")}>Rigester</button></li>
    </ul>
    </>)
}
export default Navbar