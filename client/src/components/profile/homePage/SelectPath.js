import React from 'react';
import './homepage.css'
import '@progress/kendo-theme-default/dist/all.css';
import Select from 'react-select';
// import { DropDownButton } from '@progress/kendo-react-buttons';

const scaryAnimals = [
  { label: "Designer", value: 1 },
  { label: "Manufacturer", value: 2 },
  { label: "Buyer", value: 3 }
];

const DropDownButton = () => (
  <div className="app">
    <div className="container">
      <Select options={scaryAnimals} />
    </div>
  </div>
);

export default class SelectPath extends React.Component {
    state = {
        designer: 1,
        manufacturer: 2,
        buyer:3
    }

    render() {
      return (
          <div>
            <div className="container">
                <h1 className="SelectPath-title"><DropDownButton /></h1>
                <p className="SelectPath-small-title"> I am a </p>
              </div>
          </div>
      );
    }
  }
