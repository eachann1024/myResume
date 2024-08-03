import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Pages from 'vite-plugin-pages'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    // 定义别名
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      vue(),
      Pages({
        dirs: 'src/pages',
      }),
      UnoCSS(),
      codeInspectorPlugin({
        bundler: 'vite',
        hideConsole: true,
        hideDomPathAttr: true,
        importClient: 'code',
      }),
      AutoImport({
        imports: [
          'vue',
          {
            radash: [
              'throttle',
              'debounce',
              'clone',
              'omit',
              'tryit',
              'shake',
              'assign',
              'isObject',
              'range',
            ],
          },
        ],
        eslintrc: {
          enabled: true,
        },
      }),
    ],
  }
})
