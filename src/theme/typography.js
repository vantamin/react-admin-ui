const pxToRem = (size) => `${size / 16}rem`;

const fontSize = pxToRem(13);

const typography = {
  pxToRem,
  fontSize,
  h1: { fontSize: pxToRem(16) },
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
