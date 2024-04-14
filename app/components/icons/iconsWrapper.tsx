import React from "react";
import { Facebook, Instagram } from "./icons";

function IconsWrapper(props) {
  const { name, width, height } = props;
  return (
    <div>
      {props.name == "Facebook" && (
        <Facebook name={name} width={width} height={height} />
      )}
      {props.name == "Instagram" && (
        <Instagram name={name} width={width} height={height} />
      )}
    </div>
  );
}

export default IconsWrapper;
