const info = {
  skills: [
    {
      name: 'Vue',
      main: true,
      img: '/img/vuejs',
      knowlegde: 100
    },
    {
      name: 'Node.js',
      main: true,
      img: '/img/nodejs',
      knowlegde: 70
    },
    {
      name: 'Cypress',
      main: true,
      img: '/img/cypress',
      knowlegde: 70
    },
    {
      name: 'GraphQL',
      main: true,
      img: '/img/graphQL',
      knowlegde: 50
    },
    {
      name: 'Laravel',
      main: true,
      img: '/img/laravel',
      knowlegde: 40
    },
    {
      name: 'Firebase',
      main: true,
      img: '/img/firebase',
      knowlegde: 80
    },
    {
      name: 'Javascript es6+'
    },
    {
      name: 'Stylus'
    },
    {
      name: 'Git'
    },
    {
      name: 'SEO'
    },
    {
      name: 'Scrum'
    },
    {
      name: 'Agile'
    },
    {
      name: 'Jasmine'
    },
    {
      name: 'Jest'
    },
    {
      name: 'PHP'
    },
    {
      name: 'Python'
    },
    {
      name: 'Go'
    }
  ],
  portfolio: [
    {
      name: 'Waitress',
      link: 'https://waitress.netlify.com/',
      img: '/img/portfolio/waitress',
      technologies: ['vuejs']
    },
    {
      name: 'Auto Label',
      link: 'https://github.com/Renato66/auto-label',
      img: '/img/portfolio/auto-label',
      technologies: ['github', 'nodejs', 'language-typescript']
    },
    {
      name: 'Boxnet App',
      youtube: 'FizYPaBkKOg',
      img: '/img/portfolio/boxnet-app',
      technologies: ['react', 'apple', 'google-play']
    },
    {
      name: 'Lista',
      link: 'https://marvelapp.com/18fhc5hg',
      img: '/img/portfolio/lista',
      technologies: ['vuejs', 'vuetify', 'firebase']
    },
    {
      name: 'Icondominio',
      img: '/img/portfolio/icondominio',
      youtube: 'zeouqNyYZJk',
      technologies: ['vuejs', 'apple', 'google-play']
    },
    {
      name: 'Atendimento',
      link: 'https://renato66.github.io/projeto/atendimento',
      youtube: '6AYI0DYWuhQ',
      img: '/img/portfolio/atendimento',
      technologies: ['jquery', 'firebase']
    },
    {
      name: 'Building infra',
      link: 'https://building-infra.netlify.com/',
      img: '/img/portfolio/building-infra',
      technologies: ['nuxt', 'vuejs']
    },
    {
      name: 'Administradora Sell',
      link: 'http://www.sellimoveis.com.br/',
      img: '/img/portfolio/sell',
      technologies: ['bootstrap', 'jquery']
    },
    {
      name: 'GVale imóveis',
      link: 'http://gvaleimoveis.com.br/home/',
      img: '/img/portfolio/gvale',
      technologies: ['bootstrap', 'jquery']
    },
    {
      name: 'BR imóveis',
      link: 'http://www.brimovel.com.br/home/index.asp',
      img: '/img/portfolio/brimovel',
      technologies: ['bootstrap', 'jquery']
    },
    {
      name: 'Icone administradora',
      link: 'http://icone.adm.br/home/',
      img: '/img/portfolio/iconeadm',
      technologies: ['bootstrap', 'jquery']
    },
    {
      name: 'Francis imóveis',
      link: 'http://francisimoveis.com.br/home/',
      img: '/img/portfolio/francis',
      technologies: ['bootstrap', 'jquery']
    },
    {
      name: 'Clube dos Salgados',
      link: 'http://www.clubedossalgados.com.br/',
      img: '/img/portfolio/clube',
      technologies: ['bootstrap', 'jquery']
    }
  ],
  socialNetworks: [
    {
      name: 'facebook',
      url: 'https://www.facebook.com/renato.vicente.3344',
      img: '/img/facebook',
      icon: 'mdi-facebook'
    },
    {
      name: 'github',
      url: 'https://github.com/Renato66',
      img: '/img/github',
      icon: 'mdi-github'
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/frisonrenato',
      img: '/img/linkedin',
      icon: 'mdi-linkedin'
    }
  ],
  contact: {
    name: 'Renato Vicente Frison dos Santos',
    shortName: 'Renato Vicente',
    avatar: 'https://www.gravatar.com/avatar/44d075eb0dc6e9d7f3528ac2de5c24c3',
    phone: {
      country: '55',
      area: '11',
      number: '95981-8159'
    },
    telegram: 'irenato66',
    mail: 'Revi66@hotmail.com',
    linkedin: 'frisonrenato',
    city: 'Santo André',
    state: 'SP',
    region: 'São Paulo',
    postalCode: '09210-300',
    country: 'BR',
    birthday: new Date(1993, 5, 9, 0, 0, 0, 0)
  },
  work: [
    {
      id: 'boxnet',
      company: 'Boxnet',
      startDate: '2019-09-02',
      endDate: null,
      website: 'http://www.boxnet.com.br'
    },
    {
      id: 'coddera',
      company: 'Coddera',
      startDate: '2018-10-01',
      endDate: '2019-08-31',
      website: 'http://www.coddera.com'
    },
    {
      id: 'athos',
      company: 'Athos',
      startDate: '2016-12-01',
      endDate: '2018-04-04',
      website: 'https://www.athos.com.br'
    },
    {
      id: 'cgm',
      company: 'CGM SP',
      startDate: '2014-12-01',
      endDate: '2015-06-01',
      website: 'https://www.prefeitura.sp.gov.br/cidade/secretarias/controladoria_geral/'
    },
    {
      id: 'vanzoline',
      company: 'Vanzoline',
      startDate: '2013-02-01',
      endDate: '2014-04-01',
      website: 'https://vanzolini.org.br'
    }
    // {
    //   id: 'blazing',
    //   company: 'Blazing produções',
    //   startDate: '2013-03-01',
    //   endDate: null,
    //   website: 'http://blazing.com.br/blazing/'
    // }
  ],
  timeline: [
    {
      id: 'colombia',
      dialog: true,
      icon: 'mdi-airplane',
      startDate: '2019-05-29',
      endDate: '2019-06-08'
    },
    {
      id: 'fatec',
      icon: 'mdi-school',
      dialog: true,
      resume: true,
      startDate: '2012-01-01',
      endDate: '2016-01-01'
    },
    {
      id: 'fisk',
      icon: 'mdi-chat',
      year: '2016',
      resume: true,
      startDate: '2005-01-01',
      endDate: '2011-01-01'
    },
    {
      id: 'clovis',
      icon: 'mdi-book-open-page-variant',
      year: '2016',
      resume: true,
      startDate: '2007-01-01',
      endDate: '2010-01-01'
    }
  ]
}

const infoGetter = {}

Object.keys(info).forEach((elem) => { infoGetter[elem] = () => info[elem] })

export default infoGetter
