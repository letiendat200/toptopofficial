import React from 'react'
import { useHistory } from "react-router-dom";
import '../css/StartingPage.css'

 const StartingPage = () => {    
    const navigate = useHistory();
    return(
        <div className = "canvass">
            <div>
                <div className = "heart"></div>  
            </div>
            <div>
                <div className="text">GỬI TẶNG EM, KHƯƠNG</div>
            </div>
            <div>
                <button className="button" role="button" onClick = {()=>{navigate.push('/home')}}>TOPTOP</button>
            </div>            
            
        </div>
          
    )
}

export default StartingPage;