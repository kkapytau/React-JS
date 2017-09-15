import React from 'react';
import Movie from './Movie';

const moviesData = [
  {
    title: 'Kill Bill: Vol. 2',
    date: '2003',
    category: 'Action & Adventure',
    poster: 'https://netflixroulette.net//api//posters//60032563.jpg',
    unit: 1
  },
  {
    title: 'Kill Bill: Vol. 1',
    date: '2004',
    category: 'Action & Adventure',
    poster: 'https://netflixroulette.net//api//posters//60031236.jpg',
    unit: 2
  },
  {
    title: 'Pulp Fiction',
    date: '1994',
    category: 'Oscar-winning Movies',
    poster: 'https://netflixroulette.net//api//posters//880640.jpg',
    unit: 3
  },
  {
    title: 'Jackie Brown',
    date: '1997',
    category: 'Dramas',
    poster: 'https://netflixroulette.net//api//posters//60010514.jpg',
    unit: 4
  },
  {
    title: 'Reservoir Dogs',
    date: '1992',
    category: 'Independent Movies',
    poster: 'https://netflixroulette.net//api//posters//902003.jpg',
    unit: 5
  }
];

export default function Movies() {
  const resultArray = moviesData.map((data) => {
    return <Movie key={data.unit} movie={data} />;
  });
  return <section className="movies">{resultArray}</section>;
}
