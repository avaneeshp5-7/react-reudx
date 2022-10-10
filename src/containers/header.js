import React from "react";
import { useSelector } from "react-redux";

const Header=()=>{
    const product=useSelector((state)=>state);
    return(
        <nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    {/* <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul> */}
    <ul class="nav navbar-nav" style={{float:'right',marginTop:11}}>
    <h3 className=""> CartItem({product?.cartItem?.cardItems?.length})</h3>
    </ul>
  </div>
</nav>
    )
}
export default Header
        // <div className="ui fixed menu">
        //     <div className="ui container center">
        //       <div className="row">
        //         <div className="col-md-10">
        //             jjj
        //         </div>
        //         <div className="col-md-2">
        //        
        //         </div>
        //       </div>
        //     </div>
        // </div>