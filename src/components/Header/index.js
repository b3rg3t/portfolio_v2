import React, { Component } from "react";
import "../Header/header.scss";

export default class Header extends Component{
  // constructor(props){
  //   super(props);
  //   this.state = {};
  //   this.handleScroll = this.handleScroll.bind(this);
  // }
  // handleScroll() {
  //   this.setState({ scroll: window.scrollY });
  // }
  // componentDidUpdate(){
  //   console.log("height:" + this.state.height)
  //   this.state.scroll > this.state.top
  //   ? (document.body.style.paddingTop = `${this.state.height}px`)
  //   : (document.body.style.paddingTop = 0);
  // }
  // componentDidMount(){
  //   const el = document.querySelector(".header");
  //   console.log(el.offsetHeight, el.offsetTop)
  //   this.setState({ top: el.offsetTop, height: el.offsetHeight });
  //   window.addEventListener("scroll", this.handleScroll);
  // }
  // className={this.state.scroll > this.state.top ? "fixed-nav" : ""}
  render(){
    return(
      <div className="header">
        <div className="header__content">
          <h1 className="header__content__title">David Berg</h1>
          <span>Front End Developer</span>
        </div>
      </div>
    )
  }
}


