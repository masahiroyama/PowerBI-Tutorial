# CLAUDE.md — Power BI チュートリアル プロジェクト

## プロジェクト概要

Power BI 入門チュートリアルを提供する React アプリ（Vite + TypeScript + Tailwind CSS）。
初学者を対象に、データ解析の基礎から Power BI Desktop でのレポート作成・共有までを段階的に学習できる構成。

---

## コンテンツ管理の原則

### CONTENTS.md が唯一の骨子

- **チュートリアルのコンテンツ構成・文章・手順はすべて `CONTENTS.md` で管理する。**
- セクションの追加・変更・削除を行う際は、必ず `CONTENTS.md` を先に更新し、React アプリと同期させること。
- `CONTENTS.md` と React アプリの内容に乖離が生じないよう、**常にセットで変更する。**

### 変更フロー

```
CONTENTS.md を更新（骨子・構成・文章）
        ↓
src/data/steps.tsx を更新（React コンテンツに反映）
        ↓
src/data/scripts.ts を更新（対応するステップのスクリプトを同期）
        ↓
必要に応じてコンポーネントを更新
```

> **スクリプトの同期ルール**: `steps.tsx` のコンテンツ（手順・用語・説明の流れ）を変更したら、`scripts.ts` の対応するステップ id のスクリプト文も必ずセットで修正する。スクリプトは講師が口頭で話す想定のテキストなので、コンテンツとの乖離が生じないよう管理する。

---

## 機能管理の原則

### REQUIREMENTS.md を機能の唯一の仕様書とする

- **React アプリに機能を追加・変更・削除する際は、必ず `REQUIREMENTS.md` も同時に更新する。**
- **バグ修正や挙動変更によって仕様が変わった場合も、`REQUIREMENTS.md` を同タイミングで修正する。**
- 実装完了後に仕様書を後追いで直すのではなく、**実装と同じタイミングでセットで変更する。**
- 計画中の機能（§9）が実装されたら、対応する機能要件（§4）に移動して仕様を確定させる。

### 変更フロー

```
REQUIREMENTS.md を更新（機能仕様を追加・変更・削除）
        ↓
React アプリを実装（コンポーネント・フック・データ）
        ↓
REQUIREMENTS.md の localStorage キー一覧・UIレイアウト等の関連箇所を更新
```

---

## React アプリの表現方針

### Markdown の制約を HTML で補う

`CONTENTS.md` は Markdown のため、図・表・フローなどのグラフィカルな表現に制限がある。
React アプリ（`src/data/steps.tsx`）では、HTML/JSX/Tailwind の自由度を最大限に活用し、**初学者が直感的に理解できるリッチな表現**を実装すること。

### 積極的に使うべき視覚表現

| 場面 | 推奨する表現 |
|------|------------|
| データの流れ・変換プロセス | ステップ付きフロー図（矢印、ボックス） |
| 比較（良い例 vs 悪い例） | 2カラムの対比レイアウト、色分けカード |
| 手順説明 | 番号付きステップカード（アイコン・色付き） |
| データ構造の説明 | スタイル付きテーブル（ヘッダー色付け等） |
| コード・設定値 | `<CodeBlock>` コンポーネント |
| 折りたたみ可能な補足情報 | `<Accordion>` コンポーネント |
| チェックリスト | チェックボックス付きリスト |

### 視覚化の具体指針

- **フロー図**: `flex` + 矢印（`→`）+ 色付きボックスで表現。ステップを視覚的に区切る。
- **比較表**: ❌ 赤系と ✅ 緑系のカードを並べて対比を強調する。
- **テーブル**: ヘッダーに背景色、行の交互色（`even:bg-gray-50`）を付けて可読性を上げる。
- **アイコン**: 絵文字（⚠️ 📋 ✅ ❌ 🔄 など）を見出しや説明の冒頭に使い、視認性を向上させる。
- **コールアウトボックス**: 重要な注意点は `bg-yellow-50 border-l-4 border-yellow-400` などのスタイルで目立たせる。

---

## ファイル構成

> **更新ルール**: ファイルの追加・削除・移動を行った場合は、必ずこのセクションも同時に更新する。


```
src/
  data/
    steps.tsx       # チュートリアルの全コンテンツ（JSX）
    scripts.ts      # 各ステップの口頭説明スクリプト（steps.tsx と常に同期）
    glossary.ts     # 用語集データ（{ term, definition }[]）
  components/
    Accordion.tsx   # 折りたたみセクション
    CodeBlock.tsx   # コードブロック表示
    CompleteButton.tsx
    GlossaryPanel.tsx # 用語集スライドインパネル
    Header.tsx
    Layout.tsx
    ProgressBar.tsx
    ScriptPanel.tsx # スクリプト表示・読み上げパネル
    Sidebar.tsx
    StepNav.tsx
    StepPage.tsx
  hooks/
    useDarkMode.ts
    useProgress.ts
    useSpeech.ts    # Web Speech API ラッパー
CONTENTS.md         # コンテンツの骨子（Markdown）
```

---

## コーディング規約

- スタイルは Tailwind CSS ユーティリティクラスを使用する。
- 新規コンポーネントは `src/components/` に配置する。
- `steps.tsx` の各ステップは `id`, `title`, `estimatedMinutes`, `content` を持つ `Step` 型に従う。
- コメントは原則不要。WHY が自明でない箇所のみ1行で記述する。
