import { Card, Button } from "react-bootstrap";
import React from "react";

const NewsCard = ({ source, title, author, description, url, urlToImage }) => {
  return (
    <>
      <Card style={{ width: "18rem", textAlign: "start", margin: "10px" }}>
        <Card.Text>{source}</Card.Text>
        <Card.Img variant="top" src={urlToImage} height="165" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <Card.Body>
            <Button variant="info" className="m-2" href={url}>
              News Page
            </Button>
            <Button variant="primary">Save</Button>
          </Card.Body>
        </Card.Body>
      </Card>
    </>
  );
};

export default NewsCard;
