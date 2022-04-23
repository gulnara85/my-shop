import { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Clothes from './Clothes';
import { data } from './data';
import Slides from './Slides';
import { SliderData } from "./SliderData";

function Home () {
    const [item, setItem] = useState(data)
    const chosenClothes= (searchTerm) => {
        const newClothes = data.filter (element => element.searchTerm ===searchTerm);
        setItem(newClothes)
    }
    return (
    <div>
    <Slides slides={SliderData}/>
    <Buttons filteredClothes={chosenClothes}/>
    <Clothes item = {item}/>
    </div>
    )
}

export default Home;