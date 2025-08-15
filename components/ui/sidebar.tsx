"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"

interface SidebarProps {
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
  className?: string
}

export function Sidebar({ isOpen, onToggle, children, className }: SidebarProps) {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={onToggle} />}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-0 top-0 h-full bg-white border-r border-gray-200 z-50 transition-transform duration-300 ease-in-out",
          "md:relative md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
          className,
        )}
      >
        {/* Mobile close button */}
        <div className="flex items-center justify-between p-4 border-b md:hidden">
          <h2 className="font-semibold">Menu</h2>
          <Button variant="ghost" size="sm" onClick={onToggle}>
            <X className="h-4 w-4" />
          </Button>
        </div>

        {children}
      </div>
    </>
  )
}

interface SidebarTriggerProps {
  onClick: () => void
  className?: string
}

export function SidebarTrigger({ onClick, className }: SidebarTriggerProps) {
  return (
    <Button variant="ghost" size="sm" onClick={onClick} className={cn("md:hidden", className)}>
      <Menu className="h-4 w-4" />
    </Button>
  )
}

