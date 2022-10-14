import React from "react";
import { Link } from "react-router-dom";
export default function Error404() {
    
  return (
    <>
    
      <div id="error">
        <div className="cont_principal cont_error_active">
          <div className="cont_error">
            <h1>404 </h1>
            <p>Click to go home page</p>
            <div >
                <Link to="/" type="button" class="btn btn-primary">Home</Link>
            </div>
          </div>
          <div className="cont_aura_1"></div>
          <div className="cont_aura_2"></div>
        </div>
      </div>
    </>
  );
}
