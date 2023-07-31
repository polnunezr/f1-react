let teams = [
  {
    id: 11,
    season: 2022,
    teams: [
      {
        team: "Red Bull",
        img: "https://cdn-1.motorsport.com/images/mgl/0L1nPDW2/s8/red-bull-racing-rb18-1.jpg",
        car: "https://www.youtube.com/watch?v=uxm5ZIhvyf0",
      },
      {
        team: "Mercedes",
        img: "https://cdn-1.motorsport.com/images/mgl/63vAGwbY/s8/fl3ht5xxoaqlhxw-1.jpg",
        car: "https://www.youtube.com/watch?v=eHy_Zodt1qM",
      },
      {
        team: "Ferrari",
        img: "https://cdn-1.motorsport.com/images/mgl/24vAKWq6/s8/ferrari-f1-75-1.jpg",
        car: "https://www.youtube.com/watch?v=Gxbg5ny18xg",
      },
      {
        team: "McLaren",
        img: "https://cdn-1.motorsport.com/images/mgl/0k7D8Bj0/s8/lando-norris-mclaren-mcl36-1.jpg",
        car: "https://www.youtube.com/watch?v=AaAWiOIR-UM",
      },
      {
        team: "Alpha Tauri",
        img: "https://cdn-1.motorsport.com/images/mgl/2d1nKNnY/s8/fljwx3swyaiflst-1.jpg",
        car: "https://www.youtube.com/watch?v=c2jEcjLsk-s",
      },
      {
        team: "Alpine",
        img: "https://cdn-1.motorsport.com/images/amp/Yv8pjn10/s1000/alpine-a522-1.jpg",
        car: "https://www.youtube.com/watch?v=kQNZYdurwPQ",
      },
      {
        team: "Aston Martin",
        img: "https://cdn-1.motorsport.com/images/mgl/0RrnPQg0/s8/aston-martin-amr22-1.jpg",
        car: "https://www.youtube.com/watch?v=XvJKRta7SD4",
      },
      {
        team: "Williams",
        img: "https://cdn-1.motorsport.com/images/mgl/2jXZn3M6/s8/williams-fw44-1.jpg",
        car: "https://www.youtube.com/watch?v=OnDHuO7Ppkw",
      },
      {
        team: "Alfa Romeo",
        img: "https://cdn-1.motorsport.com/images/mgl/YW7JxXkY/s8/alfa-romeo-c42-1.jpg",
        car: "https://www.youtube.com/watch?v=9ARy4Ec1J5M",
      },
      {
        team: "Haas F1 Team",
        img: "https://cdn-1.motorsport.com/images/mgl/Y99AMEbY/s8/haas-vf-22-1.jpg",
        car: "https://www.youtube.com/watch?v=2fWtG1vMpjs",
      },
    ],
  },
  {
    id: 12,
    season: 2023,
    teams: [
      {
        team: "Red Bull",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/red-bull-racing.png.transform/4col/image.png",
      },
      {
        team: "Mercedes",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mercedes.png.transform/4col/image.png",
      },
      {
        team: "Ferrari",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/ferrari.png.transform/4col/image.png",
      },
      {
        team: "McLaren",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/mclaren.png.transform/4col/image.png",
      },
      {
        team: "Alpha Tauri",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alphatauri.png.transform/4col/image.png",
      },
      {
        team: "Alpine",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alpine.png.transform/4col/image.png",
      },
      {
        team: "Aston Martin",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/aston-martin.png.transform/4col/image.png",
      },
      {
        team: "Williams",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/williams.png.transform/4col/image.png",
      },
      {
        team: "Alfa Romeo",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/alfa-romeo.png.transform/4col/image.png",
      },
      {
        team: "Haas F1 Team",
        img: "https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/haas-f1-team.png.transform/4col/image.png",
      },
    ],
  },
];

/* 
 
    {
      id: 7,
      team: "Aston Martin",
      img: "https://cdn-1.motorsport.com/images/mgl/0RrnPQg0/s8/aston-martin-amr22-1.jpg",
      car: "https://www.youtube.com/watch?v=XvJKRta7SD4",
    },
    {
      id: 8,
      team: "Williams",
      img: "https://cdn-1.motorsport.com/images/mgl/2jXZn3M6/s8/williams-fw44-1.jpg",
      car: "https://www.youtube.com/watch?v=OnDHuO7Ppkw",
    },
    {
      id: 9,
      team: "Alfa Romeo",
      img: "https://cdn-1.motorsport.com/images/mgl/YW7JxXkY/s8/alfa-romeo-c42-1.jpg",
      car: "https://www.youtube.com/watch?v=9ARy4Ec1J5M",
    },
    {
      id: 10,
      team: "Haas F1 Team",
      img: "https://cdn-1.motorsport.com/images/mgl/Y99AMEbY/s8/haas-vf-22-1.jpg",
      car: "https://www.youtube.com/watch?v=2fWtG1vMpjs",
    },
  ],
};
*/
export default function getAllTeams() {
  return teams;
}

export function getUser(id) {
  return teams.find((team) => team.id === id);
}

export function deleteUser(id) {
  teams = teams.filter((team) => team.id !== id);
}
