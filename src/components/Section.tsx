type Props = {
  title: string
  children: React.ReactNode
}

export function Section({ title, children }: Props) {
  return (
    <section className="border border-gray-200 dark:border-gray-700 rounded-lg">
      <div className="px-4 py-3 bg-gray-50 dark:bg-gray-800 rounded-t-lg">
        <h3 className="font-medium text-gray-800 dark:text-gray-100">{title}</h3>
      </div>
      <div className="px-4 py-4 bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 leading-relaxed rounded-b-lg">
        {children}
      </div>
    </section>
  )
}
