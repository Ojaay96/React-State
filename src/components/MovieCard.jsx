import React from "react";
import Card from "react-bootstrap/Card";

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Card style={{ width: "18rem", height: "500px" }}>
      <Card.Img height={"200px"} variant="top" src={posterURL} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
