import {
    imagico1,
    imagico2,
    imagico3,
    nft1,
    nft2,
    nft3,
    voice1,
    voice2,
    voice3
  } from "../images/projects";
  
  export const PORTFOLIO_ITEMS = {
    title: "NFT Dashboard Application Development.",
    subTitle: (
      <p>
        Through a wide variety of <b> mobile applications </b> , we’ve developed a
        unique visual system.
      </p>
    ),
    client: "George Wallace",
    date: "15 June 2022",
    imgArr: [imagico1, imagico2, imagico3],
    description: (
      <div style={{width: "100%"}}> 
        <p>
          There are always some stocks, which illusively scale lofty heights in a
          given time period. However, the good show doesn’t last for these
          overblown toxic stocks as their current price is not justified by their
          fundamental strength.
        </p>
        <p>
          Toxic companies are usually characterized by huge debt loads and are
          vulnerable to external shocks. Accurately identifying such bloated
          stocks and getting rid of them at the right time can protect your
          portfolio.
        </p>
        <p>
          Overpricing of these toxic stocks can be attributed to either an
          irrational enthusiasm surrounding them or some serious fundamental
          drawbacks. If you own such bubble stocks for an inordinate period of
          time, you are bound to see a massive erosion of wealth.
        </p>
        <div style={{ borderRadius: "15px", overflow: "hidden" }}>
          <img style={{width: "100%"}} src={imagico1} alt="portfolio" />
        </div>
        <p>
          However, if you can precisely spot such toxic stocks, you may gain by
          resorting to an investing strategy called short selling. This strategy
          allows one to sell a stock first and then buy it when the price falls.
        </p>
        <div style={{ borderRadius: "15px", overflow: "hidden" }}>
          <img style={{width: "100%"}} src={imagico2} alt="portfolio" />
        </div>
        <p>
          However, if you can precisely spot such toxic stocks, you may gain by
          resorting to an investing strategy called short selling. This strategy
          allows one to sell a stock first and then buy it when the price falls.
        </p>
      </div>
    ),
  };
  