import React from 'react'
import { glossary } from '../data/glossary'
import { GlossaryTerm } from '../components/GlossaryTerm'
import { CodeBlock } from '../components/CodeBlock'

type TermPattern = { pattern: string }

const termPatterns: TermPattern[] = (() => {
  const entries: TermPattern[] = []
  const seen = new Set<string>()

  for (const entry of glossary) {
    if (!seen.has(entry.term)) {
      seen.add(entry.term)
      entries.push({ pattern: entry.term })
    }
    const abbrev = entry.term.match(/^(.+?)（/)
    if (abbrev && !seen.has(abbrev[1])) {
      seen.add(abbrev[1])
      entries.push({ pattern: abbrev[1] })
    }
  }

  return entries.sort((a, b) => b.pattern.length - a.pattern.length)
})()

const termRegex = new RegExp(
  `(${termPatterns.map(e => e.pattern.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`
)

const skipTypes = new Set<unknown>(['code', GlossaryTerm, CodeBlock])

function wrapText(text: string): React.ReactNode {
  const parts = text.split(termRegex)
  if (parts.length === 1) return text
  const result: React.ReactNode[] = []
  parts.forEach((part, i) => {
    if (!part) return
    if (i % 2 === 1) result.push(<GlossaryTerm key={i} term={part}>{part}</GlossaryTerm>)
    else result.push(part)
  })
  return result
}

export function wrapGlossaryTerms(node: React.ReactNode): React.ReactNode {
  if (typeof node === 'string') return wrapText(node)
  if (node === null || node === undefined || typeof node === 'boolean' || typeof node === 'number') return node
  if (Array.isArray(node)) {
    return node.map((child, i) => {
      const wrapped = wrapGlossaryTerms(child)
      if (React.isValidElement(wrapped)) return React.cloneElement(wrapped, { key: i } as object)
      return wrapped
    })
  }
  if (React.isValidElement(node)) {
    if (skipTypes.has(node.type)) return node
    const props = node.props as { children?: React.ReactNode }
    if (props.children === undefined || props.children === null) return node
    const wrappedChildren = wrapGlossaryTerms(props.children)
    if (wrappedChildren === props.children) return node
    return React.cloneElement(node, { children: wrappedChildren } as object)
  }
  return node
}
