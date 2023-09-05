import React from "react";
import { useState, useEffect } from "react";
import { Button, Card, Col, Row } from "reactstrap";

function GotoVideoCall() {
  const [Astroid, setAstroid] = useState("");
  useEffect(() => {
    const astroId = localStorage.getItem("astroId");
    setAstroid(astroId);
  }, []);
  return (
    <div className="container mt-2 mb-2 mx-2">
      <Row>
        <Card>
          <Col className="mt-2 mb-2 mx-3 ">
            <a target="_blank" href={`#/astrovideocall/${Astroid}`}>
              <Button color="success">Go to VideoCall Page</Button>
            </a>
          </Col>
        </Card>
      </Row>
    </div>
  );
}

export default GotoVideoCall;
