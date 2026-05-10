import ExcelJS from 'exceljs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// ─────────────────────────────────────────────
// タスクセット定義（2種類）
// center: プロジェクト開始からの相対月（0始まり）でピークを迎える月
// std:    ガウス曲線の広がり（大きいほど長期にわたる）
// peak:   ピーク時の工数（時間/月）
// floor:  継続フェーズの下限工数（省略時 0）
// ─────────────────────────────────────────────
const taskSets = {
  software: [
    { name: '要件定義',   center:  1, std: 1.5, peak:  40 },
    { name: '設計',       center:  4, std: 2.0, peak:  55 },
    { name: '開発',       center: 10, std: 4.0, peak:  80 },
    { name: 'テスト',     center: 16, std: 2.5, peak:  60 },
    { name: 'リリース',   center: 20, std: 1.0, peak:  35 },
    { name: '保守・運用', center: 24, std: 5.0, peak:  25, floor: 15 },
  ],
  analysis: [
    { name: '課題設定',     center:  0, std: 1.0, peak:  30 },
    { name: 'データ収集',   center:  3, std: 2.0, peak:  50 },
    { name: 'データ分析',   center:  8, std: 3.0, peak:  75 },
    { name: '可視化',       center: 12, std: 2.5, peak:  55 },
    { name: 'レポート作成', center: 15, std: 2.0, peak:  40 },
    { name: '改善実施',     center: 18, std: 4.0, peak:  35, floor: 10 },
  ],
}

// ─────────────────────────────────────────────
// プロジェクト定義（5つ、開始月をずらして比較しやすく）
// ─────────────────────────────────────────────
const projects = [
  { name: 'プロジェクトA', type: 'software', startYear: 2022, startMonth:  1 },
  { name: 'プロジェクトB', type: 'analysis', startYear: 2022, startMonth:  4 },
  { name: 'プロジェクトC', type: 'software', startYear: 2022, startMonth: 10 },
  { name: 'プロジェクトD', type: 'analysis', startYear: 2023, startMonth:  3 },
  { name: 'プロジェクトE', type: 'software', startYear: 2023, startMonth:  8 },
]

// 2022/01/01 〜 2024/12/01 の36ヶ月
const dates = []
for (let y = 2022; y <= 2024; y++) {
  for (let m = 1; m <= 12; m++) {
    dates.push({ label: `${y}/${String(m).padStart(2, '0')}/01`, year: y, month: m })
  }
}

// 再現性のある疑似乱数（LCG）
function seededRand(seed) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

// ガウス曲線でフェーズ工数を計算し、乱数ノイズを乗せる
function calcHours(relMonth, task, rand) {
  if (relMonth < 0) return 0
  const floor = task.floor ?? 0
  const gauss = floor + (task.peak - floor) * Math.exp(-0.5 * ((relMonth - task.center) / task.std) ** 2)
  if (gauss < 2) return 0
  const noise = 0.8 + rand() * 0.4  // ±20% ノイズ
  return Math.max(0, Math.round(gauss * noise))
}

// 行データ生成
const dataRows = []
let seedBase = 100
projects.forEach(({ name, type, startYear, startMonth }) => {
  taskSets[type].forEach((task) => {
    const rand = seededRand(seedBase++)
    const hours = dates.map(({ year, month }) => {
      const relMonth = (year - startYear) * 12 + (month - startMonth)
      return calcHours(relMonth, task, rand)
    })
    dataRows.push([name, task.name, ...hours])
  })
})

// ─────────────────────────────────────────────
// Excel 出力
// ─────────────────────────────────────────────
const wb = new ExcelJS.Workbook()
const ws = wb.addWorksheet('ProjectTasks')

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
    { name: 'タスク',       filterButton: true },
    ...dates.map(d => ({ name: d.label, filterButton: true })),
  ],
  rows: dataRows,
})

ws.getColumn(1).width = 16
ws.getColumn(2).width = 16
for (let i = 3; i <= 2 + dates.length; i++) {
  ws.getColumn(i).width = 13
}

const outPath = join(__dirname, '..', 'public', 'sample-data.xlsx')
await wb.xlsx.writeFile(outPath)
console.log(`Generated: ${outPath}`)
