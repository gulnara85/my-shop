function Buttons ({filteredClothes}) {
return (
    <div>
    <div className="main-container">
        <button className="change" onClick={()=>filteredClothes('dress')}>Dresses</button>
        <button className="change" onClick={()=>filteredClothes('hoodie')}>Hoodies</button>
        <button className="change" onClick={()=>filteredClothes('tracksuit')}>Tracksuits</button>
        <button className="change" onClick={()=>filteredClothes('sweater')}>Sweaters</button>
        <button className="change" onClick={()=>filteredClothes('leggings')}>Leggings</button>
        <button className="change" onClick={()=>filteredClothes('pants')}>Pants</button>
    </div>
    </div>
)
}

export default Buttons;