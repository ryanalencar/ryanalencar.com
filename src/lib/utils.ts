import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getInitials(fullName: string) {
  const words = fullName.split(' ')

  let initials = ''
  for (const word of words) {
    initials += word.charAt(0).toUpperCase()
  }

  return initials
}
