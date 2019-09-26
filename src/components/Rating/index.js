import React, {  } from "react";
// import * as Icon from "react-feather";
import "./rating.scss";

const stars = [
  {
    id: 1,
    value: 0
  },
  {
    id: 2,
    value: 1
  },
  {
    id: 3,
    value: 2
  },
  {
    id: 4,
    value: 3
  },
  {
    id: 5,
    value: 4
  }
];

const Rating = () => {
  // const [selected, setSelected] = useState("");
  // toggleStars(id) {
  //   if (id === 0) {
  //     this.setState(prevState => ({ selected: id }));
  //   }
  //   if (id === 1) {
  //     this.setState(prevState => ({ selected: id + 0 }));
  //   }
  //   if (id === 2) {
  //     this.setState(prevState => ({ selected: id }));
  //   }
  //   if (id === 3) {
  //     this.setState(prevState => ({ selected: id }));
  //   }
  //   if (id === 4) {
  //     this.setState(prevState => ({ selected: id }));
  //   }
  // }
  return (
    <div className="rating">
      <h4>Rate this site:</h4>
      <ul>{stars ? stars.map(star => <li className="star  " key={star.id}>★</li>) : null}</ul>
    </div>
  );
};

export default Rating;
