export type City = {
  name: string
}

export type Country = {
  name: string
  code: string
  region: string
  cities: City[]
}

export const countries: Country[] = [
  {
    name: 'Brazil',
    code: 'br',
    region: 'South America',
    cities: [
      { name: 'São Paulo' },
      { name: 'Rio de Janeiro' },
      { name: 'Curitiba' },
      { name: 'Fortaleza' },
      { name: 'Salvador' },
      { name: 'Recife' },
      { name: 'São Tomé das Letras' },
      { name: 'Caldas Novas' },
      { name: 'Bonito' },
      { name: 'Pipa' },
    ],
  },
  {
    name: 'Spain',
    code: 'es',
    region: 'Europe',
    cities: [
      { name: 'Barcelona' },
      { name: 'Madrid' },
      { name: 'Valencia' },
      { name: 'Seville' },
      { name: 'Murcia' },
    ],
  },
  {
    name: 'Portugal',
    code: 'pt',
    region: 'Europe',
    cities: [
      { name: 'Porto' },
      { name: 'Lisbon' },
      { name: 'Faro' },
    ],
  },
  {
    name: 'Cape Verde',
    code: 'cv',
    region: 'Africa',
    cities: [{ name: 'Sal' }],
  },
  {
    name: 'United Kingdom',
    code: 'gb',
    region: 'Europe',
    cities: [{ name: 'London' }],
  },
  {
    name: 'Ireland',
    code: 'ie',
    region: 'Europe',
    cities: [{ name: 'Dublin' }],
  },
  {
    name: 'Morocco',
    code: 'ma',
    region: 'Africa',
    cities: [{ name: 'Casablanca' }],
  },
  {
    name: 'Andorra',
    code: 'ad',
    region: 'Europe',
    cities: [
      { name: 'Andorra la Vella' },
      { name: 'El Tarter' },
    ],
  },
  {
    name: 'France',
    code: 'fr',
    region: 'Europe',
    cities: [
      { name: 'Paris' },
      { name: 'Perpignan' },
      { name: 'Bagnères-de-Bigorre' },
      { name: 'Marseille' },
      { name: 'Nice' },
    ],
  },
  {
    name: 'Italy',
    code: 'it',
    region: 'Europe',
    cities: [
      { name: 'Cagliari' },
      { name: 'Enego' },
      { name: 'Venice' },
      { name: 'Rome' },
      { name: 'Florence' },
      { name: 'Milan' },
      { name: 'Verona' },
      { name: 'Peschiera del Garda' },
      { name: 'Pisa' },
    ],
  },
  {
    name: 'Vatican City',
    code: 'va',
    region: 'Europe',
    cities: [{ name: 'Vatican City' }],
  },
  {
    name: 'Malta',
    code: 'mt',
    region: 'Europe',
    cities: [{ name: 'Sliema' }],
  },
  {
    name: 'Colombia',
    code: 'co',
    region: 'South America',
    cities: [
      { name: 'Medellín' },
      { name: 'Bogotá' },
      { name: 'Cartagena' },
    ],
  },
  {
    name: 'Argentina',
    code: 'ar',
    region: 'South America',
    cities: [{ name: 'Buenos Aires' }],
  },
]
