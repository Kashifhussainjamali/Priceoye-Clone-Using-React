import style from "./section2.module.css"
import Container2 from "./container2"
import Video1 from "./video1"
import Video2 from "./video2"
import Video3 from "./video3"
import Video4 from "./video4"
import Video5 from "./video5"


function Section2(){
    return (<>

    <h5 className={style["htext"]}>Loved and Recommended</h5>
    <p className={style["ptext"]}>Influencers talk about priceoye as a trusted brand</p>
    <div className={style["main"]}>
    <Container2>
        <Video1></Video1>
    </Container2>
    <Container2>
        <Video2></Video2>
    </Container2>
    <Container2>
        <Video3></Video3>
    </Container2>
    <Container2>
        <Video4></Video4>
    </Container2>
    <Container2>
        <Video5></Video5>
    </Container2>
    </div>
    </>)
}
export default Section2