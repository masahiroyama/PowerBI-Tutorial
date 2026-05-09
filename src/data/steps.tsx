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
              <p className="font-semibold mb-2">3️⃣ サンプルデータファイルの準備（重要）</p>

              {/* ダウンロードボタン */}
              <div className="mb-4 p-4 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded-lg">
                <p className="text-sm font-semibold text-green-800 dark:text-green-300 mb-3">📥 サンプルデータをダウンロード</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">
                  このチュートリアルで使用する Excel ファイルを用意しています。以下のボタンからダウンロードしてください。
                </p>
                <a
                  href={`${import.meta.env.BASE_URL}sample-data.xlsx`}
                  download="sample-data.xlsx"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-semibold rounded-lg transition-colors"
                >
                  <span>⬇️</span>
                  <span>sample-data.xlsx をダウンロード</span>
                </a>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  ダウンロード後、ファイルをデスクトップなど分かりやすい場所に保存してください。
                </p>
              </div>

              {/* ファイル内容プレビュー */}
              <p className="text-sm font-medium mb-2">📋 ファイルの内容（プレビュー）</p>
              <div className="overflow-x-auto mb-3">
                <table className="text-xs border-collapse border border-gray-300 dark:border-gray-600">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      {['プロジェクト', 'タスク', '2022/01/01', '2022/02/01', '2022/03/01', '…', '2024/12/01'].map(h => (
                        <th key={h} className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['プロジェクトA', '要件定義', 14, 8, 3, '…', 11],
                      ['プロジェクトA', '設計', 7, 19, 15, '…', 6],
                      ['プロジェクトA', '開発', 17, 5, 12, '…', 9],
                      ['プロジェクトB', '市場調査', 11, 13, 7, '…', 14],
                      ['…', '…', '…', '…', '…', '…', '…'],
                      ['プロジェクトC', '次期計画', 9, 16, 4, '…', 12],
                    ].map((row, i) => (
                      <tr key={i} className={i % 2 === 1 ? 'bg-gray-50 dark:bg-gray-800/50' : ''}>
                        {row.map((cell, j) => (
                          <td key={j} className="border border-gray-300 dark:border-gray-600 px-2 py-1 whitespace-nowrap">{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mb-3 p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded text-xs text-blue-700 dark:text-blue-300">
                <span className="font-semibold">ℹ️ データ構成：</span> プロジェクト 3種 × タスク 10種 = 計 30行、日付列は 2022/01/01〜2024/12/01 の36ヶ月分（合計 38列）
              </div>

              <p className="mt-3 font-medium">テーブルに変換する手順（図解）：</p>
              <div className="mt-2 space-y-3">

                {/* A: データ選択 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">1</span>
                    <span className="text-sm font-medium">A1〜AL31 を選択する（データ全体をドラッグ）</span>
                  </div>
                  <div className="p-3">
                    <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs font-mono bg-white dark:bg-gray-900 max-w-lg">
                      <div className="flex bg-gray-200 dark:bg-gray-700 border-b border-gray-400">
                        <div className="w-5 border-r border-gray-400 text-center py-0.5 text-gray-500 shrink-0"></div>
                        {[['A','w-20'],['B','w-16'],['C','w-16'],['D','w-16'],['…','w-8'],['AL','w-16']].map(([col, w]) => (
                          <div key={col} className={`${w} border-r border-gray-400 text-center py-0.5 font-bold bg-blue-200 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 shrink-0`}>{col}</div>
                        ))}
                      </div>
                      {[
                        ['プロジェクト', 'タスク', '2022/01/01', '2022/02/01', '…', '2024/12/01'],
                        ['プロジェクトA', '要件定義', '14', '8', '…', '11'],
                        ['プロジェクトA', '設計', '7', '19', '…', '6'],
                        ['…', '…', '…', '…', '…', '…'],
                        ['プロジェクトC', '次期計画', '9', '16', '…', '12'],
                      ].map((row, rowIdx) => (
                        <div key={rowIdx} className="flex border-b border-gray-300 dark:border-gray-600">
                          <div className="w-5 border-r border-gray-400 text-center py-0.5 bg-blue-200 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold shrink-0">{rowIdx + 1}</div>
                          {row.map((cell, colIdx) => (
                            <div key={colIdx} className={`border-r border-blue-300 dark:border-blue-600 px-1 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 truncate shrink-0 ${colIdx === 0 ? 'w-20' : colIdx === 4 ? 'w-8' : 'w-16'}`}>{cell}</div>
                          ))}
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">A1 をクリック → Ctrl+Shift+End で最終セル（AL31）まで一括選択</p>
                  </div>
                </div>

                {/* B: 挿入→テーブル */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">2</span>
                    <span className="text-sm font-medium">「挿入」タブ → 「テーブル」をクリック</span>
                  </div>
                  <div className="p-3">
                    <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                      <div className="flex bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 overflow-x-auto">
                        {['ファイル','ホーム','挿入','ページレイアウト','数式','データ'].map(tab => (
                          <div key={tab} className={`px-3 py-1.5 whitespace-nowrap ${tab === '挿入' ? 'bg-green-700 text-white font-bold' : 'text-gray-500 dark:text-gray-400'}`}>{tab}</div>
                        ))}
                      </div>
                      <div className="p-2 flex gap-2 items-start">
                        <div className="flex flex-col items-center p-2 rounded border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
                          <span className="text-xl">📋</span>
                          <span className="font-bold text-yellow-700 dark:text-yellow-300 text-xs mt-0.5">テーブル</span>
                        </div>
                        <div className="flex flex-col items-center p-2 text-gray-300 dark:text-gray-600">
                          <span className="text-xl">📊</span>
                          <span className="text-xs">グラフ</span>
                        </div>
                        <div className="flex flex-col items-center p-2 text-gray-300 dark:text-gray-600">
                          <span className="text-xl">🖼️</span>
                          <span className="text-xs">図</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* C: ダイアログ */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">3</span>
                    <span className="text-sm font-medium">ダイアログを確認して「OK」をクリック</span>
                  </div>
                  <div className="p-3">
                    <div className="border-2 border-gray-400 dark:border-gray-500 rounded-lg overflow-hidden shadow-md max-w-xs text-sm bg-white dark:bg-gray-800">
                      <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200">テーブルの作成</div>
                      <div className="p-4 space-y-3">
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">テーブルに変換するデータ範囲：</p>
                          <div className="border border-gray-300 dark:border-gray-600 rounded px-2 py-1 font-mono bg-gray-50 dark:bg-gray-700">=$A$1:$AL$31</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-blue-500 bg-blue-100 dark:bg-blue-900/40 rounded-sm flex items-center justify-center shrink-0">
                            <span className="text-blue-600 dark:text-blue-300 text-xs font-bold">✓</span>
                          </div>
                          <span className="text-sm">先頭行をテーブルの見出しとして使用する</span>
                        </div>
                        <p className="text-xs text-green-600 dark:text-green-400">↑ チェックが入っていることを確認してから OK をクリック</p>
                        <div className="flex justify-end gap-2 pt-1 border-t border-gray-200 dark:border-gray-600">
                          <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded font-medium">OK</button>
                          <button className="px-4 py-1.5 border border-gray-300 dark:border-gray-600 text-sm rounded text-gray-600 dark:text-gray-400">キャンセル</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* D: テーブルデザインタブ */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">4</span>
                    <span className="text-sm font-medium">「テーブルデザイン」タブでテーブル名を変更</span>
                  </div>
                  <div className="p-3">
                    <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                      <div className="flex bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 overflow-x-auto">
                        {['ファイル','ホーム','挿入','ページレイアウト'].map(tab => (
                          <div key={tab} className="px-2 py-1.5 text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">{tab}</div>
                        ))}
                        <div className="px-3 py-1.5 bg-teal-600 text-white font-bold whitespace-nowrap shrink-0">テーブルデザイン ← 新しく表示</div>
                      </div>
                      <div className="p-3 flex flex-wrap items-start gap-4">
                        <div className="border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3">
                          <p className="text-xs text-yellow-700 dark:text-yellow-400 font-bold mb-1">👆 ここを変更！</p>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">テーブル名：</p>
                          <div className="bg-white dark:bg-gray-800 border-2 border-blue-400 rounded px-2 py-1 font-mono">ProjectTasks</div>
                          <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">（初期値：テーブル1）</p>
                        </div>
                        <div className="text-gray-300 dark:text-gray-600 p-1 text-xs space-y-1">
                          <p>縞模様（行）</p>
                          <p>縞模様（列）</p>
                          <p>集計行</p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded text-xs">
                      <span className="font-bold text-yellow-700 dark:text-yellow-400">⚠️ ポイント：</span>
                      <span className="text-gray-700 dark:text-gray-300"> 「テーブルデザイン」タブはテーブル内のセルをクリックしているときだけ表示されます。テーブル外をクリックすると消えます。</span>
                    </div>
                  </div>
                </div>

                {/* E: 保存 */}
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="bg-gray-50 dark:bg-gray-800 px-3 py-2 flex items-center gap-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="bg-blue-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shrink-0">5</span>
                    <span className="text-sm font-medium">ファイルを保存（Ctrl+S）</span>
                  </div>
                  <div className="p-3 text-sm space-y-1 text-gray-600 dark:text-gray-400">
                    <p>・ファイル名：<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">project_tasks.xlsx</code></p>
                    <p>・保存場所：デスクトップ（推奨）</p>
                    <p>・ファイルの種類：Excel ブック（.xlsx）</p>
                  </div>
                </div>

              </div>
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
          <p className="mb-4">
            データ解析とは、大量のデータから意味のある情報やパターンを抽出し、
            ビジネスの意思決定を支援するプロセスです。
          </p>
          <div className="flex flex-col items-center gap-0">
            <div className="w-full p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 text-center">
              <p className="font-bold text-red-800 dark:text-red-300">📊 生データ（雑然データ）</p>
              <p className="text-xs text-red-600 dark:text-red-400 mt-1">月が列に並んだピボット形式・そのままでは分析しにくい</p>
            </div>
            <div className="flex flex-col items-center py-1">
              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" />
              <span className="text-lg leading-none text-gray-400">▼</span>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 my-0.5">データ整形・加工（Power Query）</p>
              <span className="text-lg leading-none text-gray-400">▼</span>
              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" />
            </div>
            <div className="w-full p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 text-center">
              <p className="font-bold text-blue-800 dark:text-blue-300">🗂️ 整理されたデータ（整然データ）</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">1行 = 1観測値のロング形式・BI ツールが処理しやすい</p>
            </div>
            <div className="flex flex-col items-center py-1">
              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" />
              <span className="text-lg leading-none text-gray-400">▼</span>
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 my-0.5">分析・可視化</p>
              <span className="text-lg leading-none text-gray-400">▼</span>
              <div className="w-0.5 h-4 bg-gray-300 dark:bg-gray-600" />
            </div>
            <div className="w-full p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 text-center">
              <p className="font-bold text-green-800 dark:text-green-300">💡 洞察・ビジネス上の価値</p>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">データドリブンな意思決定の実現</p>
            </div>
          </div>
        </Accordion>

        <Accordion title="1.2 解析しやすいデータ vs. 人が見やすいデータ">
          <p className="mb-4">
            コンピュータがデータを分析しやすい形と人間が見やすい形は異なります。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
              <div className="bg-red-100 dark:bg-red-900/40 px-3 py-2">
                <p className="font-bold text-red-800 dark:text-red-300">❌ 雑然データ（ピボット形式）</p>
                <p className="text-xs text-red-600 dark:text-red-400">人間には見やすいが、解析に不適切</p>
              </div>
              <div className="p-3 overflow-x-auto">
                <table className="text-xs border-collapse w-full">
                  <thead>
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      {['タスク', '1月', '2月', '3月', '4月', '5月'].map(h => (
                        <th key={h} className="border border-red-200 dark:border-red-700 px-2 py-1 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['営業報告', 10, 12, 11, 13, 14],
                      ['データ分析', 8, 8, 9, 7, 8],
                      ['マーケティング', 15, 14, 16, 15, 17],
                    ].map(row => (
                      <tr key={row[0]}>
                        {row.map((c, i) => (
                          <td key={i} className="border border-red-200 dark:border-red-700 px-2 py-1">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="text-xs px-3 pb-3 space-y-1 text-red-700 dark:text-red-400">
                <li>・月が増えるたびに列を追加する必要がある</li>
                <li>・BI ツールでの分析に前処理が必要</li>
                <li>・全期間の集計に複数列を参照する必要がある</li>
              </ul>
            </div>

            <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/40 px-3 py-2">
                <p className="font-bold text-green-800 dark:text-green-300">✅ 整然データ（ロング形式）</p>
                <p className="text-xs text-green-600 dark:text-green-400">コンピュータが処理しやすい形</p>
              </div>
              <div className="p-3 overflow-x-auto">
                <table className="text-xs border-collapse w-full">
                  <thead>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      {['タスク', '月', '工数'].map(h => (
                        <th key={h} className="border border-green-200 dark:border-green-700 px-2 py-1 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['営業報告', '1月', 10],
                      ['営業報告', '2月', 12],
                      ['データ分析', '1月', 8],
                      ['データ分析', '2月', 8],
                      ['…', '…', '…'],
                    ].map((row, i) => (
                      <tr key={i}>
                        {row.map((c, j) => (
                          <td key={j} className="border border-green-200 dark:border-green-700 px-2 py-1">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="text-xs px-3 pb-3 space-y-1 text-green-700 dark:text-green-400">
                <li>・各行が1つの観測値（タスク × 月）</li>
                <li>・BI ツールに直接使用可能</li>
                <li>・新しい月の追加が行を増やすだけ</li>
              </ul>
            </div>
          </div>
        </Accordion>

        <Accordion title="1.3 整然データ（Tidy Data）の3つの原則">
          <p className="mb-4 text-sm text-gray-500 dark:text-gray-400">データ科学者 Hadley Wickham が提唱した概念です。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700">
              <p className="text-2xl text-center mb-2">📋</p>
              <p className="font-bold text-center text-blue-800 dark:text-blue-300 mb-3 text-sm">原則1：各行 = 1観測値</p>
              <table className="text-xs border-collapse w-full mb-2">
                <thead>
                  <tr className="bg-blue-100 dark:bg-blue-800/60">
                    <th className="border border-blue-200 dark:border-blue-700 px-1 py-0.5 text-left">タスク</th>
                    <th className="border border-blue-200 dark:border-blue-700 px-1 py-0.5 text-left">月</th>
                    <th className="border border-blue-200 dark:border-blue-700 px-1 py-0.5 text-left">工数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                    <td className="border border-blue-200 dark:border-blue-700 px-1 py-0.5">営業</td>
                    <td className="border border-blue-200 dark:border-blue-700 px-1 py-0.5">1月</td>
                    <td className="border border-blue-200 dark:border-blue-700 px-1 py-0.5">10</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-200 dark:border-blue-700 px-1 py-0.5">営業</td>
                    <td className="border border-blue-200 dark:border-blue-700 px-1 py-0.5">2月</td>
                    <td className="border border-blue-200 dark:border-blue-700 px-1 py-0.5">12</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-blue-600 dark:text-blue-400">↑ 黄色行 = 「営業×1月」という1事実</p>
            </div>

            <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-700">
              <p className="text-2xl text-center mb-2">🏷️</p>
              <p className="font-bold text-center text-purple-800 dark:text-purple-300 mb-3 text-sm">原則2：各列 = 1変数</p>
              <table className="text-xs border-collapse w-full mb-2">
                <thead>
                  <tr className="bg-purple-100 dark:bg-purple-800/60">
                    <th className="border border-purple-200 dark:border-purple-700 px-1 py-0.5 text-left bg-yellow-100 dark:bg-yellow-900/40">タスク</th>
                    <th className="border border-purple-200 dark:border-purple-700 px-1 py-0.5 text-left bg-yellow-100 dark:bg-yellow-900/40">月</th>
                    <th className="border border-purple-200 dark:border-purple-700 px-1 py-0.5 text-left bg-yellow-100 dark:bg-yellow-900/40">工数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-purple-200 dark:border-purple-700 px-1 py-0.5">営業</td>
                    <td className="border border-purple-200 dark:border-purple-700 px-1 py-0.5">1月</td>
                    <td className="border border-purple-200 dark:border-purple-700 px-1 py-0.5">10</td>
                  </tr>
                  <tr>
                    <td className="border border-purple-200 dark:border-purple-700 px-1 py-0.5">営業</td>
                    <td className="border border-purple-200 dark:border-purple-700 px-1 py-0.5">2月</td>
                    <td className="border border-purple-200 dark:border-purple-700 px-1 py-0.5">12</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-purple-600 dark:text-purple-400">↑ 黄色列 = それぞれ1属性のみ</p>
            </div>

            <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700">
              <p className="text-2xl text-center mb-2">🔢</p>
              <p className="font-bold text-center text-green-800 dark:text-green-300 mb-3 text-sm">原則3：各セル = 1値</p>
              <table className="text-xs border-collapse w-full mb-2">
                <thead>
                  <tr className="bg-green-100 dark:bg-green-800/60">
                    <th className="border border-green-200 dark:border-green-700 px-1 py-0.5 text-left">タスク</th>
                    <th className="border border-green-200 dark:border-green-700 px-1 py-0.5 text-left">月</th>
                    <th className="border border-green-200 dark:border-green-700 px-1 py-0.5 text-left">工数</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-green-200 dark:border-green-700 px-1 py-0.5">営業</td>
                    <td className="border border-green-200 dark:border-green-700 px-1 py-0.5">1月</td>
                    <td className="border border-green-200 dark:border-green-700 px-1 py-0.5 bg-yellow-50 dark:bg-yellow-900/20 font-bold">10</td>
                  </tr>
                  <tr>
                    <td className="border border-green-200 dark:border-green-700 px-1 py-0.5">営業</td>
                    <td className="border border-green-200 dark:border-green-700 px-1 py-0.5">2月</td>
                    <td className="border border-green-200 dark:border-green-700 px-1 py-0.5 bg-yellow-50 dark:bg-yellow-900/20 font-bold">12</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-xs text-green-600 dark:text-green-400">↑ 黄色セル = 単一の数値のみ</p>
            </div>
          </div>
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

        <Accordion title="3.3 テーブルの作成方法（図解）">
          <div className="space-y-4 text-sm">

            {/* 手順1: データ選択 */}
            <div>
              <p className="font-semibold mb-2">① 見出し行を含めてデータ範囲全体を選択</p>
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs font-mono bg-white dark:bg-gray-900 max-w-xs">
                <div className="flex bg-gray-200 dark:bg-gray-700 border-b border-gray-400">
                  <div className="w-5 border-r border-gray-400 text-center py-0.5 text-gray-400"></div>
                  {[['A','w-20'],['B','w-9'],['C','w-9']].map(([col,w]) => (
                    <div key={col} className={`${w} border-r border-gray-400 text-center py-0.5 font-bold bg-blue-200 dark:bg-blue-900/60 text-blue-800 dark:text-blue-200`}>{col}</div>
                  ))}
                  <div className="text-gray-400 px-2 py-0.5">…</div>
                </div>
                {[['タスク','1月','2月'],['営業報告','10','12'],['データ分析','8','8'],['…','…','…']].map((row, i) => (
                  <div key={i} className="flex border-b border-gray-300 dark:border-gray-600">
                    <div className="w-5 border-r border-gray-400 text-center py-0.5 bg-blue-200 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 font-bold">{i+1}</div>
                    {row.map((cell, j) => (
                      <div key={j} className={`border-r border-blue-300 dark:border-blue-600 px-1 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-900 dark:text-blue-200 ${j===0?'w-20':'w-9'}`}>{cell}</div>
                    ))}
                    <div className="text-gray-400 px-2 py-0.5">…</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">A1〜データ最終行・最終列まで青く選択された状態にする</p>
            </div>

            {/* 手順2: 挿入→テーブル */}
            <div>
              <p className="font-semibold mb-2">② 「挿入」タブ → 「テーブル」をクリック</p>
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                <div className="flex bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 overflow-x-auto">
                  {['ファイル','ホーム','挿入','ページレイアウト','数式','データ'].map(tab => (
                    <div key={tab} className={`px-3 py-1.5 whitespace-nowrap ${tab==='挿入' ? 'bg-green-700 text-white font-bold' : 'text-gray-500 dark:text-gray-400'}`}>{tab}</div>
                  ))}
                </div>
                <div className="p-2 flex gap-2">
                  <div className="flex flex-col items-center p-2 rounded border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20">
                    <span className="text-xl">📋</span>
                    <span className="font-bold text-yellow-700 dark:text-yellow-300 text-xs mt-0.5">テーブル</span>
                  </div>
                  <div className="flex flex-col items-center p-2 text-gray-300 dark:text-gray-600"><span className="text-xl">📊</span><span className="text-xs">グラフ</span></div>
                  <div className="flex flex-col items-center p-2 text-gray-300 dark:text-gray-600"><span className="text-xl">🖼️</span><span className="text-xs">図</span></div>
                </div>
              </div>
            </div>

            {/* 手順3: テーブルデザインタブ */}
            <div>
              <p className="font-semibold mb-2">③ 「テーブルデザイン」タブでテーブル名を設定</p>
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                <div className="flex bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600 overflow-x-auto">
                  {['ファイル','ホーム','挿入','データ'].map(tab => (
                    <div key={tab} className="px-2 py-1.5 text-gray-400 dark:text-gray-500 whitespace-nowrap shrink-0">{tab}</div>
                  ))}
                  <div className="px-3 py-1.5 bg-teal-600 text-white font-bold whitespace-nowrap shrink-0">テーブルデザイン</div>
                </div>
                <div className="p-3 flex items-start gap-4">
                  <div className="border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg p-3 shrink-0">
                    <p className="text-xs text-yellow-700 dark:text-yellow-400 font-bold mb-1">👆 ここを変更！</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">テーブル名：</p>
                    <div className="bg-white dark:bg-gray-800 border-2 border-blue-400 rounded px-2 py-1 font-mono">Sales</div>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">（初期値：テーブル1）</p>
                  </div>
                  <div className="text-gray-300 dark:text-gray-600 text-xs space-y-1 pt-6">
                    <p>縞模様（行）</p>
                    <p>縞模様（列）</p>
                    <p>集計行</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded text-xs">
                <span className="font-bold text-yellow-700 dark:text-yellow-400">⚠️ ポイント：</span>
                <span className="text-gray-700 dark:text-gray-300"> 「テーブルデザイン」タブはテーブル内のセルをクリックしているときだけリボンに表示されます。テーブル外をクリックすると消えます。</span>
              </div>
            </div>

          </div>
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

        {(() => {
          const colorMap: Record<string, string> = {
            yellow: 'bg-yellow-500',
            orange: 'bg-orange-500',
            blue: 'bg-blue-500',
            green: 'bg-green-500',
            purple: 'bg-purple-500',
          }
          const workflowSteps = [
            { num: 1, label: 'データの取得 (Get Data)', desc: '様々なソースからデータを読み込む。Excel、SQL Server、Web API など多彩なソースに対応。', color: 'yellow', icon: '📥' },
            { num: 2, label: 'データの整形 (Power Query)', desc: 'データの汚れを落とし、使いやすく加工する。ピボット解除もここで行います。', color: 'orange', icon: '⚙️' },
            { num: 3, label: 'データモデリング', desc: 'テーブル同士の関連付けを行う。複数のデータソースを使う場合に重要。', color: 'blue', icon: '🔗' },
            { num: 4, label: '視覚化 (Report)', desc: 'グラフやチャートを配置してレポートを作成する。', color: 'green', icon: '📊' },
            { num: 5, label: '発行 (Publish)', desc: 'クラウドにアップロードして組織内で共有する。', color: 'purple', icon: '🚀' },
          ]
          return (
            <div className="space-y-3">
              {workflowSteps.map((step, i, arr) => (
                <div key={step.num} className="flex items-start gap-3">
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${colorMap[step.color]}`}>
                      {step.num}
                    </div>
                    {i < arr.length - 1 && <div className="w-0.5 h-6 bg-gray-200 dark:bg-gray-700 mt-1" />}
                  </div>
                  <div className="flex-1 pb-2 pt-1">
                    <p className="font-semibold text-gray-800 dark:text-gray-100">{step.icon} {step.label}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )
        })()}
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
          <p className="text-sm mb-3">Power BI Desktop を開くと、以下のような画面が表示されます。</p>
          {/* Power BI 起動画面 */}
          <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
            <div className="flex bg-gray-800 text-white text-xs">
              {['ファイル','ホーム','挿入','モデリング','表示','最適化','ヘルプ'].map(tab => (
                <div key={tab} className={`px-3 py-1.5 whitespace-nowrap ${tab==='ホーム' ? 'border-b-2 border-yellow-400 text-yellow-300' : 'text-gray-300'}`}>{tab}</div>
              ))}
            </div>
            <div className="bg-gray-700 p-2 flex gap-2 items-center text-xs text-gray-200 border-b border-gray-600">
              <div className="flex flex-col items-center p-1.5 rounded border border-gray-500 text-gray-300 cursor-pointer">
                <span>💾</span><span className="mt-0.5">保存</span>
              </div>
              <div className="flex flex-col items-center p-1.5 rounded border border-gray-500 text-gray-300 cursor-pointer">
                <span>↩️</span><span className="mt-0.5">元に戻す</span>
              </div>
            </div>
            <div className="flex bg-gray-50 dark:bg-gray-800 min-h-20 items-center justify-center">
              <p className="text-gray-400 text-xs">← 左アイコンで「レポート」「データ」「モデル」を切替</p>
            </div>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">新しいレポートを作成する場合は、起動後そのまま進めます。</p>
        </Accordion>

        <Accordion title="5.2 Excel ファイルを取得" defaultOpen>
          <div className="space-y-4 text-sm">

            {/* ① データを取得 */}
            <div>
              <p className="font-semibold mb-2">① 「ホーム」タブで「データを取得」をクリック</p>
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                <div className="flex bg-gray-800 text-white">
                  {['ファイル','ホーム','挿入','モデリング','表示'].map(tab => (
                    <div key={tab} className={`px-3 py-1.5 whitespace-nowrap ${tab==='ホーム' ? 'border-b-2 border-yellow-400 text-yellow-300 font-bold' : 'text-gray-400'}`}>{tab}</div>
                  ))}
                </div>
                <div className="p-2 bg-gray-700 flex gap-2">
                  <div className="flex flex-col items-center p-2 rounded border-2 border-yellow-400 bg-yellow-900/40 cursor-pointer">
                    <span className="text-xl">📂</span>
                    <span className="font-bold text-yellow-300 text-xs mt-0.5">データを取得</span>
                    <span className="text-yellow-300 text-xs">▼</span>
                  </div>
                  <div className="flex flex-col items-center p-2 text-gray-500"><span className="text-xl">🔄</span><span className="text-xs">更新</span></div>
                  <div className="flex flex-col items-center p-2 text-gray-500"><span className="text-xl">⚙️</span><span className="text-xs">変換データ</span></div>
                  <div className="flex flex-col items-center p-2 text-gray-500"><span className="text-xl">📊</span><span className="text-xs">発行</span></div>
                </div>
              </div>
            </div>

            {/* ② Excel ブックを選択 */}
            <div>
              <p className="font-semibold mb-2">② 「Excel ブック」を選択</p>
              <div className="border-2 border-gray-400 dark:border-gray-500 rounded-lg overflow-hidden shadow-md max-w-xs text-xs bg-white dark:bg-gray-800">
                <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200 text-sm">データソースの選択</div>
                <div className="p-3 space-y-1">
                  <div className="flex items-center gap-2 p-1.5 rounded border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 cursor-pointer">
                    <span className="text-lg">📗</span>
                    <span className="font-bold text-yellow-700 dark:text-yellow-300">Excel ブック</span>
                    <span className="ml-auto text-yellow-600 dark:text-yellow-400">← 選択！</span>
                  </div>
                  <div className="flex items-center gap-2 p-1.5 rounded text-gray-400 cursor-pointer"><span className="text-lg">🗄️</span><span>SQL Server</span></div>
                  <div className="flex items-center gap-2 p-1.5 rounded text-gray-400 cursor-pointer"><span className="text-lg">☁️</span><span>SharePoint</span></div>
                  <div className="flex items-center gap-2 p-1.5 rounded text-gray-400 cursor-pointer"><span className="text-lg">🌐</span><span>Web</span></div>
                  <div className="text-gray-400 text-center py-1">…他多数</div>
                </div>
              </div>
            </div>

            {/* ③ ナビゲーター */}
            <div>
              <p className="font-semibold mb-2">③ ナビゲーターで「ProjectTasks」にチェックを入れて「読み込む」</p>
              <div className="border-2 border-gray-400 dark:border-gray-500 rounded-lg overflow-hidden shadow-md text-xs bg-white dark:bg-gray-800">
                <div className="bg-gray-200 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200 text-sm">ナビゲーター</div>
                <div className="flex">
                  {/* 左パネル */}
                  <div className="w-48 border-r border-gray-300 dark:border-gray-600 p-2">
                    <div className="mb-2">
                      <input className="border border-gray-300 dark:border-gray-600 rounded px-2 py-0.5 w-full text-xs bg-white dark:bg-gray-700 dark:text-gray-300" placeholder="🔍 検索..." readOnly />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <span>▶</span>
                        <span className="text-xs">📗 project_tasks.xlsx</span>
                      </div>
                      <div className="ml-4 flex items-center gap-2 p-1 rounded bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-600">
                        <div className="w-3.5 h-3.5 border-2 border-blue-500 bg-blue-500 rounded-sm flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold leading-none">✓</span>
                        </div>
                        <span className="font-bold text-blue-700 dark:text-blue-300">ProjectTasks</span>
                        <span className="text-blue-500 dark:text-blue-400 ml-auto">←</span>
                      </div>
                    </div>
                  </div>
                  {/* 右パネル（プレビュー） */}
                  <div className="flex-1 p-2">
                    <p className="font-semibold text-gray-600 dark:text-gray-300 mb-1">プレビュー：ProjectTasks</p>
                    <table className="text-xs border-collapse w-full">
                      <thead>
                        <tr className="bg-blue-50 dark:bg-blue-900/30">
                          {['タスク','1月','2月','3月'].map(h => (
                            <th key={h} className="border border-gray-300 dark:border-gray-600 px-1 py-0.5 text-left">{h}</th>
                          ))}
                          <th className="border border-gray-300 dark:border-gray-600 px-1 py-0.5">…</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[['営業報告','10','12','11'],['データ分析','8','8','9'],['…','…','…','…']].map((row, i) => (
                          <tr key={i}>{row.map((c,j) => <td key={j} className="border border-gray-300 dark:border-gray-600 px-1 py-0.5 text-gray-600 dark:text-gray-300">{c}</td>)}
                          <td className="border border-gray-300 dark:border-gray-600 px-1 py-0.5 text-gray-400">…</td></tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="flex justify-end gap-2 p-2 border-t border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800">
                  <button className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded text-gray-500 dark:text-gray-400">データ変換</button>
                  <button className="px-3 py-1 text-xs bg-blue-600 text-white rounded font-bold">読み込む</button>
                  <button className="px-3 py-1 text-xs border border-gray-300 dark:border-gray-600 rounded text-gray-500 dark:text-gray-400">キャンセル</button>
                </div>
              </div>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded text-sm">
              ✅ 「読み込む」をクリックすると、タスク別の月ごとの工数データが Power BI に読み込まれます。
            </div>
          </div>
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
          <p className="text-sm mb-4">
            準備したサンプルデータ（テーブル名：<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ProjectTasks</code>）は
            ピボット形式（雑然データ）です。Power BI での分析には不適切なため、整然データに変換します。
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 w-full rounded-lg border-2 border-red-200 dark:border-red-700 overflow-hidden">
              <div className="bg-red-50 dark:bg-red-900/20 px-3 py-1.5">
                <p className="text-xs font-bold text-red-700 dark:text-red-300">変換前（ワイド形式）</p>
                <p className="text-xs text-red-500 dark:text-red-400">月が列に並んでいる</p>
              </div>
              <div className="p-2 overflow-x-auto">
                <table className="text-xs border-collapse w-full">
                  <thead>
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      {['タスク', '1月', '2月', '3月', '4月', '5月'].map(h => (
                        <th key={h} className="border border-red-200 dark:border-red-700 px-2 py-1 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {['営業報告', 10, 12, 11, 13, 14].map((c, i) => (
                        <td key={i} className="border border-red-200 dark:border-red-700 px-2 py-1">{c}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-red-200 dark:border-red-700 px-2 py-1 text-gray-400" colSpan={6}>…</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex flex-col items-center gap-0.5 text-gray-500 flex-shrink-0">
              <p className="text-xs font-medium text-center">ピボット解除</p>
              <span className="text-2xl md:rotate-0 rotate-90">→</span>
              <p className="text-xs text-center">Power Query</p>
            </div>

            <div className="flex-1 w-full rounded-lg border-2 border-green-200 dark:border-green-700 overflow-hidden">
              <div className="bg-green-50 dark:bg-green-900/20 px-3 py-1.5">
                <p className="text-xs font-bold text-green-700 dark:text-green-300">変換後（ロング形式）</p>
                <p className="text-xs text-green-500 dark:text-green-400">月が行として展開される</p>
              </div>
              <div className="p-2 overflow-x-auto">
                <table className="text-xs border-collapse w-full">
                  <thead>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      {['タスク', '月', '工数'].map(h => (
                        <th key={h} className="border border-green-200 dark:border-green-700 px-2 py-1 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['営業報告', '1月', 10],
                      ['営業報告', '2月', 12],
                      ['営業報告', '3月', 11],
                      ['…', '…', '…'],
                    ].map((row, i) => (
                      <tr key={i}>
                        {row.map((c, j) => (
                          <td key={j} className="border border-green-200 dark:border-green-700 px-2 py-1">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="6.2 Power Query エディタを開く">
          <div className="space-y-3 text-sm">
            <p>「読み込む」ではなく <strong>「データ変換」</strong> をクリックすると Power Query エディタが開きます。</p>
            <p className="text-gray-500 dark:text-gray-400">「読み込む」を押してしまった場合は、ホームタブの <strong>「データの変換」</strong> から開けます。</p>
            {/* Power Query エディタ レイアウト図 */}
            <div>
              <p className="font-semibold mb-2 text-sm">Power Query エディタの画面構成：</p>
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                {/* リボン */}
                <div className="flex bg-gray-700 text-white border-b border-gray-600 overflow-x-auto">
                  {['ホーム','変換','列の追加','表示'].map(tab => (
                    <div key={tab} className={`px-3 py-1.5 whitespace-nowrap ${tab==='ホーム' ? 'border-b-2 border-yellow-400 text-yellow-300' : 'text-gray-300'}`}>{tab}</div>
                  ))}
                </div>
                <div className="flex" style={{minHeight:'6rem'}}>
                  {/* 左パネル: クエリ一覧 */}
                  <div className="w-28 border-r border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 shrink-0">
                    <p className="font-bold text-gray-500 dark:text-gray-400 mb-1">クエリ</p>
                    <div className="p-1 rounded bg-blue-100 dark:bg-blue-900/40 border border-blue-300 dark:border-blue-600 text-blue-700 dark:text-blue-300 font-bold text-xs">ProjectTasks</div>
                  </div>
                  {/* 中央: データプレビュー */}
                  <div className="flex-1 p-2 overflow-x-auto">
                    <p className="font-bold text-gray-500 dark:text-gray-400 mb-1">データプレビュー（中央）</p>
                    <table className="text-xs border-collapse">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-700">
                          {['タスク','1月','2月','3月','4月','5月'].map(h => (
                            <th key={h} className="border border-gray-300 dark:border-gray-600 px-2 py-1 text-left font-semibold">{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        <tr>{['営業報告','10','12','11','13','14'].map((c,i) => <td key={i} className="border border-gray-300 dark:border-gray-600 px-2 py-0.5">{c}</td>)}</tr>
                        <tr className="bg-gray-50 dark:bg-gray-800">{['…','…','…','…','…','…'].map((c,i) => <td key={i} className="border border-gray-300 dark:border-gray-600 px-2 py-0.5 text-gray-400">{c}</td>)}</tr>
                      </tbody>
                    </table>
                  </div>
                  {/* 右パネル: ステップ */}
                  <div className="w-32 border-l border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 p-2 shrink-0">
                    <p className="font-bold text-gray-500 dark:text-gray-400 mb-1">適用したステップ</p>
                    <div className="space-y-1 text-xs text-gray-600 dark:text-gray-300">
                      <div className="p-1 rounded bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">ソース</div>
                      <div className="p-1 rounded bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600">ナビゲーション</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="6.3 ピボット解除の実行" defaultOpen>
          <div className="space-y-4 text-sm">

            {/* 推奨手順 */}
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-3">✅ 推奨手順：「他の列のピボット解除」を使う方法</p>

              {/* 手順1: 右クリック */}
              <div className="mb-3">
                <p className="font-medium mb-2">① 「タスク」列のヘッダーを右クリック</p>
                <div className="border border-gray-300 dark:border-gray-600 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 max-w-md">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-left bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200 font-bold cursor-pointer relative">
                          タスク
                          <span className="ml-1 text-blue-500">↓</span>
                          <span className="absolute -right-1 top-0 bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-500 rounded shadow-lg p-1 text-left z-10 whitespace-nowrap" style={{minWidth:'10rem'}}>
                            <div className="py-0.5 px-2 text-gray-500">フィルター</div>
                            <div className="py-0.5 px-2 text-gray-500">列の削除</div>
                            <div className="py-0.5 px-2 text-gray-500">列の複製</div>
                            <div className="py-0.5 px-2 font-bold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/30">他の列のピボット解除 ←</div>
                            <div className="py-0.5 px-2 text-gray-500">列のピボット解除</div>
                          </span>
                        </th>
                        {['1月','2月','3月','4月','5月'].map(h => (
                          <th key={h} className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-left bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>{['営業報告','10','12','11','13','14'].map((c,i) => <td key={i} className="border border-gray-300 dark:border-gray-600 px-2 py-0.5">{c}</td>)}</tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <p className="text-green-700 dark:text-green-400 text-xs">将来6月・7月などの列が追加されても自動的に処理されるため実務向きです。</p>
            </div>

            {/* 別の方法 */}
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="font-semibold text-gray-600 dark:text-gray-400 mb-2">別の方法：列を手動で選択する方法</p>
              <ol className="space-y-1 list-decimal list-inside ml-2 text-gray-600 dark:text-gray-400">
                <li>「1月」の列ヘッダーをクリック → Shift を押しながら「5月」をクリック（月の列をすべて選択）</li>
                <li><strong className="text-gray-700 dark:text-gray-300">「変換」</strong> タブ → <strong className="text-gray-700 dark:text-gray-300">「列のピボット解除」</strong> をクリック</li>
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
        <Accordion title="8.0 完成イメージ" defaultOpen>
          <p className="text-sm mb-3">このセクションで作成するレポートのレイアウトです。スライサーを操作するとグラフとテーブルが連動します。</p>
          <div className="border-2 border-gray-300 dark:border-gray-600 rounded-lg p-3 bg-gray-50 dark:bg-gray-800 space-y-2">
            <div className="border border-blue-300 dark:border-blue-600 rounded p-2 bg-white dark:bg-gray-700">
              <p className="text-xs font-bold text-blue-600 dark:text-blue-300 mb-1.5">🔽 スライサー（タスク）</p>
              <div className="flex flex-wrap gap-1.5">
                {['営業報告', 'データ分析', 'マーケティング', 'プロジェクト管理', 'システム開発'].map(t => (
                  <span key={t} className="text-xs px-2 py-0.5 bg-blue-100 dark:bg-blue-900/40 rounded border border-blue-200 dark:border-blue-700 text-blue-700 dark:text-blue-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="border border-yellow-300 dark:border-yellow-600 rounded p-2 bg-white dark:bg-gray-700 flex flex-col" style={{minHeight: '7rem'}}>
                <p className="text-xs font-bold text-yellow-600 dark:text-yellow-300">📈 折れ線グラフ</p>
                <p className="text-xs text-gray-400 mt-0.5 mb-1">タスク別の月ごとの工数推移</p>
                <svg viewBox="0 0 120 55" className="flex-1 w-full">
                  <line x1="10" y1="50" x2="115" y2="50" stroke="#d1d5db" strokeWidth="1"/>
                  <line x1="10" y1="10" x2="10" y2="50" stroke="#d1d5db" strokeWidth="1"/>
                  <polyline points="10,42 34,35 58,38 82,25 106,18" fill="none" stroke="#f59e0b" strokeWidth="1.5"/>
                  <polyline points="10,46 34,44 58,42 82,45 106,38" fill="none" stroke="#3b82f6" strokeWidth="1.5"/>
                  <polyline points="10,32 34,28 58,30 82,20 106,12" fill="none" stroke="#10b981" strokeWidth="1.5"/>
                  {['1月','2月','3月','4月','5月'].map((m, i) => (
                    <text key={m} x={10 + i * 24} y="55" fontSize="5" fill="#9ca3af" textAnchor="middle">{m}</text>
                  ))}
                </svg>
              </div>
              <div className="border border-green-300 dark:border-green-600 rounded p-2 bg-white dark:bg-gray-700">
                <p className="text-xs font-bold text-green-600 dark:text-green-300 mb-1.5">📋 テーブル</p>
                <table className="text-xs w-full border-collapse">
                  <thead>
                    <tr className="bg-green-50 dark:bg-green-900/30">
                      {['タスク', '月', '工数'].map(h => (
                        <th key={h} className="border border-green-200 dark:border-green-700 px-1 py-0.5 text-left font-semibold">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['営業報告', '1月', 10],
                      ['営業報告', '2月', 12],
                      ['データ分析', '1月', 8],
                      ['…', '…', '…'],
                    ].map((r, i) => (
                      <tr key={i} className={i % 2 === 0 ? '' : 'bg-green-50/50 dark:bg-green-900/10'}>
                        {r.map((c, j) => (
                          <td key={j} className="border border-green-200 dark:border-green-700 px-1 py-0.5">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-xs text-center text-gray-400">↑ スライサーを選択するとグラフとテーブルが連動して絞り込まれます</p>
          </div>
        </Accordion>

        <Accordion title="8.1 レポートビューに切り替え" defaultOpen>
          <div className="space-y-3 text-sm">
            <p>Power BI Desktop の左端にある3つのアイコンで画面を切り替えます。</p>
            {/* 左サイドバー図解 */}
            <div className="flex gap-4 items-start">
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 shrink-0">
                <div className="bg-gray-800 text-white text-center py-1 text-xs font-bold">Power BI</div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 p-2 border-l-4 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20 cursor-pointer">
                    <span className="text-lg">📊</span>
                    <span className="font-bold text-yellow-700 dark:text-yellow-300 text-xs">レポート</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 text-gray-400 dark:text-gray-600 cursor-pointer">
                    <span className="text-lg">🗂️</span>
                    <span className="text-xs">データ</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 text-gray-400 dark:text-gray-600 cursor-pointer">
                    <span className="text-lg">🔗</span>
                    <span className="text-xs">モデル</span>
                  </div>
                </div>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5 pt-6">
                <p>📊 <strong>レポート</strong>：グラフやビジュアルを配置する画面（今回使用）</p>
                <p>🗂️ <strong>データ</strong>：テーブルのデータ内容を確認する画面</p>
                <p>🔗 <strong>モデル</strong>：テーブル間の関連付けを設定する画面</p>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="8.2 折れ線グラフの作成：タスク別の工数比較" defaultOpen>
          <div className="space-y-4 text-sm">

            {/* 視覚化ペイン説明 */}
            <div>
              <p className="font-semibold mb-2">① 「視覚化」ペインで「折れ線グラフ」を選択</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">Power BI 画面の右側に「視覚化」ペインがあります。グラフアイコンをクリックして種類を選びます。</p>
              <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 max-w-xs">
                <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1.5 font-bold text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">視覚化</div>
                <div className="p-2">
                  <p className="text-gray-400 dark:text-gray-500 text-xs mb-1">ビジュアルのビルド</p>
                  <div className="grid grid-cols-5 gap-1">
                    {[
                      {icon:'📊',label:'棒グラフ',active:false},
                      {icon:'📈',label:'折れ線グラフ',active:true},
                      {icon:'🥧',label:'円グラフ',active:false},
                      {icon:'🔵',label:'散布図',active:false},
                      {icon:'🗺️',label:'マップ',active:false},
                      {icon:'📋',label:'テーブル',active:false},
                      {icon:'🃏',label:'カード',active:false},
                      {icon:'🎯',label:'ゲージ',active:false},
                      {icon:'🔽',label:'スライサー',active:false},
                      {icon:'📑',label:'マトリックス',active:false},
                    ].map(({icon,label,active}) => (
                      <div key={label} title={label} className={`flex flex-col items-center p-1 rounded cursor-pointer text-xs ${active ? 'border-2 border-yellow-400 bg-yellow-50 dark:bg-yellow-900/30' : 'border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800'}`}>
                        <span className="text-base">{icon}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-1 text-yellow-600 dark:text-yellow-400 text-xs">📈 折れ線グラフを選択（黄枠）</p>
                </div>
              </div>
            </div>

            {/* フィールドペイン説明 */}
            <div>
              <p className="font-semibold mb-2">② 「フィールド」ペインから各軸にドラッグ</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">視覚化ペインの下に X 軸・Y 軸・凡例などのエリアが表示されます。そこにフィールドをドラッグします。</p>
              <div className="flex gap-3 flex-wrap">
                {/* フィールド一覧 */}
                <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900">
                  <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1.5 font-bold text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">データ</div>
                  <div className="p-2 space-y-1">
                    <div className="font-semibold text-gray-500 dark:text-gray-400">▼ ProjectTasks</div>
                    <div className="ml-3 space-y-1">
                      {[
                        {field:'タスク',arrow:'→ 凡例',color:'text-purple-600 dark:text-purple-400'},
                        {field:'月',arrow:'→ X軸',color:'text-blue-600 dark:text-blue-400'},
                        {field:'工数',arrow:'→ Y軸',color:'text-green-600 dark:text-green-400'},
                      ].map(({field,arrow,color}) => (
                        <div key={field} className="flex items-center gap-2">
                          <div className="flex items-center gap-1 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 bg-gray-50 dark:bg-gray-800 cursor-grab">
                            <span className="text-gray-400">⠿</span>
                            <span>{field}</span>
                          </div>
                          <span className={`font-bold ${color}`}>{arrow}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* 軸エリア */}
                <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 flex-1 min-w-40">
                  <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1.5 font-bold text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">📈 折れ線グラフ</div>
                  <div className="p-2 space-y-2">
                    {[
                      {label:'X 軸',value:'月',color:'border-blue-300 dark:border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'},
                      {label:'Y 軸',value:'工数の合計',color:'border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300'},
                      {label:'凡例',value:'タスク',color:'border-purple-300 dark:border-purple-600 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300'},
                    ].map(({label,value,color}) => (
                      <div key={label}>
                        <p className="font-semibold text-gray-500 dark:text-gray-400 mb-0.5">{label}</p>
                        <div className={`border-2 rounded px-2 py-1 ${color} font-medium`}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Accordion>

        <Accordion title="8.3 グラフの書式設定">
          <div className="space-y-3 text-sm">
            <p>グラフをクリックした後、視覚化ペインの「書式」タブ（🎨 ブラシアイコン）をクリックします。</p>
            <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 max-w-xs">
              <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 font-bold text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">視覚化</div>
              <div className="flex border-b border-gray-300 dark:border-gray-600">
                <div className="flex-1 text-center p-1.5 text-gray-400">📊 ビルド</div>
                <div className="flex-1 text-center p-1.5 border-b-2 border-yellow-400 text-yellow-600 dark:text-yellow-400 font-bold">🎨 書式 ←</div>
                <div className="flex-1 text-center p-1.5 text-gray-400">🔍 分析</div>
              </div>
              <div className="p-2 space-y-1.5">
                <div className="p-1.5 rounded border border-gray-200 dark:border-gray-700">
                  <p className="font-semibold text-gray-600 dark:text-gray-300">タイトル</p>
                  <div className="mt-1 border border-gray-300 dark:border-gray-600 rounded px-1.5 py-0.5 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300">タスク別の月ごとの工数推移</div>
                </div>
                <div className="p-1.5 rounded border border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <span className="text-gray-600 dark:text-gray-300">凡例</span>
                  <div className="flex gap-1">
                    <div className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-400 text-xs">上</div>
                    <div className="px-1.5 py-0.5 rounded bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 font-bold text-xs border border-yellow-400">右</div>
                    <div className="px-1.5 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-400 text-xs">下</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Accordion>

        <Accordion title="8.4 テーブルの作成：詳細データの表示">
          <div className="space-y-3 text-sm">
            <ol className="space-y-2 list-decimal list-inside">
              <li>キャンバスの空きスペースをクリック（グラフ以外の場所）</li>
              <li>視覚化ペインから <strong>「テーブル」（📋）</strong> アイコンをクリック</li>
              <li>フィールドペインから「タスク」「月」「工数」をそれぞれドラッグ</li>
              <li>テーブルの端をドラッグしてサイズを調整</li>
            </ol>
            <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 max-w-xs">
              <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 font-bold text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">📋 テーブル（完成イメージ）</div>
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-800 text-white text-xs">
                    {['タスク','月','工数'].map(h => <th key={h} className="px-2 py-1 text-left border-r border-gray-600">{h}</th>)}
                  </tr>
                </thead>
                <tbody>
                  {[['営業報告','1月','10'],['営業報告','2月','12'],['データ分析','1月','8'],['…','…','…']].map((r,i) => (
                    <tr key={i} className={i%2===0 ? '' : 'bg-gray-50 dark:bg-gray-800'}>
                      {r.map((c,j) => <td key={j} className="px-2 py-0.5 border-r border-b border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">{c}</td>)}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Accordion>

        <Accordion title="8.5 スライサーの追加：インタラクティブなフィルタリング">
          <div className="space-y-3 text-sm">
            <ol className="space-y-2 list-decimal list-inside">
              <li>キャンバスの上部の空きスペースをクリック</li>
              <li>視覚化ペインから <strong>「スライサー」（🔽）</strong> アイコンをクリック</li>
              <li>フィールドペインから「タスク」をドラッグ</li>
              <li>スライサーの項目をクリックして、グラフとテーブルが絞り込まれることを確認</li>
            </ol>
            <div className="border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs bg-white dark:bg-gray-900 max-w-xs">
              <div className="bg-gray-100 dark:bg-gray-700 px-2 py-1 font-bold text-gray-600 dark:text-gray-300 border-b border-gray-300 dark:border-gray-600">🔽 スライサー（完成イメージ）</div>
              <div className="p-2 space-y-1">
                {['営業報告','データ分析','マーケティング','プロジェクト管理','システム開発'].map(task => (
                  <div key={task} className="flex items-center gap-2 py-0.5 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 rounded px-1">
                    <div className="w-3 h-3 border border-gray-400 dark:border-gray-500 rounded-sm"></div>
                    <span className="text-gray-700 dark:text-gray-300">{task}</span>
                  </div>
                ))}
              </div>
              <p className="px-2 pb-2 text-xs text-blue-600 dark:text-blue-400">↑ チェックを入れるとグラフとテーブルが連動して絞り込まれます</p>
            </div>
          </div>
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
