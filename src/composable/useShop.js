import { ref } from "vue";

export default (function useShop() {
  const ShopPage = [
    {
      Cards: [
        {
          title: "Gift Card",
          price: "$ 25.00 USD ",
        },
        {
          title: "Tin Coffe Tumbler",
          price: "$ 35.00 USD ",
        },
        {
          title: "Blue Canvas Pack",
          price: "$ 95.00 USD ",
          price2: "$ 145.00 USD"
        },
        { title: "Green Canvas Pack", 
          price: "$ 125.00 USD " },
      ],
    },
  ];

  let instance = { ShopPage };

  return () => {
    return instance;
  };
})();
