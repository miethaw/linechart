import React, { Component } from 'react';
import axios from 'axios'

import Chart from '../src/features/LineChart/Component/lineChart'


class App extends Component {
  constructor() {
    super();

    this.state = {
      Product: "",
      Qty: "",
      amount: "",
      Unit: "",
      x: "",
      y: "",
      Cdata: [],
      data: [],
      AMT:[]
    }
  }

  componentDidMount() {
    axios.get(`http://192.168.100.112:7000/get`)
      .then((response) => {
        console.log("response: ", response.data.payload)
        this.setState({ AMT: response.data.payload.map(a => a.Amount)})
        this.setState({ data: response.data.payload.map(d => ({ x:[d.Qty, d.Unit,  d.Product],  y: d.Amount })) });
        console.log("data", this.state.data)
        console.log("Amt", this.state.AMT)

      });

  }
  
  render() {
    const { data } = this.state
    const { AMT } = this.state
    const chartData = [
      {
        id: "Amount",
        color: "hsl(88, 70%, 50%)",
        data
      }
    ]
    return (
      <div>
        <Chart data={chartData} maxValue={AMT} />
      </div>
    )
  }
}

export default App;


