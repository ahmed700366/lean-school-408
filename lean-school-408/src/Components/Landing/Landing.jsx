import React from 'react'
import styled from 'styled-components'
import Twoimage from './Twoimage'
import Threeimage from './Threeimage'
import Twoimage1 from './Twoimage1'
import Articles from "../Articles/Articles"
import Twoimage2 from './Twoimage2'
import Threeimage1 from './Threeimage1'
import EightdivGallery from './EightdivGallery'
import Twoimage3 from './Twoimage3'
import Threeimage2 from './Threeimage2'
import Navbar from '../Navbar/Navbar'
import Footer from "../Footer/Footer"
const Fourthdiv= styled.div`
   margin-top:1%;
   img{
    height:95%;
    width:96%;
 
    
}
   `


const Sixthdiv = styled.div`
   
   font: lighter normal 2.453125rem/2.75rem "Favorit SSENSE Inter1";
   letter-spacing: -0.1575rem;
   margin: 1.5% 1.875rem 1.875rem 1.875rem;

   .link{
    font: lighter normal 1.01rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    color:black;
    border:1px solid grey;
    border-radius:9px;
    padding:1%;
    width:100px;
    height:20px;
    margin: 1.5% auto;
   }
   `

   const Eight = styled.div`
    //  height:170px;
    .small-articles{
        height:170px;
        flex:4;
    }
   `

const Landing = (props) => {
    return (
        <>
        <Navbar />
        <div>
          
            <Twoimage/>
            <Threeimage/>
            <Twoimage1/>
            <Fourthdiv >
            <img src="https://res.cloudinary.com/ssenseweb/image/upload/w_2048,q_90,f_auto,dpr_auto/v1664458705/vq0y30p12ygm4ufvsmps.gif" />
            </Fourthdiv>
            <Articles/>
            <Twoimage2/>
            <Sixthdiv>
                <h1 >PERSONAL SPACE WITH JOSH ITIOLA</h1><br/>
                <h3>Talking Prized Possesion with the Multi-Talented Engineer Turned Vitsoe Planner</h3>
                <p className='link'>View Editorial</p>
            </Sixthdiv>
            <Threeimage1/>
            <Eight className="small-articles">
            <EightdivGallery/>
            </Eight>
            <Twoimage3/>
            <Threeimage2/>
            
        </div>
        <Footer />
        </>
    )
}

export default Landing
