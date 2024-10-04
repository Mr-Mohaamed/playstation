import { useState, useEffect } from "react";

const useScrollNavbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);
  const [TopPage, setTopPage] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos <= 36) {
      setTopPage(true);
      setVisible(true);
    } else {
      setVisible(prevScrollPos > currentScrollPos);
      setTopPage(false);
    }
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return { TopPage, visible };
};

export default useScrollNavbar;
