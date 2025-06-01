// import React from "react";

// // 1. first thing is to different in react tsx is to handle the props
// const Box = ({ heading }: { heading: string }) => {
//   return (
//     <div>
//       <h1>{heading}</h1>
//     </div>
//   );
// };  

// export default Box;

type PropsType = {
  heading: string;
};

const Box = ({ heading }: PropsType) => {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

export default Box;
