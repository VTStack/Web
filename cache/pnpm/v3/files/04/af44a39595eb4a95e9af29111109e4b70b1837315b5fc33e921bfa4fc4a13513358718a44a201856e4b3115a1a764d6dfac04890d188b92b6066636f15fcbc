import { fillPixels, fields_4_colors } from '../color-model';

const preparedTheme = {
  main: ['red'],
  accent: ['pink'],
  text: ['gray'],
  background: ['white'],
};

describe(__filename, () => {
  it('should build matrix for 4-colors theme', () => {
    const filledMatrix = fillPixels(fields_4_colors, preparedTheme);
    expect(filledMatrix).toMatchInlineSnapshot(`
      Array [
        Array [
          "red",
          "red",
          "gray",
          "red",
        ],
        Array [
          "red",
          "red",
          "red",
          "red",
        ],
        Array [
          "pink",
          "pink",
          "pink",
          "pink",
        ],
        Array [
          "pink",
          "white",
          "pink",
          "pink",
        ],
      ]
    `);
  });
});
