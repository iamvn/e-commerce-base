import React from "react";

export function Facebook(props) {
  const { width, height, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={width || "24"}
      height={height || "24"}
      fill={fill || "#1877f2"}
    >
      <path d="M22.675 0H1.325C.594 0 0 .594 0 1.325v21.35C0 23.406.594 24 1.325 24h11.49V14.708h-3.158v-3.643h3.158V8.409c0-3.123 1.907-4.825 4.693-4.825 1.334 0 2.481.1 2.814.145v3.262h-1.93c-1.51 0-1.803.716-1.803 1.767v2.318h3.605l-.469 3.643h-3.136V24h6.145c.731 0 1.325-.594 1.325-1.325V1.325C24 .594 23.406 0 22.675 0z" />
    </svg>
  );
}

export function Instagram(props) {
  const { width, height, fill } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width={width || "24"}
      height={height || "24"}
      fill={fill || "#E1306C"}
    >
      <path d="M352 0H160C71.6 0 0 71.6 0 160v192c0 88.4 71.6 160 160 160h192c88.4 0 160-71.6 160-160V160C512 71.6 440.4 0 352 0zm96 352c0 52.9-43.1 96-96 96H160c-52.93 0-96-43.1-96-96V160c0-52.93 43.07-96 96-96h192c52.9 0 96 43.07 96 96v192zm-192-16c0-44.18-35.82-80-80-80s-80 35.82-80 80 35.82 80 80 80 80-35.82 80-80zm112-192c0 17.67-14.33 32-32 32s-32-14.33-32-32 14.33-32 32-32 32 14.33 32 32z" />
    </svg>
  );
}
