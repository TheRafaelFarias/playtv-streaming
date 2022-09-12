import { FlatList } from "react-native";
import styled from "styled-components/native";
import { View } from "../baseComponents";

export const CardsCategoriesButtonsContainer = styled(View).attrs({
  direction: "horizontal",
  horizontalSpaceMode: "space-between",
})`
  margin-bottom: 12px;
`;

export const CardsCategoriesCardsContainer = styled.FlatList`
  overflow: visible;
` as unknown as typeof FlatList;
