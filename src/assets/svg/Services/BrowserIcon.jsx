import * as React from "react";
import webdev from "../../img/devops.png"; // Correct relative path to the image


function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={60}
      height={60}
      viewBox="0 0 57.336 32.531"
      {...props}
    >
      <image
        href={webdev} // Use the imported image
        x="0" // Adjust the x position as needed
        y="0" // Adjust the y position as needed
        width="56"
        height="45"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

export default SvgComponent;
