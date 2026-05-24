import { Accordion } from '../components/Accordion'
import { Section } from '../components/Section'
import { CodeBlock } from '../components/CodeBlock'

export type Step = {
  id: number
  title: string
  estimatedMinutes: number | null
  category: 'tutorial' | 'appendix'
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
    category: 'tutorial',
    content: (
      <div className="space-y-6">
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Microsoft Power BI Desktop を使用して、データの取り込みからレポートの作成、
          共有までの基本的な流れを学習します。
        </p>

        <Section title="⏱️ 所要時間">
          <p className="font-semibold mb-3">約1時間</p>
          <ul className="space-y-1 text-sm">
            <li>・データ解析の基礎理解：5分</li>
            <li>・Excel のテーブル機能：5分</li>
            <li>・準備作業：5分</li>
            <li>・Power BI での実践（データ取得〜可視化）：40分</li>
            <li>・実践演習：10分</li>
          </ul>
        </Section>

        <Section title="🎯 対象者">
          <ul className="space-y-1 text-sm">
            <li>・Power BI を初めて使う方</li>
            <li>・ビジネスデータの分析に興味がある方</li>
            <li>・Excel の分析機能をさらに高めたい方</li>
          </ul>
        </Section>

        <Section title="✅ チュートリアル開始前の準備">
          <div className="space-y-4 text-sm">
            <div>
              <p className="font-semibold mb-2">1️⃣ Power BI Desktop のインストール</p>
              <p className="ml-4 mb-2 text-gray-600 dark:text-gray-300">以下のどちらかの方法でインストールしてください：</p>
              <div className="ml-4 space-y-3">
                <div className="border border-blue-200 dark:border-blue-700 rounded p-3 bg-blue-50 dark:bg-blue-900/20">
                  <p className="font-medium text-blue-700 dark:text-blue-300 mb-1">方法 A：Microsoft 公式サイトから（推奨）</p>
                  <ul className="space-y-1">
                    <li>□ <a href="https://powerbi.microsoft.com/desktop/" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">Microsoft 公式サイト</a>にアクセス</li>
                    <li>□ 「無料でダウンロード」からインストーラーをダウンロード</li>
                    <li>□ ダウンロードした <code className="bg-gray-100 dark:bg-gray-700 px-1 rounded">.exe</code> を実行してインストール</li>
                  </ul>
                </div>
                <div className="border border-gray-200 dark:border-gray-600 rounded p-3 bg-gray-50 dark:bg-gray-800/40">
                  <p className="font-medium text-gray-700 dark:text-gray-300 mb-1">方法 B：Microsoft Store から</p>
                  <ul className="space-y-1">
                    <li>□ スタートメニューで「Microsoft Store」を開く</li>
                    <li>□ 「Power BI Desktop」を検索してインストール</li>
                  </ul>
                  <p className="mt-1 text-gray-500 dark:text-gray-400 text-xs">アップデートが Store 経由で自動管理されます。職場環境によっては Store の利用が制限されている場合があります。</p>
                </div>
              </div>
              <ul className="space-y-1 ml-4 mt-3">
                <li>□ インストール後、Power BI Desktop を起動して、起動できることを確認</li>
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
                      ['プロジェクトB', '課題設定', 11, 13, 7, '…', 14],
                      ['…', '…', '…', '…', '…', '…', '…'],
                      ['プロジェクトC', '設計', 9, 16, 4, '…', 12],
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
                <span className="font-semibold">ℹ️ データ構成：</span> プロジェクト 5種 × タスク 6種 = 計 30行、日付列は 2022/01/01〜2024/12/01 の36ヶ月分（合計 38列）
              </div>

              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
                テーブルへの変換と保存の詳しい手順は、次のセクション3「Excel のテーブル機能を使おう」で図解付きで学びます。
              </p>
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
        </Section>

        <Section title="📚 チュートリアルの構成">
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
        </Section>

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
    title: 'データ解析の基礎',
    estimatedMinutes: 5,
    category: 'tutorial',
    content: (
      <div className="space-y-4">
        <Section title="1.1 解析しやすいデータ vs. 人が見やすいデータ">
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
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">タスク別 月次工数（時間）</p>
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
            </div>

            <div className="rounded-lg border-2 border-green-300 dark:border-green-700 overflow-hidden">
              <div className="bg-green-100 dark:bg-green-900/40 px-3 py-2">
                <p className="font-bold text-green-800 dark:text-green-300">✅ 整然データ（ロング形式）</p>
                <p className="text-xs text-green-600 dark:text-green-400">コンピュータが処理しやすい形</p>
              </div>
              <div className="p-3 overflow-x-auto">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1">タスク別 月次工数（時間）</p>
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

          {/* SVG: ピボット形式の4つの特徴を視覚的に説明 */}
          <div className="mt-4 rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
            <div className="bg-red-100 dark:bg-red-900/40 px-3 py-2">
              <p className="font-bold text-red-800 dark:text-red-300">🔍 ピボット形式（雑然データ）の特徴</p>
              <p className="text-xs text-red-600 dark:text-red-400">なぜ解析ツールで扱いにくいのか</p>
            </div>
            <div className="p-3">
            <svg viewBox="0 0 635 235" width="100%" xmlns="http://www.w3.org/2000/svg" style={{fontFamily: 'sans-serif'}}>
              <defs>
                <marker id="sv-a1" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#d97706"/></marker>
                <marker id="sv-a2" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#dc2626"/></marker>
                <marker id="sv-a3" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#6b7280"/></marker>
                <marker id="sv-a4" markerWidth="7" markerHeight="7" refX="6" refY="3" orient="auto"><path d="M0,0 L0,6 L7,3 z" fill="#7c3aed"/></marker>
              </defs>

              {/* ① callout: months as column names */}
              <rect x="93" y="4" width="215" height="22" fill="#fef3c7" stroke="#f59e0b" strokeWidth="1.5" rx="3"/>
              <text x="200" y="19" textAnchor="middle" fontSize="10" fill="#92400e" fontWeight="bold">① 月がデータでなく「列名」になっている</text>
              <line x1="200" y1="26" x2="200" y2="38" stroke="#d97706" strokeWidth="1.5" markerEnd="url(#sv-a1)"/>

              {/* Table header (y=40-64) */}
              <rect x="22" y="40" width="80" height="24" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <text x="62" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">タスク</text>
              <rect x="102" y="40" width="54" height="24" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <text x="129" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">1月</text>
              <rect x="156" y="40" width="54" height="24" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <text x="183" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">2月</text>
              <rect x="210" y="40" width="54" height="24" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <text x="237" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">3月</text>
              <rect x="264" y="40" width="54" height="24" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <text x="291" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">4月</text>
              <rect x="318" y="40" width="54" height="24" fill="#fca5a5" stroke="#ef4444" strokeWidth="1"/>
              <text x="345" y="56" textAnchor="middle" fontSize="10" fontWeight="bold" fill="#7f1d1d">5月</text>

              {/* Row 1 (y=64-88): 営業報告 — highlighted */}
              <rect x="22" y="64" width="80" height="24" fill="#fff7f7" stroke="#ef4444" strokeWidth="1"/>
              <text x="62" y="80" textAnchor="middle" fontSize="9" fill="#374151">営業報告</text>
              {['10','12','11','13','14'].map((v,i) => (
                <g key={i}>
                  <rect x={102+i*54} y="64" width="54" height="24" fill="#fef9c3" stroke="#ef4444" strokeWidth="1"/>
                  <text x={129+i*54} y="80" textAnchor="middle" fontSize="10" fill="#374151">{v}</text>
                </g>
              ))}

              {/* Row 2 (y=88-112): データ分析 */}
              <rect x="22" y="88" width="80" height="24" fill="#fff7f7" stroke="#ef4444" strokeWidth="1"/>
              <text x="62" y="104" textAnchor="middle" fontSize="9" fill="#374151">データ分析</text>
              {['8','8','9','7','8'].map((v,i) => (
                <g key={i}>
                  <rect x={102+i*54} y="88" width="54" height="24" fill="#fff7f7" stroke="#ef4444" strokeWidth="1"/>
                  <text x={129+i*54} y="104" textAnchor="middle" fontSize="10" fill="#374151">{v}</text>
                </g>
              ))}

              {/* Row 3 (y=112-136): マーケ */}
              <rect x="22" y="112" width="80" height="24" fill="#fff7f7" stroke="#ef4444" strokeWidth="1"/>
              <text x="62" y="128" textAnchor="middle" fontSize="9" fill="#374151">マーケ…</text>
              {['15','14','16','15','17'].map((v,i) => (
                <g key={i}>
                  <rect x={102+i*54} y="112" width="54" height="24" fill="#fff7f7" stroke="#ef4444" strokeWidth="1"/>
                  <text x={129+i*54} y="128" textAnchor="middle" fontSize="10" fill="#374151">{v}</text>
                </g>
              ))}

              {/* Ghost column (6月?) — dashed */}
              <rect x="372" y="40" width="54" height="96" fill="none" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,3" rx="2"/>
              <text x="399" y="57" textAnchor="middle" fontSize="10" fill="#9ca3af">6月?</text>
              <text x="399" y="81" textAnchor="middle" fontSize="9" fill="#d1d5db">…</text>
              <text x="399" y="105" textAnchor="middle" fontSize="9" fill="#d1d5db">…</text>
              <text x="399" y="129" textAnchor="middle" fontSize="9" fill="#d1d5db">…</text>

              {/* ② bracket on row 1 */}
              <line x1="374" y1="66" x2="382" y2="66" stroke="#dc2626" strokeWidth="1.5"/>
              <line x1="374" y1="88" x2="382" y2="88" stroke="#dc2626" strokeWidth="1.5"/>
              <line x1="382" y1="66" x2="382" y2="88" stroke="#dc2626" strokeWidth="1.5"/>
              <path d="M382,77 L428,77 L432,77" stroke="#dc2626" strokeWidth="1.5" fill="none" markerEnd="url(#sv-a2)"/>
              <rect x="433" y="62" width="186" height="34" fill="#fef2f2" stroke="#dc2626" strokeWidth="1.5" rx="3"/>
              <text x="526" y="77" textAnchor="middle" fontSize="10" fill="#991b1b" fontWeight="bold">② 1行に5ヶ月分の値が混在</text>
              <text x="526" y="90" textAnchor="middle" fontSize="9.5" fill="#991b1b">（1行 ≠ 1つの観測値）</text>

              {/* ③ arrow from ghost col down */}
              <line x1="399" y1="138" x2="399" y2="150" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="3,2" markerEnd="url(#sv-a3)"/>
              <rect x="358" y="152" width="249" height="22" fill="#f9fafb" stroke="#9ca3af" strokeWidth="1.5" rx="3"/>
              <text x="482" y="167" textAnchor="middle" fontSize="10" fill="#4b5563">③ 月が増えるたびに列の追加が必要になる</text>

              {/* ④ horizontal span under row data */}
              <line x1="102" y1="140" x2="372" y2="140" stroke="#7c3aed" strokeWidth="1.5"/>
              <line x1="102" y1="135" x2="102" y2="145" stroke="#7c3aed" strokeWidth="1.5"/>
              <line x1="372" y1="135" x2="372" y2="145" stroke="#7c3aed" strokeWidth="1.5"/>
              <line x1="237" y1="140" x2="237" y2="150" stroke="#7c3aed" strokeWidth="1.5" markerEnd="url(#sv-a4)"/>
              <rect x="22" y="152" width="280" height="22" fill="#ede9fe" stroke="#7c3aed" strokeWidth="1.5" rx="3"/>
              <text x="162" y="167" textAnchor="middle" fontSize="10" fill="#4c1d95">④ 集計には全列（全月）を参照する必要がある</text>

              {/* Summary box */}
              <rect x="22" y="182" width="600" height="46" fill="#fff7ed" stroke="#f97316" strokeWidth="1" rx="4"/>
              <text x="32" y="197" fontSize="10" fontWeight="bold" fill="#c2410c">このサンプルデータは？</text>
              <text x="32" y="212" fontSize="9.5" fill="#7c2d12">プロジェクト5×タスク6＝30行、月列36ヶ月 → 合計38列のピボット形式。§5でピボット解除して整然データに変換します。</text>
              <text x="32" y="224" fontSize="9.5" fill="#7c2d12">Power BI はピボット解除後のデータを使ってグラフ・集計を行います。</text>
            </svg>
            </div>
          </div>

          <div className="mt-4 rounded-lg border-2 border-red-300 dark:border-red-700 overflow-hidden">
            <div className="bg-red-100 dark:bg-red-900/40 px-3 py-2">
              <p className="font-bold text-red-800 dark:text-red-300">❌ 雑然データ（よくある別パターン）</p>
              <p className="text-xs text-red-600 dark:text-red-400">「見やすく整えた」つもりが解析できないデータに</p>
            </div>
            <div className="p-3 overflow-x-auto">
              <table className="text-xs border-collapse w-full">
                <thead>
                  <tr className="bg-red-50 dark:bg-red-900/20">
                    {['部署', '担当者', '売上（万円）', 'ステータス'].map(h => (
                      <th key={h} className="border border-red-200 dark:border-red-700 px-2 py-1 text-left">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td rowSpan={3} className="border border-red-200 dark:border-red-700 px-2 py-1 bg-orange-100 dark:bg-orange-900/30 align-middle text-center font-semibold">
                      営業部<br />
                      <span className="text-orange-600 dark:text-orange-400 font-normal">① 結合</span>
                    </td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1">田中</td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1 bg-orange-100 dark:bg-orange-900/30">
                      120（先月比+8）<span className="text-orange-600 dark:text-orange-400"> ③</span>
                    </td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1">進行中</td>
                  </tr>
                  <tr>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1">鈴木</td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1 bg-orange-100 dark:bg-orange-900/30">
                      85（先月比−5）<span className="text-orange-600 dark:text-orange-400"> ③</span>
                    </td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1 bg-orange-100 dark:bg-orange-900/30">
                      ↑ <span className="text-orange-600 dark:text-orange-400">②</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1">山田</td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1 bg-orange-100 dark:bg-orange-900/30">
                      200（先月比+15）<span className="text-orange-600 dark:text-orange-400"> ③</span>
                    </td>
                    <td className="border border-red-200 dark:border-red-700 px-2 py-1">完了</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <ul className="text-xs px-3 pb-3 space-y-1.5 text-red-700 dark:text-red-400">
              <li><span className="font-semibold text-orange-600 dark:text-orange-400">① セルの結合：</span>「営業部」が3行にまたがるため、各行に部署情報が入らず、フィルタや集計ができない</li>
              <li><span className="font-semibold text-orange-600 dark:text-orange-400">② 「↑」による省略：</span>目で見れば意味が伝わるが、プログラムは前の行の値を引き継がないため「↑」という文字列として読み込まれる</li>
              <li><span className="font-semibold text-orange-600 dark:text-orange-400">③ セル内の複数情報：</span>「120（先月比+8）」のように数値と注記が混在すると、Power BI などのツールは数値と注記を別々に読み取ることができず、集計やグラフ化でエラーが起きやすい。AI（Copilot・ChatGPT など）はある程度読み取れるが、大量データでは見落としや誤解釈が積み上がるリスクがある</li>
            </ul>
          </div>

          <Accordion title="✅ 整然データに直すとどうなる？（クリックして確認）">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">①②③ をすべて解消した整然データ版です。</p>
            <div className="overflow-x-auto">
              <table className="text-xs border-collapse w-full">
                <thead>
                  <tr className="bg-green-50 dark:bg-green-900/20">
                    {['部署', '担当者', '売上（万円）', '前月比（万円）', 'ステータス'].map(h => (
                      <th key={h} className="border border-green-200 dark:border-green-700 px-2 py-1 text-left">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['営業部', '田中', 120, '+8', '進行中'],
                    ['営業部', '鈴木', 85, '−5', '進行中'],
                    ['営業部', '山田', 200, '+15', '完了'],
                  ].map((row, i) => (
                    <tr key={i} className="even:bg-gray-50 dark:even:bg-gray-800/40">
                      {row.map((c, j) => (
                        <td key={j} className="border border-green-200 dark:border-green-700 px-2 py-1">{c}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <ul className="mt-3 text-xs space-y-1 text-gray-600 dark:text-gray-400">
              <li>✅ <span className="font-semibold">① 結合を解除</span>：各行に「営業部」を明示し、フィルタ・集計が可能になった</li>
              <li>✅ <span className="font-semibold">② 「↑」を実値に置換</span>：鈴木行のステータスを「進行中」と明示した</li>
              <li>✅ <span className="font-semibold">③ 列を分離</span>：「120（先月比+8）」を「売上」と「前月比」の2列に分け、各セルが1値になった</li>
            </ul>
          </Accordion>

          <div className="mt-4 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400">
            <p className="text-sm font-semibold text-blue-800 dark:text-blue-300 mb-2">💡 雑然データが「問題になるとき・ならないとき」</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div>
                <p className="font-semibold text-gray-600 dark:text-gray-400 mb-1">問題にならないケース</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <li>✅ 人に見せるだけで、解析ツールには通さない</li>
                  <li>✅ 印刷・配布・プレゼン用の固定レポート</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-gray-600 dark:text-gray-400 mb-1">問題になるケース</p>
                <ul className="space-y-1 text-gray-700 dark:text-gray-300 text-xs">
                  <li>❌ Power BI・AI などで分析したい</li>
                  <li>❌ データを集計・フィルタ・グラフ化したい</li>
                </ul>
              </div>
            </div>
            <p className="mt-3 text-xs text-blue-700 dark:text-blue-300">
              <span className="font-semibold">実務上のポイント：</span>
              「今は配布するだけ」でも、将来的に分析したくなる可能性があるなら、
              <span className="font-semibold">「整然データに変換しやすい状態」</span>を保っておくことが重要です。
              具体的には、セル結合しない・↑省略しない・1セル1値、の3点を守るだけで、後から Power BI や AI に通せる状態になります。
            </p>
          </div>
        </Section>

        <Section title="1.2 データ解析とは？">
          <p className="mb-4">
            データ解析とは、大量のデータから意味のある情報やパターンを抽出し、
            ビジネスの意思決定を支援するプロセスです。
            「人が見やすい形（雑然データ）」を「コンピュータが処理しやすい形（整然データ）」に
            変換することが、その第一歩となります。
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
        </Section>

        <Section title="1.3 なぜ整然データが重要か？">
          <ul className="space-y-2 text-sm">
            <li>✅ Power BI、Tableau などの BI ツールは整然データを想定して設計されている</li>
            <li>✅ AI との相性が良い</li>
            <li>✅ データの保守・更新が簡単</li>
            <li>✅ 複数のデータセットの統合が容易</li>
          </ul>
          <div className="mt-4 p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-400">
            <p className="text-sm font-semibold text-purple-800 dark:text-purple-300 mb-2">🤖 AI との関係</p>
            <p className="text-sm text-purple-700 dark:text-purple-300 mb-3">
              整然データ、もしくは簡単に整然データに変換できる形にしておくと、AI がデータの構造を推測する手間が減り、<strong>より的確な分析結果が得られやすくなります。</strong>
            </p>
          </div>
        </Section>

        <Section title="1.4 このチュートリアルでの実践">
          <p className="text-sm">
            このチュートリアルで使用するサンプルデータは、意図的に
            <strong>雑然データ（ピボット形式）</strong>として提供しています。
            Power Query でピボット解除を行い、<strong>整然データに変換するプロセス</strong>
            を学ぶことで、実務的なデータ整形スキルを習得できます。
          </p>
        </Section>
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
    category: 'tutorial',
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
    category: 'tutorial',
    content: (
      <div className="space-y-4">
        <p className="text-gray-700 dark:text-gray-300">
          Excel のテーブル機能を使うことで、データ管理と Power BI との連携がはるかに効率的になります。
        </p>

        <Section title="3.1 テーブル機能とは">
          <p className="text-sm">
            テーブル機能は、列に名前をつけ、データの範囲をひとまとまりとして Excel に認識させる機能です。
            通常のセル範囲とは異なり、多くの利点が得られます。
          </p>
        </Section>

        <Section title="3.2 テーブル機能の利点">
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
                  <div className="mt-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded p-2 text-xs space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700 dark:text-blue-300">Sales</span>
                      <span className="text-gray-600 dark:text-gray-400">→ テーブル名（Excelでテーブルに付けた名前）</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-blue-700 dark:text-blue-300">[Amount]</span>
                      <span className="text-gray-600 dark:text-gray-400">→ 列名（テーブル内の見出し行の名前）</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded p-2">
                  <p className="font-semibold text-red-700 dark:text-red-300 mb-1">❌ 通常の参照：行を追加したら式も直す必要がある</p>
                  <p className="text-gray-600 dark:text-gray-400">B101 に新しいデータを入力しても <span className="font-mono">B2:B100</span> のままなので、B101 は合計に含まれない。式を <span className="font-mono">B2:B101</span> に手動で修正する必要がある。</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded p-2">
                  <p className="font-semibold text-green-700 dark:text-green-300 mb-1">✅ テーブルの式：式を変えなくても自動で含まれる</p>
                  <p className="text-gray-600 dark:text-gray-400">テーブルの末尾に行を追加すると、テーブルの範囲が自動的に広がる。<span className="font-mono">Sales[Amount]</span> はテーブル全体を指すので、式はそのままで新しいデータも合計に含まれる。</p>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold mb-1">🔄 Power BI との連携が簡単</p>
              <ul className="space-y-1 ml-4">
                <li>・ヘッダー行を自動認識</li>
                <li>・表の終わりを自動判定</li>
                <li>・行を追加するとテーブルの範囲が自動拡張されるため、Power BI の次回更新時に新しいデータが自動で取り込まれる</li>
                <li>・列を追加しても Power BI の「更新」だけで自動的に取り込まれる</li>
                <li>・テーブルをシート内で移動しても、テーブル名で接続しているため Power BI の設定を変更しなくてよい</li>
              </ul>
            </div>
          </div>
        </Section>

        <Section title="3.3 テーブルの作成方法（実践）">
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
            ダウンロードした <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">sample-data.xlsx</code> を開き、以下の手順でテーブルに変換して保存してみてください。
          </p>
          <div className="space-y-4 text-sm">

            {/* 手順1: データ選択 */}
            <div>
              <p className="font-semibold mb-2">① 見出し行を含めてデータ範囲全体を選択</p>
              <div className="overflow-x-auto">
                <img src={`${import.meta.env.BASE_URL}images/step3-1-select-range.png`} alt="データ範囲を選択した状態" className="rounded border border-gray-300 dark:border-gray-600" />
              </div>
              <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">A3〜データ最終行・最終列まで青く選択された状態にする（ショートカット：A3 をクリック → Ctrl+Shift+End）</p>
            </div>

            {/* 手順2: 挿入→テーブル */}
            <div>
              <p className="font-semibold mb-2">② 「挿入」タブ → 「テーブル」をクリック</p>
              <div className="overflow-x-auto">
                <img src={`${import.meta.env.BASE_URL}images/step3-2-insert-table.png`} alt="挿入タブのテーブルボタン" className="rounded border border-gray-300 dark:border-gray-600" />
              </div>
            </div>

            {/* 手順3: ダイアログ確認 */}
            <div>
              <p className="font-semibold mb-2">③ ダイアログを確認して「OK」をクリック</p>
              <div className="overflow-x-auto">
                <img src={`${import.meta.env.BASE_URL}images/step3-3-table-dialog.png`} alt="テーブルの作成ダイアログ" className="rounded border border-gray-300 dark:border-gray-600" />
              </div>
              <p className="text-xs text-green-600 dark:text-green-400 mt-1">「先頭行をテーブルの見出しとして使用する」にチェックが入っていることを確認してから OK をクリック</p>
            </div>

            {/* 手順4: テーブルデザインタブ */}
            <div>
              <p className="font-semibold mb-2">④ 「テーブルデザイン」タブでテーブル名「ProjectTaskTable」を設定</p>
              <div className="overflow-x-auto">
                <img src={`${import.meta.env.BASE_URL}images/step3-4-table-design.png`} alt="テーブルデザインタブのテーブル名入力欄" className="rounded border border-gray-300 dark:border-gray-600" />
              </div>
              <div className="mt-2 p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 rounded text-xs">
                <span className="font-bold text-yellow-700 dark:text-yellow-400">⚠️ ポイント：</span>
                <span className="text-gray-700 dark:text-gray-300"> 「テーブルデザイン」タブはテーブル内のセルをクリックしているときだけリボンに表示されます。テーブル外をクリックすると消えます。</span>
              </div>
            </div>

            {/* 手順5: ファイルを保存 */}
            <div>
              <p className="font-semibold mb-2">⑤ ファイルを <strong>project_tasks.xlsx</strong> という名前で保存</p>
              <ol className="space-y-1 text-xs text-gray-700 dark:text-gray-300 ml-4 list-decimal">
                <li><strong>Ctrl+Shift+S</strong>（または「ファイル」→「名前を付けて保存」）を押す</li>
                <li>保存場所：デスクトップなど分かりやすい場所を選択</li>
                <li>ファイル名に <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">project_tasks</code> と入力</li>
                <li>ファイルの種類が <strong>「Excel ブック（*.xlsx）」</strong> になっていることを確認して「保存」</li>
              </ol>
              <div className="mt-2 p-2 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded text-xs">
                ✅ これで §5 のデータ取得で使う Excel ファイルの準備が完了です。
              </div>
            </div>

          </div>
        </Section>

        <Section title="3.4 テーブルはいつ使うべき？">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-green-700 dark:text-green-400 mb-2">使うべき場合 ✅</p>
              <ul className="space-y-1">
                <li>・定期的に更新されるデータ</li>
                <li>・Power BI や他の BI ツールに連携するデータ</li>
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
        </Section>

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
    category: 'tutorial',
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
            { num: 1, label: 'データの取得', desc: '様々なソースからデータを読み込む。Excel やデータベースなど多彩なソースに対応。', color: 'yellow', icon: '📥', outOfScope: false },
            { num: 2, label: 'データの整形 (Power Query)', desc: 'データの汚れを落とし、使いやすく加工する。ピボット解除もここで行います。', color: 'orange', icon: '⚙️', outOfScope: false },
            { num: 3, label: 'データモデリング', desc: 'テーブル同士の関連付けを行う。複数のデータソースを使う場合に重要。', color: 'blue', icon: '🔗', outOfScope: true },
            { num: 4, label: '視覚化', desc: 'グラフやチャートを配置してレポートを作成する。', color: 'green', icon: '📊', outOfScope: false },
            { num: 5, label: '発行', desc: 'クラウドにアップロードして組織内で共有する。', color: 'purple', icon: '🚀', outOfScope: true },
          ]
          return (
            <div className="space-y-3">
              {workflowSteps.map((step, i, arr) => (
                <div key={step.num} className={`flex items-start gap-3 ${step.outOfScope ? 'opacity-50' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm ${colorMap[step.color]}`}>
                      {step.num}
                    </div>
                    {i < arr.length - 1 && <div className="w-0.5 h-6 bg-gray-200 dark:bg-gray-700 mt-1" />}
                  </div>
                  <div className="flex-1 pb-2 pt-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-semibold text-gray-800 dark:text-gray-100">{step.icon} {step.label}</p>
                      {step.outOfScope && (
                        <span className="text-xs px-1.5 py-0.5 rounded bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 font-medium">本チュートリアル対象外</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-200 dark:border-gray-700">
                ※ <span className="font-medium">データモデリング</span>（複数テーブルのリレーション設定）と<span className="font-medium">発行</span>（Power BI Service へのアップロード）は、このチュートリアルでは扱いません。まずは1つのExcelファイルを取得・整形・可視化する流れを体験することに集中します。
              </p>
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
    category: 'tutorial',
    content: (
      <div className="space-y-4">
        <Section title="5.1 Power BI Desktop を起動">
          <div className="space-y-6 text-sm">

            {/* ① 起動 → スタート画面で「空のレポート」を選択 */}
            <div>
              <p className="font-semibold mb-2">① Power BI Desktop を起動し、「空のレポート」をクリックして新規作成</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step5-1-startup.png`}
                  alt="Power BI Desktop のスタート画面。「空のレポート」を選択する"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

            {/* ② 編集画面 */}
            <div>
              <p className="font-semibold mb-2">② レポートの編集画面が開きます</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step5-1-editor.png`}
                  alt="Power BI Desktop レポート編集画面"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>

              {/* 画面構成の疑似レイアウト図 */}
              <div className="mt-4 border border-gray-400 dark:border-gray-500 rounded overflow-hidden text-xs select-none bg-white dark:bg-gray-900">
                {/* ② リボン */}
                <div className="bg-indigo-100 dark:bg-indigo-900/40 border-b-2 border-indigo-300 dark:border-indigo-600 px-3 py-1.5 flex items-center gap-2">
                  <span className="font-bold text-indigo-700 dark:text-indigo-300">② リボン</span>
                  <span className="text-indigo-500 dark:text-indigo-400">ホーム ／ 挿入 ／ モデリング ／ 表示 …</span>
                </div>
                {/* 本体（左ナビ・キャンバス・右ペイン） */}
                <div className="flex" style={{minHeight: '9rem'}}>
                  {/* ① 左側ナビゲーション */}
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-r-2 border-yellow-300 dark:border-yellow-600 flex flex-col items-center justify-center gap-2 px-2 py-3">
                    <span className="font-bold text-yellow-700 dark:text-yellow-300 [writing-mode:vertical-lr]">① 左側ナビ</span>
                    <div className="space-y-1 text-center text-yellow-600 dark:text-yellow-400">
                      <div className="bg-yellow-200 dark:bg-yellow-800 rounded px-1">📊</div>
                      <div className="rounded px-1">🗂️</div>
                      <div className="rounded px-1">🔗</div>
                    </div>
                  </div>
                  {/* ③ キャンバス */}
                  <div className="flex-1 bg-green-50 dark:bg-green-900/10 border-r-2 border-green-300 dark:border-green-700 flex flex-col items-center justify-center gap-2 p-3">
                    <span className="font-bold text-green-700 dark:text-green-300">③ キャンバス</span>
                    <div className="flex gap-2 flex-wrap justify-center">
                      <div className="border border-green-400 dark:border-green-600 rounded px-2 py-1 text-green-600 dark:text-green-400">📈 折れ線グラフ</div>
                      <div className="border border-green-400 dark:border-green-600 rounded px-2 py-1 text-green-600 dark:text-green-400">📋 テーブル</div>
                      <div className="border border-green-400 dark:border-green-600 rounded px-2 py-1 text-green-600 dark:text-green-400">🔽 スライサー</div>
                    </div>
                    <span className="text-green-500 dark:text-green-500 text-xs">ビジュアルを配置する作業エリア</span>
                  </div>
                  {/* ④視覚化 ＋ ⑤フィールド（縦積み） ＋ ⑥データ（横並び） */}
                  <div className="flex">
                    <div className="flex flex-col border-r-2 border-purple-300 dark:border-purple-700">
                      <div className="flex-1 bg-pink-50 dark:bg-pink-900/20 border-b-2 border-pink-300 dark:border-pink-700 flex flex-col items-center justify-center p-2 gap-1">
                        <span className="font-bold text-pink-700 dark:text-pink-300 text-center">④ 視覚化</span>
                        <span className="text-pink-500 dark:text-pink-400 text-center">グラフ選択・書式</span>
                      </div>
                      <div className="flex-1 bg-orange-50 dark:bg-orange-900/20 flex flex-col items-center justify-center p-2 gap-1">
                        <span className="font-bold text-orange-700 dark:text-orange-300 text-center">⑤ フィールド</span>
                        <span className="text-orange-500 dark:text-orange-400 text-center">X軸・Y軸・凡例…</span>
                      </div>
                    </div>
                    <div className="flex-1 bg-purple-50 dark:bg-purple-900/20 flex flex-col items-center justify-center p-2 gap-1">
                      <span className="font-bold text-purple-700 dark:text-purple-300 text-center">⑥ データ</span>
                      <span className="text-purple-500 dark:text-purple-400 text-center">テーブル・</span>
                      <span className="text-purple-500 dark:text-purple-400 text-center">フィールド一覧</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 各エリアの説明テーブル */}
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-xs border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-left whitespace-nowrap">#</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-left whitespace-nowrap">エリア</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-left">役割</th>
                      <th className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-left">本チュートリアルでの使用</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { num: '①', color: 'text-yellow-700 dark:text-yellow-300', name: '左側ナビゲーション', role: 'レポート・テーブル・モデルの 3 ビューを切り替え', usage: '§8.1 でレポートビューに切り替え' },
                      { num: '②', color: 'text-indigo-700 dark:text-indigo-300', name: 'リボン', role: 'データ取得・ビジュアル追加などの操作ボタン群（タブ形式）', usage: '§5.2 でホームタブの「データを取得」を使用' },
                      { num: '③', color: 'text-green-700 dark:text-green-300', name: 'キャンバス', role: 'グラフ・テーブルを配置するメインの作業エリア', usage: '§8.2〜8.5 でビジュアルを配置' },
                      { num: '④', color: 'text-pink-700 dark:text-pink-300', name: '視覚化ペイン', role: 'グラフの種類を選択し、書式（色・タイトル等）を設定するエリア', usage: '§8.2〜8.5 で使用' },
                      { num: '⑤', color: 'text-orange-700 dark:text-orange-300', name: 'フィールドペイン', role: '視覚化ペインの下部。X軸・Y軸・凡例などの枠にデータペインからフィールドをドラッグして割り当てる', usage: '§8.2〜8.5 で各フィールドをドラッグ' },
                      { num: '⑥', color: 'text-purple-700 dark:text-purple-300', name: 'データペイン', role: '読み込んだテーブルとフィールドの一覧。フィールドペインの各枠にドラッグする元になる', usage: '§8.2〜8.5 でフィールドをドラッグ' },
                    ].map(({ num, color, name, role, usage }) => (
                      <tr key={num} className="even:bg-gray-50 dark:even:bg-gray-800">
                        <td className={`border border-gray-300 dark:border-gray-600 px-2 py-1.5 font-bold whitespace-nowrap ${color}`}>{num}</td>
                        <td className={`border border-gray-300 dark:border-gray-600 px-2 py-1.5 font-semibold whitespace-nowrap ${color}`}>{name}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-gray-700 dark:text-gray-300">{role}</td>
                        <td className="border border-gray-300 dark:border-gray-600 px-2 py-1.5 text-gray-500 dark:text-gray-400">{usage}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </Section>

        <Section title="5.2 Excel ファイルを取得">
          <div className="space-y-4 text-sm">

            {/* ① データを取得 */}
            <div>
              <p className="font-semibold mb-2">① 「ホーム」タブで「データを取得」をクリック</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step5-2-1-get-data.png`}
                  alt="Power BI Desktop ホームタブの「データを取得」ボタン"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

            {/* ② Excel ブックを選択 */}
            <div>
              <p className="font-semibold mb-2">② 「Excel ブック」を選択</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step5-2-2-excel-source.png`}
                  alt="データソースの選択ダイアログで「Excel ブック」を選択"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

            {/* ③ ファイルを開く */}
            <div>
              <p className="font-semibold mb-2">③ ファイル選択ダイアログで <strong>project_tasks.xlsx</strong> を開く</p>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">デスクトップなど保存先に移動し、§3 で作成した <strong>project_tasks.xlsx</strong> を選択して「開く」をクリックします。</p>
              <div className="p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded text-xs">
                💡 ファイルが SharePoint Online 上にある場合は <strong>§5.3</strong> を参照してください。
              </div>
            </div>

            {/* ④ ナビゲーター */}
            <div>
              <p className="font-semibold mb-2">④ ナビゲーター（ファイル内のテーブル一覧）で「ProjectTasks」にチェックを入れて「データの変換」</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step5-2-3-navigator.png`}
                  alt="ナビゲーターで ProjectTasks にチェックを入れて「データの変換」をクリック"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 rounded text-sm">
              ✅ 「データの変換」をクリックすると Power Query エディタが開き、データの加工ができる状態になります。
            </div>
          </div>
        </Section>

        <Section title="5.3 ファイルが SharePoint Online にある場合">
          <p className="text-sm mb-4">
            Excel ファイルが SharePoint Online（SPO）のドキュメントライブラリにある場合は、
            「Excel ブック」の代わりに <strong>「Web」コネクター</strong> を使い、ファイルの直接 URL を指定して読み込みます。
          </p>

          {/* ステップフロー */}
          <div className="space-y-3 text-sm">

            {/* ① URL 確認 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold shrink-0">1</span>
                SPO 上のファイル URL を確認する
              </div>
              <div className="p-3 space-y-2 text-xs">
                <p className="text-gray-600 dark:text-gray-400">ブラウザで SPO のドキュメントライブラリを開き、ファイルの直接 URL を取得します。</p>
                <div className="p-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded font-mono text-blue-700 dark:text-blue-300 break-all">
                  https://<span className="text-orange-600 dark:text-orange-400">[テナント名]</span>.sharepoint.com/sites/<span className="text-orange-600 dark:text-orange-400">[サイト名]</span>/Shared Documents/<span className="text-orange-600 dark:text-orange-400">[ファイル名]</span>.xlsx
                </div>
                <div className="p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
                  <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-1">💡 URL の確認手順</p>
                  <ol className="list-decimal list-inside space-y-0.5 text-gray-700 dark:text-gray-300">
                    <li>ドキュメントライブラリでファイルの「<strong>…</strong>」→「<strong>詳細</strong>」をクリック</li>
                    <li>右側の詳細ウィンドウに表示される「<strong>パス</strong>」をコピー</li>
                  </ol>
                </div>
              </div>
            </div>

            {/* ② Web コネクター */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold shrink-0">2</span>
                Power BI で「Web」コネクターを選択
              </div>
              <div className="p-3 text-xs">
                <p className="mb-2 text-gray-700 dark:text-gray-300">「データを取得」をクリックし、データソース一覧から <strong>「Web」</strong> を選択します。</p>
                <div className="overflow-x-auto">
                  <img
                    src={`${import.meta.env.BASE_URL}images/step5-3-1-web-connector.png`}
                    alt="データソースの選択ダイアログで「Web」を選択"
                    className="rounded border border-gray-300 dark:border-gray-600"
                  />
                </div>
              </div>
            </div>

            {/* ③ URL 入力 */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold shrink-0">3</span>
                URL を入力して接続・認証
              </div>
              <div className="p-3 space-y-2 text-xs">
                <div className="overflow-x-auto">
                  <img
                    src={`${import.meta.env.BASE_URL}images/step5-3-2-url-input.png`}
                    alt="Web コネクターの URL 入力ダイアログ"
                    className="rounded border border-gray-300 dark:border-gray-600"
                  />
                </div>
                <p className="text-gray-700 dark:text-gray-300">認証ダイアログが開いたら <strong>「組織アカウント」</strong> を選択し、Microsoft 365 アカウントでサインインして「接続」をクリックします。</p>
              </div>
            </div>

            {/* ④ ナビゲーター */}
            <div className="border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
              <div className="bg-gray-100 dark:bg-gray-700 px-3 py-2 font-bold text-gray-700 dark:text-gray-200 text-xs flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-bold shrink-0">4</span>
                ナビゲーターで「ProjectTasks」を選択 → 「データの変換」
              </div>
              <div className="p-3 text-xs text-gray-600 dark:text-gray-400">
                ローカルファイルの場合（5.2）と同じナビゲーター画面が開きます。<strong>ProjectTasks</strong> にチェックを入れて「データの変換」をクリックしてください。
              </div>
            </div>

          </div>

          <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/20 border border-orange-300 dark:border-orange-700 rounded text-xs">
            ⚠️ この方法は <strong>Microsoft 365 アカウント</strong> を持ち、対象の SPO サイトへのアクセス権がある場合にのみ使用できます。
          </div>
        </Section>
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
    category: 'tutorial',
    content: (
      <div className="space-y-4">
        <Section title="6.1 データ構造について">
          <p className="text-sm mb-4">
            準備したサンプルデータ（テーブル名：<code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">ProjectTasks</code>）は
            <strong>ピボット形式</strong>（月などの項目が列として横に並ぶ形式。雑然データとも呼ぶ）です。
            Power BI での分析には不適切なため、整然データに変換します。
          </p>
          <div className="flex flex-col md:flex-row items-center gap-3">
            <div className="flex-1 w-full rounded-lg border-2 border-red-200 dark:border-red-700 overflow-hidden">
              <div className="bg-red-50 dark:bg-red-900/20 px-3 py-1.5">
                <p className="text-xs font-bold text-red-700 dark:text-red-300">変換前（ワイド形式）</p>
                <p className="text-xs text-red-500 dark:text-red-400">日付が列に並んでいる</p>
              </div>
              <div className="p-2 overflow-x-auto">
                <table className="text-xs border-collapse w-full">
                  <thead>
                    <tr className="bg-red-50 dark:bg-red-900/20">
                      {['プロジェクト', 'タスク', '2022/01/01', '2022/02/01', '…'].map(h => (
                        <th key={h} className="border border-red-200 dark:border-red-700 px-2 py-1 text-left whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {['プロジェクトA', '要件定義', 14, 8, '…'].map((c, i) => (
                        <td key={i} className="border border-red-200 dark:border-red-700 px-2 py-1 whitespace-nowrap">{c}</td>
                      ))}
                    </tr>
                    <tr>
                      <td className="border border-red-200 dark:border-red-700 px-2 py-1 text-gray-400" colSpan={5}>…</td>
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
                <p className="text-xs text-green-500 dark:text-green-400">日付が行として展開される</p>
              </div>
              <div className="p-2 overflow-x-auto">
                <table className="text-xs border-collapse w-full">
                  <thead>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      {['プロジェクト', 'タスク', '月', '工数'].map(h => (
                        <th key={h} className="border border-green-200 dark:border-green-700 px-2 py-1 text-left whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ['プロジェクトA', '要件定義', '2022/01/01', 14],
                      ['プロジェクトA', '要件定義', '2022/02/01', 8],
                      ['…', '…', '…', '…'],
                    ].map((row, i) => (
                      <tr key={i}>
                        {row.map((c, j) => (
                          <td key={j} className="border border-green-200 dark:border-green-700 px-2 py-1 whitespace-nowrap">{c}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>

        <Section title="6.2 Power Query エディタを開く">
          <div className="space-y-3 text-sm">
            <p>「読み込む」ではなく <strong>「データ変換」</strong> をクリックすると Power Query エディタが開きます。</p>
            <p className="text-gray-500 dark:text-gray-400">「読み込む」を押してしまった場合は、ホームタブの <strong>「データの変換」</strong> から開けます。</p>
            {/* Power Query エディタ レイアウト図 */}
            <div>
              <p className="font-semibold mb-2 text-sm">Power Query エディタの画面構成：</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step6-2-1-pq-editor.png`}
                  alt="Power Query エディタの画面構成（クエリ一覧・データプレビュー・適用したステップ）"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>
          </div>
        </Section>

        <Section title="6.3 ピボット解除の実行">
          <div className="space-y-4 text-sm">

            {/* 推奨手順 */}
            <div className="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
              <p className="font-semibold text-green-800 dark:text-green-300 mb-3">✅ 推奨手順：「その他の列のピボット解除」を使う方法</p>

              {/* 手順1: Ctrl+クリックで2列選択 → 右クリック */}
              <div className="mb-3">
                <p className="font-medium mb-2">① 「プロジェクト」列をクリック、続けて <strong>Ctrl+クリック</strong> で「タスク」列も選択（2列同時選択）</p>
                <p className="font-medium mb-2">② 「プロジェクト」または「タスク」の列ヘッダーを右クリック → 「他の列のピボット解除」</p>
                <div className="overflow-x-auto">
                  <img
                    src={`${import.meta.env.BASE_URL}images/step6-3-1-other-columns.png`}
                    alt="プロジェクト・タスク列を選択して右クリック →「その他の列のピボット解除」を選択"
                    className="rounded border border-gray-300 dark:border-gray-600"
                  />
                </div>
              </div>

              <p className="text-green-700 dark:text-green-400 text-xs">将来さらに月の列が追加されても自動的に処理されるため実務向きです。</p>
            </div>

            {/* 別の方法 */}
            <div className="p-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <p className="font-semibold text-gray-600 dark:text-gray-400 mb-2">別の方法：列を手動で選択する方法</p>
              <ol className="space-y-1 list-decimal list-inside ml-2 text-gray-600 dark:text-gray-400">
                <li>「2022/01/01」列ヘッダーをクリック → Shift を押しながら「2024/12/01」をクリック（全日付列をすべて選択）</li>
                <li><strong className="text-gray-700 dark:text-gray-300">「変換」</strong> タブ → <strong className="text-gray-700 dark:text-gray-300">「列のピボット解除」</strong> をクリック</li>
              </ol>
            </div>
          </div>
        </Section>

        <Section title="6.4 列のリネームとデータ型の確認">
          <div className="space-y-3 text-sm">
            <div>
              <p className="font-semibold mb-2">列のリネーム</p>
              <p>ピボット解除後に「属性」と「値」という列が自動生成されます。これは、ピボット解除によって「元の列名（2022/01/01 など）」が「属性」列に、「元のセルの数値」が「値」列に格納されるためです：</p>
              <ul className="mt-1 space-y-1 ml-4">
                <li>・「属性」を右クリック → <strong>「名前変更」</strong> → 「月」</li>
                <li>・「値」を右クリック → <strong>「名前変更」</strong> → 「工数」</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">データ型の確認</p>
              <ul className="space-y-1">
                <li>・「月」列を選択し、データ型を <strong>「日付」</strong> に設定（日付型にすることで、Power BI の時系列グラフで日付順に正しく並びます）</li>
                <li>・「工数」列を選択し、データ型を <strong>「整数」</strong> に設定（工数は小数にならないため整数型を指定します）</li>
              </ul>
              <p className="mt-2">設定が終わったら <strong>「閉じて適用」</strong> をクリック</p>
            </div>
            <div>
              <p className="font-semibold mb-2">最終的なデータ構造</p>
              <CodeBlock code={`プロジェクト | タスク      | 月          | 工数
プロジェクトA | 要件定義    | 2022/01/01 | 14
プロジェクトA | 要件定義    | 2022/02/01 | 8
...`} />
            </div>
          </div>
        </Section>
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
    category: 'tutorial',
    content: (
      <div className="space-y-4">
        <Section title="7.1 単一テーブルの確認">
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
        </Section>

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
    category: 'tutorial',
    content: (
      <div className="space-y-4">
        <Section title="8.0 完成イメージ">
          <p className="text-sm mb-3">このセクションで作成するレポートのレイアウトです。スライサーを操作するとグラフとテーブルが連動します。</p>
          <div className="overflow-x-auto">
            <img
              src={`${import.meta.env.BASE_URL}images/step8-0-1-report-preview.png`}
              alt="このセクションで作成するレポートの完成イメージ（スライサー・折れ線グラフ・テーブル）"
              className="rounded border border-gray-300 dark:border-gray-600"
            />
          </div>
        </Section>

        <Section title="8.1 レポートビューに切り替え">
          <div className="space-y-3 text-sm">
            <p>Power BI Desktop の左端にある3つのアイコンで画面を切り替えます。</p>
            <div className="overflow-x-auto">
              <img
                src={`${import.meta.env.BASE_URL}images/step8-1-1-report-view.png`}
                alt="Power BI Desktop の左側ナビゲーションでレポートビューを選択"
                className="rounded border border-gray-300 dark:border-gray-600"
              />
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1.5">
              <p>📊 <strong>レポート</strong>：グラフやビジュアルを配置する画面（今回使用）</p>
              <p>🗂️ <strong>データ</strong>：テーブルのデータ内容を確認する画面</p>
              <p>🔗 <strong>モデル</strong>：テーブル間の関連付けを設定する画面</p>
            </div>
          </div>
        </Section>

        <Section title="8.2 折れ線グラフの作成：タスク別の工数比較">
          <div className="space-y-4 text-sm">

            {/* 視覚化ペイン説明 */}
            <div>
              <p className="font-semibold mb-2">① 「視覚化」ペインで「折れ線グラフ」を選択</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">Power BI 画面の右側に「視覚化」ペインがあります。グラフアイコンをクリックして種類を選びます。</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step8-2-1-viz-select.png`}
                  alt="視覚化ペインで折れ線グラフのアイコンを選択"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

            {/* フィールドペイン説明 */}
            <div>
              <p className="font-semibold mb-2">② 「フィールド」ペインから各軸にドラッグ</p>
              <p className="text-gray-600 dark:text-gray-400 mb-2 text-xs">視覚化ペインの下に X 軸・Y 軸・凡例などのエリアが表示されます。そこにフィールドをドラッグします。</p>
              <div className="overflow-x-auto">
                <img
                  src={`${import.meta.env.BASE_URL}images/step8-2-2-field-assign.png`}
                  alt="データペインからフィールドペインの X軸・Y軸・凡例にドラッグして割り当て"
                  className="rounded border border-gray-300 dark:border-gray-600"
                />
              </div>
            </div>

          </div>
        </Section>

        <Section title="8.3 テーブルの作成：詳細データの表示">
          <div className="space-y-3 text-sm">
            <ol className="space-y-2 list-decimal list-inside">
              <li>キャンバスの空きスペースをクリック（グラフ以外の場所）</li>
              <li>視覚化ペインから <strong>「テーブル」（📋）</strong> アイコンをクリック</li>
              <li>フィールドペインから「タスク」「月」「工数」をそれぞれドラッグ</li>
              <li>テーブルの端をドラッグしてサイズを調整</li>
            </ol>
            <div className="overflow-x-auto">
              <img
                src={`${import.meta.env.BASE_URL}images/step8-3-1-table-result.png`}
                alt="キャンバスに配置したテーブルの完成イメージ"
                className="rounded border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </Section>

        <Section title="8.4 スライサーの追加：インタラクティブなフィルタリング">
          <div className="space-y-3 text-sm">
            <ol className="space-y-2 list-decimal list-inside">
              <li>キャンバスの上部の空きスペースをクリック</li>
              <li>視覚化ペインから <strong>「スライサー」（🔽）</strong> アイコンをクリック</li>
              <li>フィールドペインから「タスク」をドラッグ</li>
              <li>スライサーの項目をクリックして、グラフとテーブルが絞り込まれることを確認</li>
            </ol>
            <div className="overflow-x-auto">
              <img
                src={`${import.meta.env.BASE_URL}images/step8-4-1-slicer-result.png`}
                alt="キャンバスに配置したスライサーの完成イメージ"
                className="rounded border border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </Section>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 9: まとめ
  // ─────────────────────────────────────────────
  {
    id: 9,
    title: 'まとめ',
    estimatedMinutes: null,
    category: 'tutorial',
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
          ].map(item => (
            <div key={item} className="flex items-start gap-3 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <span className="text-green-500 text-lg">✅</span>
              <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>

        <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700 text-center">
          <p className="text-lg font-bold text-yellow-800 dark:text-yellow-300">⏱ 所要時間：約56分</p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">
            Power BI は、データをビジネス上の意思決定に活用するための強力なツールです。<br />
            実際の業務データで繰り返し実践することで、確実にスキルが向上します。
          </p>
          <p className="mt-3 text-lg">🎉 Happy analyzing!</p>
        </div>
      </div>
    ),
  },

  // ─────────────────────────────────────────────
  // Step 10: 追加で学習したい人向け
  // ─────────────────────────────────────────────
  {
    id: 10,
    title: '追加で学習したい人向け',
    estimatedMinutes: null,
    category: 'appendix',
    content: (
      <div className="space-y-6">
        <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-300 dark:border-blue-700">
          <p className="text-sm text-blue-800 dark:text-blue-300">
            メインのチュートリアルはセクション8で完了しています。以下は、さらに学習したい方向けのオプションコンテンツです。
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">📚 整然データの3つの原則（Tidy Data）</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">データ科学者 Hadley Wickham が提唱した概念です。実務では直感的に理解できれば十分ですが、より深く理解したい方はこちらを参照してください。</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
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
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">📤 共有と発行</h3>
          <div className="space-y-3">
            <Accordion title="ローカルファイルとして保存" defaultOpen>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li><strong>「ファイル」</strong> → <strong>「保存」</strong></li>
                <li>ファイル名を「project_analysis」として保存</li>
                <li>Power BI Desktop ファイル（.pbix）として保存されます</li>
              </ol>
            </Accordion>
            <Accordion title="Power BI Service への発行">
              <p className="text-sm mb-3 text-gray-500 dark:text-gray-400">Microsoft 365 アカウントがある場合に利用できます。</p>
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li><strong>「ホーム」</strong> → <strong>「発行」</strong></li>
                <li>発行先のワークスペースを選択</li>
                <li><strong>「選択」</strong> をクリック</li>
                <li>ブラウザで自動的に Power BI Service が開き、共有可能な状態になります</li>
              </ol>
            </Accordion>
            <Accordion title="他のユーザーとの共有">
              <ul className="text-sm space-y-2">
                <li>・Power BI Service 上で <strong>「共有」</strong> をクリック</li>
                <li>・メールアドレスを入力して、同僚と共有可能</li>
                <li>・組織内での協業が実現できます</li>
              </ul>
            </Accordion>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">🧪 実践演習：自分のデータで試す</h3>
          <div className="space-y-3">
            <Accordion title="自分のデータを用意" defaultOpen>
              <p className="text-sm mb-2">自部門の業務データを同じピボット形式で作成しましょう。</p>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>例：プロジェクト別の進捗率</li>
                <li>例：顧客別の売上</li>
                <li>例：商品別の在庫</li>
              </ul>
            </Accordion>
            <Accordion title="同じ手順を実行">
              <ol className="space-y-2 text-sm list-decimal list-inside">
                <li>データを読み込む</li>
                <li>ピボット解除で整形</li>
                <li>自部門に合わせたグラフを作成</li>
                <li>同僚に共有</li>
              </ol>
            </Accordion>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-3">🤖 AI を活用した学習</h3>
          <div className="space-y-3">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Power BI の操作で詰まったとき、チャットベースのAI（Copilot、Claude、ChatGPT など）を活用すると的確なアドバイスをすぐに得られます。
            </p>

            <div className="p-4 rounded-lg bg-purple-50 dark:bg-purple-900/20 border border-purple-300 dark:border-purple-700">
              <p className="font-semibold text-purple-800 dark:text-purple-300 mb-2">💡 コツ：スクリーンショット＋やりたいこと</p>
              <p className="text-sm text-purple-700 dark:text-purple-300">
                詰まった画面のスクリーンショットと「〇〇したい」という目的をセットでAIに伝えましょう。
                画面の状況を把握したAIが、抽象的なアドバイスではなく<strong>具体的な操作手順</strong>を教えてくれます。
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">活用場面の例：</p>
              <ul className="text-sm space-y-1 text-gray-600 dark:text-gray-400">
                <li>・Power Query でデータ変換の手順がわからないとき</li>
                <li>・DAX の計算式の書き方がわからないとき</li>
                <li>・グラフの書式設定でどのオプションを使えばいいかわからないとき</li>
                <li>・エラーメッセージの意味がわからないとき</li>
              </ul>
            </div>

            <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">質問の例：</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                「このスクリーンショットは Power BI の Power Query エディタです。月の列を昇順に並べ替えたいのですが、どうすればいいですか？」
              </p>
            </div>

            <Accordion title="Power BI 組み込みの Copilot（参考）">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Power BI 自体にもCopilot機能が組み込まれており、自然言語でレポートの作成や質問ができます。
                ただし、利用には <strong>Microsoft Fabric または Power BI Premium ライセンス</strong> が必要です。
              </p>
            </Accordion>
          </div>
        </div>
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
    category: 'appendix',
    content: (
      <div className="space-y-3">
        {[
          {
            q: 'Power Query でエラーが出てピボット解除できない',
            a: 'データ型を確認してください。「月」列が数値になっていないか確認し、必要に応じて日付型に設定してください。',
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
    category: 'appendix',
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
              desc: 'Excel やデータベースなど複数のソースからデータを取得。テーブル間の関連付けを学ぶ。',
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
]
