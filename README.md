# Power BI 入門チュートリアル

Microsoft Power BI Desktop を使って、データの取り込みからレポート作成・共有までを段階的に学べるインタラクティブなチュートリアルアプリです。

## 公開 URL

**https://mayamaura.github.io/PowerBI-Tutorial/**

GitHub Pages でホスティングしています。

## 概要

Power BI を初めて使う方を対象に、以下の内容を約1時間で学習できます。

- データ解析の基礎（整然データとは何か）
- Excel のテーブル機能の活用
- Power BI でのデータ取得・整形（ピボット解除）
- グラフ・スライサーを使ったレポート作成
- Power BI Service での発行と共有

## 主な機能

- ステップごとの進捗管理（完了ボタン・プログレスバー）
- 講師向けスクリプト表示・読み上げ（Web Speech API）
- 経過時間タイマーとペース表示
- 用語集スライドインパネル・インラインツールチップ
- ダークモード対応
- サンプルデータ（`sample-data.xlsx`）のダウンロード機能

## 技術スタック

- **React + Vite + TypeScript**
- **Tailwind CSS**

## ローカル開発

```bash
npm install
npm run dev
```

## ビルド・デプロイ

```bash
npm run build   # dist/ にビルド
npm run deploy  # GitHub Pages へデプロイ（gh-pages）
```
