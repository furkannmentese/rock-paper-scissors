export interface Choice {
  name: string
  img: string
  alt: string
  gridArea: string
}

export const choices: Choice[] = [
  {
    name: 'paper',
    img: '/images/icon-paper.svg',
    alt: 'Paper',
    gridArea: 'paper',
  },
  {
    name: 'scissors',
    img: '/images/icon-scissors.svg',
    alt: 'Scissors',
    gridArea: 'scissors',
  },
  {
    name: 'rock',
    img: '/images/icon-rock.svg',
    alt: 'Rock',
    gridArea: 'rock',
  },
]
