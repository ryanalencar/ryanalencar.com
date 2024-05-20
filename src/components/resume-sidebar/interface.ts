import { ReactElement } from 'react'

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

export type { IPersonalInfo, ISocialMedia, ILanguages, ISkills, IProfile }
