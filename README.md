# vue-form

- Atomic Design + Container & Presentational Component で Vue でフォームを作成する
- Storybook を追加

## jest

### テスト実行(watch モード)

```
npm run jest:watch
```

- `a`：すべてのテストが実行されます。
- `f`：「失敗したテストのみ」モードを終了します。
- `q`：ウォッチ・モードを終了します。
- `p`：ファイル名の正規表現パターンでフィルタリングします。
- `t`：テスト名の正規表現パターンでフィルタリングします。
- `Enter`：テスト実行をトリガーします。

### メモ

- snapshot テスト(`.toMatchSnapshot`)では、`**/spec.js.snap`が作成される
- 変更された場合、`**/spec.js.snap`との差分が表示される、差分は想定通りの場合、`u`を押下し`**/spec.js.snap`を更新する

※参考：https://qiita.com/ykhirao/items/adf22bfc068cea933eed

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
