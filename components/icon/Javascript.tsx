// react
import * as React from "react";
// css-types
import { Property } from "csstype";
// @mui
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
// type
export interface JavascriptProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const Javascript: React.FunctionComponent<JavascriptProps> = (props) => {
  const {
    bgColor = "#001e36",
    textColor = "#31a8ff",
    viewBox = "0 0 24 24",
    focusable = false,
    "aria-hidden": ariaHidden = true,
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
      <g id="Javascript">
        <path
          d="M2 4.5C2 3.11929 3.11929 2 4.5 2H11.5C12.8807 2 14 3.11929 14 4.5V11.5C14 12.8807 12.8807 14 11.5 14H4.5C3.11929 14 2 12.8807 2 11.5V4.5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V11.5C3 12.3284 3.67157 13 4.5 13H11.5C12.3284 13 13 12.3284 13 11.5V4.5C13 3.67157 12.3284 3 11.5 3H4.5Z"
          style={{ fill: bgColor }}
        />
        <path
          d="M8.5 7.5C8.5 6.67157 9.17157 6 10 6H11.5C11.7761 6 12 6.22386 12 6.5 12 6.77614 11.7761 7 11.5 7H10C9.72386 7 9.5 7.22386 9.5 7.5V8C9.5 8.27614 9.72386 8.5 10 8.5H10.5C11.3284 8.5 12 9.17157 12 10V10.5C12 11.3284 11.3284 12 10.5 12H9C8.72386 12 8.5 11.7761 8.5 11.5 8.5 11.2239 8.72386 11 9 11H10.5C10.7761 11 11 10.7761 11 10.5V10C11 9.72386 10.7761 9.5 10.5 9.5H10C9.17157 9.5 8.5 8.82843 8.5 8V7.5zM8 6.5C8 6.22386 7.77614 6 7.5 6 7.22386 6 7 6.22386 7 6.5V10.5C7 10.7761 6.77614 11 6.5 11H5.5C5.22386 11 5 11.2239 5 11.5 5 11.7761 5.22386 12 5.5 12H6.5C7.32843 12 8 11.3284 8 10.5V6.5z"
          style={{ fill: bgColor }}
        />
      </g>
    </SvgIcon>
  );
};

export default Javascript;
