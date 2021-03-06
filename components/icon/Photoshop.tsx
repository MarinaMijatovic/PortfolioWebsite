// react
import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// type
export interface PhotoshopProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const Photoshop: React.FunctionComponent<PhotoshopProps> = (props) => {
  const {
    bgColor = '#001e36',
    textColor = '#31a8ff',
    viewBox = '0 0 24 24',
    focusable = false,
    'aria-hidden': ariaHidden = true,
    ...otherProps
  } = props;

  return (
    <SvgIcon
      viewBox={viewBox}
      focusable={focusable}
      aria-hidden={ariaHidden}
      {...otherProps}
    >
      <path
       d="M8.5 7.5C8.5 6.67157 9.17157 6 10 6H11.5C11.7761 6 12 6.22386 12 6.5 12 6.77614 11.7761 7 11.5 7H10C9.72386 7 9.5 7.22386 9.5 7.5V8C9.5 8.27614 9.72386 8.5 10 8.5H10.5C11.3284 8.5 12 9.17157 12 10V10.5C12 11.3284 11.3284 12 10.5 12H9C8.72386 12 8.5 11.7761 8.5 11.5 8.5 11.2239 8.72386 11 9 11H10.5C10.7761 11 11 10.7761 11 10.5V10C11 9.72386 10.7761 9.5 10.5 9.5H10C9.17157 9.5 8.5 8.82843 8.5 8V7.5zM8 6.5C8 6.22386 7.77614 6 7.5 6 7.22386 6 7 6.22386 7 6.5V10.5C7 10.7761 6.77614 11 6.5 11H5.5C5.22386 11 5 11.2239 5 11.5 5 11.7761 5.22386 12 5.5 12H6.5C7.32843 12 8 11.3284 8 10.5V6.5z"
        style={{ fill: textColor }}
      />
      <g id="Ps">
        <path
         d="M 0 2 L 0 2.5 L 0 14 L 16 14 L 16 2 L 0 2 z M 1 3 L 9 3 L 9 4 L 1 4 L 1 3 z M 10 3 L 11 3 L 11 4 L 10 4 L 10 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 14 3 L 15 3 L 15 4 L 14 4 L 14 3 z M 1 5 L 15 5 L 15 13 L 1 13 L 1 5 z M 9.0449219 5.7773438 L 6.0605469 11.777344 L 6.9550781 12.222656 L 9.9394531 6.2226562 L 9.0449219 5.7773438 z M 4.6464844 6.6464844 L 2.2929688 9 L 4.6464844 11.353516 L 5.3535156 10.646484 L 3.7070312 9 L 5.3535156 7.3535156 L 4.6464844 6.6464844 z M 11.353516 6.6464844 L 10.646484 7.3535156 L 12.292969 9 L 10.646484 10.646484 L 11.353516 11.353516 L 13.707031 9 L 11.353516 6.6464844 z "
          style={{ fill: textColor }}
        />
        <path
         d="M 0 2 L 0 2.5 L 0 14 L 16 14 L 16 2 L 0 2 z M 1 3 L 9 3 L 9 4 L 1 4 L 1 3 z M 10 3 L 11 3 L 11 4 L 10 4 L 10 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 14 3 L 15 3 L 15 4 L 14 4 L 14 3 z M 1 5 L 15 5 L 15 13 L 1 13 L 1 5 z M 9.0449219 5.7773438 L 6.0605469 11.777344 L 6.9550781 12.222656 L 9.9394531 6.2226562 L 9.0449219 5.7773438 z M 4.6464844 6.6464844 L 2.2929688 9 L 4.6464844 11.353516 L 5.3535156 10.646484 L 3.7070312 9 L 5.3535156 7.3535156 L 4.6464844 6.6464844 z M 11.353516 6.6464844 L 10.646484 7.3535156 L 12.292969 9 L 10.646484 10.646484 L 11.353516 11.353516 L 13.707031 9 L 11.353516 6.6464844 z "
          style={{ fill: bgColor }}
        />
      </g>
    </SvgIcon>
  );
};

export default Photoshop;
