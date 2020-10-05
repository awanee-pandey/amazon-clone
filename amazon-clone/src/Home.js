import React from 'react';
import './Home.css';
import Product from './Product';

function Home(){
    return(
        <div className ="home">
            <div className="home__container">
                <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=" " /> 

            <div className="home__row"> 
                <Product 
                id='1234'
                title='The lean startup'
                price={29.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" 
                rating={3} /> 
                <Product 
                id='1235'
                title='Kenwood Mix Stand Mixer for Baking, 
                Stylish Kitchen Mixer with K-beater,Dough Hook and
                Whisk,5 Litre Glass Bowl'
                price={239.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" 
                rating={4} /> 


            </div>
            <div className="home__row">
            <Product 
                id='1243'
                title="Samsung LHJDFGDJFGDHFGD 49' curved LED Gaming Monitor"
                price={169.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" 
                rating={4} /> 
            <Product 
                id='12135'
                title='Amazon Echo Smart speaker with Alexa,Chacoal Fabric'
                price={56.00} 
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?
                $300x400_retinamobilex2$" 
                rating={4} /> 
                <Product 
                id='12635'
                title='New Apple iPad Pro'
                price={29.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L.AC_SX385_.jpg" 
                rating={4} /> 
               
                
            </div>
            <div className="home__row">
            <Product 
                id='126375'
                title='Samsung LED Monitor'
                price={29.00} 
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg" 
                rating={4} /> 
                
            </div>

            </div>
        </div>
    );
}

export default Home;