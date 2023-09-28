import { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space } from "@ricktec-ui/tokens";
import { createStitches, defaultThemeMap } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  getCssText,
  theme,
  createTheme,
  config,
  keyframes,
} =createStitches({
  themeMap:{ // rastreia tokens genéricos para que possamos aplicar em outros tipos de propriedades
    ...defaultThemeMap, //para que o Stitches não subscreva algumas propriedades informamos que queremos apenas adicionar novas e manter também as default
    height:'space',
    width:'space',
  },
  theme:{ 
    // passando os nossos tokens para o Stitches
    // uso dos tokens, ai declarar as variáveis do stitches os tokens definidos aparecem com um $ antes deles
   colors: colors,
   lineHeights:lineHeights,
   space: space,
   radii: radii,
   fontSizes: fontSizes,
   fontWeights: fontWeights,
   fonts: fonts ,
  }
})