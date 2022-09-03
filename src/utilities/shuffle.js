
const shuffle = () => {
  const assets = [
    { image: "/assets/adobe.svg" },
    { image: "/assets/airbnb.svg" },
    { image: "/assets/amazon.svg" },
    { image: "/assets/amazonaws.svg" },
    { image: "/assets/bitcoinsv.svg" },
    { image: "/assets/react.svg" },
    { image: "/assets/steam.svg" },
    { image: "/assets/steamdb.svg" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
