import React from "react";
import { Facebook, Instagram } from "./icons";

interface IconsProps {
  width: number;
  height: number;
  fill?: string;
  name: string;
}

function IconsWrapper(props: IconsProps) {
  const { name, width, height } = props;
  return (
    <div>
      {props.name == "Facebook" && <Facebook width={width} height={height} />}
      {props.name == "Instagram" && <Instagram width={width} height={height} />}
    </div>
  );
}

export default IconsWrapper;
