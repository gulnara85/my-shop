import video from './dress.mp4'


function About () {
    return (
        <div className='container' > 
        <video className='myVideo' width="400px" height='420px' autoPlay muted loop >
        <source src={video} type="video/mp4"/>
        </video>
        <div className='about-us'>
        <h1>About Tatia Boutique</h1>
        <p className='text'>
        Tatia Boutique, was born in Toronto in 2020, becoming the first stop online & IRL for the 20 something who is confident in herself and her body, looking for an attainable way to dress like the influencers who inspire her and isn’t worried about a brand name or logo. <br/>
        You can always count on what the name “Tatia Boutique” has become the go-to boutique, synonymous with, sexy, fun, flirty fashion that is expertly edited to be in-stores as the trends happen.
        </p>
        <p className='text'>
        At Tatia Boutique, our values mean everything to us and guide us every day. <br/>
        We believe our customer shouldn’t have to wait.<br/> We have fashion trends available ASAP and are committed to quick delivery.<br/>
        We believe that fashion doesn’t need a brand name or a logo to make you feel confident and like your best self.<br/>
        Tatia Boutique offers something different. It’s more than accessible fashion, it’s a lifestyle.</p>
        </div>
        </div>

    )
}

export default About;