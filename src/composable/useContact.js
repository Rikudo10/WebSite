import { ref } from "vue";

export default (function useContact() {
  const ContactPage = [
    {
      ContactInfo: {
        title: "Contact Acme Outdoors",
        title2: "Contact Us",
        title3: "Get Support",
        description:
          "Just want to say hi? We'd love to hear from you. We love our customers and community!",
        description2:
          "Have an issue with an order or with a product you purchased from us? Fill out our support form.",
      },
    },
  ];

  let instance = { ContactPage };

  return () => {
    return instance;
  };
})();
