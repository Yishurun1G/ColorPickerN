import React,{useState} from "react";
function ColorPicker(){
    const[color, setColor]= useState("#FFFFFF");
function handleColorChange(event){
   setColor(event.target.value);
}
return(
    <>
    <div className="color-picker-container">
<h1>Color Picker</h1>
   <div className="color-display" style={{backgroundColor:color}}>
<p>Selected coloor: {color}</p>
   </div>
   <label>Select a color:</label>
   <input type="color" value={color} onChange={handleColorChange}/>
    </div>
   <p>This is made by Yishururn Getachew guided by youtube videos. <br />
   03/04/2025!
   </p>
   <div className="thankfull"><h1>Thankyou!</h1></div>
   </>
);
}
export default ColorPicker