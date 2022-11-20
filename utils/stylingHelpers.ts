type ScopedStyles = { base?: string, focus?: string, hover?: string }

export function switchStyles(base: ScopedStyles | null, resolvedPredicate: boolean, ifTrue: ScopedStyles, ifFalse: ScopedStyles): string {
  return [base ?? {}, resolvedPredicate ? ifTrue : ifFalse]
    .map(({ base, hover, focus }: ScopedStyles) => [base, hover, focus]
      .filter((v) => v !== undefined)
      .join(' ')
    )
    .join(' ')
}
