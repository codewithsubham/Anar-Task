import create from 'zustand'

const useMovieStore = create((set) => ({
    movieList: [],
    shortListedMoviesId: [],
    shortListedMovies: [],

    setMovieList: (movies) => set(state => ({ movieList: movies })),
    addShortListedMovieId: (id) => set(state => ({ shortListedMoviesId: [...state.shortListedMoviesId, id] })),
    removeShortListedMovieId: (id) => set(state =>
        ({ shortListedMoviesId: state.shortListedMoviesId.filter(value => value != id) })
    ),
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