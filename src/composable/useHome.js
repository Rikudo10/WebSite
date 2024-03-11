import { ref } from "vue";

export default (function useHome() {
    const HomePage = [
        {
          Cards: {
            title: "Your Title",
            // other properties...
          },
        },
        // more objects...
      ];;


    let instance = { HomePage  };

    return () => {
        return instance;
    };
})();