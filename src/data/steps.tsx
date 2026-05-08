import { Accordion } from '../components/Accordion'
import { CodeBlock } from '../components/CodeBlock'

export type Step = {
  id: number
  title: string
  estimatedMinutes: number | null
  content: React.ReactNode
}

export const steps: Step[] = [
  // ─────────────────────────────────────────────
  // Step 0: チュートリアルについて
  // ─────────────────────────────────────────────
  {
    id: 0,
    title: 'チュートリアルについて',
    estimatedMinutes: null,
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Microsoft Power BI Desktop を使用して、データの取り込みからレポートの作成、
          共有までの基本的な流れを学習します。
        </p>

        <Accordion title="⏱️ 所要時間" defaultOpen>
          <p className="font-semibold mb-3">約1時間</p>
          <ul className="space-y-1 text-sm">
            <li>・データ解析の基礎理解：5分</li>
            <li>・Excel のテーブル機能：5分</li>
            <li>・準備作業：5分</li>
            <li>・Power BI での実践（データ取得〜可視化）：40分</li>
            <li>・実践演習：10分</li>
          </ul>
        </Accordion>

        <Accordion title="🎯 対象者" defaultOpen>
          <ul className="space-y-1 text-sm">
            <li>・Power BI を初めて使う方</li>
            <li>・ビジネスデータの分析に興味がある方</li>
            <li>・Excel の分析機能をさらに高めたい方</li>
          </ul>
        </Accordion>

        <Accordion title="✅ チュートリアル開始前の準備">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-2">1️⃣ Power BI Desktop のインストール</p>
              <ul className="space-y-1 ml-4">
                <li>□ <a href="https://powerbi.microsoft.com/desktop/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Microsoft 公式サイト</a>から Power BI Desktop をダウンロード</li>
                <li>□ インストールを完了</li>
                <li>□ Power BI Desktop を起動して、起動できることを確認</li>
              </ul>
              <p className="ml-4 mt-1 text-gray-500 dark:text-gray-400">Microsoft 365 アカウントでログイン可能。ログインできなくてもローカルでの練習は可能です。</p>
            </div>

            <div>
              <p className="font-semibold mb-2">2️⃣ Excel を用意</p>
              <ul className="ml-4">
                <li>□ Microsoft Excel 2016 以降</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-2">3️⃣ サンプルデータファイルの作成（重要）</p>
              <p className="mb-2">Excel を開き、A1 セルから以下のデータを貼り付けてください：</p>
              <div className="overflow-x-auto">
                <table className="text-xs border-collapse border border-gray-300 dark:border-gray-600 w-full">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      {['タスク', '1月', '2月', '3月', '4月', '5月'].map(h => (
                        <th key={h} className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['営業報告', 10, 12, 11, 13, 14],
                      ['データ分析', 8, 8, 9, 7, 8],
                      ['マーケティング', 15, 14, 16, 15, 17],
                      ['プロジェクト管理', 12, 11, 12, 13, 12],
                      ['システム開発', 20, 22, 21, 19, 20],
                    ].map(row => (
                      <tr key={row[0]}>
                        {row.map((cell, i) => (
                          <td key={i} className="border border-gray-300 dark:border-gray-600 px-2 py-1">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 font-medium">テーブルに変換する手順：</p>
              <ol className="ml-4 mt-1 space-y-1 list-decimal list-inside">
                <li>データ範囲（A1〜F6）を選択</li>
                <li><strong>挿入</strong> タブ → <strong>テーブル</strong> をクリック</li>
                <li>「先頭行をテーブルの見出しとして使用する」にチェックが入っていることを確認して <strong>OK</strong></li>
                <li><strong>テーブルデザイン</strong> タブの「テーブル名」を <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ProjectTasks</code> に変更</li>
                <li>ファイル名 <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">project_tasks.xlsx</code> でデスクトップに保存</li>
              </ol>
            </div>

            <div>
              <p className="font-semibold mb-2">4️⃣ 環境の確認</p>
              <ul className="ml-4 space-y-1">
                <li>□ インターネット接続が可能</li>
                <li>□ 画面解像度 1366 × 768 以上（推奨）</li>
                <li>□ メモリ 8GB 以上（推奨）</li>
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title="📚 チュートリアルの構成">
          <div className="overflow-x-auto">
            <table className="text-sm border-collapse w-full">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">セクション</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">トピック</th>
                  <th className="border border-gray-300 dark:border-gray-600 px-3 py-2 text-left">時間</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['1', 'データ解析とは？', '5分'],
                  ['2', 'Power BI とは？', '2分'],
                  ['3', 'Excel のテーブル機能を使おう', '5分'],
                  ['4', '基本的なワークフロー', '1分'],
                  ['5〜9', 'ステップバイステップの実践', '40分'],
                  ['10', '実践演習', '10分'],
                ].map(([sec, topic, time]) => (
                  <tr key={sec}>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">{sec}</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">{topic}</td>
                    <td className="border border-gray-300 dark:border-gray-600 px-3 py-2">{time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Accordion>

        <Accordion title="⚠️ トラブルシューティング">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold">Q: Power BI Desktop が起動できない</p>
              <p className="mt-1 ml-4">コンピュータを再起動、アンチウイルスソフトの確認、Windows Update の完了を確認してください。</p>
            </div>
            <div>
              <p className="font-semibold">Q: Excel ファイル読み込み時にテーブルが表示されない</p>
              <p className="mt-1 ml-4">Excel を開き、<strong>挿入</strong> → <strong>テーブル</strong> でテーブルに変換してから再保存してください。</p>
            </div>
            <div>
              <p className="font-semibold">Q: チュートリアルの途中で問題が発生した</p>
              <p className="mt-1 ml-4">セクション11「よくある質問（FAQ）」を確認してください。</p>
            </div>
          </div>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 1: データ解析とは？
  // ─────────────────────────────────────────────
  {
    id: 1,
    title: 'データ解析とは？',
    estimatedMinutes: 5,
    content: (
      <div className="space-y-4">
        <Accordion title="1.1 データ解析の定義" defaultOpen>
          <p className="mb-3">
            データ解析とは、大量のデータから意味のある情報やパターンを抽出し、
            ビジネスの意思決定を支援するプロセスです。
          </p>
          <CodeBlock code={`生データ（雑然データ）
    ↓ データ整形・加工
整理されたデータ（整然データ）
    ↓ 分析・可視化
洞察・ビジネス上の価値`} />
        </Accordion>

        <Accordion title="1.2 解析しやすいデータ vs. 人が見やすいデータ">
          <p className="mb-3">
            コンピュータがデータを分析しやすい形と人間が見やすい形は異なります。
          </p>
          <p className="font-semibold text-red-600 dark:text-red-400 mb-1">❌ 人間には見やすいが、解析に不適切な形（雑然データ）</p>
          <CodeBlock language="csv" code={`タスク,1月,2月,3月,4月,5月
営業報告,10,12,11,13,14
データ分析,8,8,9,7,8
マーケティング,15,14,16,15,17`} />
          <ul className="mt-2 mb-4 text-sm space-y-1 text-red-700 dark:text-red-400">
            <li>・月が列になっているため、新しい月を追加するたびに列を増やす必要がある</li>
            <li>・グラフやピボットテーブルで分析するには前処理が必要</li>
          </ul>

          <p className="font-semibold text-green-600 dark:text-green-400 mb-1">✅ コンピュータが処理しやすい形（整然データ）</p>
          <CodeBlock language="csv" code={`タスク,月,工数
営業報告,1月,10
営業報告,2月,12
営業報告,3月,11
データ分析,1月,8
データ分析,2月,8`} />
          <ul className="mt-2 text-sm space-y-1 text-green-700 dark:text-green-400">
            <li>・各行が1つの観測値を表す</li>
            <li>・集計や集団ごとの分析が単純</li>
            <li>・ピボットテーブルやグラフに直接使用可能</li>
          </ul>
        </Accordion>

        <Accordion title="1.3 整然データ（Tidy Data）の3つの原則">
          <p className="mb-3 text-sm text-gray-500 dark:text-gray-400">データ科学者 Hadley Wickham が提唱した概念です。</p>
          <ol className="space-y-3 list-decimal list-inside text-sm">
            <li>
              <strong>各行は1つの観測値である</strong>
              <p className="ml-5 mt-1 text-gray-600 dark:text-gray-400">同一の対象に関するデータが1行に集約される</p>
            </li>
            <li>
              <strong>各列は1つの変数である</strong>
              <p className="ml-5 mt-1 text-gray-600 dark:text-gray-400">列ごとに1つの属性のみを持つ</p>
            </li>
            <li>
              <strong>各セルは1つの値である</strong>
              <p className="ml-5 mt-1 text-gray-600 dark:text-gray-400">セルには単一の値のみを含む</p>
            </li>
          </ol>
        </Accordion>

        <Accordion title="1.4 なぜ整然データが重要か？">
          <ul className="space-y-2 text-sm">
            <li>✅ Power BI、Tableau などの BI ツールは整然データを想定して設計されている</li>
            <li>✅ SQL や Python などのプログラミング言語との相性が良い</li>
            <li>✅ 機械学習モデルの学習に必要</li>
            <li>✅ データの保守・更新が簡単</li>
            <li>✅ 複数のデータセットの統合が容易</li>
          </ul>
        </Accordion>

        <Accordion title="1.5 このチュートリアルでの実践">
          <p className="text-sm">
            このチュートリアルで使用するサンプルデータは、意図的に
            <strong>雑然データ（ピボット形式）</strong>として提供しています。
            Power Query でピボット解除を行い、<strong>整然データに変換するプロセス</strong>
            を学ぶことで、実務的なデータ整形スキルを習得できます。
          </p>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 2: Power BI とは？
  // ─────────────────────────────────────────────
  {
    id: 2,
    title: 'Power BI とは？',
    estimatedMinutes: 2,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Power BI は、バラバラな場所にあるデータを接続し、視覚化し、
          組織内で共有するためのビジネスインテリジェンス（BI）ツールです。
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20">
            <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">💻 Power BI Desktop</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">レポートを作成するための<strong>無料</strong>デスクトップアプリ。このチュートリアルで使用します。</p>
          </div>
          <div className="p-4 rounded-lg border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20">
            <p className="font-semibold text-blue-800 dark:text-blue-300 mb-2">☁️ Power BI サービス</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">作成したレポートをオンラインで共有・閲覧するためのクラウドサービス。</p>
          </div>
        </div>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 3: Excelのテーブル機能
  // ─────────────────────────────────────────────
  {
    id: 3,
    title: 'Excel のテーブル機能を使おう',
    estimatedMinutes: 5,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Excel のテーブル機能を使うことで、データ管理と Power BI との連携がはるかに効率的になります。
        </p>

        <Accordion title="3.1 テーブル機能とは" defaultOpen>
          <p className="text-sm">
            テーブル機能は、Excel のデータを<strong>構造化された形式</strong>に変換する機能です。
            通常のセル範囲とは異なり、多くの利点が得られます。
          </p>
        </Accordion>

        <Accordion title="3.2 テーブル機能の利点">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-2">📋 列名での式作成</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-gray-500 mb-1">通常の参照</p>
                  <CodeBlock language="Excel" code="=SUM(B2:B100)" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 mb-1">テーブルの式</p>
                  <CodeBlock language="Excel" code="=SUM(Sales[Amount])" />
                </div>
              </div>
              <p className="mt-2 text-green-700 dark:text-green-400">→ 新しい行を追加すると自動的に計算対象に含まれる</p>
            </div>

            <div>
              <p className="font-semibold mb-1">🔄 Power BI との連携が簡単</p>
              <ul className="space-y-1 ml-4">
                <li>・ヘッダー行を自動認識</li>
                <li>・表の終わりを自動判定</li>
                <li>・データ構造の変更に対応しやすい</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold mb-1">✅ データの一貫性が保たれる</p>
              <ul className="space-y-1 ml-4">
                <li>・列名が固定されるため、誤操作による列の削除を防止</li>
                <li>・自動的に行のスタイルが統一される</li>
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title="3.3 テーブルの作成方法">
          <ol className="space-y-3 text-sm list-decimal list-inside">
            <li>
              <strong>データを選択</strong>
              <p className="ml-5 mt-1 text-gray-600 dark:text-gray-400">見出し行を含めて、データ範囲全体を選択</p>
            </li>
            <li>
              <strong>テーブルに変換</strong>
              <p className="ml-5 mt-1 text-gray-600 dark:text-gray-400"><strong>挿入</strong> タブ → <strong>テーブル</strong> をクリック</p>
            </li>
            <li>
              <strong>テーブル名の設定</strong>
              <p className="ml-5 mt-1 text-gray-600 dark:text-gray-400">分かりやすい名前をつける（例：<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">Sales</code>、<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">Projects</code>）</p>
            </li>
          </ol>
        </Accordion>

        <Accordion title="3.4 テーブルでのデータ追加">
          <p className="text-sm mb-2">テーブルの最後の行の下に新しいデータを入力すると、自動的にテーブルが拡張されます。</p>
          <ul className="text-sm space-y-1">
            <li>✅ スタイルが自動適用される</li>
            <li>✅ テーブル内の式が自動的に新しい行に拡張される</li>
            <li>✅ Power BI が最新のデータを認識する</li>
          </ul>
        </Accordion>

        <Accordion title="3.5 テーブルはいつ使うべき？">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-green-700 dark:text-green-400 mb-2">使うべき場合 ✅</p>
              <ul className="space-y-1">
                <li>・定期的に更新されるデータ</li>
                <li>・Power BI や他の BI ツールに連携するデータ</li>
                <li>・複数人で共有するデータ</li>
                <li>・計算式を含むデータ</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-500 mb-2">不要な場合</p>
              <ul className="space-y-1 text-gray-500">
                <li>・一時的なメモや計算用の表</li>
                <li>・形式が固定されていない試行錯誤用</li>
              </ul>
            </div>
          </div>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 4: 基本的なワークフロー
  // ─────────────────────────────────────────────
  {
    id: 4,
    title: '基本的なワークフロー',
    estimatedMinutes: 1,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Power BI での作業は、大きく分けて以下の5つのステップで進みます。
        </p>

        <div className="space-y-3">
          {[
            { num: 1, label: 'データの取得 (Get Data)', desc: '様々なソースからデータを読み込む。Excel、SQL Server、Web API など多彩なソースに対応。', color: 'yellow' },
            { num: 2, label: 'データの整形 (Power Query)', desc: 'データの汚れを落とし、使いやすく加工する。ピボット解除もここで行います。', color: 'orange' },
            { num: 3, label: 'データモデリング', desc: 'テーブル同士の関連付けを行う。複数のデータソースを使う場合に重要。', color: 'blue' },
            { num: 4, label: '視覚化 (Report)', desc: 'グラフやチャートを配置してレポートを作成する。', color: 'green' },
            { num: 5, label: '発行 (Publish)', desc: 'クラウドにアップロードして組織内で共有する。', color: 'purple' },
          ].map((step, i, arr) => (
            <div key={step.num} className="flex items-start gap-3">
              <div className="flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm bg-yellow-500`}>
                  {step.num}
                </div>
                {i < arr.length - 1 && <div className="w-0.5 h-6 bg-gray-200 dark:bg-gray-700 mt-1" />}
              </div>
              <div className="flex-1 pb-2">
                <p className="font-semibold text-gray-800 dark:text-gray-100">{step.label}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 5: ステップ1 データの取得
  // ─────────────────────────────────────────────
  {
    id: 5,
    title: 'ステップ1：データの取得',
    estimatedMinutes: 3,
    content: (
      <div className="space-y-4">
        <Accordion title="5.1 Power BI Desktop を起動" defaultOpen>
          <p className="text-sm">Power BI Desktop を開き、新しいプロジェクトを作成します。</p>
        </Accordion>

        <Accordion title="5.2 Excel ファイルを取得" defaultOpen>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>ホームタブで <strong>「データを取得」</strong> をクリック</li>
            <li><strong>「Excel ブック」</strong> を選択</li>
            <li>先ほど作成した <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">project_tasks.xlsx</code> ファイルを選択</li>
            <li>ナビゲーターが開いたら、テーブル <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ProjectTasks</code> にチェックを入れる</li>
            <li><strong>「読み込む」</strong> をクリック</li>
          </ol>
          <p className="mt-3 text-sm text-green-700 dark:text-green-400">
            ✅ これで、タスク別の月ごとの工数データが Power BI に読み込まれます。
          </p>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 6: ステップ2 データの整形
  // ─────────────────────────────────────────────
  {
    id: 6,
    title: 'ステップ2：データの整形（ピボット解除）',
    estimatedMinutes: 15,
    content: (
      <div className="space-y-4">
        <Accordion title="6.1 データ構造について" defaultOpen>
          <p className="text-sm mb-3">
            準備したサンプルデータ（テーブル名：<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ProjectTasks</code>）は、
            以下のピボット形式（雑然データ）です。Power BI での分析には不適切なため、整然データに変換します。
          </p>
          <div className="overflow-x-auto">
            <table className="text-xs border-collapse border border-gray-300 dark:border-gray-600">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  {['タスク', '1月', '2月', '3月', '4月', '5月'].map(h => (
                    <th key={h} className="border border-gray-300 dark:border-gray-600 px-3 py-1">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1">営業報告</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1">10</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1">12</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1">11</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1">13</td>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1">14</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-600 px-3 py-1 text-gray-400" colSpan={6}>...</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Accordion>

        <Accordion title="6.2 Power Query エディタを開く">
          <ul className="text-sm space-y-2">
            <li>・読み込み後、自動的に <strong>Power Query エディタ</strong> が開きます</li>
            <li>・もし開かない場合は、<strong>「クエリを編集」</strong> をクリックしてください</li>
          </ul>
        </Accordion>

        <Accordion title="6.3 ピボット解除の実行" defaultOpen>
          <div className="space-y-4 text-sm">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-2">✅ 推奨手順：「他の列のピボット解除」を使う方法</p>
              <ol className="space-y-1 list-decimal list-inside ml-2">
                <li>「タスク」列のヘッダーを <strong>右クリック</strong></li>
                <li><strong>「他の列のピボット解除」</strong> を選択</li>
              </ol>
              <p className="mt-2 text-green-700 dark:text-green-400">将来6月・7月などの列が追加されても自動的に処理されるため実務向きです。</p>
            </div>

            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="font-semibold text-gray-600 dark:text-gray-400 mb-2">別の方法：列を手動で選択する方法</p>
              <ol className="space-y-1 list-decimal list-inside ml-2 text-gray-600 dark:text-gray-400">
                <li>「1月」の列ヘッダーをクリック → Shift を押しながら「5月」をクリック</li>
                <li><strong>「変換」</strong> タブ → <strong>「ピボットの解除」</strong> をクリック</li>
              </ol>
            </div>
          </div>
        </Accordion>

        <Accordion title="6.4 列のリネームとデータ型の確認">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-2">列のリネーム</p>
              <p>ピボット解除後に「属性」と「値」という列が自動生成されます：</p>
              <ul className="mt-1 space-y-1 ml-4">
                <li>・「属性」を右クリック → <strong>「名前変更」</strong> → 「月」</li>
                <li>・「値」を右クリック → <strong>「名前変更」</strong> → 「工数」</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">データ型の確認</p>
              <p>「工数」列を選択し、データ型を <strong>「整数」</strong> に設定してから <strong>「完了」</strong> をクリック</p>
            </div>
            <div>
              <p className="font-semibold mb-2">最終的なデータ構造</p>
              <CodeBlock code={`タスク | 月  | 工数
営業報告 | 1月 | 10
営業報告 | 2月 | 12
営業報告 | 3月 | 11
...`} />
            </div>
          </div>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 7: ステップ3 データモデリング
  // ─────────────────────────────────────────────
  {
    id: 7,
    title: 'ステップ3：データモデリング',
    estimatedMinutes: 5,
    content: (
      <div className="space-y-4">
        <Accordion title="7.1 単一テーブルの確認" defaultOpen>
          <div className="space-y-3 text-sm">
            <p>このチュートリアルで使用するサンプルデータは、<strong>単一のテーブル</strong>で構成されています。</p>
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
              <p className="font-semibold text-blue-800 dark:text-blue-300 mb-1">データモデリングとは？</p>
              <p className="text-blue-700 dark:text-blue-400">複数のテーブルを組み合わせて、分析しやすい構造を作ることです。</p>
            </div>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="font-semibold mb-1">このチュートリアルでは不要な理由</p>
              <ul className="space-y-1">
                <li>・単一テーブルのため、リレーションシップ（関連付け）は必要ない</li>
                <li>・複数テーブルの関連付けは、より高度なトピックなので基礎習得後に学ぶ</li>
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title="7.2 後に学ぶ内容（参考）">
          <p className="text-sm mb-2">実務では通常、複数のテーブルを組み合わせて分析を行います：</p>
          <ul className="text-sm space-y-1">
            <li>・「顧客テーブル」と「購買履歴テーブル」の関連付け</li>
            <li>・「商品テーブル」と「売上テーブル」の関連付け</li>
            <li>・テーブル同士の「1対多」の関係を定義</li>
          </ul>
          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">これらについては、セクション12「次のステップ」で学習できます。</p>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 8: ステップ4 視覚化
  // ─────────────────────────────────────────────
  {
    id: 8,
    title: 'ステップ4：視覚化 - レポートの作成',
    estimatedMinutes: 20,
    content: (
      <div className="space-y-4">
        <Accordion title="8.1 レポートビューに切り替え" defaultOpen>
          <p className="text-sm">左側の「レポート」アイコンをクリックしてレポートビューに切り替えます。</p>
        </Accordion>

        <Accordion title="8.2 折れ線グラフの作成：タスク別の工数比較" defaultOpen>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>キャンバスの空白部分をクリック</li>
            <li>右側の <strong>「視覚化」ペイン</strong> から <strong>「折れ線グラフ」</strong> アイコンをクリック</li>
            <li>右側の <strong>「フィールド」ペイン</strong> から：
              <ul className="ml-5 mt-1 space-y-1">
                <li>・<strong>X 軸</strong> に「月」をドラッグ</li>
                <li>・<strong>Y 軸</strong> に「工数」をドラッグ（自動集計は合計）</li>
                <li>・<strong>凡例</strong> に「タスク」をドラッグ</li>
              </ul>
            </li>
          </ol>
        </Accordion>

        <Accordion title="8.3 グラフの書式設定">
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>グラフをクリック</li>
            <li><strong>「書式」</strong> タブで：
              <ul className="ml-5 mt-1 space-y-1">
                <li>・タイトルを追加：「タスク別の月ごとの工数推移」</li>
                <li>・凡例を右側に配置</li>
                <li>・グリッドラインを有効化</li>
              </ul>
            </li>
          </ol>
        </Accordion>

        <Accordion title="8.4 テーブルの作成：詳細データの表示">
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>別の場所に新しいビジュアルを追加</li>
            <li><strong>「テーブル」</strong> を選択</li>
            <li>フィールドから「タスク」「月」「工数」をすべてドラッグ</li>
            <li>テーブルをリサイズして整理</li>
          </ol>
        </Accordion>

        <Accordion title="8.5 スライサーの追加：インタラクティブなフィルタリング">
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>上部に新しいビジュアルを追加</li>
            <li><strong>「スライサー」</strong> を選択</li>
            <li>「タスク」をドラッグ</li>
            <li>グラフとテーブルが自動的にフィルタリングされることを確認</li>
          </ol>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 9: ステップ5 共有と発行
  // ─────────────────────────────────────────────
  {
    id: 9,
    title: 'ステップ5：共有と発行',
    estimatedMinutes: 5,
    content: (
      <div className="space-y-4">
        <Accordion title="9.1 ローカルファイルとして保存" defaultOpen>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li><strong>「ファイル」</strong> → <strong>「保存」</strong></li>
            <li>ファイル名を「project_analysis」として保存</li>
            <li>Power BI Desktop ファイル（.pbix）として保存されます</li>
          </ol>
        </Accordion>

        <Accordion title="9.2 Power BI Service への発行（オプション）">
          <p className="text-sm mb-3 text-gray-500 dark:text-gray-400">Microsoft 365 アカウントがある場合に利用できます。</p>
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li><strong>「ホーム」</strong> → <strong>「発行」</strong></li>
            <li>発行先のワークスペースを選択</li>
            <li><strong>「選択」</strong> をクリック</li>
            <li>ブラウザで自動的に Power BI Service が開き、共有可能な状態になります</li>
          </ol>
        </Accordion>

        <Accordion title="9.3 他のユーザーとの共有">
          <ul className="text-sm space-y-2">
            <li>・Power BI Service 上で <strong>「共有」</strong> をクリック</li>
            <li>・メールアドレスを入力して、同僚と共有可能</li>
            <li>・組織内での協業が実現できます</li>
          </ul>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 10: 実践演習
  // ─────────────────────────────────────────────
  {
    id: 10,
    title: '実践演習：自分のデータで試す',
    estimatedMinutes: 10,
    content: (
      <div className="space-y-4">
        <Accordion title="10.1 自分のデータを用意" defaultOpen>
          <p className="text-sm mb-2">自部門の業務データを同じピボット形式で作成しましょう。</p>
          <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
            <li>例：プロジェクト別の進捗率</li>
            <li>例：顧客別の売上</li>
            <li>例：商品別の在庫</li>
          </ul>
        </Accordion>

        <Accordion title="10.2 同じ手順を実行">
          <ol className="space-y-2 text-sm list-decimal list-inside">
            <li>データを読み込む</li>
            <li>ピボット解除で整形</li>
            <li>自部門に合わせたグラフを作成</li>
            <li>同僚に共有</li>
          </ol>
        </Accordion>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 11: よくある質問
  // ─────────────────────────────────────────────
  {
    id: 11,
    title: 'よくある質問（FAQ）',
    estimatedMinutes: null,
    content: (
      <div className="space-y-3">
        {[
          {
            q: 'Power Query でエラーが出てピボット解除できない',
            a: 'データ型を確認してください。「月」が数値になっていないか確認し、必要に応じてテキスト型に設定してください。',
          },
          {
            q: '月の順序が1月から5月ではなく、ランダムになっている',
            a: '「月」列をソートします。Power Query で「昇順」を選択し、カスタムソートで月の順序を指定できます。',
          },
          {
            q: 'レポートが重くなってきた',
            a: '不要な列を削除してください。Power Query で不要な列を削除することで、ファイルサイズが小さくなります。',
          },
          {
            q: '複数のユーザーが同時に編集したい',
            a: 'Power BI Service の「編集」機能を使用すると、複数ユーザーによる同時編集が可能です。',
          },
        ].map(({ q, a }) => (
          <Accordion key={q} title={`Q: ${q}`}>
            <p className="text-sm">{a}</p>
          </Accordion>
        ))}
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 12: 次のステップ
  // ─────────────────────────────────────────────
  {
    id: 12,
    title: '次のステップ',
    estimatedMinutes: null,
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          このチュートリアルで学んだことを基に、さらに以下を学習することをお勧めします。
        </p>

        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: 'DAX の基礎',
              icon: '📐',
              desc: '計算列やメジャーを作成し、より複雑な分析を実現。YoY 成長率、移動平均の計算など。',
            },
            {
              title: '複数データソースの統合',
              icon: '🔗',
              desc: 'Excel、SQL Server、Web API など複数のソースからデータを取得。テーブル間の関連付けを学ぶ。',
            },
            {
              title: 'ダッシュボード設計',
              icon: '📊',
              desc: 'ビジネスユーザーが意思決定をしやすいレイアウト。KPI カードの作成と活用。',
            },
            {
              title: 'セキュリティと権限管理',
              icon: '🔐',
              desc: '行レベルのセキュリティ（RLS）。部門別・ユーザー別の権限設定。',
            },
          ].map(item => (
            <div
              key={item.title}
              className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500 transition-colors"
            >
              <p className="text-2xl mb-2">{item.icon}</p>
              <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">{item.title}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 13: まとめ
  // ─────────────────────────────────────────────
  {
    id: 13,
    title: 'まとめ',
    estimatedMinutes: null,
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 dark:text-gray-300">
          このチュートリアルでは、Power BI Desktop を使用して以下を習得しました：
        </p>

        <div className="space-y-3">
          {[
            'データの取得方法（Excel ファイルの読み込み）',
            'ピボット解除によるデータ整形（雑然データ → 整然データ）',
            '視覚化によるデータ分析（折れ線グラフ、テーブル）',
            'インタラクティブなレポート作成（スライサー）',
            '基本的な共有方法（ローカル保存・Power BI Service）',
          ].map(item => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <span className="text-green-500 text-lg">✅</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 text-center">
          <p className="text-lg font-bold text-yellow-800 dark:text-yellow-300">⏱ 所要時間：約1時間</p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Power BI は、データをビジネス上の意思決定に活用するための強力なツールです。<br />
            実際の業務データで繰り返し実践することで、確実にスキルが向上します。
          </p>
          <p className="mt-3 text-lg">🎉 Happy analyzing!</p>
        </div>
      </div>
    ),
  },
]
