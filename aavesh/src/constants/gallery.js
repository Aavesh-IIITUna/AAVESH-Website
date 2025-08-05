export const GALLERY_ALBUMS = [
  {
    id: 'memories-2025',
    title: 'Memories 2025',
    description: 'Memories from various events of this year',
    coverImage: '/gallery/memories/MM15.webp',
    images: [
    ...Array.from({ length: 19 }, (_, i) => ({
      id: i + 1,
      src: `/gallery/memories/MM${i + 1}.webp`,
      caption: 'Some beautiful memories'
    }))
    ]
  },
  {
    id: 'events-2025',
    title: 'Events 2025',
    description: 'Highlights from our events this year',
    coverImage: '/gallery/events/TT15.webp',
    images: [
    ...Array.from({ length: 19 }, (_, i) => ({
      id: i + 19,
      src: `/gallery/events/TT${i + 1}.webp`,
      caption: 'TechTatva 2025'
    }))
    ]
  },
  {
    id: 'workshops',
    title: 'Workshops',
    description: 'Educational workshops and seminars',
    coverImage: '/gallery/workshops/WS2.webp',
    images:
      Array.from({ length: 9 }, (_, i) => ({
      id: i + 38,
      src: `/gallery/workshops/WS${i + 1}.webp`,
      caption: 'Some glimpse of Workshops'
    }))
  },
  {
    id: 'meraki-2025',
    title: 'Meraki - 2025',
    description: 'Our flagship event',
    coverImage: '/gallery/meraki/MR1.webp',
    images:
      Array.from({ length: 30 }, (_, i) => ({
      id: i + 47,
      src: `/gallery/meraki/MR${i + 1}.webp`,
      caption: 'Meraki 2025'
    }))
  }
];

// Keep the original for backward compatibility
export const GALLERY_ITEMS = [
  {
    id: 1,
    type: 'image',
    src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 2,
    type: 'image',
    src: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: 3,
    type: 'text',
    title: 'Meraki - 2025',
    backgroundImage: 'https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];
