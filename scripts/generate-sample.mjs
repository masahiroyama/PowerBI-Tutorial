import ExcelJS from 'exceljs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const projects = [
  { project: 'プロジェクトA', tasks: ['要件定義', '設計', '開発', 'テスト', 'リリース', 'ドキュメント', '運用', '改善', '監視', 'レポート'] },
  { project: 'プロジェクトB', tasks: ['市場調査', '企画立案', 'デザイン', '実装', '品質管理', 'ユーザーテスト', 'フィードバック対応', 'デプロイ', 'サポート', '評価'] },
  { project: 'プロジェクトC', tasks: ['データ収集', 'データクレンジング', '分析', '可視化', '報告書作成', 'ステークホルダー報告', '改善提案', '実施', '効果測定', '次期計画'] },
]

// 2022/01/01 〜 2024/12/01 の36ヶ月
const dates = []
for (let y = 2022; y <= 2024; y++) {
  for (let m = 1; m <= 12; m++) {
    const mm = String(m).padStart(2, '0')
    dates.push(`${y}/${mm}/01`)
  }
}

// 再現性のある疑似乱数
function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

const dataRows = []
let seed = 42
projects.forEach(({ project, tasks }) => {
  tasks.forEach((task) => {
    const rand = seededRand(seed++)
    const row = [project, task, ...dates.map(() => Math.floor(rand() * 20) + 1)]
    dataRows.push(row)
  })
})

const wb = new ExcelJS.Workbook()
const ws = wb.addWorksheet('ProjectTasks')

// Excelテーブルとして追加（テーブル名: ProjectTasks）
ws.addTable({
  name: 'ProjectTasks',
  ref: 'A1',
  headerRow: true,
  totalsRow: false,
  style: {
    theme: 'TableStyleMedium2',
    showRowStripes: true,
  },
  columns: [
    { name: 'プロジェクト', filterButton: true },
    { name: 'タスク', filterButton: true },
    ...dates.map(d => ({ name: d, filterButton: true })),
  ],
  rows: dataRows,
})

// 列幅設定
ws.getColumn(1).width = 16
ws.getColumn(2).width = 20
for (let i = 3; i <= 2 + dates.length; i++) {
  ws.getColumn(i).width = 13
}

const outPath = join(__dirname, '..', 'public', 'sample-data.xlsx')
await wb.xlsx.writeFile(outPath)
console.log(`Generated: ${outPath}`)
