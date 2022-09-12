import React from "react";
import { Text, View } from "../baseComponents";
import { ContentCard, ContentCardProps } from "../contentCard";
import {
  CardsCategoriesButtonsContainer,
  CardsCategoriesCardsContainer,
} from "./styles";

interface CardsCategoriesProps {
  title: string;
  data: Array<ContentCardProps>;
}

export const CardsCategories: React.FC<CardsCategoriesProps> = ({
  title,
  data,
}) => {
  return (
    <View>
      <CardsCategoriesButtonsContainer>
        <Text size={20} weight="bold">
          {title}
        </Text>
        <Text weight="bold">View More</Text>
      </CardsCategoriesButtonsContainer>
      <CardsCategoriesCardsContainer
        horizontal
        data={data}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        keyExtractor={(_, index) => String(index)}
        renderItem={(item) => (
          <ContentCard
            title={item.item.title}
            secondaryInfo={item.item.secondaryInfo}
            imageURI={item.item.imageURI}
          />
        )}
      />
    </View>
  );
};
