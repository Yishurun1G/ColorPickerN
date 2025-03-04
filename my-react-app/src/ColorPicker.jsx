import React, { useState } from "react";  // Importing React and the useState hook

function ColorPicker() {
    // State to store the selected color, initialized to white
    const [color, setColor] = useState("#FFFFFF"); 

    // Function to update color when user selects a new color
    function handleColorChange(event) {
        setColor(event.target.value);
    }

    return (
        <>
            {/* Main container for the color picker */}
            <div className="color-picker-container">
                <h1>Color Picker</h1>

                {/* Display area showing the selected color */}
                <div className="color-display" style={{ backgroundColor: color, padding: "20px", borderRadius: "10px" }}>
                    <p>Selected color: {color}</p>  {/* Fixed typo: 'coloor' → 'color' */}
                </div>

                {/* Color input for selecting a color */}
                <label>Select a color:</label>
                <input type="color" value={color} onChange={handleColorChange} />
            </div>

            {/* Author and date information */}
            <p>
                This is made by Yishurun Getachew. <br />
                03/04/2025!
            </p>

            {/* Thank you message */}
            <div className="thankful">  {/* Fixed typo: 'thankfull' → 'thankful' */}
                <h1>Thank you!</h1>
            </div>
        </>
    );
}

export default ColorPicker;  // Exporting the component for use in other parts of the app
