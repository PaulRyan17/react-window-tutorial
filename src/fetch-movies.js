const fetchMovies = async () => {
  const response = await fetch('https://raw.githubusercontent.com/vega/vega/master/docs/data/movies.json')
  const movies = await response.json()
  return movies
}

export { fetchMovies }