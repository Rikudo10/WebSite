import { ref } from "vue";

export default (function useHome() {
    const HomePage = [
        {
          hero: {
            title: "Serving you since 1989. ",
            description: "Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.   ",
            title2: "How we're keeping you safe during COVID-19",
            description2: "As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.",
          },
          cards: [{
            number: "01",
            title: "SHOP PRODUCTS",
            description: "Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!",
          },
        {
            number: "02",
            title: "DONATE",
            description: "Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.",
        },
        {
          number: "03",
          title: "BUY GIFT CARDS",
          description: "Have all the outdoor gear you need for now? Buy a gift card and use it later or share it with friends and family.",
      },
        ],

        },
        // more objects...
      ];;


    let instance = { HomePage  };

    return () => {
        return instance;
    };
})();