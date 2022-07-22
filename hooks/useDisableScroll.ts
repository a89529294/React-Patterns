import { useEffect } from "react";

function useDisableScroll(shouldDisable: boolean) {
  // The only reason useEffect here is used is because we need to ensure
  // document exists otherwise NextJS will complain
  useEffect(() => {
    shouldDisable &&
      document
        .getElementsByTagName("html")[0]
        .classList.add("h-full", "overflow-hidden");
    !shouldDisable &&
      document
        .getElementsByTagName("html")[0]
        .classList.remove("h-full", "overflow-hidden");
  }, [shouldDisable]);
}

export { useDisableScroll };
