'use client'

import React, { ReactNode, useEffect, useState } from 'react'

export function ClientOnly({ children }: { children: ReactNode }) {
  const [hasMounted, setHasMounted] = useState(false)

  // Hooks
  useEffect(() => {
    setHasMounted(true)
  }, [])

  // Render
  if (!hasMounted) return null

  return <div>{children}</div>
}
