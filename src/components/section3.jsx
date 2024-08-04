import style from "./section3.module.css"
import Mobile1 from "./mobile1"
import Container3 from "./container3"
import One from "./one"

function Section3(){

    let mobil1=["Xiaomi Pad 6"]
    let mobile1img=["tableet.jpeg"]
    let after1=["97,999"]
    let before1=["120,000"]
    let off1=["18%OFF"]

    let mobil2=["Samsung Galaxy"]
    let mobile2img=["R.jpeg"]
    let after2=["67,999"]
    let before2=["74,999"]
    let off2=["10%OFF"]

    let mobil3=["Samsung Galaxy"]
    let mobile3img=["OIP.jpeg"]
    let after3=["57,999"]
    let before3=["64,999"]
    let off3=["10%OFF"]

    let mobil4=["Xiaomi Pad 6 Pro"]
    let mobile4img=["tab2.jpeg"]
    let after4=["122,999"]
    let before4=["124,999"]
    let off4=["10%OFF"]

    return(<>
     <h5 className={style["htext1"]}>Best Seller</h5>
     <p className={style["ptext1"]}>Get the best prices in town</p>
     <div className={style["min"]}>
     <Mobile1></Mobile1>
     <ul className={style["ul"]}>
        <li className={style["li1"]}>
            <p className={style["li11"]}>
        <Container3>
            <One mobile_1={mobil1} mobile_1_img={mobile1img} after_1={after1} before_1={before1} off_1={off1}></One>
     </Container3>
     </p>
     <Container3 >
            <One mobile_1={mobil2} mobile_1_img={mobile2img} after_1={after2} before_1={before2} off_1={off2}></One>
     </Container3>
        </li>
        <li>
        <p className={style["li11"]}>
        <Container3>
            <One mobile_1={mobil3} mobile_1_img={mobile3img} after_1={after3} before_1={before3} off_1={off3}></One>
     </Container3>
     </p>
     <Container3>
            <One mobile_1={mobil4} mobile_1_img={mobile4img} after_1={after4} before_1={before4} off_1={off4}></One>
     </Container3>
        </li>
     </ul>
     </div>

    
    </>)
}
export default Section3