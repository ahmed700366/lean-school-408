import React from 'react'
import styled from 'styled-components'

const Card1 = styled.div`
display:flex;
flex-direction:column;

.image{
    height:85%;
}
img{
    height:95%;
    width:90%;
}
.category {

 display:flex;
 gap:5%;
 margin-left:5%;
}
.name{
 font: lighter normal 1.1895rem/1.625rem "Favorit SSENSE Inter1";
 letter-spacing: -0.015625rem;
 color:black;
 text-align: left;
 
}
.desc{
    font: lighter normal 0.72rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    margin-left:-5%;
    margin-bottom:3%;
    margin-top:1%;
    color:gray;
    // border:1px solid red;
}

`
const Container = styled.div`
 width:99%;
 // border: 1px solid black;
 display:flex;
 // margin-top: 10px;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1663863913/ipl1igpegdww1ggzvdpt.jpg",
    category:"RECENT",
    name:"INFINITE TIMES INFINITE",
    description:"Artwork by Somnath Bhatt",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1663602981/bkvepsr5bugaswa4zlcy.jpg",
    category:"RECENT",
    name:"RIDING OUT WITH LA BIKE LIFE AND CLARKS ORIGINALS FW22",
    description:"", 
    id:2
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1663254600/dr1pvtixrtb1z9chqc1x.jpg",
    category:"RECENT",
    name:"HEY YOUNG WORLD",
    description:"Four Artistic at Home in London,Photograph by Sirui Ma and Style by Marika-Ella Ames",
    id:3 
}]


const Threeimage = (props) => {
    return (
        <Container>
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Card1 key={elem.id}>
                   <div className='image'>
                       <img src={elem.img}/>
                    </div>
                   <div className='category'>
                       <span>{elem.category}</span>
                       <span className='name'>{elem.name}</span>
                   </div>
                   <div>
                   <p className='desc'>{elem.description}</p>
                   </div>
               </Card1>
           )
           })}
        </Container>
    )
}
export default Threeimage
