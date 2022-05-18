import React, { useState } from "react";

import ColorPickerBlog from "material-ui-color-picker";

const ColorPicker = () => {
   const [color, setColor] = useState("");

   return (
      <ColorPickerBlog
         name="color"
         defaultValue="Color"
         value={color}
         onChange={(color) => setColor(color)}
      />
   );
};

export default ColorPicker;
