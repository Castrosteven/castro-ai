import { navigate } from "gatsby";
import React from "react";
import { useCompanyMetadata } from "../../hooks/useCompanyMetadata";

export const Navbar = () => {
  const { imageUrl } = useCompanyMetadata();
  return (
    <div
      style={{
        backgroundColor: "white",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          onClick={() => {
            navigate("/");
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            cursor: "pointer",
          }}
        >
          <img src={imageUrl} alt="Castro AI" width={40} height={40} />
          <h2
            style={{
              fontStyle: "unset",
            }}
          >
            Castro Ai
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 20,
          }}
        >
          <ul
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              listStyle: "none",
            }}
          >
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Our Work</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
          <button
            onClick={() => {
              alert("clicked");
            }}
            style={{
              cursor: "pointer",
              backgroundColor: "transparent",
              borderRadius: 25,
              padding: 10,
            }}
          >
            Visit our Blog
          </button>
        </div>
      </div>
    </div>
  );
};
