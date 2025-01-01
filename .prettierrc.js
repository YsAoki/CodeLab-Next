module.exports = {
  // 1行の最大幅
  printWidth: 140,
  // インデントのスペース数
  tabWidth: 2,
  // ダブルクォートを使用
  singleQuote: false,
  // 末尾のカンマを付けない
  trailingComma: "none",
  // セミコロンを付ける
  semi: true,
  // パーサーの指定
  parser: "typescript",
  // JSX の閉じタグを同じ行に配置
  bracketSameLine: false,
  // プラグインの追加
  plugins: ["prettier-plugin-organize-imports", "prettier-plugin-tailwindcss"],
  tailWindConfig: "./tailwind.config.js"
};
