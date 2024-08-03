import { defineConfig, presetAttributify, presetIcons, presetTypography, presetUno, transformerAttributifyJsx } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [transformerAttributifyJsx()],
  shortcuts: {
    'ellipsis': 'truncate',
    'flex-center': 'flex items-center',
    'flex-middle': 'flex justify-center items-center',
    'flex-between': 'flex justify-between items-center',
    'flex-around': 'flex justify-around items-center',
    'flex-column': 'flex flex-col',
    'flex-end': 'flex justify-end',
    'flex-start': 'flex justify-start',
    'b1': 'border-1px border-solid',
  },
})
