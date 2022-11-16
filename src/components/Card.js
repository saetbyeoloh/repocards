import React from "react";
import styled from "styled-components";

const Cardfrom = styled.div`
  width: 400px;
  height: 450px;
  overflow: auto;
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
`;

const Card = ({ repo }) => {
  // const { data } = props;
  return <Cardfrom>{JSON.stringify(repo.name)}</Cardfrom>;
};

export default Card;
