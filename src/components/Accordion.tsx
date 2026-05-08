type Props = {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}

export function Accordion({ title, children, defaultOpen = false }: Props) {
  return (
    <details
      open={defaultOpen}
      className="group border border-gray-200 dark:border-gray-700 rounded-lg mb-3 overflow-hidden"
    >
      <summary className="flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-750 cursor-pointer select-none">
        <span className="font-medium text-gray-800 dark:text-gray-100">{title}</span>
        <span className="text-gray-400 dark:text-gray-500 transition-transform duration-200 group-open:rotate-180">
          ▼
        </span>
      </summary>
      <div className="px-4 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed">
        {children}
      </div>
    </details>
  )
}
