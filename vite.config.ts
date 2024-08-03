import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import { codeInspectorPlugin } from 'code-inspector-plugin'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'

import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  // const env = loadEnv(mode, process.cwd(), '')
  return {
    // 定义别名
    resolve: {
      alias: {
        '~/': `${path.resolve(__dirname, 'src')}/`,
      },
    },
    plugins: [
      VueRouter({
        /* options */
      }),
      vue(),
      UnoCSS(),
      codeInspectorPlugin({
        bundler: 'vite',
        hideConsole: true,
        hideDomPathAttr: true,
        importClient: 'code',
      }),
      // https://github.com/antfu/unplugin-vue-components
      Components({
      // allow auto load markdown components under `./src/components/`
        extensions: ['vue', 'md'],
        // allow auto import and register components used in markdown
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
        dts: 'src/components.d.ts',
      }),
      AutoImport({
        imports: [
          'vue',
          VueRouterAutoImports,
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
