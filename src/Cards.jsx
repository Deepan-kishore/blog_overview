import React from "react";
import { FaAngleUp } from "react-icons/fa";

const Cards = () => {
  const data = ["post", "pages", "comments", "users", "subscribers"];
  return (
    <div className="p-4  ">
      <h6 className="text-secondary">DASHBOARD</h6>
      <h3>Blog Overview</h3>
      <div class="row">
        {data.map((item) => {
          return (
            <div class="col-sm-6 col-md-2  mb-3 mb-sm-0">
              <div class="card ">
                <div class="card-body text-center ">
                  <p class="card-title text-secondary text-uppercase">{item}</p>
                  <p class="card-text card-number ">3232</p>
                  <p class="card-text">
                    {" "}
                    <FaAngleUp
                      style={{ marginBottom: "6px", color: "green" }}
                    />{" "}
                    4.8%
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
