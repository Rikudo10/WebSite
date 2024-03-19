import { ref } from "vue";

export default (function useAbout() {
  const AboutPage = [
    {
      adventure: {
        title: "Your Adventure Awaits",
        description:
          "Acme Outdoors has everything you need to help you get started today. Check out our wonderful collection of gear that will make your next adventure complete.",
      },
      business: {
        title: "We’re the best in the business.",
        description:
          "From more than 30 years, we’ve been leading the way across Oklahoma — creating the best possible customer experience since 1989.",
        question: "Why Acme Outdoors?",
        heading: "Lifetime Warranty",
        paragraph:
          "All our products — whether we make them or not — are backed by our lifetime warranty.",
        heading2: "Shopping Experience",
        paragraph2:
          "All our products — whether we make them or not — are backed by our lifetime warranty.",
        heading3: "On-time Delivery",
        paragraph3:
          "All our products — whether we make them or not — are backed by our lifetime warranty.",
        heading4: "Best in Class Service",
        paragraph4:
          "All our products — whether we make them or not — are backed by our lifetime warranty.",
      },
      owners: {
        title: "Meet the Owners",
        paragraph:
          "John and Jane met on a backpacking adventure in Nepal. John, a former sheep shearer, went on the trip to get some clarity about his next adventures in life. Jane — a Peloton instructor — went on the trip to explore the landscape in Nepal.",
        paragraph2:
          "While on the trip, John and Jane realized that they had one common love — the love for hiking and the love for being outdoors.",
        paragraph3:
          "Returning back to their home state of Oklahoma, John and Jane hatched a plan to launch a retail store centered around their passions. ",
        paragraph4:
          "While John handled the sourcing of goods and customer service, Jane focused on the web + e-commerce side of the business, building this website in the best design platform on the web — Webflow!",
        paragraph5:
          "In 1989, John and Jane Doe officially launched Acme Outdoors, the premiere store for outdoor enthusiasts around the state.",
        paragraph6:
          "To this day, John and Jane return to Nepal yearly to ensure that they never forget their roots and where they came from.",
        title2: "John Doe",
        description2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        title3: "Jane Doe",
        description3:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      },
      ownerss: {
        title: "John Doe",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
        title2: "Jane Doe",
        description2:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
      },
      help: {
        title: "Need Help?",
        description:
          "Need help or assistance? Our team is standing by to make sure you get the help you need. Whether you need to adjust an order or delivery details, we're ready to help!",
      },
    },
  ];

  let instance = { AboutPage };

  return () => {
    return instance;
  };
})();
