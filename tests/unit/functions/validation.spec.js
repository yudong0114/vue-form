import { inputEmptyCheck } from '@/functions/validation.js';

describe('@/functions/validation.js - inputEmptyCheck()', () => {
  // テストケース
  const inputEmptyCheckProvider = [
    ['Success - Stringのパターン', 'String', 'String', null],
    ['Error - Numberのパターン', 'Number', 123456, '入力された値がstring以外です。'],
    ['Error - Boolean(true)のパターン', 'Boolean', true, '入力された値がstring以外です。'],
    ['Error - Boolean(false)のパターン', 'Boolean', false, '入力された値がstring以外です。'],
    ['Error - Arrayのパターン', 'Array', [], '入力された値がstring以外です。'],
    ['Error - Objectのパターン', 'Object', {}, '入力された値がstring以外です。'],
    ['Error - nullのパターン', 'Array', [], '入力された値がstring以外です。'],
    ['Error - undefinedのパターン', 'undefined', undefined, '入力された値がstring以外です。'],
    ['Error - Nanのパターン', 'NaN', NaN, '入力された値がstring以外です。'],
    [
      'Error - 全角スペースのパターン',
      'fullwidth space',
      '　',
      'fullwidth spaceが入力欄が空です。',
    ],
    ['Error - 半角スペースのパターン', 'space', ' ', 'spaceが入力欄が空です。'],
    ['Error - 空文字のパターン', 'emptyValue', '', 'emptyValueが入力欄が空です。'],
  ];
  it.each(inputEmptyCheckProvider)('%s', (testCase, key, inputValue, expectResult) => {
    const inputEmptyCheckValue = inputEmptyCheck(key, inputValue);
    expect(inputEmptyCheckValue).toBe(expectResult);
  });
});
