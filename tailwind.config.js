const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"], // 使用するファイルのパスを正確に設定
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#2a2a2f", // 少し明るくした深いダークグレー
          secondary: "#3a3a40" // DEFAULT よりさらに明るめ
        },
        accent: {
          neonBlue: "#4fc3f7", // 鮮やかなシアン
          neonOrange: "#ff7043", // 鮮やかなオレンジ
          neonPurple: "#7c4dff", // 鮮やかなパープル
          neonPink: "#ff4081" // 鮮やかなピンク
        },
        text: {
          light: "#e0e0e0", // 明るい灰色（テキスト用）
          dark: "#ffffff" // 完全な白
        },
        danger: {
          red: "#f44336" // 鮮烈な赤
        }
      }
    }
  },
  plugins: [
    iconsPlugin({
      collections: getIconCollections(["svg-spinners", "mdi", "lucide"])
    })
  ]
};
