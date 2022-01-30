/**
 * 文字(String)が入力されているかチェック
 * @param {String} inputValue 入力文字
 * @returns {String} エラー内容配列
 */
export const inputEmptyCheck = (key, inputValue) => {
  // 型がString以外の場合
  if (typeof inputValue !== 'string') {
    return `入力された値がstring以外です。`;
  }
  // 入力項目が未入力(スペースのみは削除)
  if (!inputValue.trim()) {
    return `${key}が入力欄が空です。`;
  }
  return null;
};
