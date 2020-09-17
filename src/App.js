import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="main_header">
               <div class="heart"></div>
                  <div class="center_div">
                                <img src={process.env.PUBLIC_URL+"CC.png"} alt="mypic" />
                                  <h4>🎂Many Many Returns Of The Day!🎂</h4>
                               <br />
                                 <h3> 🎂Happy Birthday To You!🎂</h3> 
                               <p>
                    🎂 We are near to Heart beats!🎂
                 <br/> 
             <br />
            🎂My Dear Brother!🎂
         </p>
        
       </div>
      </div>
    </div>
  );
}

export default App;
