import React from "react";
import { Card, Button } from "react-bootstrap";
import "../index.css";
import getDrivers from "../drivers";
export function Todo() {
  const drivers = getDrivers();
  return (
    <div>
      <div className="background"> </div>
      <div className="container">
        <div class="form-floating">
          <select
            class="form-select"
            id="yearDrivers"
            aria-label="Floating label select example"
          >
            <option selected>All</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
          </select>
          <label for="floatingSelect">Select a year</label>
        </div>
        <div className="row row-cols-sm-1 row-cols-md-3">
          {drivers.map((user) => (
            <div className="col sm-1 mt-2">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={user.img} />
                <Card.Body>
                  <Card.Title key={user.id}>
                    <h3>{user.name}</h3>
                  </Card.Title>
                  <Card.Text>{user.team}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
