import App from '../components/app/App';
import NotFound from '../components/NotFound';
import MovieInfo from '../components/movies/info/MovieInfo';

export default [
  {
    path: '/',
    exact: true,
    component: App
  },
  {
    path: '/search/:query',
    exact: true,
    component: App
  },
  {
    path: '/film/:name',
    exact: true,
    component: MovieInfo
  },
  {
    path: '*',
    component: NotFound
  }
];
