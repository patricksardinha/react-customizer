import React from 'react'
import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import state from '../store';

import CustomExitButton from './CustomExitButton'

const ColorPicker = ({ handleExitClick }) => {
  const snap = useSnapshot(state);

  const setItemColor = (item, newColor) => {
    switch (item) {
      case 'tshirt':
        state.tshirtColor = newColor.hex
        break;
      case 'shoes':
        state.shoesColor = newColor.hex 
        break;
      default:
        break;
    }
  }

  return (
    <div className='flex absolute left-full ml-3'>
      <SketchPicker 
        color={snap.color}
        disableAlpha
        presetColors={[
          "#CCC",
          "#EFBD4E",
          "#80C670",
          "#726DE8",
          "#353934",
          "#2CCCE4",
          "#FF8A65",
          "#7098DA",
          "#C19277",
          "#FF96AD",
          "#512314",
          "#5F123D",
        ]}
        onChange={(color) => setItemColor(snap.currentItem, color)}
      />
      <CustomExitButton 
        handleClick={handleExitClick}
      />
    </div>
  )
}

export default ColorPicker