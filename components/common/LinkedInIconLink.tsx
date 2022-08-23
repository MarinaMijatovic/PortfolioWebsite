// react
import * as React from 'react';
// @mui icon
import { LinkedIn } from '@mui/icons-material';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
interface LinkedInIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const LinkedInIconLink: React.FunctionComponent<LinkedInIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = '#',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label="LinkedIn button" href={href} {...otherProps}>
      <LinkedIn color={iconColor} fontSize={iconSize} />
    </IconButtonLink>
  );
};

export default LinkedInIconLink;
