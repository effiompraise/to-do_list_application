import React from 'react';

type IconWrapperProps = {
  icon: React.ElementType | React.ComponentType;
  size?: number | string;
  className?: string;
  style?: React.CSSProperties;
};

const IconWrapper = (props: IconWrapperProps) => {
  const { icon: Icon, ...restProps } = props;
  return <Icon {...restProps} />;
};

export default IconWrapper;