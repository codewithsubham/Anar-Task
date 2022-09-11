import create from 'zustand'

const useMovieStore = create((set) => ({
    movieList: [],
    shortListedMovies: [],

    shortListedMoviesId: [],

    setMovieList: (movies) => set(state => ({ movieList: movies })),

    addShortListedMovie: (id) => set(state => ({
        shortListedMovies: [...state.shortListedMovies, ...state.movieList.filter(movie =>
        {
            return movie.imdbID == id
        })]
    })),
    removeShortListedMovie: (id) => set(state => (
        {
            shortListedMovies: state.shortListedMovies.filter(movie => movie.imdbID != id)

        }))
    ,
}))

export default useMovieStore