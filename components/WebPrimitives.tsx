import React from 'react';
import { Image, ImageProps, Platform, View, ViewProps } from 'react-native';

interface UniversalViewProps extends ViewProps {
  webStyles?: object;
}

// A view wrapper that prevents web collapse and strips padding quirks
export const SafeView = ({ children, style, webStyles, ...props }: UniversalViewProps) => {
  return (
    <View
      {...props}
      style={[
        style,
        Platform.OS === 'web' && webStyles,
      ]}
    >
      {children}
    </View>
  );
};

interface SafeImageProps extends ImageProps {
  size?: number;
}

// An image wrapper that guarantees dimensions on the browser layout engine
export const SafeImage = ({ style, size = 24, ...props }: SafeImageProps) => {
  return (
    <Image
      {...props}
      style={[
        { width: size, height: size },
        Platform.OS === 'web' && { minWidth: size, minHeight: size },
        style,
      ]}
    />
  );
};