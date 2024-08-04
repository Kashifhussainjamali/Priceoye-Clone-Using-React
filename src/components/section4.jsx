import style from "./section4.module.css"
function Section4(){
    return (<>
     <h4 className={style["shop"]}>Shop by Price</h4>
     <ul className={style["ul"]}>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Below Rs. 15,000 </button></li>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Rs. 15,000 - Rs. 25,000</button></li>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Rs. 25,000 - Rs. 40,000</button></li>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Rs. 40,000 - Rs. 60,000</button></li>
     </ul>
     <ul className={style["ul"]}>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Rs. 80,000 - Rs. 80,000</button></li>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Rs. 80,000 - Rs. 100,000</button></li>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Rs. 100,000 - Rs. 150,000</button></li>
        <li className={style["li2"]}><button className={style["btn"]} onClick={()=>alert("Selected")}>Above Rs. 150,000</button></li>
     </ul>
     <h4 className={style["shop"]}>Shop by Brand</h4>

     <ul className={style["brand"]}>
        <li className={style["li1"]}><img src="vivo.png" alt="" className={style["img"]}/> <p>Vivo</p></li>
        <li className={style["li1"]}><img src="tecno.png" alt="" className={style["img"]}/><p>Tecno</p></li>
        <li className={style["li1"]}><img src="apple.png" alt="" className={style["img"]}/><p>Apple</p></li>
        <li className={style["li1"]}><img src="sam.png" alt="" className={style["img"]}/><p>Samsung</p></li>
        <li className={style["li1"]}><img src="infx.png" alt="" className={style["img"]}/><p>Inifix</p></li>
        <li className={style["li1"]}><img src="itel.png" alt="" className={style["img"]}/><p>Itel</p></li>
        <li className={style["li1"]}><img src="mi.png" alt="" className={style["img"]}/><p>Xiaomi</p></li>
        <li className={style["li1"]}><img src="redme.png" alt="" className={style["img"]}/><p>Realme</p></li>
        <li className={style["li1"]}><img src="oppo.png" alt=""  className={style["img"]}/><p>Oppo</p></li>
        <li className={style["li1"]}><img src="nokia.png" alt="" className={style["img"]}/><p>Nokia</p></li>
     </ul>
    </>)
}
export default Section4