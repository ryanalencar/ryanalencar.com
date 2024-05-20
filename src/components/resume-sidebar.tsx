import React, { ReactElement } from 'react'
import {
  Github,
  Instagram,
  Linkedin,
  Menu,
  BadgeCheck,
  BadgeX,
  ChevronsUpDown,
  ArrowDownToLine,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { Badge } from '@/components/ui/badge'
import { getInitials } from '@/lib/utils'

interface IPersonalInfo {
  infoKey: string
  info: string | number | boolean
  infoLabel: string
}

interface ISocialMedia {
  icon: ReactElement
  username: string
  url: string
  social: string
}

interface ILanguages {
  language: string
  level: string
}

interface ISkills {
  role: string
  techs: string[]
}

interface IProfile {
  name: string
  position: string
  avatar: string
  avatarAlt: string
  socials: ISocialMedia[]
  personalInfo: IPersonalInfo[]
  languages: ILanguages[]
  skills: ISkills[]
  resumeDownloadUrl: string
}

export function ResumeSidebar() {
  const socials = [
    {
      social: 'Instagram',
      icon: <Instagram />,
      username: 'ryanalencar.dev',
      url: 'https://www.instagram.com/ryanalencar.dev',
    },
    {
      social: 'Linkedin',
      icon: <Linkedin />,
      username: 'ryanalencar',
      url: 'https://www.linkedin.com/in/ryanalencar/',
    },
    {
      social: 'Git Hub',
      icon: <Github />,
      username: 'ryanalencar',
      url: 'https://github.com/ryanalencar',
    },
  ] satisfies ISocialMedia[]

  const personalInfo = [
    { infoKey: 'age', info: '21', infoLabel: 'Age' },
    { infoKey: 'country', info: 'Brazil', infoLabel: 'Country' },
    { infoKey: 'openToWork', info: true, infoLabel: 'Seeking Opportunities' },
  ] satisfies IPersonalInfo[]

  const languages = [
    {
      language: 'English',
      level: 'C1 Advanced',
    },
    {
      language: 'Portuguese',
      level: 'Native',
    },
  ] satisfies ILanguages[]

  const skills = [
    {
      role: 'Front End',
      techs: ['React', 'React Native', 'NextJs'],
    },
    {
      role: 'Back End',
      techs: ['NodeJs', 'NestJs'],
    },
  ] satisfies ISkills[]

  const profile = {
    name: 'Ryan Alencar',
    avatar: '',
    avatarAlt: '@ryanalencar.dev',
    position: 'Full Stack Engineer',
    socials,
    personalInfo,
    languages,
    skills,
    resumeDownloadUrl:
      'https://www.caceres.mt.gov.br/fotos_institucional_downloads/2.pdf',
  } satisfies IProfile

  // { infoKey: 'email', info: 'ryanalencar.dev@gmail.com', label: 'Email' },
  // { infoKey: 'phone', info: '+55 (85) 99143-9952', label: 'Phone' },

  return (
    <div className="grid min-h-screen md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden md:block bg-white dark:bg-zinc-900 p-6">
        <div className="flex items-center flex-col gap-4 h-full">
          <div className="mt-6">
            <Avatar className="w-40 h-40">
              <AvatarImage alt={profile.avatarAlt} />
              <AvatarFallback>{getInitials(profile.name)}</AvatarFallback>
            </Avatar>
          </div>
          <div className="text-center">
            <h1 className="text-slate-900 dark:text-white text-lg font-semibold">
              {profile.name}
            </h1>
            <p className="text-slate-900 dark:text-white text-sm font-extralight">
              {profile.position}
            </p>
          </div>
          <div className="flex gap-1">
            {profile?.socials.map(({ icon, url, username, social }) => (
              <div key={social}>
                <Button size="icon" asChild variant="ghost">
                  <Link href={url} target="_blank">
                    <Tooltip>
                      <TooltipTrigger>{icon}</TooltipTrigger>
                      <TooltipContent>@{username}</TooltipContent>
                    </Tooltip>
                  </Link>
                </Button>
              </div>
            ))}
          </div>
          <div className="w-full h-2 border-b-2 dark:border-zinc-600 rounded-sm" />
          <div className="w-full grid grid-cols-1 grid-rows-2 my-4 gap-2">
            {profile?.personalInfo.map(({ info, infoKey, infoLabel }) => (
              <div key={infoKey} className="flex justify-between items-center">
                <Badge variant="secondary">{infoLabel}:</Badge>
                {typeof info === 'boolean' ? (
                  info ? (
                    <BadgeCheck className="fill-green-400 text-black" />
                  ) : (
                    <BadgeX className="fill-red-400 text-black" />
                  )
                ) : (
                  <p>{info}</p>
                )}
              </div>
            ))}
          </div>
          <div className="w-full h-2 border-b-2 dark:border-zinc-600 rounded-sm" />
          <div className="w-full grid grid-cols-1 grid-rows-2 my-4 gap-2">
            <h3>Languages</h3>
            {profile?.languages.map(({ language, level }) => (
              <div key={language} className="flex justify-between items-center">
                <Badge variant="secondary">{language}:</Badge>
                <p>{level}</p>
              </div>
            ))}
          </div>
          <div className="w-full h-2 border-b-2 dark:border-zinc-600 rounded-sm" />
          <div className="w-full flex flex-col gap-2 my-4">
            <h3>Skills</h3>
            {profile?.skills.map(({ role, techs }) => (
              <Collapsible key={role}>
                <div className="flex items-center gap-4 ">
                  <ul className="list-disc ml-8">
                    <li className="text-sm underline underline-offset-4">
                      {role}
                    </li>
                  </ul>
                  <CollapsibleTrigger asChild>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                      <ChevronsUpDown className="h-4 w-4" />
                      <span className="sr-only">Toggle</span>
                    </Button>
                  </CollapsibleTrigger>
                </div>
                <CollapsibleContent>
                  {techs.map((tech) => (
                    <ul key={tech} className="list-disc ml-16 mt-2">
                      <li className="text-sm">{tech}</li>
                    </ul>
                  ))}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          <div className="w-full h-2 border-b-2 dark:border-zinc-600 rounded-sm" />
          <Button className="flex items-center gap-2 my-4" asChild>
            <Link
              href={profile.resumeDownloadUrl}
              target="_blank"
              download="resume-ryan-alencar"
            >
              Download CV
              <ArrowDownToLine className="w-5 h-5" />
            </Link>
          </Button>
        </div>
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
            <SheetContent side="left" className="flex flex-col"></SheetContent>
          </Sheet>
        </header>
      </div>
    </div>
  )
}
