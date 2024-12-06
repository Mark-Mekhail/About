const rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).fontSize
);

function emToPx(em) {
  return em * rootFontSize;
}

export { emToPx };
