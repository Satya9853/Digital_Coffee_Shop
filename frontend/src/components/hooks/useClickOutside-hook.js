import React, { useEffect } from "react";

const useClickOutside = (ref, fun) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      fun();
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
  }, [ref]);
};

export default useClickOutside;
