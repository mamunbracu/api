import React, { useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";
const Api = () => {
  const [data, setData] = useState([]);
  const [rest, setRest] = useState([]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_id", setData(e.target.value));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://examplebd.com/api/live-classes?user_id=10089",
      config,
      formData
    );
    console.log(data);
    setRest(data);
  };
  console.log(rest);
  return (
    <Container>
      <form onSubmit={submitHandler} className="py-5" mt-5>
        <label htmlFor="" className="form-label">
          User Id
        </label>
        <input className="form-control" type="text" />
        <button className="btn btn-success mt-4" type="submit">
          Submit
        </button>
      </form>
      <div className="py-5">
        <Row className="justify-content-center">
          {rest.map((r, i) => {
            return (
              <Col md={4} key={i}>
                <Card className="mb-3">
                  <Card.Header>{r.course_title}</Card.Header>
                  <Card.Body>
                    <h6 className="py-3">Ending_time: {r.ending_time}</h6>
                    <h6 className="py-3">Meeting Id : {r.meeting_id}</h6>
                    <h6 className="py-3">
                      Meeting password: {r.meeting_password}
                    </h6>
                    <h6 className="py-3">
                      starting_time : {""}
                      {r.starting_time}
                    </h6>
                    <h6 className="py-3">Title : {r.title}</h6>
                    <h6 className="py-3">User Id: {r.user_id}</h6>
                    <h6 className="py-3">Name: {r.user_name}</h6>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </Container>
  );
};

export default Api;
