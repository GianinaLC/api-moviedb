export const getAllMovies = async () => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`);
    return response.json();
}

export const getDetailMovie = async (id) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`);
    return response.json();
}

