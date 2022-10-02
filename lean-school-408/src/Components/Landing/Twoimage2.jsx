import React from 'react'
import styled from 'styled-components'

const Card1 = styled.div`
display:flex;
flex-direction:column;

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
 color:grey;

 
}
.desc{
    font: lighter normal 1.12rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    margin:auto;
    margin-bottom:3%;
    margin-top:1%;
    color:black;
    border:1px solid grey;
  
    border-radius:9px;

   cursor:pointer;
   width:fit-content;
    // height:50px;
   background-color:white;
  
}

`
const Container = styled.div`
 width:99%;
 // border: 1px solid black;
 display:flex;
 // margin-top: 10px;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1664198081/tlfg66jhcnyhqvdwoit2.jpg",
    category:"Featured",
    name:"WOOYOUNGGMI",
    description:"SHOP MENSWEAR",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1664198104/f5fm4j6ykxjsur2rvndh.jpg",
    category:"Featured",
    name:"COPERNI",
    description:"SHOP WOMENSWEAR",
    id:2 
}]


const Twoimage2 = (props) => {
    return (
        <Container>
           {product.map((elem)=>{ return (
               <Card1 key={elem.id}>
                   <div>
                       <img src={elem.img}/>
                    </div>
                   <div className='category'>
                       <span>{elem.category}</span>
                       <span className='name'>{elem.name}</span>
                   </div>
                   <div>
                   <button className='desc'>{elem.description}</button>
                   </div>
               </Card1>
           )
           })}
        </Container>
    )
}
export default Twoimage2
