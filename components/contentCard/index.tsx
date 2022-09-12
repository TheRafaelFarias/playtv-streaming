import React from "react";
import { Text, View } from "../baseComponents";
import {
  ContentCardImage,
  ContentCardOptionsButton,
  ContentCardTitle,
} from "./styles";

export interface ContentCardProps {
  title: string;
  secondaryInfo: string;
  imageURI: string;
}

export const ContentCard: React.FC<ContentCardProps> = ({
  title,
  secondaryInfo,
  imageURI,
}) => {
  return (
    <View style={{ position: "relative" }}>
      <ContentCardImage
        source={{
          uri: imageURI,
        }}
      />
      <ContentCardTitle>{title}</ContentCardTitle>
      <Text weight="semibold" size={14} style={{ opacity: 0.7 }}>
        {secondaryInfo}
      </Text>

      <ContentCardOptionsButton>
        <Text weight="bold" size={18} style={{ lineHeight: 12 }}>
          ...
        </Text>
      </ContentCardOptionsButton>
    </View>
  );
};
