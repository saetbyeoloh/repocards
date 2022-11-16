import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import styled from "styled-components";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios({
      method: "get",
      url: "https://api.github.com/users/saetbyeoloh/repos",
    }).then((response) => {
      setData(response);
    });
    // fetch("https://api.github.com/users/saetbyeoloh/repos")
    //   .then((response) => response.json())
    //   .then((res) => setData(res));
  }, []);

  return (
    <CardGrid>
      {data?.data.map((repo) => {
        return <Card repo={repo} />;
      })}
    </CardGrid>
  );
}

const CardGrid = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`;

export default App;
