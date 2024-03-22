// import React from "react";
// import "./Box.css"; // CSS file for styling

// function BoxSection() {
// return(
//   <div className="main-container">
//     <div className="box">
//          <img src="https://pbs.twimg.com/profile_images/881830328435789824/Dq13-2aT_400x400.jpg" alt="1098" />
//     </div>
//     <div className="box">
//       <img src="https://play-lh.googleusercontent.com/s2Qw2RPqI3G2PKQGeP7BcCV4AbCaRQTq7yAZEB2uyFLhj4UuYvtrRrfAJNCKQoXt59Y" alt="181" />
//     </div>
//     <div className="box"></div>
//          <img src="https://www.the420.in/wp-content/uploads/2023/01/cyber-crime-victim-dial-1930-for-helpline.jpg" alt="1930"  />
//   </div>
//   );
// }

// export default BoxSection;

import React from "react";
import "./Box.css"; // CSS file for styling

function BoxSection() {
  return (
    <div className="main-container">
      <div className="box" style={{ height: "35vh", width: "25vw" }}>
        <img
          src="https://pbs.twimg.com/profile_images/881830328435789824/Dq13-2aT_400x400.jpg"
          alt="1098"
        />
      </div>
      <div className="box" style={{ height: "35vh", width: "25vw" }}>
        <img
          src="https://play-lh.googleusercontent.com/s2Qw2RPqI3G2PKQGeP7BcCV4AbCaRQTq7yAZEB2uyFLhj4UuYvtrRrfAJNCKQoXt59Y"
          alt="181"
        />
      </div>
      <div className="box" style={{ height: "35vh", width: "25vw" }}>
        <img
          src="https://www.the420.in/wp-content/uploads/2023/01/cyber-crime-victim-dial-1930-for-helpline.jpg"
          alt="1930"
        />
      </div>
    </div>
  );
}

export default BoxSection;