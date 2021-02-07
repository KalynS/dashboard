
import './App.css';
import CardGallery from "./components/CardGallery";
import DealCycleGallery from "./components/DealCycleGallery";
import React, { Component } from 'react';
import Data from "./data.json";
import Dealdata from "./assets/dealCycleData.json";

class App extends Component {
  constructor() {
    super()
    this.state = {
      salesPersonData: Data,
      DealCycleData: Dealdata
    }
  }
  render() {
    // console.log(data)
    return (
      <div>
        <DealCycleGallery DealCycleData={this.state.DealCycleData}/>
        <CardGallery salesPersonData={this.state.salesPersonData} />
      </div>
    );
  }
}

export default App;