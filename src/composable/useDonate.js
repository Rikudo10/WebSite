import { ref } from "vue";

export default (function useDonate() {
    const DonatePage = [
        {
          DonateInfo: {
            title: "Here at Acme Outdoors ",
            description: "Acme Outdoors is more than just a company, we're a community of people who care for one another and for our city. During this time, due to shelter in place orders, only a select few of our staff are able to work. Any donations you make to Acme will help make sure our employees are cared for and can stay safe in these uncertain times.",
            title2: "every dollar counts",
          },
        }
      ];;


    let instance = { DonatePage  };

    return () => {
        return instance;
    };
})();