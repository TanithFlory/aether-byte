function InformationCards() {
  const cardData = [
    {
      title: "Working Hour",
      content: ["Monday to Friday", "09:00AM to 06:00PM"],
    },
    {
      title: "Location",
      content: ["Street - 127, New York", "United States", "546566"],
    },
    {
      title: "Contact",
      content: ["95959595959", "help@aetherbyte.com"],
    },
  ];

  return (
    <div className="my-[84px] flex flex-col gap-8 max-w-[250px] mx-auto">
      {cardData.map((data, index) => {
        return (
          <div key={index}>
            <h4 className="text-fs-400 font-bold text-white">{data.title}</h4>
            {[
              data.content.map((value, index) => {
                return (
                  <div className="text-fs-200 text-clr-text" key={`info-line-${index}`}>
                    {value}
                  </div>
                );
              }),
            ]}
          </div>
        );
      })}
    </div>
  );
}

export default InformationCards;
