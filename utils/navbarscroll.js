export const handleScroll = (setScrolling) => {
  if (window.scrollY > 0) {
    setScrolling(true);
  } else {
    setScrolling(false);
  }
};