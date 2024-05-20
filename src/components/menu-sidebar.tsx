import Link from 'next/link'
import React, { ReactElement, cloneElement } from 'react'
import { BriefcaseBusiness, GraduationCap, Handshake } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import { ModeToggle } from './mode-toggle'

interface SideBarLink {
  href: string
  label: string
  icon: ReactElement
}

export function MenuSidebar() {
  const sidebarLinks = [
    { href: '#education', label: 'Education', icon: <GraduationCap /> },
    { href: '#experience', label: 'Experience', icon: <BriefcaseBusiness /> },
    { href: '#recomendations', label: 'Recomendations', icon: <Handshake /> },
  ] satisfies SideBarLink[]

  return (
    <aside className="w-14 flex-col bg-background sm:flex bg-white dark:bg-slate-950">
      <div className="flex flex-col items-center gap-4 px-2 py-6 mb-12">
        <ModeToggle />
      </div>
      <nav className="flex flex-col items-center gap-8 px-2 sm:py-5">
        {sidebarLinks.map(({ href, label, icon }) => (
          <Tooltip key={label}>
            <TooltipTrigger asChild>
              <Link
                href={href}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                {cloneElement(icon, { className: 'h-5 w-5' })}
                <span className="sr-only">{label}</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">{label}</TooltipContent>
          </Tooltip>
        ))}
      </nav>
    </aside>
  )
}
