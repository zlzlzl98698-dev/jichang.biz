/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#152C39',     // 深墨主色
          teal: '#087F73',     // 强调青绿
          accent: '#0A9988',   // 次级青绿
          light: '#F7F8F4',    // 浅米灰背景
          border: '#DFE6E2',   // 细边界线
          muted: '#52667A',    // 次级文字灰
          navy: '#0E1E28',     // 深蓝图表背景
          card: '#FFFFFF',     // 卡片纯白
          warning: '#D97706',  // 警示橙
          danger: '#DC2626',   // 危险红
          success: '#059669',  // 成功绿
          info: '#2563EB'      // 信息蓝
        }
      },
      fontFamily: {
        sans: [
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'monospace'
        ]
      }
    },
  },
  plugins: [],
}
