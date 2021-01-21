export const setTheme = theme => {
  if (!process.browser) return;
  const doc = document.documentElement;
  const computedStyle = getComputedStyle(doc);
  const white = computedStyle.getPropertyValue('--snow-white');
  const black = computedStyle.getPropertyValue('--some-black');

  if (theme === 'dark') {
    doc.style.setProperty('--bg', black);
    doc.style.setProperty('--fg', white);
  } else {
    doc.style.setProperty('--bg', white);
    doc.style.setProperty('--fg', black);
  }
};
