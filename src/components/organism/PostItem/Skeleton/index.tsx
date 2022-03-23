import React, { useCallback, useEffect } from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  withRepeat,
  cancelAnimation,
} from 'react-native-reanimated';
import theme from '../../../../styles/theme';
import { Container, PostImageView, Content, ViewTitle, ViewResume, ViewReadMore } from './styles';

const PostItemSkeleton = (): JSX.Element => {
  const defaultSharedValue = useSharedValue(-50);

  const ViewAnimationStyleDefault = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: defaultSharedValue.value }],
    };
  });

  const startAnimation = useCallback(() => {
    defaultSharedValue.value = withRepeat(withTiming(250, { duration: 2000 }), 0);
  }, [defaultSharedValue]);

  const stopAnimation = useCallback(() => {
    cancelAnimation(defaultSharedValue);
  }, [defaultSharedValue]);

  useEffect(() => {
    startAnimation();
    return () => stopAnimation();
  }, [startAnimation, stopAnimation]);

  return (
    <Container style={theme.shadowStyle}>
      <PostImageView>
        <Animated.View
          style={[
            {
              width: '30%',
              height: '100%',
              opacity: 0.4,
              backgroundColor: theme.colors.white,
            },
            ViewAnimationStyleDefault,
          ]}
        />
      </PostImageView>
      <Content>
        <ViewTitle>
          <Animated.View
            style={[
              {
                width: '30%',
                height: '100%',
                opacity: 0.4,
                backgroundColor: theme.colors.white,
              },
              ViewAnimationStyleDefault,
            ]}
          />
        </ViewTitle>
        <ViewResume>
          <Animated.View
            style={[
              {
                width: '30%',
                height: '100%',
                opacity: 0.4,
                backgroundColor: theme.colors.white,
              },
              ViewAnimationStyleDefault,
            ]}
          />
        </ViewResume>
        <ViewResume>
          <Animated.View
            style={[
              {
                width: '30%',
                height: '100%',
                opacity: 0.4,
                backgroundColor: theme.colors.white,
              },
              ViewAnimationStyleDefault,
            ]}
          />
        </ViewResume>
        <ViewReadMore>
          <Animated.View
            style={[
              {
                width: '30%',
                height: '100%',
                opacity: 0.4,
                backgroundColor: theme.colors.white,
              },
              ViewAnimationStyleDefault,
            ]}
          />
        </ViewReadMore>
      </Content>
    </Container>
  );
};

export default PostItemSkeleton;
