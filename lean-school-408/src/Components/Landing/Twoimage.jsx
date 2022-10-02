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
    font: lighter normal 1.38rem/1.625rem "JHA Times Now";
    letter-spacing: -0.003125rem;
    margin-bottom:3%;
    margin-top:1%;
    color:gray;
//    border:1px solid red;
   padding-left:-5%
}

`
const Container = styled.div`
    width:99%;
    // border: 1px solid black;
    display:flex;
    // margin-top: 10px;
`
const product = [{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1664371885/rnx21f9kfoqdsvqsegm7.jpg",
    category:"Fashion",
    name:"NEW FROM FEAR OF GOD ESSENTIAL:CANARY YELLOW",
    description:"The Latest Style from the Core Collection",
    id:1
},
{
    img:"https://res.cloudinary.com/ssenseweb/image/upload/w_1024,q_90,f_auto,dpr_auto/v1663854024/hlbxtzu9okkb1ehmuf7j.jpg",
    category:"Market",
    name:"IS THE SPINE PIN GAY",
    description:"Minor Meditation on Hair,Queerness,and Presentation",
    id:2 
}]


const Twoimage = (props) => {
    return (
        <Container>
           {/* <h1>Twoimage</h1>  */}
           {product.map((elem)=>{ return (
               <Card1 key={elem.id}>
                   <div>
                       <img src={elem.img}/>
                    </div>
                   <div className='category'>
                       <span>{elem.category}</span>
                       <span className='name'>{elem.name}</span>
                   </div>
                   
                   <p className='desc'>{elem.description}</p>
                   
               </Card1>
           )
           })}
        </Container>
    )
}
export default Twoimage
