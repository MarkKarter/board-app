import React, { useState } from 'react';
import { Popover } from 'react-bootstrap';
import { BsCCircle, BsSquare, BsStickiesFill } from 'react-icons/bs';
import { DrawingColors } from "../../utils/DrawingColor";

const CustomStickyPopover = ({ setSelectedColor}) => {

  const [selectedShape, setSelectedShape] = useState(null);

  return (
    <Popover id="popover-basic">
      <Popover.Body>
        {/* grid template with 2 column as like https://miro.com/*/}
        <div style={{ display : 'grid', gridTemplateColumns : '1fr 1fr', gap : '10px'}}>
          {DrawingColors.map((color) => (
            <div
              key={color.color}
              onClick={() => setSelectedColor(color.color)}
              // hover effect mouse in 
              onMouseEnter={(e) => {
                // inlarge box shadow
                e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 1)';
              }}
              // hover effect mouse out
              onMouseLeave={(e) => {
                e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';
              }}
              style={{
                backgroundColor: color.color,
                width: '30px',
                height: '30px',
                margin: '6px',
                cursor: 'pointer',
                // created box shawdow more natural 
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                // smooth transition
                transition: 'box-shadow 0.3s ease',
              }}
              title={color.title}
            ></div>
          ))}
        </div>
        {/* <div style={{ display: 'flex' }}>
          <div
            onClick={() => {
              setSelectedShape('Rectangle');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'Rectangle' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsStickiesFill style={{ cursor: 'pointer' }} />
          </div>
          <div
            onClick={() => {
              setSelectedShape('circle');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'circle' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsCCircle style={{ cursor: 'pointer' }} />
          </div>
          <div
            onClick={() => {
              setSelectedShape('square');
            }}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: selectedShape === 'square' ? DrawingColors.color : 'transparent',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <BsSquare style={{ cursor: 'pointer' }} />
          </div>
        </div> */}
      </Popover.Body>
    </Popover>
  );
};

export default CustomStickyPopover;