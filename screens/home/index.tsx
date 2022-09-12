import React, { useEffect, useState } from "react";
import { ScreenContainer, View } from "../../components/baseComponents";
import { CardsCategories } from "../../components/cardsCategories";
import { Header } from "../../components/header";

export const HomeScreen: React.FC = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const array = data;

    for (let index = 0; index < 10; index++) {
      array.push({
        title: "Avengers Endgame",
        secondaryInfo: "Released in 2019",
        imageURI:
          "https://imgs.search.brave.com/V_T4IdAiqZ5jOpjQuDsfJKSUnR5RZ5gr2YnSdDeBvoA/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly9pbWFn/ZXMud2FsbHBhcGVy/c2Rlbi5jb20vaW1h/Z2UvZG93bmxvYWQv/YXZlbmdlcnMtZW5k/Z2FtZS1iYW5uZXJf/NjQ3OTVfNzE3M3gz/MDAwLmpwZw",
      });
    }

    setData(array);
  }, []);

  return (
    <ScreenContainer>
      <Header />
      <View style={{ padding: 10 }}>
        <CardsCategories title="For You" data={data} />
      </View>
    </ScreenContainer>
  );
};
