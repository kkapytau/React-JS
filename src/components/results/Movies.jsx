import React from 'react';
import Movie from './Movie';
import Modal from '../modal/Modal';

const moviesData = [
  {
    title: 'Kill Bill: Vol. 2',
    date: '2004',
    category: 'Action & Adventure',
    poster: 'https://netflixroulette.net//api//posters//60032563.jpg',
    unit: 1,
    rating: '3.8',
    runtime: '137 min',
    summary: "The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill's house, she's in for a surprise.",
    director: 'Quentin Tarantino',
    show_cast: 'Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah, Gordon Liu, Michael Parks, Perla Haney-Jardine, Helen Kim, Claire Smithies, Clark Middleton'
  },
  {
    title: 'Kill Bill: Vol. 1',
    date: '2003',
    category: 'Action & Adventure',
    poster: 'https://netflixroulette.net//api//posters//60031236.jpg',
    unit: 2,
    rating: '3.8',
    runtime: '111 min',
    summary: 'An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.',
    director: 'Quentin Tarantino',
    show_cast: 'Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu'
  },
  {
    title: 'Pulp Fiction',
    date: '1994',
    category: 'Oscar-winning Movies',
    poster: 'https://netflixroulette.net//api//posters//880640.jpg',
    unit: 3,
    rating: '4.1',
    runtime: '154 min',
    summary: "Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.",
    director: 'Quentin Tarantino',
    show_cast: 'John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros'
  },
  {
    title: 'Jackie Brown',
    date: '1997',
    category: 'Dramas',
    poster: 'https://netflixroulette.net//api//posters//60010514.jpg',
    unit: 4,
    rating: '3.7',
    runtime: '154 min',
    summary: "Jackie Brown is an aging flight attendant who smuggles cash on the side. But when she's busted and pressured to help with an investigation, she plans to play the opposing forces against each other and walk away with the dough.",
    director: 'Quentin Tarantino',
    show_cast: "Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda, Michael Keaton, Robert De Niro, Michael Bowen, Chris Tucker, Lisa Gay Hamilton, Tommy 'Tiny' Lister"
  },
  {
    title: 'Reservoir Dogs',
    date: '1992',
    category: 'Independent Movies',
    poster: 'https://netflixroulette.net//api//posters//902003.jpg',
    unit: 5,
    rating: '4.0',
    runtime: '99 min',
    summary: "Quentin Tarantino's directorial debut is raw, violent, often mimicked -- and unforgettable. A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors unravel.",
    director: 'Quentin Tarantino',
    show_cast: 'Harvey Keitel, Tim Roth, Michael Madsen, Steve Buscemi, Chris Penn, Lawrence Tierney, Edward Bunker, Quentin Tarantino, Randy Brooks, Kirk Baltz'
  }
];

/*
export default function Movies(props) {
  const resultArray = (props.moviesData.length) ? props.moviesData.map(data =>
    <div><Movie key={data.unit} movie={data} /><Modal movie={data} /></div>) : <dvi className="no-films">No film found</dvi>;
  return <section className="movies">{resultArray}</section>;
}
*/

export default function Movies() {
  const resultArray = moviesData.map(data => (
    <div><Movie key={data.unit} movie={data} /><Modal movie={data} /></div>));
  return <section className="movies">{resultArray}</section>;
}
