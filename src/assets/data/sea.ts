import { JsonCritter } from 'typescript/types'

const seaCreatures: JsonCritter[] = [
  {
    id: 'seaweed',
    name: 'Seaweed',
    type: 'Sea',
    location: 'Sea',
    size: 'Large',
    speed: 'Stationary',
    startTime: 24,
    endTime: 24,
    value: 600,
    northernMonths: [10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    southernMonths: [4, 5, 6, 7, 8, 9, 10, 11, 12, 1],
    imagePath: '/assets/images/critters/sea/seaweed.png',
  },
  {
    id: 'sea-grapes',
    name: 'Sea Grapes',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Stationary',
    startTime: 24,
    endTime: 24,
    value: 900,
    northernMonths: [6, 7, 8, 9],
    southernMonths: [12, 1, 2, 3],
    imagePath: '/assets/images/critters/sea/sea-grapes.png',
  },
  {
    id: 'sea-cucumber',
    name: 'Sea Cucumber',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Very slow',
    startTime: 24,
    endTime: 24,
    value: 500,
    northernMonths: [11, 12, 1, 2, 3, 4],
    southernMonths: [5, 6, 7, 8, 9, 10],
    imagePath: '/assets/images/critters/sea/sea-cucumber.png',
  },
  {
    id: 'sea-pig',
    name: 'Sea Pig',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Very fast',
    startTime: 16,
    endTime: 8,
    value: 10000,
    northernMonths: [11, 12, 1, 2],
    southernMonths: [5, 6, 7, 8],
    imagePath: '/assets/images/critters/sea/sea-pig.png',
  },
  {
    id: 'sea-star',
    name: 'Sea Star',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Very slow',
    startTime: 24,
    endTime: 24,
    value: 500,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/sea-star.png',
  },
  {
    id: 'sea-urchin',
    name: 'Sea Urchin',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1700,
    northernMonths: [5, 6, 7, 8, 9],
    southernMonths: [11, 12, 1, 2, 3],
    imagePath: '/assets/images/critters/sea/sea-urchin.png',
  },
  {
    id: 'slate-pencil-urchin',
    name: 'Slate Pencil Urchin',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Medium',
    startTime: 16,
    endTime: 8,
    value: 2000,
    northernMonths: [5, 6, 7, 8, 9],
    southernMonths: [11, 12, 1, 2, 3],
    imagePath: '/assets/images/critters/sea/slate-pencil-urchin.png',
  },
  {
    id: 'sea-anemone',
    name: 'Sea Anemone',
    type: 'Sea',
    location: 'Sea',
    size: 'Large',
    speed: 'Stationary',
    startTime: 24,
    endTime: 24,
    value: 500,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/sea-anemone.png',
  },
  {
    id: 'moon-jellyfish',
    name: 'Moon Jellyfish',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Very slow',
    startTime: 24,
    endTime: 24,
    value: 600,
    northernMonths: [7, 8, 9],
    southernMonths: [1, 2, 3],
    imagePath: '/assets/images/critters/sea/moon-jellyfish.png',
  },
  {
    id: 'sea-slug',
    name: 'Sea Slug',
    type: 'Sea',
    location: 'Sea',
    size: 'Tiny',
    speed: 'Very slow',
    startTime: 24,
    endTime: 24,
    value: 600,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/sea-slug.png',
  },
  {
    id: 'pearl-oyster',
    name: 'Pearl Oyster',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Medium',
    startTime: 24,
    endTime: 24,
    value: 2800,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/pearl-oyster.png',
  },
  {
    id: 'mussel',
    name: 'Mussel',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1500,
    northernMonths: [6, 7, 8, 9, 10, 11, 12],
    southernMonths: [12, 1, 2, 3, 4, 5, 6],
    imagePath: '/assets/images/critters/sea/mussel.png',
  },
  {
    id: 'oyster',
    name: 'Oyster',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1100,
    northernMonths: [9, 10, 11, 12, 1, 2],
    southernMonths: [3, 4, 5, 6, 7, 8],
    imagePath: '/assets/images/critters/sea/oyster.png',
  },
  {
    id: 'scallop',
    name: 'Scallop',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1200,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/scallop.png',
  },
  {
    id: 'whelk',
    name: 'Whelk',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1000,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/whelk.png',
  },
  {
    id: 'turban-shell',
    name: 'Turban Shell',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1000,
    northernMonths: [3, 4, 5, 9, 10, 11, 12],
    southernMonths: [3, 4, 5, 6, 9, 10, 11],
    imagePath: '/assets/images/critters/sea/turban-shell.png',
  },
  {
    id: 'abalone',
    name: 'Abalone',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Medium',
    startTime: 16,
    endTime: 8,
    value: 2000,
    northernMonths: [6, 7, 8, 9, 10, 11, 12, 1],
    southernMonths: [12, 1, 2, 7, 4, 5, 6, 7],
    imagePath: '/assets/images/critters/sea/abalone.png',
  },
  {
    id: 'gigas-giant-clam',
    name: 'Gigas Giant Clam',
    type: 'Sea',
    location: 'Sea',
    size: 'X-Large',
    speed: 'Very fast',
    startTime: 24,
    endTime: 24,
    value: 15000,
    northernMonths: [5, 6, 7, 8],
    southernMonths: [11, 12, 1, 2],
    imagePath: '/assets/images/critters/sea/gigas-giant-clam.png',
  },
  {
    id: 'chambered-nautilus',
    name: 'Chambered Nautilus',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Medium',
    startTime: 16,
    endTime: 8,
    value: 1800,
    northernMonths: [3, 4, 5, 6, 9, 10, 11],
    southernMonths: [3, 4, 5, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/chambered-nautilus.png',
  },
  {
    id: 'octopus',
    name: 'Octopus',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1200,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/octopus.png',
  },
  {
    id: 'umbrella-octopus',
    name: 'Umbrella Octopus',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Fast',
    startTime: 24,
    endTime: 24,
    value: 6000,
    northernMonths: [3, 4, 5, 9, 10, 11],
    southernMonths: [3, 4, 5, 9, 10, 11],
    imagePath: '/assets/images/critters/sea/umbrella-octopus.png',
  },
  {
    id: 'vampire-squid',
    name: 'Vampire Squid',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Very fast',
    startTime: 16,
    endTime: 8,
    value: 10000,
    northernMonths: [5, 6, 7, 8],
    southernMonths: [11, 12, 1, 2],
    imagePath: '/assets/images/critters/sea/vampire-squid.png',
  },
  {
    id: 'firefly-squid',
    name: 'Firefly Squid',
    type: 'Sea',
    location: 'Sea',
    size: 'Tiny',
    speed: 'Slow',
    startTime: 21,
    endTime: 3,
    value: 1400,
    northernMonths: [3, 4, 5, 6],
    southernMonths: [9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/firefly-squid.png',
  },
  {
    id: 'gazami-crab',
    name: 'Gazami Crab',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Medium',
    startTime: 24,
    endTime: 24,
    value: 2200,
    northernMonths: [6, 7, 8, 9, 10, 11],
    southernMonths: [12, 1, 2, 3, 4, 5],
    imagePath: '/assets/images/critters/sea/gazami-crab.png',
  },
  {
    id: 'dungeness-crab',
    name: 'Dungeness Crab',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Medium',
    startTime: 24,
    endTime: 24,
    value: 1900,
    northernMonths: [11, 12, 1, 2, 3, 4, 5],
    southernMonths: [5, 6, 7, 8, 9, 10, 11],
    imagePath: '/assets/images/critters/sea/dungeness-crab.png',
  },
  {
    id: 'snow-crab',
    name: 'Snow Crab',
    type: 'Sea',
    location: 'Sea',
    size: 'Large',
    speed: 'Fast',
    startTime: 24,
    endTime: 24,
    value: 6000,
    northernMonths: [11, 12, 1, 2, 3, 4],
    southernMonths: [5, 6, 7, 8, 9, 10],
    imagePath: '/assets/images/critters/sea/snow-crab.png',
  },
  {
    id: 'red-king-crab',
    name: 'Red King Crab',
    type: 'Sea',
    location: 'Sea',
    size: 'Large',
    speed: 'Very fast',
    startTime: 24,
    endTime: 24,
    value: 8000,
    northernMonths: [11, 12, 1, 2, 3],
    southernMonths: [5, 6, 7, 8, 9],
    imagePath: '/assets/images/critters/sea/red-king-crab.png',
  },
  {
    id: 'acorn-barnacle',
    name: 'Acorn Barnacle',
    type: 'Sea',
    location: 'Sea',
    size: 'Tiny',
    speed: 'Stationary',
    startTime: 24,
    endTime: 24,
    value: 600,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/acorn-barnacle.png',
  },
  {
    id: 'spider-crab',
    name: 'Spider Crab',
    type: 'Sea',
    location: 'Sea',
    size: 'X-Large',
    speed: 'Very fast',
    startTime: 24,
    endTime: 24,
    value: 12000,
    northernMonths: [3, 4],
    southernMonths: [9, 10],
    imagePath: '/assets/images/critters/sea/spider-crab.png',
  },
  {
    id: 'tiger-prawn',
    name: 'Tiger Prawn',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Medium',
    startTime: 16,
    endTime: 8,
    value: 3000,
    northernMonths: [6, 7, 8, 9],
    southernMonths: [12, 1, 2, 3],
    imagePath: '/assets/images/critters/sea/tiger-prawn.png',
  },
  {
    id: 'sweet-shrimp',
    name: 'Sweet Shrimp',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 16,
    endTime: 8,
    value: 1400,
    northernMonths: [9, 10, 11, 12, 1, 2],
    southernMonths: [3, 4, 5, 6, 7, 8],
    imagePath: '/assets/images/critters/sea/sweet-shrimp.png',
  },
  {
    id: 'mantis-shrimp',
    name: 'Mantis Shrimp',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Medium',
    startTime: 16,
    endTime: 8,
    value: 2500,
    northernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    southernMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/mantis-shrimp.png',
  },
  {
    id: 'spiny-lobster',
    name: 'Spiny Lobster',
    type: 'Sea',
    location: 'Sea',
    size: 'Large',
    speed: 'Fast',
    startTime: 21,
    endTime: 3,
    value: 5000,
    northernMonths: [10, 11, 12],
    southernMonths: [4, 5, 6],
    imagePath: '/assets/images/critters/sea/spiny-lobster.png',
  },
  {
    id: 'lobster',
    name: 'Lobster',
    type: 'Sea',
    location: 'Sea',
    size: 'Large',
    speed: 'Fast',
    startTime: 24,
    endTime: 24,
    value: 4500,
    northernMonths: [12, 1, 4, 5, 6],
    southernMonths: [6, 7, 10, 11, 12],
    imagePath: '/assets/images/critters/sea/lobster.png',
  },
  {
    id: 'giant-isopod',
    name: 'Giant Isopod',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Very fast',
    startTime: 9,
    endTime: 3,
    value: 12000,
    northernMonths: [7, 8, 9, 10],
    southernMonths: [1, 2, 3, 4],
    imagePath: '/assets/images/critters/sea/giant-isopod.png',
  },
  {
    id: 'horseshoe-crab',
    name: 'Horseshoe Crab',
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Medium',
    startTime: 21,
    endTime: 3,
    value: 2500,
    northernMonths: [7, 8, 9],
    southernMonths: [1, 2, 3],
    imagePath: '/assets/images/critters/sea/horseshoe-crab.png',
  },
  {
    id: 'sea-pineapple',
    name: 'Sea Pineapple',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 24,
    endTime: 24,
    value: 1500,
    northernMonths: [4, 5, 6, 7, 8],
    southernMonths: [10, 11, 12, 1, 2],
    imagePath: '/assets/images/critters/sea/sea-pineapple.png',
  },
  {
    id: 'spotted-garden-eel',
    name: 'Spotted Garden Eel',
    type: 'Sea',
    location: 'Sea',
    size: 'Small',
    speed: 'Slow',
    startTime: 4,
    endTime: 20,
    value: 1100,
    northernMonths: [5, 6, 7, 8, 9, 10],
    southernMonths: [11, 12, 1, 2, 3, 4],
    imagePath: '/assets/images/critters/sea/spotted-garden-eel.png',
  },
  {
    id: 'flatworm',
    name: 'Flatworm',
    type: 'Sea',
    location: 'Sea',
    size: 'Tiny',
    speed: 'Very slow',
    startTime: 16,
    endTime: 8,
    value: 700,
    northernMonths: [8, 9],
    southernMonths: [2, 3],
    imagePath: '/assets/images/critters/sea/flatworm.png',
  },
  {
    id: 'venus-flower-basket',
    name: "Venus' Flower Basket",
    type: 'Sea',
    location: 'Sea',
    size: 'Medium',
    speed: 'Fast',
    startTime: 24,
    endTime: 24,
    value: 5000,
    northernMonths: [10, 11, 12, 1, 2],
    southernMonths: [4, 5, 6, 7, 8],
    imagePath: '/assets/images/critters/sea/venus-flower-basket.png',
  },
]

export default seaCreatures
