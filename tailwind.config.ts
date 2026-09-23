import type { Config } from 'tailwindcss'
const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}','./components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: { colors: { ink:'#101716', cream:'#F7F3EA', forest:'#173C33', gold:'#B8925F' }, boxShadow:{ soft:'0 18px 60px rgba(15, 23, 22, .08)' } } },
  plugins: []
}
export default config
