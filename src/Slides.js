import { useState } from "react";
import { SliderData } from "./SliderData";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

const Slides = ({slides}) => {
    const [current, setCurrent] = useState(0)
    const {image} = SliderData [current]

    const prevSlide =() => {
        setCurrent ((current => {
            current --; 
            if (current<0) {return SliderData.length-1}
            return current
        }))
    }

    const nextSlide = () => {
        setCurrent((current => {
            current ++;
            if (current> SliderData.length-1) {current=0}
            return current
        }))
    }

return (
    <div className="slider">
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} /> 
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
        <img src={image} alt='pic'className="image" width="20%" />
    </div>
)
}
export default Slides;