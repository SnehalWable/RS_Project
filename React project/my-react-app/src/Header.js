import React from 'react';
import {Footer} from './footer';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red",
                   brand: "Mercedez"};
    this.oncolorChange = this.oncolorChange.bind(this);
    this.onBrandChange = this.onBrandChange.bind(this);
  }
//   static getDerivedStateFromProps(props, state) {
//    return {favoritecolor: props.favcol };
//   }


  oncolorChange() {
    this.setState({
        favoritecolor: "blue"
    });
  }

  onBrandChange() {
    this.setState({
        brand: "honda"
    });
  }
  render() {
    return (
        <div>
      <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      <button onClick = {this.oncolorChange}  ></button>
      <Footer brand = {this.state.brand} 
               changeBrand = {this.onBrandChange}/>
      </div>
    );
  }
}
