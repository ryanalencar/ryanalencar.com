import React from 'react'

import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'

import { ResumeSidebarContent } from './resume-sidebar-content'

export function ResumeSidebar() {
  return (
    <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block dark:bg-slate-950 p-6">
        <ResumeSidebarContent />
      </div>
      <div className="block sm:hidden">
        <header className="flex h-14 items-center gap-4 bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="left"
              className="flex flex-col p-6 overflow-y-auto"
            >
              <ResumeSidebarContent />
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  )
}
