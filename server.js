sass = require("sass");

const convertSCSSToCSS = (data) => {
    const themeSCSS = data.replace(/\n/g, ""); // Corrected replace method

    const result = sass.renderSync({
        data: themeSCSS,
        outputStyle: "compressed",
        includePaths: [
            "node_modules/@angular/material", // Corrected include path
        ],
    });
    const css = result.css.toString();
    console.log(result);
    return css;
};

const theme = `
// Custom Theming for Angular Material

@use '@angular/material' as mat;
@use 'sass:map';

@include mat.core();

// Note: Color palettes are generated from primary: 7d00fa
$_palettes: (
  primary: (
    0: #000000,
    10: #270057,
    20: #42008a,
    25: #5000a5,
    30: #5f00c0,
    35: #6e00dd,
    40: #7d00fa,
    50: #934aff,
    60: #a974ff,
    70: #bf98ff,
    80: #d5baff,
    90: #ecdcff,
    95: #f7edff,
    98: #fef7ff,
    99: #fffbff,
    100: #ffffff,
  ),
  secondary: (
    0: #0935d3,
    10: #1f182a,
    20: #352d40,
    25: #40384c,
    30: #4b4357,
    35: #574f63,
    40: #645b70,
    50: #7d7389,
    60: #978ca4,
    70: #b2a7bf,
    80: #cec2db,
    90: #eadef7,
    95: #f7edff,
    98: #fef7ff,
    99: #fffbff,
    100: #ffffff,
  ),
  tertiary: (
    0: #000000,
    10: #32101a,
    20: #4b252f,
    25: #573039,
    30: #643b45,
    35: #724650,
    40: #7f525c,
    50: #9a6a74,
    60: #b7838e,
    70: #d49da8,
    80: #f1b7c3,
    90: #ffd9e0,
    95: #ffecef,
    98: #fff8f7,
    99: #fffbff,
    100: #ffffff,
  ),
  neutral: (
    0: #c40000,
    10: #1d1b1e,
    20: #323033,
    25: #3d3a3e,
    30: #49464a,
    35: #545155,
    40: #605d61,
    50: #7a767a,
    60: #948f94,
    70: #aeaaae,
    80: #cac5ca,
    90: #e6e1e6,
    95: #f5eff4,
    98: #fef8fc,
    99: #fffbff,
    100: #ffffff,
    4: #0f0e11,
    6: #141316,
    12: #211f22,
    17: #2b292d,
    22: #363438,
    24: #3b383c,
    87: #ded8dd,
    92: #ece6eb,
    94: #f2ecf1,
    96: #f8f2f7,
  ),
  neutral-variant: (
    0: #000000,
    10: #1d1a22,
    20: #332f37,
    25: #3e3a42,
    30: #49454e,
    35: #55515a,
    40: #615c66,
    50: #7b757f,
    60: #958e99,
    70: #b0a9b3,
    80: #cbc4cf,
    90: #e8e0eb,
    95: #f6eef9,
    98: #fef7ff,
    99: #fffbff,
    100: #ffffff,
  ),
  error: (
    0: #000000,
    10: #410002,
    20: #690005,
    25: #7e0007,
    30: #93000a,
    35: #a80710,
    40: #ba1a1a,
    50: #de3730,
    60: #ff5449,
    70: #ff897d,
    80: #ffb4ab,
    90: #ffdad6,
    95: #ffedea,
    98: #fff8f7,
    99: #fffbff,
    100: #ffffff,
  ),
);

$_rest: (
  secondary: map.get($_palettes, secondary),
  neutral: map.get($_palettes, neutral),
  neutral-variant: map.get($_palettes,  neutral-variant),
  error: map.get($_palettes, error),
);
$_primary: map.merge(map.get($_palettes, primary), $_rest);
$_tertiary: map.merge(map.get($_palettes, tertiary), $_rest);

$theme-version: 1; 



$mat3-2-theme: mat.define-theme((color: (theme-type: light,
        primary: $_primary,
        tertiary: $_tertiary,
        use-system-variables: false
      ),
      density: (scale: 0,
      ),
      typography: (
        plain-family:"Montserrat",
        brand-family: "Brush Script MT",
        bold-weight:"700",
        use-system-variables: false
      )
    )
  );


  
  :root {
    --sys-primary: #d9feff;
    --sys-on-primary: rgb(9, 180, 63);
    @include mat.all-component-themes($mat3-2-theme);
    @include mat.color-variants-backwards-compatibility($mat3-2-theme);

    --sys-label-large-size: 34px;
    --sys-label-medium-size: 100px;
    --sys-label-small-size: 400px;
    --sys-label-large-font: "Brush Script MT";
    
    
}
`;

console.log(convertSCSSToCSS(theme));
