# スクリーンショット置き場

このフォルダに実際のExcel画面のスクリーンショットを置いてください。
ファイルを置いたら、steps.tsx の対応する箇所を <img> タグに置き換えます。

## §3.3 テーブルの作成方法 — 推奨ファイル名

  step3-1-select-range.png   ← ① 見出し行を含めてデータ範囲全体を選択した状態
  step3-2-insert-table.png   ← ② 「挿入」タブ → 「テーブル」ボタンをクリックする箇所
  step3-3-table-dialog.png   ← ③ 「テーブルの作成」ダイアログ（「先頭行を見出しとして使用する」チェック付き）
  step3-4-table-design.png   ← ④ テーブル変換後の「テーブルデザイン」タブ（テーブル名入力欄）

## 撮り方のコツ

- Windowsのスクリーンショット: Win+Shift+S で範囲指定キャプチャ
- Excel の該当部分だけを切り抜くと、ファイルサイズが小さくなり読み込みが速くなります
- PNG 推奨（画質を保ちやすい）

## 参照パス（steps.tsx での使い方）

  <img src="/images/step3-1-select-range.png" alt="データ範囲を選択した状態" className="rounded border border-gray-300 max-w-sm" />

画像ファイルを置いたら「steps.tsx の図解を実際のスクリーンショットに差し替えて」と依頼してください。
