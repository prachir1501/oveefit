import React from "react";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { library, config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Card1(props) {
  const title = props.title;
  const url = props.url;
  const trainer = props.trainer;

  return (
    // <div class="container">
      <Card className="text-white " >
        <Card.Img src={url} alt="Card image custom" />
        <Card.ImgOverlay >
          <Card.Text>
            <div class="si-text">
              <h4>{title}</h4>
              <span>
                <i>
                  <FontAwesomeIcon className="icon-m" icon={faUser} />
                </i>
                {trainer}
              </span>
            </div>
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    // </div>
  );
}
