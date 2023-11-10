import "./Projectcard.css";
import React from "react";

import { NavLink } from "react-router-dom";
import Projectcard from "./Projectcard";
import Workcarddata from './Workcarddata'
export default function Work() {
  return (
    <div className="work-container">
      <h1 className="project-heading">Projects </h1>
      <div className="project-container">
              {Workcarddata.map((val, ind) => {
                  return (
                    <Projectcard
                      key={ind}
                      imgsrc={val.imgsrc}
                          title={val.title}
                          text={val.text}
                      view={val.view}
                      source={val.source}
                    />
                  );
           
       })}
      </div>
    </div>
  );
}
