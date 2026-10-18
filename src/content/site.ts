export type ProjectStatus = 'In Development' | 'Active' | 'Ongoing'

export interface Project {
  number: string
  slug: string
  title: string
  description: string
  category: string
  status: ProjectStatus
  futureUrl?: string
  externalUrl?: string
  introduction: string
  sections: Array<{
    label: string
    title: string
    body: string
  }>
}

export interface SocialLink {
  label: string
  url: string | null
  note: string
}

export const siteConfig = {
  name: 'fizzy labs.',
  domain: 'fizzylabs.tech',
  year: 2026,
  email: {
    label: 'hello@fizzylabs.tech',
    url: null as string | null,
    note: 'Planned address — enable this link after the mailbox is configured.',
  },
  socials: [
    { label: 'github', url: null, note: 'Add your GitHub URL in src/content/site.ts.' },
    { label: 'instagram', url: null, note: 'Add your Instagram URL in src/content/site.ts.' },
  ] satisfies SocialLink[],
}

export const projects: Project[] = [
  {
    number: '01',
    slug: 'fizzy-os',
    title: 'Fizzy OS',
    description: 'A desktop experience in your browser.',
    category: 'Interactive Web Experience',
    status: 'Active',
    futureUrl: 'https://os.fizzylabs.tech/',
    introduction:
      'A playful, desktop-style personal space with draggable windows, small applications, and room to explore.',
    sections: [
      {
        label: 'Current state',
        title: 'Live on the web.',
        body: 'Fizzy OS v0.1 is available at os.fizzylabs.tech as a standalone browser-based desktop experience.',
      },
      {
        label: 'What it is',
        title: 'A personal website that behaves like a desktop.',
        body: 'It includes an app dock, draggable windows, a portfolio, music player, simulated terminal, and appearance settings. This page documents the project without duplicating it.',
      },
    ],
  },
  {
    number: '02',
    slug: 'telegram-bots',
    title: 'Telegram Bots',
    description: 'Personal automation and interactive bots.',
    category: 'Python / Automation',
    status: 'Active',
    introduction:
      'A growing collection of small tools, automations, and interactive bot experiments built with Python.',
    sections: [
      {
        label: 'Project library',
        title: 'Bot projects will live here.',
        body: 'Add a project name, a short explanation, its technologies, and an honest note about what it does. Nothing has been invented for this starter page.',
      },
      {
        label: 'Resources',
        title: 'Ready for repositories, docs, and demos.',
        body: 'Each future entry can link to a GitHub repository, documentation, screenshots, or a working demo when those materials are available.',
      },
    ],
  },
  {
    number: '03',
    slug: 'creative-experiments',
    title: 'Creative Experiments',
    description: 'Motion graphics, music and digital projects.',
    category: 'Creative Technology',
    status: 'Ongoing',
    introduction:
      'A place for visual studies, sounds, edits, and ideas that do not need to fit neatly into one category.',
    sections: [
      {
        label: 'Moving image',
        title: 'Motion graphics and editing.',
        body: 'This section is ready for After Effects projects, motion studies, title sequences, and video work when you choose what to share.',
      },
      {
        label: 'Sound and play',
        title: 'Music and digital experiments.',
        body: 'Add music production notes, audio pieces, interactive sketches, or completely unnecessary experiments that were simply fun to make.',
      },
    ],
  },
  {
    number: '04',
    slug: 'fizzy-avi-creative-index',
    title: 'fizzy.avi — Creative Index',
    description: 'A bold, orange-first introduction to my creative world.',
    category: 'Creative Portfolio / Visual Index',
    status: 'Active',
    externalUrl: 'https://fizzy-avi-creative-index.cozypanda4.chatgpt.site/',
    introduction: 'An expressive first impression for my creative work, with a vibrant orange visual identity.',
    sections: [],
  },
  {
    number: '05',
    slug: 'fizzy-avi-portfolio',
    title: 'fizzy.avi — Portfolio',
    description: 'A refined, cream-toned home for my professional creative work.',
    category: 'Creative Portfolio / Professional',
    status: 'Active',
    externalUrl: 'https://fizzy-avi-portfolio.cozypanda4.chatgpt.site/',
    introduction: 'A more professional presentation of my creative work with a restrained cream aesthetic.',
    sections: [],
  },
]

export const getProject = (slug: string) => projects.find((project) => project.slug === slug)
