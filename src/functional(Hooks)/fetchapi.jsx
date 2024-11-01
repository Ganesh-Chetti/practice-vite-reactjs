import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./fakecard.css";

function Fake() {
  var [a, seta] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        seta(res);
      });
  }, []);

  var card = a.map((val, ind) => {
    return (
      <Card className="text" key={ind}>
        <Card.Header>{val["id"]} {val["category"]}</Card.Header>
        <Card.Body>
          <Card.Title>{val["title"]}</Card.Title>
          <img src={val["image"]} alt="img" width={200} height={300}/>
          <Card.Text>{val["description"]}</Card.Text>
          <Button variant="primary">{val["price"]}</Button>
        </Card.Body>
        <Card.Footer className="text-muted">
          rating: {val["rating"]["rate"]} {val["rating"]["count"]}
        </Card.Footer>
      </Card>
    );
  });

  return <div className="card-container">{card}</div>;
}

export default Fake;
