import styles from "./section1.module.css"
import Container from "./container"
import Earbud1 from "./earbuds"
import Earbud2 from "./earbud2"
import Earbud3 from "./earbud3"
import Earbud4 from "./earbud4"
import Earbud5 from "./earbud5"
import Earbud6 from "./earbud6"
import Earbud7 from "./earbud7"
import Earbud8 from "./earbud8"

function Section1(){
    return(<>

    
    <div className={styles["bg"]}>
        <ul className={styles["earall"]}>
        <li><h4 className={styles["earbuds"]}>Latest Wireless Earbuds </h4></li>
        <li><button className={styles["viewall"]}>View All</button></li>
        </ul>
        <div className={styles["main"]}>
        <Container>
            <Earbud1></Earbud1>
        </Container>
        <Container>
           <Earbud2></Earbud2>
        </Container>
        <Container>
           <Earbud3></Earbud3>
        </Container>
        <Container>
           <Earbud4></Earbud4>
        </Container>
        </div>
        <div className={styles["div"]}></div>
        <div className={styles["main"]}>
        <Container>
            <Earbud5></Earbud5>
        </Container>
        <Container>
           <Earbud6></Earbud6>
        </Container>
        <Container>
           <Earbud7></Earbud7>
        </Container>
        <Container>
           <Earbud8></Earbud8>
        </Container>
        </div>
         
        
    </div>

    </>)
}
export default Section1