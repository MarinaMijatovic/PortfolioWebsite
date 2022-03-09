// react
import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
// type
export interface HTMLProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const HTML: React.FunctionComponent<HTMLProps> = (props) => {
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
       d="M 0 2 L 0 2.5 L 0 14 L 16 14 L 16 2 L 0 2 z M 1 3 L 9 3 L 9 4 L 1 4 L 1 3 z M 10 3 L 11 3 L 11 4 L 10 4 L 10 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 14 3 L 15 3 L 15 4 L 14 4 L 14 3 z M 1 5 L 15 5 L 15 13 L 1 13 L 1 5 z M 9.0449219 5.7773438 L 6.0605469 11.777344 L 6.9550781 12.222656 L 9.9394531 6.2226562 L 9.0449219 5.7773438 z M 4.6464844 6.6464844 L 2.2929688 9 L 4.6464844 11.353516 L 5.3535156 10.646484 L 3.7070312 9 L 5.3535156 7.3535156 L 4.6464844 6.6464844 z M 11.353516 6.6464844 L 10.646484 7.3535156 L 12.292969 9 L 10.646484 10.646484 L 11.353516 11.353516 L 13.707031 9 L 11.353516 6.6464844 z "
        style={{ fill: bgColor }}
      />
      <g id="HTML">
        <path
         d="M 0 2 L 0 2.5 L 0 14 L 16 14 L 16 2 L 0 2 z M 1 3 L 9 3 L 9 4 L 1 4 L 1 3 z M 10 3 L 11 3 L 11 4 L 10 4 L 10 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 14 3 L 15 3 L 15 4 L 14 4 L 14 3 z M 1 5 L 15 5 L 15 13 L 1 13 L 1 5 z M 9.0449219 5.7773438 L 6.0605469 11.777344 L 6.9550781 12.222656 L 9.9394531 6.2226562 L 9.0449219 5.7773438 z M 4.6464844 6.6464844 L 2.2929688 9 L 4.6464844 11.353516 L 5.3535156 10.646484 L 3.7070312 9 L 5.3535156 7.3535156 L 4.6464844 6.6464844 z M 11.353516 6.6464844 L 10.646484 7.3535156 L 12.292969 9 L 10.646484 10.646484 L 11.353516 11.353516 L 13.707031 9 L 11.353516 6.6464844 z "
          style={{ fill: bgColor }}
        />
        <path
         d="M 0 2 L 0 2.5 L 0 14 L 16 14 L 16 2 L 0 2 z M 1 3 L 9 3 L 9 4 L 1 4 L 1 3 z M 10 3 L 11 3 L 11 4 L 10 4 L 10 3 z M 12 3 L 13 3 L 13 4 L 12 4 L 12 3 z M 14 3 L 15 3 L 15 4 L 14 4 L 14 3 z M 1 5 L 15 5 L 15 13 L 1 13 L 1 5 z M 9.0449219 5.7773438 L 6.0605469 11.777344 L 6.9550781 12.222656 L 9.9394531 6.2226562 L 9.0449219 5.7773438 z M 4.6464844 6.6464844 L 2.2929688 9 L 4.6464844 11.353516 L 5.3535156 10.646484 L 3.7070312 9 L 5.3535156 7.3535156 L 4.6464844 6.6464844 z M 11.353516 6.6464844 L 10.646484 7.3535156 L 12.292969 9 L 10.646484 10.646484 L 11.353516 11.353516 L 13.707031 9 L 11.353516 6.6464844 z "
          style={{ fill: bgColor }}
        />
      </g>
    </SvgIcon>
  );
};

export default HTML;
