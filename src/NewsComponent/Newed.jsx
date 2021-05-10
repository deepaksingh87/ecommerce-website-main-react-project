import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Link} from 'react-router-dom';

const Example = ({data}) => {
  return (

    <div style={{marginTop:"-28px"}}>
        {data.articles.map((value,index)=>
      <Card key={index} style={{border:"2px solid white",display:"flex",backgroundColor:"black"}}>
        <CardImg top width="33%" src={value.urlToImage} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h2" className="text-primary" style={{color:"blue"}}>{value.title}</CardTitle>
          <CardSubtitle tag="h4" className="mb-2 text-muted">{value.description}</CardSubtitle>
          <CardSubtitle>publist at- {value.publishedAt}</CardSubtitle>
          <CardText>{value.content}</CardText>
          <a href={value.url}>read more</a>
        </CardBody>
      </Card>
      )}
    </div>
  );
};

export default Example;