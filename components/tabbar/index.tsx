import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { DownloadsIcon } from "../../icons/downloads";
import { HomeIcon } from "../../icons/home";
import { MyStuffIcon } from "../../icons/mystuff";
import { SearchIcon } from "../../icons/search";
import {
  BottomTabBarButton,
  BottomTabBarContainer,
  BottomTabBarText,
} from "./styles";

const ICONS = {
  Home: HomeIcon,
  Search: SearchIcon,
  "My Stuff": MyStuffIcon,
  Downloads: DownloadsIcon,
};

export const BottomTabBar: React.FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <BottomTabBarContainer>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = route.name;
        const isFocused = state.index === index;

        const Icon = ICONS[route.name as keyof typeof ICONS];

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate(route.name, {
              merge: true,
            });
          }
        };

        return (
          <BottomTabBarButton isFocused={isFocused} onPress={onPress}>
            <Icon isActive={isFocused} />
            <BottomTabBarText>{label}</BottomTabBarText>
          </BottomTabBarButton>
        );
      })}
    </BottomTabBarContainer>
  );
};
