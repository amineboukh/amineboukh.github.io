const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://amineboukh.github.io',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Amine Boukh',
  role: 'Full Stack Developer & Blockchain Engineer',
  description: 'I specialize in architecting, development and building out systems with the JavaScript tech stack. I\'ve hands-on experience building scalable software for SaaS companies, non-profits, healthcare organizations and financial apps.',
  resume: '/assets/resume.pdf',
  social: {
    linkedin: 'https://ca.linkedin.com/in/amine-boukhtouta-91046626',
    github: 'https://github.com/amineboukh',
    telegram: 'https://t.me/aboukh'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  // {
  //   name: 'G2GN',
  //   description:
  //     'G2 Global Network is an online members network. Members have access to various online courses, specifically related to the financial industry',
  //   stack: ['SAAS', 'Angular', 'Express', 'Stripe', 'Discord Integration', 'Learnworls LMS'],
  //   sourceCode: 'https://github.com/amineboukh',
  //   livePreview: 'https://g2gn.io',
  // },
  {
    name: 'Grohabitate',
    description:
      'Grohabitate was conceptualized with the goal of creating an ultra-low barrier entry into the real estate market for all hardworking people in communities.',
    stack: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3.js', 'Husmates Integration', 'IPFS'],
    company: 'https://ca.linkedin.com/in/kenneth-rose-095858163?trk=people-guest_people_search-card',
  },
  {
    name: 'Revolutionnez',
    description:
      'Revolutionnez\'s mission is to help a company revolutionize online sales by providing 360-degree animations and hologram images.',
    stack: ['Vue.js', 'Express', 'SpriteSpin', 'AWS', 'Stripe', 'Zoho One'],
    linkedin: 'https://ca.linkedin.com/company/revolutionnez',
    facebook: 'https://www.facebook.com/revolutionnez/photos/?ref=page_internal',
    instagram: 'https://www.instagram.com/revolutionnez.ca',
    livePreview: 'https://revolutionnez.ca',
  },
  {
    name: 'JD Landscaping',
    description:
      'J & D Landscaping provides a line of services within the Hardscape industry, with thousands of projects completed and over 16 years in business.',
    stack: ['Angular', 'Next.js', 'Nest.js', 'AWS', 'PostgreSQL', 'Github CI/CD'],
    linkedin: 'https://www.linkedin.com/company/jd-landscaping',
    facebook: 'https://www.facebook.com/JDlandscapinganddesign/',
    twitter: 'https://twitter.com/JD_Landscaper',
    instagram: 'https://www.instagram.com/jd__landscaping/?hl=en',
    livePreview: 'https://jdlandscaping.net',
  },
  {
    name: 'Morgan Jeffrey & Co . Limited',
    description:
      'MORGAN JEFFREY & CO. LIMITED - Free company information from Companies House including registered office address, filing history, accounts, annual return.',
    stack: ['Angular', 'Next.js', 'Nest.js', 'AWS', 'PostgreSQL', 'Github CI/CD'],
    linkedin: 'https://uk.linkedin.com/in/morganjeffery',
    twitter: 'https://twitter.com/morganjeffery?lang=en',
    instagram: 'https://www.instagram.com/morganjeffery/?hl=en',
    company: 'https://find-and-update.company-information.service.gov.uk/company/14261848',
    livePreview: 'https://morganjeffrey.com',
  },
  {
    name: 'The Tradies App',
    description:
      'Project & Job Management software built for Tradies and Construction.',
    stack: ['Webflow', 'Laravel', 'AWS', 'PostgreSQL', 'Github CI/CD'],
    linkedin: 'https://www.linkedin.com/in/kendrick-morgan-103862137/',
    livePreview: 'https://www.thetradiesapp.com/',
  },
  {
    name: 'Calahex',
    description:
      'Decentralized Exchange Platform where companies registered in the Caribbean can list ERC-20 tokens.',
    stack: ['React.js / Redux-Thunk', 'Laravel', 'AWS', 'Web3.js', 'Smart Contracts'],
    linkedin: 'https://aw.linkedin.com/in/calahex-caribbean-latin-america-hybrid-exchange-387574200',
    facebook: 'https://www.facebook.com/caladexorg/?fref=nf',
    twitter: 'https://twitter.com/calahexcom?lang=en',
    instagram: 'https://www.instagram.com/calahexcom/?hl=en',
    company: 'https://kamhol.com',
    livePreview: 'https://calahex.org',
  },
  {
    name: 'Swell Network',
    description:
      'Decentralized liquid ETH staking protocol that is built for stakers, node operators, and the Ethereum ecosystem',
    stack: ['React.js / TypeScript', 'Node.js', 'GraphQL', 'Apollo Server', 'PostgreSQL', 'Smart Contracts'],
    linkedin: 'https://au.linkedin.com/company/swellnetworkio',
    facebook: 'https://www.facebook.com/Swell-Network-401096126745940/likes/',
    twitter: 'https://twitter.com/swellnetwork?lang=en',
    instagram: 'https://www.instagram.com/swell_talk/?hl=en',
    company: ' https://www.swellnetwork.io',
    livePreview: 'https://www.app.swellnetwork.io',
  },
  {
    name: 'Slothmove',
    description:
      'The home set up service where you can tell everyone you’re changing address and set up your new home within 5 minutes.',
    stack: ['Vue.js / TypeScript', 'Express.js', 'MySQL', 'Firebase', 'Github CI/CD'],
    linkedin: 'https://uk.linkedin.com/company/slothmove',
    facebook: 'https://www.facebook.com/SlothMoveOfficial/',
    twitter: 'https://twitter.com/slothmove_?lang=en',
    instagram: 'https://www.instagram.com/slothmove/?hl=en',
    company: ' https://myslothmove.com',
    livePreview: 'https://slothmove.com',
  },
  {
    name: 'United Portraits',
    description:
      'Click. Customize. Order. Choose your pose, background and package with our easy online ordering system. Show Me My Photos.',
    stack: ['UI/UX', 'React.js / TypeScript', 'Laravel', 'Firebase', 'Github CI/CD'],
    linkedin: 'https://www.linkedin.com/company/united-portraits',
    facebook: 'https://www.facebook.com/UnitedPortraits/',
    twitter: 'https://twitter.com/unitedportraits?lang=en',
    instagram: 'https://www.instagram.com/UnitedPortraits/?hl=en',
    livePreview: 'https://unitedportraits.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'NodeJS',
  'React',
  'Angular',
  'VueJS',
  'NextJS',
  'NuxtJS',
  'ExpressJS',
  'Solidity',
  'Web3/EtherJS',
  'Rust',
  'GoLang',
  'C/C++',
  'Material UI',
  'CI/CD',
  'Git / Kubernete / Docker',
  'AWS / Azure',
  'Google Cloud services',
  'Python OpenCV',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'superdev0119@gmail.com',
  telegram: 'https://t.me/aboukh'
}

export { header, about, projects, skills, contact }
