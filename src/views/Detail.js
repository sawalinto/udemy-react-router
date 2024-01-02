import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import { Link, useParams } from "react-router-dom";

// function Detail() {
class Detail extends Component {
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
    data: "",
  };
  componentDidMount() {
    const { id } = this.props.params;
    const data = this.state.skills.find((item) => item.id === parseInt(id));
    console.log(data);
    this.setState({ data });
  }

  render() {
    const { data } = this.state;
    return (
      <MainLayout>
        <h1>{data.name}</h1>
        <div style={container}>
          <img src={data.image} alt={data.image} style={img} />
          <div style={margin}></div>
          <div style={{ marginTop:"100px" }}>
            <p>{data.description}</p>
            <Link to="/">Back To Home</Link>
          </div>
        </div>
      </MainLayout>
    );
  }
}

export default (props) => <Detail {...props} params={useParams()} />;

const container = {
  display: "flex",
  // justifyContent: "space-between",
};
const margin = {
  width: "40px",
};

const img = {
  width: "15rem",
  height: "20rem",
  marginRight: "2rem",
  borderRadius: "10px",
};
