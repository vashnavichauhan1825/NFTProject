import React from 'react';
import {Image} from 'react-native';

export const SVGImage = ({
  assetSrc: RenderImage,
  width,
  height,
  fill,
  url,
  imageStyles,
}) => {
  width = width ?? 22;
  height = height ?? 22;

  if (url) {
    return (
      <Image
        source={{
          uri: url,
          width: width,
          height: height,
        }}
        style={imageStyles}
      />
    );
  }
  return <RenderImage width={width} height={height} fill={fill} />;
};
