import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "reactstrap";
import axiosConfig from "../../../axiosConfig";

function Gotolivestream() {
  const [LiveAstro, setLiveAstro] = useState({});

  useEffect(() => {
    const liveidnew = localStorage.getItem("liveid");

    let astroId = localStorage.getItem("astroId");

    axiosConfig
      .get(`/user/listLiveStreamAstro`)
      .then((res) => {
        let Allastro = res.data.data;
        let astro = Allastro.filter(
          (value) => astroId === value?.astroAccount?._id
        );
        setLiveAstro(astro[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOffline = () => {
    let liveidnew = localStorage.getItem("liveid");
    axiosConfig
      .get(`/user/disConnectLiveStream/${liveidnew}`)
      .then((res) => {
        console.log(res.data);
        localStorage.removeItem("liveid");
        window.location.replace("/");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="container mt-2 mb-2 mx-2">
      <div>
        <Card>
          <Row>
            <Col className="mt-2 mb-2 mx-3 ">
              <a target="_blank" href="#/yourlivestreamNow">
                <Button color="success">Go to LiveStream Page</Button>
              </a>
            </Col>

            <Col className="mt-2 mb-2 mx-3 ">
              {localStorage.getItem("liveid") && (
                <span>
                  {LiveAstro && (
                    <>
                      <h5>You Could not Make Offline</h5>
                    </>
                  )}
                  <Button onClick={handleOffline} color="success">
                    Go offline Now
                  </Button>
                </span>
              )}
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}

export default Gotolivestream;
