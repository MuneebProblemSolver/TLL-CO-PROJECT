// import * as React from "react";


// function SvgComponent(props) {
//   return (
//     <svg xmlns="https://www.freeconvert.com/png-to-svg/download
//     https://s59-hzfi.freeconvert.com/task/678397ac5557a50604c083f0/logo.svg" width={27} height={40} viewBox="0 0 27 40" {...props}>
//       <g data-name="Group 101" transform="translate(-375 -21)">
//         <rect data-name="Rectangle 16" width={13} height={8} rx={4} transform="translate(375 53)" fill="#f40051" />
//         <rect data-name="Rectangle 11" width={20} height={8} rx={4} transform="translate(382 21)" fill="#f2b300" />
//         <rect data-name="Rectangle 15" width={20} height={8} rx={4} transform="translate(382 37)" fill="#7620ff" />
//         <rect data-name="Rectangle 12" width={8} height={8} rx={4} transform="translate(375 29)" fill="#4cd5c5" />
//       </g>
//     </svg>
//   );
// }

// export default SvgComponent;
import * as React from "react";
import logo from "../img/logo.png"; // Correct relative path to the image

function SvgComponent() {
  return (
    <svg
      width={77}
      height={75}
      viewBox="0 0 10 40"
    >
      <image
        href={logo} // Use the imported image
        x="0" // Adjust the x position as needed
        y="0" // Adjust the y position as needed
        width="37"
        height="35"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
}

export default SvgComponent;
