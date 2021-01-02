`ReferenceError: document is not defined`

## 参考
- [Nuxtでdocument is not definedエラー](https://crieit.net/posts/Nuxt-document-is-not-defined)

## 解決
- SSRに対応していないライブラリのため発生する
- `<no-ssr>`でラップすればOK