let users = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",

    img: "https://cdn-7.motorsport.com/images/mgl/24vA3r46/s800/max-verstappen-red-bull-racing-1.jpg",
  },
  {
    id: 2,
    name: "Sergio Pérez",
    team: "Red Bull Racing",

    img: "https://cdn-1.motorsport.com/images/mgl/0a9neZP0/s500/sergio-perez-red-bull-racing-1.jpg",
  },
  {
    id: 3,
    name: "Lewis Hamilton",
    team: "Mercedes",

    img: "    https://cdn-2.motorsport.com/images/mgl/0mb95oa2/s800/lewis-hamilton-mercedes-1.jpg",
  },
  {
    id: 4,
    name: "George Russell",
    team: "Mercedes",

    img: "https://cdn-3.motorsport.com/images/mgl/6l9yjoj0/s500/george-russell-mercedes-1.jpg",
  },
  {
    id: 5,
    name: "Carlos Sainz Jr.",
    team: "Ferrari",

    img: "https://cdn-9.motorsport.com/images/mgl/YXRnk570/s500/carlos-sainz-jr-ferrari-1.jpg",
  },
  {
    id: 6,
    name: "Charles Leclerc",
    team: "Ferrari",

    img: "https://cdn-9.motorsport.com/images/mgl/6VRnqmN6/s500/charles-leclerc-ferrari-1.jpg",
  },
  {
    id: 7,
    name: "Lando Norris",
    team: "McLaren",

    img: "https://cdn-9.motorsport.com/images/mgl/0L1nLWJ2/s500/lando-norris-mclaren-1.jpg",
  },
  ,
  {
    id: 8,
    name: "Daniel Ricciardo",
    team: "McLaren",

    img: "https://cdn-9.motorsport.com/images/mgl/24vA4nA6/s500/daniel-ricciardo-mclaren-1.jpg",
  },
  {
    id: 9,
    name: "Pierre Gasly",
    team: "Alpha Tauri",

    img: "https://cdn-7.motorsport.com/images/mgl/0JBnElB0/s500/pierre-gasly-alphatauri-1.jpg",
  },
  {
    id: 10,
    name: "Yuki Tsunoda",
    team: "Alpha Tauri",

    img: "https://cdn-8.motorsport.com/images/mgl/24vA3zN6/s500/yuki-tsunoda-alphatauri-1.jpg",
  },
  {
    id: 11,
    name: "Fernando Alonso",
    team: "Alpine",

    img: "https://cdn-4.motorsport.com/images/mgl/YBea5Kv2/s500/fernando-alonso-alpine-1.jpg",
  },
  {
    id: 12,
    name: "Esteban Ocon",
    team: "Alpine",

    img: "https://cdn-1.motorsport.com/images/mgl/6zQ7ev7Y/s500/esteban-ocon-alpine-1.jpg",
  },
  {
    id: 13,
    name: "Sebastian Vettel",
    team: "Aston Martin",

    img: "https://cdn-7.motorsport.com/images/mgl/2jXZrAb6/s500/sebastian-vettel-aston-martin-1.jpg",
  },
  {
    id: 14,
    name: "Lance Stroll",
    team: "Aston Martin",

    img: "https://cdn-6.motorsport.com/images/mgl/0RrnLBB0/s500/lance-stroll-aston-martin-1.jpg",
  },

  {
    id: 15,
    name: "Valtteri Bottas",
    team: "Alfa Romeo",

    img: "https://cdn-3.motorsport.com/images/mgl/63vAdQEY/s500/valtteri-bottas-alfa-romeo-1.jpg",
  },
  ,
  {
    id: 16,
    name: "Guanyu Zhou",
    team: "Alfa Romeo",

    img: "https://cdn-2.motorsport.com/images/mgl/YMdn9Xl2/s500/guanyu-zhou-alfa-romeo-1.jpg",
  },
  {
    id: 17,
    name: "Nicholas Latifi",
    team: "Williams",

    img: "https://cdn-7.motorsport.com/images/mgl/0k74Ray0/s500/nicholas-latifi-williams-racin-1.jpg",
  },
  {
    id: 18,
    name: "Alexander Albon",
    team: "Williams",

    img: "https://cdn-5.motorsport.com/images/mgl/2jXdJPk6/s500/alex-albon-williams-1.jpg",
  },
  {
    id: 19,
    name: "Mick Schumacher",
    team: "Haas",

    img: "https://cdn-5.motorsport.com/images/mgl/0a9navN0/s500/mick-schumacher-haas-f1-team-1.jpg",
  },
  {
    id: 20,
    name: "Nikita Mazepin",
    team: "Haas",

    img: "https://cdn-1.motorsport.com/images/mgl/6gp8a1x0/s500/nikita-mazepin-haas-f1-team-1.jpg",
  },
];

export default function getAllUsers() {
  return users;
}

export function getUser(id) {
  return users.find((user) => user.id === id);
}

export function deleteUser(id) {
  users = users.filter((user) => user.id !== id);
}
