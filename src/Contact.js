import {SliderData} from './SliderData'
import {useState} from 'react'

function Contact () {
    const [sliderImages, setSliderImages] = useState (SliderData)
    return (
        <div>
            <div className="contact-us">
        <h2>Contact Us</h2>
            </div> 
        <form>
        <input  type="text" placeholder="Name..."></input>
        <input   type="email" placeholder="Email..."></input>
        <input  type="number" placeholder="Phone number"></input>
        <input className="message " type="text" placeholder="Message"></input>  
        
        <button className="submit">Send</button>
        </form>
        <p className="text">Have a question? <br/>
        Please email customer service: <br/>
        info@tatiaboutique.ca <br/>
        Mon-Fri | 8am to 4pm EST
        </p>

        <div className='photo-gallery'>
            {sliderImages.map ((element => {
                const {image} = element;
                return (
                    <div key={image}>
                        <img  src={image} width='200px' alt='pic'/>
                    </div>
                )
            }))}
            </div>
        </div>
    )
}
export default Contact;