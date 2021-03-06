import React from 'react';
import { ReactTabulator } from 'react-tabulator'
import "tabulator-tables/dist/css/tabulator.min.css"; //import Tabulator stylesheet
export class TableContainer extends React.Component {
    columns = [
        { title: "Label", field: "name", width: 150, editor:"input" },
        { title: "Age", field: "age", hozAlign: "left", editor:"input" }
    ]
    constructor(props) {
      super(props);
      this.state = {
        data:  []
      };
    }
    componentWillMount() {
        const data = [ {id:1, name:"Oli Bob", age:"12", col:"red", dob:""},
            {id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
            {id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
            {id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
            {id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"}];
        this.setState({data});
    }

    pushData = () => {
      window.eventBus.publish('onDataChanged', this.state.data);
    }
    addRow = () => {
        const data = [...this.state.data];
        data.push({id: data.length + 1, name:"", age:"", col:"", dob:""});
        this.setState({data});
    }
    render() {
      return (
        <div className="container m-0 p-0 h-100">
            <div className="row w-100 p-2">
                <button className="btn btn-primary" onClick={this.addRow}>Add New Row</button>
                <button className="btn btn-success ml-1" onClick={this.pushData}>Push Data</button>
            </div>
          <div className="row w-100">
            <ReactTabulator
                data={this.state.data}
                columns={this.columns}
                tooltips={true}
                layout={"fitData"}
            />
          </div>
        </div>
      );
    }
}
