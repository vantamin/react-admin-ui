const pxToRem = (size) => `${size / 16}rem`;

const fontSize = pxToRem(13);

const typography = {
  pxToRem,
  fontSize: 13,
  h1: { fontSize: pxToRem(25) },
  h2: { fontSize: pxToRem(23) },
  h3: { fontSize: pxToRem(21) },
  h4: { fontSize: pxToRem(19) },
  h5: { fontSize: pxToRem(17) },
  h6: { fontSize: pxToRem(15) },
  body1: { fontSize },
  body2: { fontSize },
  button: {
    fontWeight: 400,
    fontSize,
    lineHeight: 1.5,
    textTransform: undefined,
  },
};

export default typography;
