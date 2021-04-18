import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import './App.css';
import NavBar from "./components/NavBar.js";
import Header from "./components/Header.js";

function App() {
  return (
    <>
      <Particles
      	clasName="particle-canvas"
      	params={{
      		particles:{
      			number:{
      				value: 30,
      				density:{
      					enable: true,
      					value_area: 900
      				}
      			},
      			shape:{
      				type: "circle",
      				stroke:{
      					width: 6,
      					color: "#f9ab00"
      				}

      			}
      		}
      	}}
      />
      <NavBar />
      <Header />
    </>
  );
}

export default App;
