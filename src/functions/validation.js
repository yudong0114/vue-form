/**
 * 文字が入力されているかチェック
 * @param {String} inputValue 入力文字
 * @returns {String} エラー内容配列
 */
export const emptyCheck = (key, inputValue) => {
  // 入力項目が未入力
  if (inputValue.length === 0) {
    return `${key}が入力欄が空です。`;
  }
  return null;
};
