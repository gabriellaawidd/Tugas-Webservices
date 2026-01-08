let films = [
    { id: 1, title: "Inception", genre: "Action", year: 2010 },
    { id: 2, title: "The Matrix", genre: "Sci-Fi", year: 1999 },
    { id: 3, title: "Interstellar", genre: "Sci-Fi", year: 2014 },
    { id: 4, title: "Jumanji", genre: "Adventure", year: 1995 },
];

exports.getAllFilms = (req, res) => {
    res.json(films);
};

exports.getFilmById = (req, res) => {
    const film = films.find(f => f.id === parseInt(req.params.id));
    if (film) {
        res.json(film);
    } else {
        res.status(404).json({ message: "Film not found" });
    }
};

exports.addFilm = (req, res) => {
    const newFilm = {
        id: films.length + 1,
        title: req.body.title,
        genre: req.body.genre,
        year: req.body.year
    };
    films.push(newFilm);
    res.json(newFilm);
};

exports.updateFilm = (req, res) => {
    const film = films.find(f => f.id === parseInt(req.params.id));
    if (film) {
        film.title = req.body.title || film.title;
        film.genre = req.body.genre || film.genre;
        film.year = req.body.year || film.year;
        res.json( {
            message: "Film updated successfully",
            film: film
        });
    } else {
        res.status(404).json({ message: "Film not found" });
    }
};

exports.deleteFilm = (req, res) => {
    const filmIndex = films.findIndex(f => f.id === parseInt(req.params.id));
    if (filmIndex !== -1) {
        films.splice(filmIndex, 1);
        res.json({ message: "Film deleted successfully" });
    } else {
        res.status(404).json({ message: "Film not found" });
    }
};