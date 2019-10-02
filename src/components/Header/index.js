import React from "react";
import "../Header/header.scss";

const Header = () => {
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

  return (
    <div className="home">
      <div className="home__content">
        <h1 className="home__content__title">David Berg</h1>
        <span><b>Front End Developer</b></span>
        <p>Check out my projects and leave a message if you want to get in contact with me att the bottom of the page!</p>
      </div>
    </div>
  );
};

export default Header;
