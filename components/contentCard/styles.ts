import styled from "styled-components/native";
import { Text, View } from "../baseComponents";

export const ContentCardImage = styled.Image`
  width: 135px;
  height: 210px;
  border-radius: 5px;
  margin-bottom: 8px;
`;

export const ContentCardTitle = styled(Text).attrs({
  weight: "bold",
  size: 18,
  numberOfLines: 1,
})`
  max-width: 135px;
`;

export const ContentCardOptionsButton = styled(View).attrs({
  horizontalSpaceMode: "center",
  verticalSpaceMode: "center",
})`
  position: absolute;

  right: 5px;
  top: 5px;
  width: 28px;
  height: 28px;
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 100px;
`;
