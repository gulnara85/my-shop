import { useState } from 'react';

function Clothes ({item}) {
    const [showText,setShowText] =useState (false)
    const showTextClick = (element) => {
        element.showMore = !element.showMore 
            setShowText (!showText)
    }
    return (
        <div className="product">
            {item.map((element =>{
                const {id, name, searchTerm, description, price, image,showMore} = element;
                
                return (
                    <div className="product-card" key= {id}>
                        <img className='product-image' src={image} alt="pic" width='300px' height ='350px'/>
                    <div className="product-info">
                        <h4> {name} </h4>
                        <p className='text'> {showMore?description:description.substring (0,0) } 
                        <button className='show' onClick={()=>showTextClick(element)}> {showMore?"show less":"Description +" } </button>
                        </p>
                        <h4> ${price}.00 CAD</h4>
                    </div>
                    </div>
                )
                }))
            }
        </div>
        
    )
}

export default Clothes;