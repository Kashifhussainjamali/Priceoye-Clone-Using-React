import style from "./footer.module.css"

function Footer(){
    return(<>
    <div className={style["main"]}>
        <ul className={style["ul1"]}>
            <li><img src="logo2.png" alt="" /></li>
            <li className={style["ss"]}>Customer Service</li>
            <li className={style["ss"]}>Secure Payments Methods</li>
        </ul>
        <div className={style["div"]}>
        <ul className={style["ul2"]}>
            <li className={style["li1"]}>About Us</li>
            <li className={style["li1"]}>FAQs</li>
            <li className={style["li1"]}>Contact Us</li>
            <li className={style["li1"]}>Careers</li>
            <li className={style["li1"]}>Press & Blog</li>
            <li className={style["li1"]}>Terms & Condition</li>
        </ul>

        <ul className={style["ul3"]}>
            <li className={style["li1"]}>Help Center</li>
            <li className={style["li1"]}>Privacy Policy</li>
            <li className={style["li1"]}>Installments Plan</li>
            <li className={style["li1"]}>E-Warranty Activation</li>
        </ul>

        <img src="last.png" alt="" className={style["last"]}/>

        </div>
    </div>

    <div className={style["main2"]}>
        <ul className={style["l"]}>
            <li>Copyright © 2024 Priceoye.pk</li>
            <li  className={style["lastlist"]}>
                <img src="fb.png" alt="" className={style["lastimg"]}/>
                <img src="insta.png" alt="" className={style["lastimg"]}/>
                <img src="youtube.png" alt="" className={style["lastimg"]}/>
                <img src="tiktok.png" alt="" className={style["lastimg"]}/>
            </li>
        </ul>


    </div>
    </>)
}
export default Footer