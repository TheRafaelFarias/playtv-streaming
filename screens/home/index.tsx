import React from "react";
import { ScreenContainer, View } from "../../components/baseComponents";
import { PlayTVLogo } from "../../components/logo";

export const HomeScreen: React.FC = () => {
  return (
    <ScreenContainer>
      <View>
        <View>
          <PlayTVLogo mode="white" />
        </View>
      </View>
    </ScreenContainer>
  );
};
