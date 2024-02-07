document.getElementById("convert").addEventListener('click', convert);
document.getElementById("clear").addEventListener('click', resetInputs);

class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    has(value) {
        return value >= this.start && value <= this.end;
    }
}

const rangesC = [
  new Range(11.996, 12.124),
  new Range(11.875, 11.995),
  new Range(11.750, 11.874),
  new Range(11.666, 11.749),
  new Range(11.625, 11.665),
  new Range(11.500, 11.624),
  new Range(11.459, 11.499),
  new Range(11.333, 11.458),
  new Range(11.250, 11.332),
  new Range(11.125, 11.249),
  new Range(10.996, 11.124),
  new Range(10.875, 10.995),
  new Range(10.750, 10.874),
  new Range(10.666, 10.749),
  new Range(10.625, 10.665),
  new Range(10.500, 10.624),
  new Range(10.459, 10.499),
  new Range(10.333, 10.458),
  new Range(10.250, 10.332),
  new Range(10.125, 10.249),
  new Range(9.996, 10.124),
  new Range(9.875, 9.995),
  new Range(9.750, 9.874),
  new Range(9.666, 9.749),
  new Range(9.625, 9.665),
  new Range(9.500, 9.624),
  new Range(9.459, 9.499),
  new Range(9.333, 9.458),
  new Range(9.250, 9.332),
  new Range(9.125, 9.249),
  new Range(8.996, 9.124),
  new Range(8.875, 8.995),
  new Range(8.750, 8.874),
  new Range(8.666, 8.749),
  new Range(8.625, 8.665),
  new Range(8.500, 8.624),
  new Range(8.459, 8.499),
  new Range(8.333, 8.458),
  new Range(8.250, 8.332),
  new Range(8.125, 8.249),
  new Range(7.996, 8.124),
  new Range(7.875, 7.995),
  new Range(7.750, 7.874),
  new Range(7.666, 7.749),
  new Range(7.625, 7.665),
  new Range(7.500, 7.624),
  new Range(7.459, 7.499),
  new Range(7.333, 7.458),
  new Range(7.250, 7.332),
  new Range(7.125, 7.249),
  new Range(6.996, 7.124),
  new Range(6.875, 6.995),
  new Range(6.750, 6.874),
  new Range(6.666, 6.749),
  new Range(6.625, 6.665),
  new Range(6.500, 6.624),
  new Range(6.459, 6.499),
  new Range(6.333, 6.458),
  new Range(6.250, 6.332),
  new Range(6.125, 6.249),
  new Range(5.996, 6.124),
  new Range(5.875, 5.995),
  new Range(5.750, 5.874),
  new Range(5.666, 5.749),
  new Range(5.625, 5.665),
  new Range(5.500, 5.624),
  new Range(5.459, 5.499),
  new Range(5.333, 5.458),
  new Range(5.250, 5.332),
  new Range(5.125, 5.249),
  new Range(4.996, 5.124),
  new Range(4.875, 4.995),
  new Range(4.750, 4.874),
  new Range(4.666, 4.749),
  new Range(4.625, 4.665),
  new Range(4.500, 4.624),
  new Range(4.459, 4.499),
  new Range(4.333, 4.458),
  new Range(4.250, 4.332),
  new Range(4.125, 4.249),
  new Range(3.996, 4.124),
  new Range(3.875, 3.995),
  new Range(3.750, 3.874),
  new Range(3.666, 3.749),
  new Range(3.625, 3.665),
  new Range(3.500, 3.624),
  new Range(3.459, 3.499),
  new Range(3.333, 3.458),
  new Range(3.250, 3.332),
  new Range(3.125, 3.249),
  new Range(2.996, 3.124),
  new Range(2.875, 2.995),
  new Range(2.750, 2.874),
  new Range(2.666, 2.749),
  new Range(2.625, 2.665),
  new Range(2.500, 2.624),
  new Range(2.459, 2.499),
  new Range(2.333, 2.458),
  new Range(2.250, 2.332),
  new Range(2.125, 2.249),
  new Range(1.996, 2.124),
  new Range(1.875, 1.995),
  new Range(1.750, 1.874),
  new Range(1.666, 1.749),
  new Range(1.625, 1.665),
  new Range(1.500, 1.624),
  new Range(1.459, 1.499),
  new Range(1.333, 1.458),
  new Range(1.250, 1.332),
  new Range(1.125, 1.249),
  new Range(0.996, 1.124),
  new Range(0.875, 0.995),
  new Range(0.750, 0.874),
  new Range(0.666, 0.749),
  new Range(0.625, 0.665),
  new Range(0.500, 0.624),
  new Range(0.459, 0.499),
  new Range(0.333, 0.458),
  new Range(0.250, 0.332),
  new Range(0.125, 0.249),
  new Range(0.000, 0.124),
];

const outputValuesC = [
  11.996,
  11.875,
  11.750,
  11.666,
  11.625,
  11.500,
  11.459,
  11.333,
  11.250,
  11.125,
  10.996,
  10.875,
  10.750,
  10.666,
  10.625,
  10.500,
  10.459,
  10.333,
  10.250,
  10.125,
  9.996,
  9.875,
  9.750,
  9.666,
  9.625,
  9.500,
  9.459,
  9.333,
  9.250,
  9.125,
  8.996,
  8.875,
  8.750,
  8.666,
  8.625,
  8.500,
  8.459,
  8.333,
  8.250,
  8.125,
  7.996,
  7.875,
  7.750,
  7.666,
  7.625,
  7.500,
  7.459,
  7.333,
  7.250,
  7.125,
  6.996,
  6.875,
  6.750,
  6.666,
  6.625,
  6.500,
  6.459,
  6.333,
  6.250,
  6.125,
  5.996,
  5.875,
  5.750,
  5.666,
  5.625,
  5.500,
  5.459,
  5.333,
  5.250,
  5.125,
  4.996,
  4.875,
  4.750,
  4.666,
  4.625,
  4.500,
  4.459,
  4.333,
  4.250,
  4.125,
  3.996,
  3.875,
  3.750,
  3.666,
  3.625,
  3.500,
  3.459,
  3.333,
  3.250,
  3.125,
  2.996,
  2.875,
  2.750,
  2.666,
  2.625,
  2.500,
  2.459,
  2.333,
  2.250,
  2.125,
  1.996,
  1.875,
  1.750,
  1.666,
  1.625,
  1.500,
  1.459,
  1.333,
  1.250,
  1.125,
  0.996,
  0.875,
  0.750,
  0.666,
  0.625,
  0.500,
  0.459,
  0.333,
  0.250,
  0.125,
  0.000
];

const stringC = [
  //12 c
  "3 Qt",
  "2 Qt, 1 Pt, 1 C, 3/4 C, 1/8 C",
  "2 Qt, 1 Pt, 1 C, 3/4 C",
  "2 Qt, 1 Pt, 1 C, 2/3 C",
  "2 Qt, 1 Pt, 1 C, 1/2 C, 1/8 C",
  "2 Qt, 1 Pt, 1 C, 1/2 C",
  "2 Qt, 1 Pt, 1 C, 1/3 C, 1/8 C",
  "2 Qt, 1 Pt, 1 C, 1/3 C",
  "2 Qt, 1 Pt, 1 C, 1/4 C",
  "2 Qt, 1 Pt, 1 C, 1/8 C",
  //11 c
  "2 Qt, 1 Pt, 1 C",
  "2 Qt, 1 Pt, 3/4 C, 1/8 C",
  "2 Qt, 1 Pt, 3/4 C",
  "2 Qt, 1 Pt, 2/3 C",
  "2 Qt, 1 Pt, 1/2 C, 1/8 C",
  "2 Qt, 1 Pt, 1/2 C",
  "2 Qt, 1 Pt, 1/3 C, 1/8 C",
  "2 Qt, 1 Pt, 1/3 C",
  "2 Qt, 1 Pt, 1/4 C",
  "2 Qt, 1 Pt, 1/8 C",
  //10 c
  "2 Qt, 1 Pt",
  "2 Qt, 1 C, 3/4 C, 1/8 C",
  "2 Qt, 1 C, 3/4 C",
  "2 Qt, 1 C, 2/3 C",
  "2 Qt, 1 C, 1/2 C, 1/8 C",
  "2 Qt, 1 C, 1/2 C",
  "2 Qt, 1 C, 1/3 C, 1/8 C",
  "2 Qt, 1 C, 1/3 C",
  "2 Qt, 1 C, 1/4 C",
  "2 Qt, 1 C, 1/8 C",
  //9 c
  "2 Qt",
  "2 Qt, 3/4 C, 1/8 C",
  "2 Qt, 3/4 C",
  "2 Qt, 2/3 C",
  "2 Qt, 1/2 C, 1/8 C",
  "2 Qt, 1/2 C",
  "2 Qt, 1/3 C, 1/8 C",
  "2 Qt, 1/3 C",
  "2 Qt, 1/4 C",
  "2 Qt, 1/8 C",
  //8 c
  "2 Qt",
  "1 Qt, 1 Pt, 1 C, 3/4 C, 1/8 C",
  "1 Qt, 1 Pt, 1 C, 3/4 C",
  "1 Qt, 1 Pt, 1 C, 2/3 C",
  "1 Qt, 1 Pt, 1 C, 1/2 C, 1/8 C",
  "1 Qt, 1 Pt, 1 C, 1/2 C",
  "1 Qt, 1 Pt, 1 C, 1/3 C, 1/8 C",
  "1 Qt, 1 Pt, 1 C, 1/3 C",
  "1 Qt, 1 Pt, 1 C, 1/4 C",
  "1 Qt, 1 Pt, 1 C, 1/8 C",
  //7 c
  "1 Qt, 1 Pt, 1 C",
  "1 Qt, 1 Pt, 3/4 C, 1/8 C",
  "1 Qt, 1 Pt, 3/4 C",
  "1 Qt, 1 Pt, 2/3 C",
  "1 Qt, 1 Pt, 1/2 C, 1/8 C",
  "1 Qt, 1 Pt, 1/2 C",
  "1 Qt, 1 Pt, 1/3 C, 1/8 C",
  "1 Qt, 1 Pt, 1/3 C",
  "1 Qt, 1 Pt, 1/4 C",
  "1 Qt, 1 Pt, 1/8 C",
  //6 c
  "1 Qt, 1 Pt",
  "1 Qt, 1 C, 3/4 C, 1/8 C",
  "1 Qt, 1 C, 3/4 C",
  "1 Qt, 1 C, 2/3 C",
  "1 Qt, 1 C, 1/2 C, 1/8 C",
  "1 Qt, 1 C, 1/2 C",
  "1 Qt, 1 C, 1/3 C, 1/8 C",
  "1 Qt, 1 C, 1/3 C",
  "1 Qt, 1 C, 1/4 C",
  "1 Qt, 1 C, 1/8 C",
  //5 c
  "1 Qt, 1 C",
  "1 Qt, 3/4 C, 1/8 C",
  "1 Qt, 3/4 C",
  "1 Qt, 2/3 C",
  "1 Qt, 1/2 C, 1/8 C",
  "1 Qt, 1/2 C",
  "1 Qt, 1/3 C, 1/8 C",
  "1 Qt, 1/3 C",
  "1 Qt, 1/4 C",
  "1 Qt, 1/8 C",
  //4 c
  "2 Pt or 1 Qt",
  "1 Pt, 1 C, 3/4 C, 1/8 C",
  "1 Pt, 1 C, 3/4 C",
  "1 Pt, 1 C, 2/3 C",
  "1 Pt, 1 C, 1/2 C, 1/8 C",
  "1 Pt, 1 C, 1/2 C",
  "1 Pt, 1 C, 1/3 C, 1/8 C",
  "1 Pt, 1 C, 1/3 C",
  "1 Pt, 1 C, 1/4 C",
  "1 Pt, 1 C, 1/8 C",
  //3 c
  "1 Pt, 1 C",
  "1 P, 3/4 C, 1/8 C",
  "1 P, 3/4 C",
  "1 P, 2/3 C",
  "1 P, 1/2 C, 1/8 C",
  "1 P, 1/2 C",
  "1 P, 1/3 C, 1/8 C",
  "1 P, 1/3 C",
  "1 P, 1/4 C",
  "1 Pt, 1/8 C",
  //2 c
  "2 C or 1 Pt",
  "1 C, 3/4 C, 1/8 C",
  "1 C, 3/4 C",
  "1 C, 2/3 C",
  "1 C, 1/2 C, 1/8 C",
  "1 C, 1/2 C",
  "1 C, 1/3 C, 1/8 C",
  "1 C, 1/3 C",
  "1 C, 1/4 C",
  "1 C, 1/8 C",
  "1 C",
  "3/4 C, 1/8 C",
  "3/4 C",
  "2/3 C",
  "1/2 C, 1/8 C",
  "1/2 C",
  "1/3 C, 1/8 C",
  "1/3 C",
  "1/4 C",
  "1/8 C",
  "0 C"
];

const rangesT = [
  new Range(15.999, 16.499),
  new Range(15.5, 15.998),
  new Range(15, 15.499),
  new Range(14.5, 14.999),
  new Range(14, 14.499),
  new Range(13.5, 13.999),
  new Range(13, 13.499),
  new Range(12.5, 12.999),
  new Range(12, 12.499),
  new Range(11.5, 11.999),
  new Range(11, 11.499),
  new Range(10.5, 10.999),
  new Range(10, 10.499),
  new Range(9.5, 9.999),
  new Range(9, 9.499),
  new Range(8.5, 8.999),
  new Range(8, 8.499),
  new Range(7.5, 7.999),
  new Range(7, 7.499),
  new Range(6.5, 6.999),
  new Range(6, 6.499),
  new Range(5.5, 5.999),
  new Range(5, 5.499),
  new Range(4.5, 4.999),
  new Range(4, 4.499),
  new Range(3.5, 3.999),
  new Range(3, 3.499),
  new Range(2.5, 2.999),
  new Range(2, 2.499),
  new Range(1.5, 1.999),
  new Range(1, 1.499),
  new Range(0.5, 0.999),
  new Range(0.001, 0.499)
];

const outputValuesT = [
  16,
  15.5,
  15,
  14.5,
  14,
  13.5,
  13,
  12.5,
  12,
  11.5,
  11,
  10.5,
  10,
  9.5,
  9,
  8.5,
  8,
  7.5,
  7,
  6.5,
  6,
  5.5,
  5,
  4.5,
  4,
  3.5,
  3,
  2.5,
  2,
  1.5,
  1,
  0.5,
  0
];

const stringT = [
"16 T",
"15 T, 1/2 T",
"15 T",
"14 T, 1/2 T",
"14 T",
"13 T, 1/2 T",
"13 T",
"12 T, 1/2 T",
"12 T",
"11 T, 1/2 T",
"11 T",
"10 T, 1/2 T",
"10 T",
"9 T, 1/2 T",
"9 T",
"8 T, 1/2 T",
"8 T",
"7 T, 1/2 T",
"7 T",
"6 T, 1/2 T",
"6 T",
"5 T, 1/2 T",
"5 T",
"4 T, 1/2 T",
"4 T",
"3 T, 1/2 T",
"3 T",
"2 T, 1/2 T",
"2 T",
"1 T, 1/2 T",
"1 T",
"1/2 T",
"0 T"
];

const ranges = [
  new Range(2.995, 3.000),
  new Range(2.985, 2.994),
  new Range(2.969, 2.984),
  new Range(2.954, 2.968),
  new Range(2.938, 2.953),
  new Range(2.922, 2.937),
  new Range(2.907, 2.921),
  new Range(2.891, 2.906),
  new Range(2.875, 2.890),
  new Range(2.860, 2.874),
  new Range(2.844, 2.859),
  new Range(2.829, 2.843),
  new Range(2.813, 2.828),
  new Range(2.797, 2.812),
  new Range(2.782, 2.796),
  new Range(2.766, 2.781),
  new Range(2.750, 2.765),
  new Range(2.745, 2.749),
  new Range(2.730, 2.744),
  new Range(2.714, 2.729),
  new Range(2.698, 2.713),
  new Range(2.683, 2.697),
  new Range(2.666, 2.682),
  new Range(2.657, 2.665),
  new Range(2.641, 2.656),
  new Range(2.625, 2.640),
  new Range(2.610, 2.624),
  new Range(2.594, 2.609),
  new Range(2.579, 2.593),
  new Range(2.563, 2.578),
  new Range(2.547, 2.562),
  new Range(2.532, 2.546),
  new Range(2.516, 2.531),
  new Range(2.500, 2.515),
  new Range(2.490, 2.499),
  new Range(2.474, 2.489),
  new Range(2.459, 2.473),
  new Range(2.443, 2.458),
  new Range(2.428, 2.442),
  new Range(2.412, 2.427),
  new Range(2.396, 2.411),
  new Range(2.381, 2.395),
  new Range(2.365, 2.380),
  new Range(2.349, 2.364),
  new Range(2.333, 2.348),
  new Range(2.329, 2.332),
  new Range(2.313, 2.328),
  new Range(2.297, 2.312),
  new Range(2.282, 2.296),
  new Range(2.266, 2.281),
  new Range(2.250, 2.265),
  new Range(2.235, 2.249),
  new Range(2.219, 2.234),
  new Range(2.204, 2.218),
  new Range(2.188, 2.203),
  new Range(2.172, 2.187),
  new Range(2.157, 2.171),
  new Range(2.141, 2.156),
  new Range(2.125, 2.140),
  new Range(2.110, 2.124),
  new Range(2.094, 2.109),
  new Range(2.079, 2.093),
  new Range(2.063, 2.078),
  new Range(2.047, 2.062),
  new Range(2.032, 2.046),
  new Range(2.016, 2.031),
  new Range(1.995, 2.015),
  new Range(1.985, 1.994),
  new Range(1.969, 1.984),
  new Range(1.954, 1.968),
  new Range(1.938, 1.953),
  new Range(1.922, 1.937),
  new Range(1.907, 1.921),
  new Range(1.891, 1.906),
  new Range(1.875, 1.890),
  new Range(1.860, 1.874),
  new Range(1.844, 1.859),
  new Range(1.829, 1.843),
  new Range(1.813, 1.828),
  new Range(1.797, 1.812),
  new Range(1.782, 1.796),
  new Range(1.766, 1.781),
  new Range(1.750, 1.765),
  new Range(1.745, 1.749),
  new Range(1.730, 1.744),
  new Range(1.714, 1.729),
  new Range(1.698, 1.713),
  new Range(1.683, 1.697),
  new Range(1.666, 1.682),
  new Range(1.657, 1.665),
  new Range(1.641, 1.656),
  new Range(1.625, 1.640),
  new Range(1.610, 1.624),
  new Range(1.594, 1.609),
  new Range(1.579, 1.593),
  new Range(1.563, 1.578),
  new Range(1.547, 1.562),
  new Range(1.532, 1.546),
  new Range(1.516, 1.531),
  new Range(1.500, 1.515),
  new Range(1.490, 1.499),
  new Range(1.474, 1.489),
  new Range(1.459, 1.473),
  new Range(1.443, 1.458),
  new Range(1.428, 1.442),
  new Range(1.412, 1.427),
  new Range(1.396, 1.411),
  new Range(1.381, 1.395),
  new Range(1.365, 1.380),
  new Range(1.349, 1.364),
  new Range(1.333, 1.348),
  new Range(1.329, 1.332),
  new Range(1.313, 1.328),
  new Range(1.297, 1.312),
  new Range(1.282, 1.296),
  new Range(1.266, 1.281),
  new Range(1.250, 1.265),
  new Range(1.235, 1.249),
  new Range(1.219, 1.234),
  new Range(1.204, 1.218),
  new Range(1.188, 1.203),
  new Range(1.172, 1.187),
  new Range(1.157, 1.171),
  new Range(1.141, 1.156),
  new Range(1.125, 1.140),
  new Range(1.110, 1.124),
  new Range(1.094, 1.109),
  new Range(1.079, 1.093),
  new Range(1.063, 1.078),
  new Range(1.047, 1.062),
  new Range(1.032, 1.046),
  new Range(1.016, 1.031),
  new Range(0.995, 1.015),
  new Range(0.985, 0.994),
  new Range(0.969, 0.984),
  new Range(0.954, 0.968),
  new Range(0.938, 0.953),
  new Range(0.922, 0.937),
  new Range(0.907, 0.921),
  new Range(0.891, 0.906),
  new Range(0.875, 0.890),
  new Range(0.860, 0.874),
  new Range(0.844, 0.859),
  new Range(0.829, 0.843),
  new Range(0.813, 0.828),
  new Range(0.797, 0.812),
  new Range(0.782, 0.796),
  new Range(0.766, 0.781),
  new Range(0.750, 0.765),
  new Range(0.745, 0.749),
  new Range(0.730, 0.744),
  new Range(0.714, 0.729),
  new Range(0.698, 0.713),
  new Range(0.683, 0.697),
  new Range(0.666, 0.682),
  new Range(0.657, 0.665),
  new Range(0.641, 0.656),
  new Range(0.625, 0.640),
  new Range(0.610, 0.624),
  new Range(0.594, 0.609),
  new Range(0.579, 0.593),
  new Range(0.563, 0.578),
  new Range(0.547, 0.562),
  new Range(0.532, 0.546),
  new Range(0.516, 0.531),
  new Range(0.500, 0.515),
  new Range(0.490, 0.499),
  new Range(0.474, 0.489),
  new Range(0.459, 0.473),
  new Range(0.443, 0.458),
  new Range(0.428, 0.442),
  new Range(0.412, 0.427),
  new Range(0.396, 0.411),
  new Range(0.381, 0.395),
  new Range(0.365, 0.380),
  new Range(0.349, 0.364),
  new Range(0.333, 0.348),
  new Range(0.329, 0.332),
  new Range(0.313, 0.328),
  new Range(0.297, 0.312),
  new Range(0.282, 0.296),
  new Range(0.266, 0.281),
  new Range(0.250, 0.265),
  new Range(0.235, 0.249),
  new Range(0.219, 0.234),
  new Range(0.204, 0.218),
  new Range(0.188, 0.203),
  new Range(0.172, 0.187),
  new Range(0.157, 0.171),
  new Range(0.141, 0.156),
  new Range(0.125, 0.140),
  new Range(0.110, 0.124),
  new Range(0.094, 0.109),
  new Range(0.079, 0.093),
  new Range(0.063, 0.078),
  new Range(0.047, 0.062),
  new Range(0.032, 0.046),
  new Range(0.016, 0.031)
];

const outputValues = [
  "1 T",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp",
  "2 tsp, 3/4 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp",
  "2 tsp, 2/3 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 2/3 tsp, 1/16 tsp",
  "2 tsp, 2/3 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 2/3 tsp, 1/32 tsp",
  "2 tsp, 2/3 tsp, 1/64 tsp",
  "2 tsp, 2/3 tsp",
  "2 tsp, 1/2 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 1/2 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/8 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp",
  "2 tsp, 1/2 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/32 tsp",
  "2 tsp, 1/2 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp",
  "2 tsp, 1/3 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 1/3 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/8 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp",
  "2 tsp, 1/3 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/32 tsp",
  "2 tsp, 1/3 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp",
  "2 tsp, 1/4 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/4 tsp, 1/16 tsp",
  "2 tsp, 1/4 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/4 tsp, 1/32 tsp",
  "2 tsp, 1/4 tsp, 1/64 tsp",
  "2 tsp, 1/4 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp",
  "2 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp",
  "2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/16 tsp",
  "2 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/32 tsp",
  "2 tsp, 1/64 tsp",
  "2 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp",
  "1 tsp, 3/4 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp",
  "1 tsp, 2/3 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 2/3 tsp, 1/16 tsp",
  "1 tsp, 2/3 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 2/3 tsp, 1/32 tsp",
  "1 tsp, 2/3 tsp, 1/64 tsp",
  "1 tsp, 2/3 tsp",
  "1 tsp, 1/2 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 1/2 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/8 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp",
  "1 tsp, 1/2 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/32 tsp",
  "1 tsp, 1/2 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp",
  "1 tsp, 1/3 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 1/3 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/8 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp",
  "1 tsp, 1/3 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/32 tsp",
  "1 tsp, 1/3 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp",
  "1 tsp, 1/4 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/4 tsp, 1/16 tsp",
  "1 tsp, 1/4 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/4 tsp, 1/32 tsp",
  "1 tsp, 1/4 tsp, 1/64 tsp",
  "1 tsp, 1/4 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp",
  "1 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp",
  "1 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/16 tsp",
  "1 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/32 tsp",
  "1 tsp, 1/64 tsp",
  "1 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp",
  "3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp, 1/32 tsp",
  "3/4 tsp, 1/8 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp",
  "3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/16 tsp, 1/32 tsp",
  "3/4 tsp, 1/16 tsp, 1/64 tsp",
  "3/4 tsp, 1/16 tsp",
  "3/4 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/32 tsp",
  "3/4 tsp, 1/64 tsp",
  "3/4 tsp",
  "2/3 tsp, 1/16 tsp, 1/64 tsp",
  "2/3 tsp, 1/16 tsp",
  "2/3 tsp, 1/32 tsp, 1/64 tsp",
  "2/3 tsp, 1/32 tsp",
  "2/3 tsp, 1/64 tsp",
  "2/3 tsp",
  "1/2 tsp, 1/8 tsp, 1/32 tsp",
  "1/2 tsp, 1/8 tsp, 1/64 tsp",
  "1/2 tsp, 1/8 tsp",
  "1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/2 tsp, 1/16 tsp, 1/32 tsp",
  "1/2 tsp, 1/16 tsp, 1/64 tsp",
  "1/2 tsp, 1/16 tsp",
  "1/2 tsp, 1/32 tsp, 1/64 tsp",
  "1/2 tsp, 1/32 tsp",
  "1/2 tsp, 1/64 tsp",
  "1/2 tsp",
  "1/3 tsp, 1/8 tsp, 1/32 tsp",
  "1/3 tsp, 1/8 tsp, 1/64 tsp",
  "1/3 tsp, 1/8 tsp",
  "1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/3 tsp, 1/16 tsp, 1/32 tsp",
  "1/3 tsp, 1/16 tsp, 1/64 tsp",
  "1/3 tsp, 1/16 tsp",
  "1/3 tsp, 1/32 tsp, 1/64 tsp",
  "1/3 tsp, 1/32 tsp",
  "1/3 tsp, 1/64 tsp",
  "1/3 tsp",
  "1/4 tsp, 1/16 tsp, 1/64 tsp",
  "1/4 tsp, 1/16 tsp",
  "1/4 tsp, 1/32 tsp, 1/64 tsp",
  "1/4 tsp, 1/32 tsp",
  "1/4 tsp, 1/64 tsp",
  "1/4 tsp",
  "1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/8 tsp, 1/16 tsp, 1/32 tsp",
  "1/8 tsp, 1/16 tsp, 1/64 tsp",
  "1/8 tsp, 1/16 tsp",
  "1/8 tsp, 1/32 tsp, 1/64 tsp",
  "1/8 tsp, 1/32 tsp",
  "1/8 tsp, 1/64 tsp",
  "1/8 tsp",
  "1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/16 tsp, 1/32 tsp",
  "1/16 tsp, 1/64 tsp",
  "1/16 tsp",
  "1/32 tsp, 1/64 tsp",
  "1/32 tsp",
  "1/64 tsp"
];

//Australian conversions
const rangesCAus = [
  new Range(11.996, 12.124),
  new Range(11.875, 11.995),
  new Range(11.750, 11.874),
  new Range(11.666, 11.749),
  new Range(11.625, 11.665),
  new Range(11.500, 11.624),
  new Range(11.459, 11.499),
  new Range(11.333, 11.458),
  new Range(11.250, 11.332),
  new Range(11.125, 11.249),
  new Range(10.996, 11.124),
  new Range(10.875, 10.995),
  new Range(10.750, 10.874),
  new Range(10.666, 10.749),
  new Range(10.625, 10.665),
  new Range(10.500, 10.624),
  new Range(10.459, 10.499),
  new Range(10.333, 10.458),
  new Range(10.250, 10.332),
  new Range(10.125, 10.249),
  new Range(9.996, 10.124),
  new Range(9.875, 9.995),
  new Range(9.750, 9.874),
  new Range(9.666, 9.749),
  new Range(9.625, 9.665),
  new Range(9.500, 9.624),
  new Range(9.459, 9.499),
  new Range(9.333, 9.458),
  new Range(9.250, 9.332),
  new Range(9.125, 9.249),
  new Range(8.996, 9.124),
  new Range(8.875, 8.995),
  new Range(8.750, 8.874),
  new Range(8.666, 8.749),
  new Range(8.625, 8.665),
  new Range(8.500, 8.624),
  new Range(8.459, 8.499),
  new Range(8.333, 8.458),
  new Range(8.250, 8.332),
  new Range(8.125, 8.249),
  new Range(7.996, 8.124),
  new Range(7.875, 7.995),
  new Range(7.750, 7.874),
  new Range(7.666, 7.749),
  new Range(7.625, 7.665),
  new Range(7.500, 7.624),
  new Range(7.459, 7.499),
  new Range(7.333, 7.458),
  new Range(7.250, 7.332),
  new Range(7.125, 7.249),
  new Range(6.996, 7.124),
  new Range(6.875, 6.995),
  new Range(6.750, 6.874),
  new Range(6.666, 6.749),
  new Range(6.625, 6.665),
  new Range(6.500, 6.624),
  new Range(6.459, 6.499),
  new Range(6.333, 6.458),
  new Range(6.250, 6.332),
  new Range(6.125, 6.249),
  new Range(5.996, 6.124),
  new Range(5.875, 5.995),
  new Range(5.750, 5.874),
  new Range(5.666, 5.749),
  new Range(5.625, 5.665),
  new Range(5.500, 5.624),
  new Range(5.459, 5.499),
  new Range(5.333, 5.458),
  new Range(5.250, 5.332),
  new Range(5.125, 5.249),
  new Range(4.996, 5.124),
  new Range(4.875, 4.995),
  new Range(4.750, 4.874),
  new Range(4.666, 4.749),
  new Range(4.625, 4.665),
  new Range(4.500, 4.624),
  new Range(4.459, 4.499),
  new Range(4.333, 4.458),
  new Range(4.250, 4.332),
  new Range(4.125, 4.249),
  new Range(3.996, 4.124),
  new Range(3.875, 3.995),
  new Range(3.750, 3.874),
  new Range(3.666, 3.749),
  new Range(3.625, 3.665),
  new Range(3.500, 3.624),
  new Range(3.459, 3.499),
  new Range(3.333, 3.458),
  new Range(3.250, 3.332),
  new Range(3.125, 3.249),
  new Range(2.996, 3.124),
  new Range(2.875, 2.995),
  new Range(2.750, 2.874),
  new Range(2.666, 2.749),
  new Range(2.625, 2.665),
  new Range(2.500, 2.624),
  new Range(2.459, 2.499),
  new Range(2.333, 2.458),
  new Range(2.250, 2.332),
  new Range(2.125, 2.249),
  new Range(1.996, 2.124),
  new Range(1.875, 1.995),
  new Range(1.750, 1.874),
  new Range(1.666, 1.749),
  new Range(1.625, 1.665),
  new Range(1.500, 1.624),
  new Range(1.459, 1.499),
  new Range(1.333, 1.458),
  new Range(1.250, 1.332),
  new Range(1.125, 1.249),
  new Range(0.996, 1.124),
  new Range(0.875, 0.995),
  new Range(0.750, 0.874),
  new Range(0.666, 0.749),
  new Range(0.625, 0.665),
  new Range(0.500, 0.624),
  new Range(0.459, 0.499),
  new Range(0.333, 0.458),
  new Range(0.250, 0.332),
  new Range(0.125, 0.249),
  new Range(0.000, 0.124),
];

const outputValuesCAus = [
  11.996,
  11.875,
  11.750,
  11.666,
  11.625,
  11.500,
  11.459,
  11.333,
  11.250,
  11.125,
  10.996,
  10.875,
  10.750,
  10.666,
  10.625,
  10.500,
  10.459,
  10.333,
  10.250,
  10.125,
  9.996,
  9.875,
  9.750,
  9.666,
  9.625,
  9.500,
  9.459,
  9.333,
  9.250,
  9.125,
  8.996,
  8.875,
  8.750,
  8.666,
  8.625,
  8.500,
  8.459,
  8.333,
  8.250,
  8.125,
  7.996,
  7.875,
  7.750,
  7.666,
  7.625,
  7.500,
  7.459,
  7.333,
  7.250,
  7.125,
  6.996,
  6.875,
  6.750,
  6.666,
  6.625,
  6.500,
  6.459,
  6.333,
  6.250,
  6.125,
  5.996,
  5.875,
  5.750,
  5.666,
  5.625,
  5.500,
  5.459,
  5.333,
  5.250,
  5.125,
  4.996,
  4.875,
  4.750,
  4.666,
  4.625,
  4.500,
  4.459,
  4.333,
  4.250,
  4.125,
  3.996,
  3.875,
  3.750,
  3.666,
  3.625,
  3.500,
  3.459,
  3.333,
  3.250,
  3.125,
  2.996,
  2.875,
  2.750,
  2.666,
  2.625,
  2.500,
  2.459,
  2.333,
  2.250,
  2.125,
  1.996,
  1.875,
  1.750,
  1.666,
  1.625,
  1.500,
  1.459,
  1.333,
  1.250,
  1.125,
  0.996,
  0.875,
  0.750,
  0.666,
  0.625,
  0.500,
  0.459,
  0.333,
  0.250,
  0.125,
  0.000,
];

const stringCAus = [
  "12 C",
  "11 C, 3/4 C, 1/8 C",
  "11 C, 3/4 C",
  "11 C, 2/3 C",
  "11 C, 1/2 C, 1/8 C",
  "11 C, 1/2 C",
  "11 C, 1/3 C, 1/8 C",
  "11 C, 1/3 C",
  "11 C, 1/4 C",
  "11 C, 1/8 C",
  "11 C",
  "10 C, 3/4 C, 1/8 C",
  "10 C, 3/4 C",
  "10 C, 2/3 C",
  "10 C, 1/2 C, 1/8 C",
  "10 C, 1/2 C",
  "10 C, 1/3 C, 1/8 C",
  "10 C, 1/3 C",
  "10 C, 1/4 C",
  "10 C, 1/8 C",
  "10 C",
  "9 C, 3/4 C, 1/8 C",
  "9 C, 3/4 C",
  "9 C, 2/3 C",
  "9 C, 1/2 C, 1/8 C",
  "9 C, 1/2 C",
  "9 C, 1/3 C, 1/8 C",
  "9 C, 1/3 C",
  "9 C, 1/4 C",
  "9 C, 1/8 C",
  "9 C",
  "8 C, 3/4 C, 1/8 C",
  "8 C, 3/4 C",
  "8 C, 2/3 C",
  "8 C, 1/2 C, 1/8 C",
  "8 C, 1/2 C",
  "8 C, 1/3 C, 1/8 C",
  "8 C, 1/3 C",
  "8 C, 1/4 C",
  "8 C, 1/8 C",
  "8 C",
  "7 C, 3/4 C, 1/8 C",
  "7 C, 3/4 C",
  "7 C, 2/3 C",
  "7 C, 1/2 C, 1/8 C",
  "7 C, 1/2 C",
  "7 C, 1/3 C, 1/8 C",
  "7 C, 1/3 C",
  "7 C, 1/4 C",
  "7 C, 1/8 C",
  "7 C",
  "6 C, 3/4 C, 1/8 C",
  "6 C, 3/4 C",
  "6 C, 2/3 C",
  "6 C, 1/2 C, 1/8 C",
  "6 C, 1/2 C",
  "6 C, 1/3 C, 1/8 C",
  "6 C, 1/3 C",
  "6 C, 1/4 C",
  "6 C, 1/8 C",
  "6 C",
  "5 C, 3/4 C, 1/8 C",
  "5 C, 3/4 C",
  "5 C, 2/3 C",
  "5 C, 1/2 C, 1/8 C",
  "5 C, 1/2 C",
  "5 C, 1/3 C, 1/8 C",
  "5 C, 1/3 C",
  "5 C, 1/4 C",
  "5 C, 1/8 C",
  "5 C",
  "4 C, 3/4 C, 1/8 C",
  "4 C, 3/4 C",
  "4 C, 2/3 C",
  "4 C, 1/2 C, 1/8 C",
  "4 C, 1/2 C",
  "4 C, 1/3 C, 1/8 C",
  "4 C, 1/3 C",
  "4 C, 1/4 C",
  "4 C, 1/8 C",
  "4 C",
  "3 C, 3/4 C, 1/8 C",
  "3 C, 3/4 C",
  "3 C, 2/3 C",
  "3 C, 1/2 C, 1/8 C",
  "3 C, 1/2 C",
  "3 C, 1/3 C, 1/8 C",
  "3 C, 1/3 C",
  "3 C, 1/4 C",
  "3 C, 1/8 C",
  "3 C",
  "2 C, 3/4 C, 1/8 C",
  "2 C, 3/4 C",
  "2 C, 2/3 C",
  "2 C, 1/2 C, 1/8 C",
  "2 C, 1/2 C",
  "2 C, 1/3 C, 1/8 C",
  "2 C, 1/3 C",
  "2 C, 1/4 C",
  "2 C, 1/8 C",
  "2 C",
  "1 C, 3/4 C, 1/8 C",
  "1 C, 3/4 C",
  "1 C, 2/3 C",
  "1 C, 1/2 C, 1/8 C",
  "1 C, 1/2 C",
  "1 C, 1/3 C, 1/8 C",
  "1 C, 1/3 C",
  "1 C, 1/4 C",
  "1 C, 1/8 C",
  "1 C",
  "3/4 C, 1/8 C",
  "3/4 C",
  "2/3 C",
  "1/2 C, 1/8 C",
  "1/2 C",
  "1/3 C, 1/8 C",
  "1/3 C",
  "1/4 C",
  "1/8 C",
  "0 C",
];

const rangesTAus = [
  new Range(12.5, 12.999),
  new Range(12, 12.499),
  new Range(11.5, 11.999),
  new Range(11, 11.499),
  new Range(10.5, 10.999),
  new Range(10, 10.499),
  new Range(9.5, 9.999),
  new Range(9, 9.499),
  new Range(8.5, 8.999),
  new Range(8, 8.499),
  new Range(7.5, 7.999),
  new Range(7, 7.499),
  new Range(6.5, 6.999),
  new Range(6, 6.499),
  new Range(5.5, 5.999),
  new Range(5, 5.499),
  new Range(4.5, 4.999),
  new Range(4, 4.499),
  new Range(3.5, 3.999),
  new Range(3, 3.499),
  new Range(2.5, 2.999),
  new Range(2, 2.499),
  new Range(1.5, 1.999),
  new Range(1, 1.499),
  new Range(0.5, 0.999),
  new Range(0.000, 0.499),
];

const outputValuesTAus = [
  12.5,
  12,
  11.5,
  11,
  10.5,
  10,
  9.5,
  9,
  8.5,
  8,
  7.5,
  7,
  6.5,
  6,
  5.5,
  5,
  4.5,
  4,
  3.5,
  3,
  2.5,
  2,
  1.5,
  1,
  0.5,
  0,
];

const stringTAus = [
"12 T, 1/2 T",
"12 T",
"11 T, 1/2 T",
"11 T",
"10 T, 1/2 T",
"10 T",
"9 T, 1/2 T",
"9 T",
"8 T, 1/2 T",
"8 T",
"7 T, 1/2 T",
"7 T",
"6 T, 1/2 T",
"6 T",
"5 T, 1/2 T",
"5 T",
"4 T, 1/2 T",
"4 T",
"3 T, 1/2 T",
"3 T",
"2 T, 1/2 T",
"2 T",
"1 T, 1/2 T",
"1 T",
"1/2 T",
"0 T",
];

const rangesAus = [
  new Range(3.995, 4.000),
  new Range(3.985, 3.994),
  new Range(3.969, 3.984),
  new Range(3.954, 3.968),
  new Range(3.938, 3.953),
  new Range(3.922, 3.937),
  new Range(3.907, 3.921),
  new Range(3.891, 3.906),
  new Range(3.875, 3.890),
  new Range(3.860, 3.874),
  new Range(3.844, 3.859),
  new Range(3.829, 3.843),
  new Range(3.813, 3.828),
  new Range(3.797, 3.812),
  new Range(3.782, 3.796),
  new Range(3.766, 3.781),
  new Range(3.750, 3.765),
  new Range(3.745, 3.749),
  new Range(3.730, 3.744),
  new Range(3.714, 3.729),
  new Range(3.698, 3.713),
  new Range(3.683, 3.697),
  new Range(3.666, 3.682),
  new Range(3.657, 3.665),
  new Range(3.641, 3.656),
  new Range(3.625, 3.640),
  new Range(3.610, 3.624),
  new Range(3.594, 3.609),
  new Range(3.579, 3.593),
  new Range(3.563, 3.578),
  new Range(3.547, 3.562),
  new Range(3.532, 3.546),
  new Range(3.516, 3.531),
  new Range(3.500, 3.515),
  new Range(3.490, 3.499),
  new Range(3.474, 3.489),
  new Range(3.459, 3.473),
  new Range(3.443, 3.458),
  new Range(3.428, 3.442),
  new Range(3.412, 3.427),
  new Range(3.396, 3.411),
  new Range(3.381, 3.395),
  new Range(3.365, 3.380),
  new Range(3.349, 3.364),
  new Range(3.333, 3.348),
  new Range(3.329, 3.332),
  new Range(3.313, 3.328),
  new Range(3.297, 3.312),
  new Range(3.282, 3.296),
  new Range(3.266, 3.281),
  new Range(3.250, 3.265),
  new Range(3.235, 3.249),
  new Range(3.219, 3.234),
  new Range(3.204, 3.218),
  new Range(3.188, 3.203),
  new Range(3.172, 3.187),
  new Range(3.157, 3.171),
  new Range(3.141, 3.156),
  new Range(3.125, 3.140),
  new Range(3.110, 3.124),
  new Range(3.094, 3.109),
  new Range(3.079, 3.093),
  new Range(3.063, 3.078),
  new Range(3.047, 3.062),
  new Range(3.032, 3.046),
  new Range(3.016, 3.031),
  new Range(2.995, 3.015),
  new Range(2.985, 2.994),
  new Range(2.969, 2.984),
  new Range(2.954, 2.968),
  new Range(2.938, 2.953),
  new Range(2.922, 2.937),
  new Range(2.907, 2.921),
  new Range(2.891, 2.906),
  new Range(2.875, 2.890),
  new Range(2.860, 2.874),
  new Range(2.844, 2.859),
  new Range(2.829, 2.843),
  new Range(2.813, 2.828),
  new Range(2.797, 2.812),
  new Range(2.782, 2.796),
  new Range(2.766, 2.781),
  new Range(2.750, 2.765),
  new Range(2.745, 2.749),
  new Range(2.730, 2.744),
  new Range(2.714, 2.729),
  new Range(2.698, 2.713),
  new Range(2.683, 2.697),
  new Range(2.666, 2.682),
  new Range(2.657, 2.665),
  new Range(2.641, 2.656),
  new Range(2.625, 2.640),
  new Range(2.610, 2.624),
  new Range(2.594, 2.609),
  new Range(2.579, 2.593),
  new Range(2.563, 2.578),
  new Range(2.547, 2.562),
  new Range(2.532, 2.546),
  new Range(2.516, 2.531),
  new Range(2.500, 2.515),
  new Range(2.490, 2.499),
  new Range(2.474, 2.489),
  new Range(2.459, 2.473),
  new Range(2.443, 2.458),
  new Range(2.428, 2.442),
  new Range(2.412, 2.427),
  new Range(2.396, 2.411),
  new Range(2.381, 2.395),
  new Range(2.365, 2.380),
  new Range(2.349, 2.364),
  new Range(2.333, 2.348),
  new Range(2.329, 2.332),
  new Range(2.313, 2.328),
  new Range(2.297, 2.312),
  new Range(2.282, 2.296),
  new Range(2.266, 2.281),
  new Range(2.250, 2.265),
  new Range(2.235, 2.249),
  new Range(2.219, 2.234),
  new Range(2.204, 2.218),
  new Range(2.188, 2.203),
  new Range(2.172, 2.187),
  new Range(2.157, 2.171),
  new Range(2.141, 2.156),
  new Range(2.125, 2.140),
  new Range(2.110, 2.124),
  new Range(2.094, 2.109),
  new Range(2.079, 2.093),
  new Range(2.063, 2.078),
  new Range(2.047, 2.062),
  new Range(2.032, 2.046),
  new Range(2.016, 2.031),
  new Range(1.995, 2.015),
  new Range(1.985, 1.994),
  new Range(1.969, 1.984),
  new Range(1.954, 1.968),
  new Range(1.938, 1.953),
  new Range(1.922, 1.937),
  new Range(1.907, 1.921),
  new Range(1.891, 1.906),
  new Range(1.875, 1.890),
  new Range(1.860, 1.874),
  new Range(1.844, 1.859),
  new Range(1.829, 1.843),
  new Range(1.813, 1.828),
  new Range(1.797, 1.812),
  new Range(1.782, 1.796),
  new Range(1.766, 1.781),
  new Range(1.750, 1.765),
  new Range(1.745, 1.749),
  new Range(1.730, 1.744),
  new Range(1.714, 1.729),
  new Range(1.698, 1.713),
  new Range(1.683, 1.697),
  new Range(1.666, 1.682),
  new Range(1.657, 1.665),
  new Range(1.641, 1.656),
  new Range(1.625, 1.640),
  new Range(1.610, 1.624),
  new Range(1.594, 1.609),
  new Range(1.579, 1.593),
  new Range(1.563, 1.578),
  new Range(1.547, 1.562),
  new Range(1.532, 1.546),
  new Range(1.516, 1.531),
  new Range(1.500, 1.515),
  new Range(1.490, 1.499),
  new Range(1.474, 1.489),
  new Range(1.459, 1.473),
  new Range(1.443, 1.458),
  new Range(1.428, 1.442),
  new Range(1.412, 1.427),
  new Range(1.396, 1.411),
  new Range(1.381, 1.395),
  new Range(1.365, 1.380),
  new Range(1.349, 1.364),
  new Range(1.333, 1.348),
  new Range(1.329, 1.332),
  new Range(1.313, 1.328),
  new Range(1.297, 1.312),
  new Range(1.282, 1.296),
  new Range(1.266, 1.281),
  new Range(1.250, 1.265),
  new Range(1.235, 1.249),
  new Range(1.219, 1.234),
  new Range(1.204, 1.218),
  new Range(1.188, 1.203),
  new Range(1.172, 1.187),
  new Range(1.157, 1.171),
  new Range(1.141, 1.156),
  new Range(1.125, 1.140),
  new Range(1.110, 1.124),
  new Range(1.094, 1.109),
  new Range(1.079, 1.093),
  new Range(1.063, 1.078),
  new Range(1.047, 1.062),
  new Range(1.032, 1.046),
  new Range(1.016, 1.031),
  new Range(0.995, 1.015),
  new Range(0.985, 0.994),
  new Range(0.969, 0.984),
  new Range(0.954, 0.968),
  new Range(0.938, 0.953),
  new Range(0.922, 0.937),
  new Range(0.907, 0.921),
  new Range(0.891, 0.906),
  new Range(0.875, 0.890),
  new Range(0.860, 0.874),
  new Range(0.844, 0.859),
  new Range(0.829, 0.843),
  new Range(0.813, 0.828),
  new Range(0.797, 0.812),
  new Range(0.782, 0.796),
  new Range(0.766, 0.781),
  new Range(0.750, 0.765),
  new Range(0.745, 0.749),
  new Range(0.730, 0.744),
  new Range(0.714, 0.729),
  new Range(0.698, 0.713),
  new Range(0.683, 0.697),
  new Range(0.666, 0.682),
  new Range(0.657, 0.665),
  new Range(0.641, 0.656),
  new Range(0.625, 0.640),
  new Range(0.610, 0.624),
  new Range(0.594, 0.609),
  new Range(0.579, 0.593),
  new Range(0.563, 0.578),
  new Range(0.547, 0.562),
  new Range(0.532, 0.546),
  new Range(0.516, 0.531),
  new Range(0.500, 0.515),
  new Range(0.490, 0.499),
  new Range(0.474, 0.489),
  new Range(0.459, 0.473),
  new Range(0.443, 0.458),
  new Range(0.428, 0.442),
  new Range(0.412, 0.427),
  new Range(0.396, 0.411),
  new Range(0.381, 0.395),
  new Range(0.365, 0.380),
  new Range(0.349, 0.364),
  new Range(0.333, 0.348),
  new Range(0.329, 0.332),
  new Range(0.313, 0.328),
  new Range(0.297, 0.312),
  new Range(0.282, 0.296),
  new Range(0.266, 0.281),
  new Range(0.250, 0.265),
  new Range(0.235, 0.249),
  new Range(0.219, 0.234),
  new Range(0.204, 0.218),
  new Range(0.188, 0.203),
  new Range(0.172, 0.187),
  new Range(0.157, 0.171),
  new Range(0.141, 0.156),
  new Range(0.125, 0.140),
  new Range(0.110, 0.124),
  new Range(0.094, 0.109),
  new Range(0.079, 0.093),
  new Range(0.063, 0.078),
  new Range(0.047, 0.062),
  new Range(0.032, 0.046),
  new Range(0.016, 0.031),
];

const outputValuesAus = [
  "1 T",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/8 tsp",
  "3 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp",
  "3 tsp, 3/4 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/16 tsp",
  "3 tsp, 3/4 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp, 1/32 tsp",
  "3 tsp, 3/4 tsp, 1/64 tsp",
  "3 tsp, 3/4 tsp",
  "3 tsp, 2/3 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 2/3 tsp, 1/16 tsp",
  "3 tsp, 2/3 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 2/3 tsp, 1/32 tsp",
  "3 tsp, 2/3 tsp, 1/64 tsp",
  "3 tsp, 2/3 tsp",
  "3 tsp, 1/2 tsp, 1/8 tsp, 1/32 tsp",
  "3 tsp, 1/2 tsp, 1/8 tsp, 1/64 tsp",
  "3 tsp, 1/2 tsp, 1/8 tsp",
  "3 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp",
  "3 tsp, 1/2 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 1/2 tsp, 1/16 tsp",
  "3 tsp, 1/2 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/2 tsp, 1/32 tsp",
  "3 tsp, 1/2 tsp, 1/64 tsp",
  "3 tsp, 1/2 tsp",
  "3 tsp, 1/3 tsp, 1/8 tsp, 1/32 tsp",
  "3 tsp, 1/3 tsp, 1/8 tsp, 1/64 tsp",
  "3 tsp, 1/3 tsp, 1/8 tsp",
  "3 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp",
  "3 tsp, 1/3 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 1/3 tsp, 1/16 tsp",
  "3 tsp, 1/3 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/3 tsp, 1/32 tsp",
  "3 tsp, 1/3 tsp, 1/64 tsp",
  "3 tsp, 1/3 tsp",
  "3 tsp, 1/4 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 1/4 tsp, 1/16 tsp",
  "3 tsp, 1/4 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/4 tsp, 1/32 tsp",
  "3 tsp, 1/4 tsp, 1/64 tsp",
  "3 tsp, 1/4 tsp",
  "3 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "3 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 1/8 tsp, 1/16 tsp",
  "3 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/8 tsp, 1/32 tsp",
  "3 tsp, 1/8 tsp, 1/64 tsp",
  "3 tsp, 1/8 tsp",
  "3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/16 tsp, 1/32 tsp",
  "3 tsp, 1/16 tsp, 1/64 tsp",
  "3 tsp, 1/16 tsp",
  "3 tsp, 1/32 tsp, 1/64 tsp",
  "3 tsp, 1/32 tsp",
  "3 tsp, 1/64 tsp",
  "3 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/8 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/16 tsp",
  "2 tsp, 3/4 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp, 1/32 tsp",
  "2 tsp, 3/4 tsp, 1/64 tsp",
  "2 tsp, 3/4 tsp",
  "2 tsp, 2/3 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 2/3 tsp, 1/16 tsp",
  "2 tsp, 2/3 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 2/3 tsp, 1/32 tsp",
  "2 tsp, 2/3 tsp, 1/64 tsp",
  "2 tsp, 2/3 tsp",
  "2 tsp, 1/2 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 1/2 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/8 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/16 tsp",
  "2 tsp, 1/2 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp, 1/32 tsp",
  "2 tsp, 1/2 tsp, 1/64 tsp",
  "2 tsp, 1/2 tsp",
  "2 tsp, 1/3 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 1/3 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/8 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/16 tsp",
  "2 tsp, 1/3 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp, 1/32 tsp",
  "2 tsp, 1/3 tsp, 1/64 tsp",
  "2 tsp, 1/3 tsp",
  "2 tsp, 1/4 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/4 tsp, 1/16 tsp",
  "2 tsp, 1/4 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/4 tsp, 1/32 tsp",
  "2 tsp, 1/4 tsp, 1/64 tsp",
  "2 tsp, 1/4 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp, 1/16 tsp",
  "2 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp, 1/32 tsp",
  "2 tsp, 1/8 tsp, 1/64 tsp",
  "2 tsp, 1/8 tsp",
  "2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/16 tsp, 1/32 tsp",
  "2 tsp, 1/16 tsp, 1/64 tsp",
  "2 tsp, 1/16 tsp",
  "2 tsp, 1/32 tsp, 1/64 tsp",
  "2 tsp, 1/32 tsp",
  "2 tsp, 1/64 tsp",
  "2 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/16 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/8 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/16 tsp",
  "1 tsp, 3/4 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp, 1/32 tsp",
  "1 tsp, 3/4 tsp, 1/64 tsp",
  "1 tsp, 3/4 tsp",
  "1 tsp, 2/3 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 2/3 tsp, 1/16 tsp",
  "1 tsp, 2/3 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 2/3 tsp, 1/32 tsp",
  "1 tsp, 2/3 tsp, 1/64 tsp",
  "1 tsp, 2/3 tsp",
  "1 tsp, 1/2 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 1/2 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/8 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/16 tsp",
  "1 tsp, 1/2 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp, 1/32 tsp",
  "1 tsp, 1/2 tsp, 1/64 tsp",
  "1 tsp, 1/2 tsp",
  "1 tsp, 1/3 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 1/3 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/8 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/16 tsp",
  "1 tsp, 1/3 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp, 1/32 tsp",
  "1 tsp, 1/3 tsp, 1/64 tsp",
  "1 tsp, 1/3 tsp",
  "1 tsp, 1/4 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/4 tsp, 1/16 tsp",
  "1 tsp, 1/4 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/4 tsp, 1/32 tsp",
  "1 tsp, 1/4 tsp, 1/64 tsp",
  "1 tsp, 1/4 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp, 1/16 tsp",
  "1 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp, 1/32 tsp",
  "1 tsp, 1/8 tsp, 1/64 tsp",
  "1 tsp, 1/8 tsp",
  "1 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/16 tsp, 1/32 tsp",
  "1 tsp, 1/16 tsp, 1/64 tsp",
  "1 tsp, 1/16 tsp",
  "1 tsp, 1/32 tsp, 1/64 tsp",
  "1 tsp, 1/32 tsp",
  "1 tsp, 1/64 tsp",
  "1 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp, 1/32 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp, 1/16 tsp",
  "3/4 tsp, 1/8 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp, 1/32 tsp",
  "3/4 tsp, 1/8 tsp, 1/64 tsp",
  "3/4 tsp, 1/8 tsp",
  "3/4 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/16 tsp, 1/32 tsp",
  "3/4 tsp, 1/16 tsp, 1/64 tsp",
  "3/4 tsp, 1/16 tsp",
  "3/4 tsp, 1/32 tsp, 1/64 tsp",
  "3/4 tsp, 1/32 tsp",
  "3/4 tsp, 1/64 tsp",
  "3/4 tsp",
  "2/3 tsp, 1/16 tsp, 1/64 tsp",
  "2/3 tsp, 1/16 tsp",
  "2/3 tsp, 1/32 tsp, 1/64 tsp",
  "2/3 tsp, 1/32 tsp",
  "2/3 tsp, 1/64 tsp",
  "2/3 tsp",
  "1/2 tsp, 1/8 tsp, 1/32 tsp",
  "1/2 tsp, 1/8 tsp, 1/64 tsp",
  "1/2 tsp, 1/8 tsp",
  "1/2 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/2 tsp, 1/16 tsp, 1/32 tsp",
  "1/2 tsp, 1/16 tsp, 1/64 tsp",
  "1/2 tsp, 1/16 tsp",
  "1/2 tsp, 1/32 tsp, 1/64 tsp",
  "1/2 tsp, 1/32 tsp",
  "1/2 tsp, 1/64 tsp",
  "1/2 tsp",
  "1/3 tsp, 1/8 tsp, 1/32 tsp",
  "1/3 tsp, 1/8 tsp, 1/64 tsp",
  "1/3 tsp, 1/8 tsp",
  "1/3 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/3 tsp, 1/16 tsp, 1/32 tsp",
  "1/3 tsp, 1/16 tsp, 1/64 tsp",
  "1/3 tsp, 1/16 tsp",
  "1/3 tsp, 1/32 tsp, 1/64 tsp",
  "1/3 tsp, 1/32 tsp",
  "1/3 tsp, 1/64 tsp",
  "1/3 tsp",
  "1/4 tsp, 1/16 tsp, 1/64 tsp",
  "1/4 tsp, 1/16 tsp",
  "1/4 tsp, 1/32 tsp, 1/64 tsp",
  "1/4 tsp, 1/32 tsp",
  "1/4 tsp, 1/64 tsp",
  "1/4 tsp",
  "1/8 tsp, 1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/8 tsp, 1/16 tsp, 1/32 tsp",
  "1/8 tsp, 1/16 tsp, 1/64 tsp",
  "1/8 tsp, 1/16 tsp",
  "1/8 tsp, 1/32 tsp, 1/64 tsp",
  "1/8 tsp, 1/32 tsp",
  "1/8 tsp, 1/64 tsp",
  "1/8 tsp",
  "1/16 tsp, 1/32 tsp, 1/64 tsp",
  "1/16 tsp, 1/32 tsp",
  "1/16 tsp, 1/64 tsp",
  "1/16 tsp",
  "1/32 tsp, 1/64 tsp",
  "1/32 tsp",
  "1/64 tsp",
];



function convert() {
  var fracVal = document.getElementById("value").value;

  //Get fraction output to stop after third place
  //after decimal without rounding up
  const toFixed = (n, fixed) => `${n}`.match(new RegExp(`^-?\\d+(?:\.\\d{0,${fixed}})?`))[0];

  var fracResult = toFixed(fracVal, 3);
  var selection = document.getElementById("Selection").value;

  document.getElementById('fracOutput').value = fracResult;

  if(selection == "tsp") {
    for(let i = 0; i < ranges.length; i++) {
      if(ranges[i].has(fracResult)) {
        document.getElementById('fracOutput').value = outputValues[i];
        break;
      }
    }
  }
  if(selection == "tbsp") {
    for(let i = 0; i < rangesT.length; i++) {
      if(rangesT[i].has(fracResult)) {
        var outputT = outputValuesT[i];
        var tremainder = fracResult - outputT;
        var tconvers = tremainder * 3;
        var outputString = outputValues[i];
        document.getElementById('fracOutput').value = stringT[i] + ", " + outputValues[i];
        if(outputT < 0.5 && outputT > 0.00) {
            for(let i = 0; i < ranges.length; i++) {
              if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value = "0 T, " + outputValues[i];
                break;
              }
            }
          }
        if(outputT == 0.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 1) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="1 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 1.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="1 T, 1/2 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 2) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="2 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 2.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="2 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 3) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="3 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 3.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="3 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 4) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="4 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 4.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="4 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="5 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 5.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="5 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 6) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="6 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 6.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="6 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 7) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="7 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 7.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="7 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 8) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="8 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 8.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="8 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 9) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="9 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 9.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="9 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 10) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="10 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 10.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="10 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 11) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="11 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 11.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="11 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 12) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="12 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 12.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="12 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 13) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="13 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 13.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="13 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 14) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="14 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 14.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="14 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 15) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="15 T, " + outputValues[i];
                break;
            }
          }
        }
        if(outputT == 15.5) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
              document.getElementById('fracOutput').value ="15 T, 1/2 T, " + outputValues[i];
              break;
            }
          }
        }
        if(outputT == 16) {
          for(let i = 0; i < ranges.length; i++) {
            if(ranges[i].has(tconvers)) {
                document.getElementById('fracOutput').value ="16 T";
                break;
            }
          }
        }
        if(fracResult == 16.000) {
          document.getElementById('fracOutput').value = "16 T";
        }
      }
    }
  }
  if(selection == "cup") {
    for(let i = 0; i < rangesC.length; i++) {
      if(rangesC[i].has(fracResult)) {
        var outputC = outputValuesC[i];
        var cremainder = fracResult - outputC;
        var cconvers = cremainder * 16;
        var outputStringC = stringC[i];

        document.getElementById('fracOutput').value = outputStringC;

        if(outputC == 0.000) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = "0 c, 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = "0 c, " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }

        if(fracResult == 0.602) {
          document.getElementById('fracOutput').value = "1/2 C, 1 T, 1/2 T, 1/3 tsp, 1/16 tsp";
        }

        if(outputC == 0.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 0.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 1.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 2.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 3.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 4.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 5.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 6.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 7.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 8.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 9.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 10.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.125) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.250) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.333) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.459) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.500) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.625) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.666) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.750) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.875) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(outputC == 11.996) {
          for(let i = 0; i < rangesT.length; i++) {
            if(rangesT[i].has(cconvers)) {
              var outputT = outputValuesT[i];
              var tremainder = cconvers - outputT;
              var tconvers = tremainder * 3;
              if(outputT == 1.5) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 1) {
                for(let i = 0; i < ranges.length; i++) {
                    if(ranges[i].has(tconvers)) {
                      document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValues[i];
                      break;
                    }
                  }
              } else if(outputT == 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValues[i];
                    break;
                  }
                }
              }else if(outputT != 0.5) {
                for(let i = 0; i < ranges.length; i++) {
                  if(ranges[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = outputStringC + ", " + outputValues[i];
                    break;
                  }
                }
              }
            }
          }
        }
      }
    }
  }





        //Australian Fractioning
        //Not working, not sure why

        if(selection == "austsp") {
          for(let i = 0; i < rangesAus.length; i++) {
            if(rangesAus[i].has(fracResult)) {
              document.getElementById('fracOutput').value = outputValuesAus[i];
              break;
            }
          }
        }
        if(selection == "austbsp") {
          for(let i = 0; i < rangesTAus.length; i++) {
            if(rangesTAus[i].has(fracResult)) {
              var outputT = outputValuesTAus[i];
              var tremainder = fracResult - outputT;
              var tconvers = tremainder * 4;
              var outputString = outputValuesAus[i];
              document.getElementById('fracOutput').value = stringTAus[i];
              if(outputT == 0){
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value = "0 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 0.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 1) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="1 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 1.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                      document.getElementById('fracOutput').value ="1 T, 1/2 T, " + outputValuesAus[i];
                      break;
                  }
                }
              }
              if(outputT == 2) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 2.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="2 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 3) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="3 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 3.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="3 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 4) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="4 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 4.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="4 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="5 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 5.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="5 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 6) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="6 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 6.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="6 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 7) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="7 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 7.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="7 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 8) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="8 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 8.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="8 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 9) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="9 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 9.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="9 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 10) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="10 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 10.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="10 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }if(outputT == 11) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="11 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 11.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="11 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }if(outputT == 12) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="12 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
              if(outputT == 12.5) {
                for(let i = 0; i < rangesAus.length; i++) {
                  if(rangesAus[i].has(tconvers)) {
                    document.getElementById('fracOutput').value ="12 T, 1/2 T, " + outputValuesAus[i];
                    break;
                  }
                }
              }
            }
          }
        }
        if(selection == "auscup") {
          for(let i = 0; i < rangesCAus.length; i++) {
            if(rangesCAus[i].has(fracResult)) {
              var outputC = outputValuesCAus[i];
              var cremainder = fracResult - outputC;
              var cconvers = cremainder * 12.5;
              var outputStringC = stringCAus[i];

              document.getElementById('fracOutput').value = outputStringC;

              if(outputC == 0.000) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = "0 c, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = "0 c, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.125) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.250) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.333) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.459) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.500) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }

              if(fracResult == 0.602) {
                document.getElementById('fracOutput').value = "1/2 C, 1 T, 1/2 T, 1/3 tsp, 1/16 tsp";
              }

              if(outputC == 0.625) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.666) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.750) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(fracResult == 0.790) {
                document.getElementById('fracOutput').value = "3/4 C, 1/2 T";
                break;
              }
              if(fracResult == 0.815) {
                document.getElementById('fracOutput').value = "3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                break;
              }
              if(fracResult == 0.820) {
                document.getElementById('fracOutput').value = "3/4 C, 1/2 T, 1 tsp, 1/2 tsp";
                break;
              }
              if(fracResult == 0.825) {
                document.getElementById('fracOutput').value = "3/4 C, 1/2 T, 1 tsp, 3/4 tsp";
                break;
              }
              if(outputC == 0.875) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 0.996) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.125) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.250) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.333) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.459) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.500) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.625) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.666) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.750) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(fracResult == 1.790) {
                document.getElementById('fracOutput').value = "1 C, 3/4 C, 1/2 T";
                break;
              }
              if(fracResult == 1.795) {
                document.getElementById('fracOutput').value = "1 C, 3/4 C, 1/2 T, 1/4 tsp";
                break;
              }
              if(fracResult == 1.815) {
                document.getElementById('fracOutput').value = "1 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                break;
              }
              if(fracResult == 1.825) {
                document.getElementById('fracOutput').value = "1 C, 3/4 C, 1/2 T, 1 tsp, 3/4 tsp";
                break;
              }
              if(outputC == 1.875) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 1.996) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.125) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.250) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.333) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.459) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.500) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.625) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.666) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(outputC == 2.750) {
                for(let i = 0; i < rangesTAus.length; i++) {
                  if(rangesTAus[i].has(cconvers)) {
                    var outputT = outputValuesTAus[i];
                    var tremainder = cconvers - outputT;
                    var tconvers = tremainder * 4;
                    if(outputT == 1.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 1) {
                      for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                    } else if(outputT == 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                          break;
                        }
                      }
                    }else if(outputT != 0.5) {
                      for(let i = 0; i < rangesAus.length; i++) {
                        if(rangesAus[i].has(tconvers)) {
                          document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                          break;
                        }
                      }
                    }
                  }
                }
              }
              if(fracResult == 2.780) {
                document.getElementById('fracOutput').value = "2 C, 3/4 C, 1 tsp, 1/2 tsp";
                break;
              }
              if(fracResult == 2.790) {
                document.getElementById('fracOutput').value = "2 C, 3/4 C, 1/2 T";
                break;
              }
              if(fracResult == 2.795) {
                document.getElementById('fracOutput').value = "2 C, 3/4 C, 1/2 T, 1/4 tsp";
                break;
              }
              if(fracResult == 2.800) {
                document.getElementById('fracOutput').value = "2 C, 3/4 C, 1/2 T, 1/2 tsp";
                break;
              }
              if(fracResult == 2.815) {
                document.getElementById('fracOutput').value = "2 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                break;
              }
              if(fracResult == 2.820) {
                document.getElementById('fracOutput').value = "2 C, 3/4 C, 1/2 T, 1 tsp, 1/2 tsp";
                break;
              }
                if(outputC == 2.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 2.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 3.780) {
                  document.getElementById('fracOutput').value = "3 C, 3/4 C, 1 tsp, 1/2 tsp";
                  break;
                }
                if(fracResult == 3.790) {
                  document.getElementById('fracOutput').value = "3 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 3.795) {
                  document.getElementById('fracOutput').value = "3 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 3.800) {
                  document.getElementById('fracOutput').value = "3 C, 3/4 C, 1/2 T, 1/2 tsp";
                  break;
                }
                if(fracResult == 3.815) {
                  document.getElementById('fracOutput').value = "3 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                  break;
                }
                if(fracResult == 3.820) {
                  document.getElementById('fracOutput').value = "3 C, 3/4 C, 1/2 T, 1 tsp, 1/2 tsp";
                  break;
                }
                if(outputC == 3.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 3.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 4.790) {
                  document.getElementById('fracOutput').value = "4 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 4.795) {
                  document.getElementById('fracOutput').value = "4 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 4.800) {
                  document.getElementById('fracOutput').value = "4 C, 3/4 C, 1/2 T, 1/2 tsp";
                  break;
                }
                if(outputC == 4.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 4.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 5.790) {
                  document.getElementById('fracOutput').value = "5 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 5.795) {
                  document.getElementById('fracOutput').value = "5 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 5.800) {
                  document.getElementById('fracOutput').value = "5 C, 3/4 C, 1/2 T, 1/2 tsp";
                  break;
                }
                if(outputC == 5.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 5.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 6.790) {
                  document.getElementById('fracOutput').value = "6 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 6.795) {
                  document.getElementById('fracOutput').value = "6 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 6.800) {
                  document.getElementById('fracOutput').value = "6 C, 3/4 C, 1/2 T, 1/2 tsp";
                  break;
                }
                if(outputC == 6.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 6.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 7.790) {
                  document.getElementById('fracOutput').value = "7 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 7.795) {
                  document.getElementById('fracOutput').value = "7 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 7.800) {
                  document.getElementById('fracOutput').value = "7 C, 3/4 C, 1/2 T, 1/2 tsp";
                  break;
                }
                if(outputC == 7.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 7.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 8.780) {
                  document.getElementById('fracOutput').value = "8 C, 3/4 C, 1 tsp, 1/2 tsp";
                  break;
                }
                if(fracResult == 8.790) {
                  document.getElementById('fracOutput').value = "8 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 8.795) {
                  document.getElementById('fracOutput').value = "8 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 8.815) {
                  document.getElementById('fracOutput').value = "8 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                  break;
                }
                if(fracResult == 8.825) {
                  document.getElementById('fracOutput').value = "8 C, 3/4 C, 1/2 T, 1 tsp, 3/4 tsp";
                  break;
                }
                if(outputC == 8.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 8.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 9.780) {
                  document.getElementById('fracOutput').value = "9 C, 3/4 C, 1 tsp, 1/2 tsp";
                  break;
                }
                if(fracResult == 9.790) {
                  document.getElementById('fracOutput').value = "9 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 9.795) {
                  document.getElementById('fracOutput').value = "9 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 9.815) {
                  document.getElementById('fracOutput').value = "9 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                  break;
                }
                if(fracResult == 9.825) {
                  document.getElementById('fracOutput').value = "9 C, 3/4 C, 1/2 T, 1 tsp, 3/4 tsp";
                  break;
                }
                if(outputC == 9.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 9.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 10.780) {
                  document.getElementById('fracOutput').value = "10 C, 3/4 C, 1 tsp, 1/2 tsp";
                  break;
                }
                if(fracResult == 10.790) {
                  document.getElementById('fracOutput').value = "10 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 10.795) {
                  document.getElementById('fracOutput').value = "10 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 10.815) {
                  document.getElementById('fracOutput').value = "10 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                  break;
                }
                if(fracResult == 10.825) {
                  document.getElementById('fracOutput').value = "10 C, 3/4 C, 1/2 T, 1 tsp, 3/4 tsp";
                  break;
                }
                if(outputC == 10.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 10.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.125) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.250) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.333) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.459) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.500) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.625) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC[i] + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.666) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.750) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(fracResult == 11.780) {
                  document.getElementById('fracOutput').value = "11 C, 3/4 C, 1 tsp, 1/2 tsp";
                  break;
                }
                if(fracResult == 11.790) {
                  document.getElementById('fracOutput').value = "11 C, 3/4 C, 1/2 T";
                  break;
                }
                if(fracResult == 11.795) {
                  document.getElementById('fracOutput').value = "11 C, 3/4 C, 1/2 T, 1/4 tsp";
                  break;
                }
                if(fracResult == 11.815) {
                  document.getElementById('fracOutput').value = "11 C, 3/4 C, 1/2 T, 1 tsp, 1/4 tsp";
                  break;
                }
                if(fracResult == 11.825) {
                  document.getElementById('fracOutput').value = "11 C, 3/4 C, 1/2 T, 1 tsp, 3/4 tsp";
                  break;
                }
                if(outputC == 11.875) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                          }
                        }
                      }
                    }
                  }
                }
                if(outputC == 11.996) {
                  for(let i = 0; i < rangesTAus.length; i++) {
                    if(rangesTAus[i].has(cconvers)) {
                      var outputT = outputValuesTAus[i];
                      var tremainder = cconvers - outputT;
                      var tconvers = tremainder * 4;
                      if(outputT == 1.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, 1/2 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 1) {
                        for(let i = 0; i < rangesAus.length; i++) {
                            if(rangesAus[i].has(tconvers)) {
                              document.getElementById('fracOutput').value = outputStringC + ", 1 T, " + outputValuesAus[i];
                              break;
                            }
                          }
                      } else if(outputT == 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", 1/2 T, " + outputValuesAus[i];
                            break;
                          }
                        }
                      }else if(outputT != 0.5) {
                        for(let i = 0; i < rangesAus.length; i++) {
                          if(rangesAus[i].has(tconvers)) {
                            document.getElementById('fracOutput').value = outputStringC + ", " + outputValuesAus[i];
                            break;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }





function resetInputs() {
  document.getElementById("value").value = "";
  document.getElementById("Selection").selectedIndex = [0];
  document.getElementById("fracOutput").value = "";
}