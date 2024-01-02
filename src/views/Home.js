import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link } from "react-router-dom";

class Home extends Component {
  state = {
    skills: [
      {
        id: 1,
        name: "Javascript",
        description: "Javascript description",
        image: require("../images/javascript.png"),
      },
      {
        id: 2,
        name: "React",
        description: "React description",
        image: require("../images/react.png"),
      },
      {
        id: 3,
        name: "Vue",
        description: "Vue description",
        image: require("../images/vue.png"),
      },
      {
        id: 4,
        name: "Svelte",
        description: "Svelte description",
        image: require("../images/svelte.png"),
      },
    ],
  };
  render() {
    const { skills } = this.state;
    console.log(skills)
    return (
      <MainLayout>
        <h1>Home Page</h1>
        <div style={container}>
          {skills.map((item, index) => (
            <div key={index} style={card}>
              <Link to={`/detail/${item.id}`}>
                <img src={item.image} alt="" style={img} />
                <h3>{item.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </MainLayout>
    );
  }
}

export default Home;

const container = {
  display: "flex",
  justifyContent: "space-between",
};
const card = {
  width: "20%",
  height: "15rem",
  border: "1px solid black",
  borderRadius: "10px",
};
const img = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "10px",
};
