import React from 'react';
import ProductDetail from '../data/ProductDetail';
import {CardBody,CardTitle,CardSubtitle,CardText,Card,CardLink} from 'reactstrap';
import {Col,Row} from 'react-bootstrap'
export default function Home() {

    return (
      <div className="space-from-top">
      <h1>To sell the product in suitable prices</h1>
       <div style={{textAlign:"center"}}>
          { ProductDetail.map((value)=>
         
      <Card key={value.sku} width="25%" style={{border:"1px solid black",display:"flex",flexDirection:"row",width:"25%",display:"inline-block",margin:"20px",borderRadius:"10px",backgroundColor:"#3A173D",justifyContent:"stretch"}}>
        <CardBody>
        <img width="100%" height="200px" src={value.image} alt="Card image cap" />
          <CardTitle tag="h3">{value.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">{value.category.name}</CardSubtitle>
        </CardBody>
        <CardBody>
            <h1>price ${value.price}</h1>
          <CardText>{value.description}</CardText>
          <CardLink href={value.url} style={{color:"blue",marginLeft:"30px"}}>enter Link</CardLink>
          <CardLink href={value.url} style={{color:"blue",marginLeft:"20px"}}>Another Link</CardLink>
        </CardBody>
      </Card>
          
      )}
    </div>
      </div>

    )
}
