const coolestTvShow = {
    name: "BoJack Horseman",
    genre: "adult animation",
    createdBy: "Raphael Bob-Waksberg",
    favoriteCharacter: "Princess Carolyn",
    quote: "Princess Carolyn always lands on her feet.",
    seasons: 6,
  };

  for (const property in coolestTvShow) {
    console.log(property);
  }

  //Mostrando as chaves em um array

  console.log(Object.keys(coolestTvShow));
