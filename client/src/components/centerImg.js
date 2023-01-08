import React from "react";
import "./centerImg.css";
function CenterImg() {
 
 
 // This following section will display the form that takes the input from the user.
 return(
  <div>

  {/* <div className="container" style={{backgroundImage:"url(/main.gif)", backgroundRepeat:"no-repeat",backgroundSize:"contain", 
    height:1080,width:1920}}>
    
  </div> */}
  <img className="container" src="/main.gif" alt="main Photo"/>;

  </div>
)
}
export default CenterImg;