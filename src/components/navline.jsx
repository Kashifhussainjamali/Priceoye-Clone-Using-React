import Items from "./items"
const Navline=()=>{
    let img_1="mobiles.webp"
    let text_1="Mobiles"

    let img_2="earphones.webp"
    let text_2="Earphones"

    let img_3="watches.webp"
    let text_3="Smart Watches"

    let img_4="trimers.webp"
    let text_4="Trimmers Shaver"

    let img_5="powerbank.webp"
    let text_5="Powerbanks"

    let img_6="charger.webp"
    let text_6="Wall Charger"

    let img_7="speaker.webp"
    let text_7="Bluetooth Speakers"

    let img_8="tablet.webp"
    let text_8="Tablets"

    


    return(<>
    <div style={{display:"flex",paddingLeft:"5px"}}>
    <Items img1={img_1} text1={text_1}></Items>
    <Items img1={img_2} text1={text_2}></Items>
    <Items img1={img_3} text1={text_3}></Items>
    <Items img1={img_4} text1={text_4}></Items>
    <Items img1={img_5} text1={text_5}></Items>
    <Items img1={img_6} text1={text_6}></Items>
    <Items img1={img_7} text1={text_7}></Items>
    <Items img1={img_8} text1={text_8}></Items>
    
    </div>
    </>)
}
export default Navline