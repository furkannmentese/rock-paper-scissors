export interface Choice {
  name: string
  img: string
  alt: string
  gridArea: string
  colors: {
    background: string
    shadow: string
  }
}

export const choices: Choice[] = [
  {
    name: 'paper',
    img: '/images/icon-paper.svg',
    alt: 'Paper',
    gridArea: 'paper',
    colors: {
      background: '#4664f4',
      shadow: '#2a45c2',
    },
  },
  {
    name: 'scissors',
    img: '/images/icon-scissors.svg',
    alt: 'Scissors',
    gridArea: 'scissors',
    colors: {
      background: '#eb9f0e',
      shadow: '#c76c1b',
    },
  },
  {
    name: 'rock',
    img: '/images/icon-rock.svg',
    alt: 'Rock',
    gridArea: 'rock',
    colors: {
      background: '#db2e4d',
      shadow: '#9d1634',
    },
  },
]
