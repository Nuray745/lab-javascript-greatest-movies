// Iteration 1: All directors
function getAllDirectors(moviesArray) {
  return moviesArray.map(movie => movie.director);
}

// Iteration 2: Steven Spielberg
function howManyMovies(moviesArray) {
  return moviesArray.filter(
    movie =>
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
  ).length;
}

// Iteration 3: Scores average
function scoresAverage(moviesArray) {
  if (moviesArray.length === 0) return 0;

  const avg =
    moviesArray.reduce((sum, movie) => {
      return sum + (movie.score || 0);
    }, 0) / moviesArray.length;

  return Number(avg.toFixed(2));
}

// Iteration 4: Drama movies score
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(movie =>
    movie.genre.includes("Drama")
  );

  return scoresAverage(dramaMovies);
}

// Iteration 5: Order by year
function orderByYear(moviesArray) {
  const moviesCopy = [...moviesArray];

  return moviesCopy.sort((a, b) => {
    if (a.year === b.year) {
      return a.title.localeCompare(b.title);
    }

    return a.year - b.year;
  });
}

// Iteration 6: Alphabetical order
function orderAlphabetically(moviesArray) {
  const moviesCopy = [...moviesArray];

  return moviesCopy
    .sort((a, b) => a.title.localeCompare(b.title))
    .map(movie => movie.title)
    .slice(0, 20);
}

// BONUS - Iteration 7
function turnHoursToMinutes(moviesArray) {
  return moviesArray.map(movie => {
    const movieCopy = { ...movie };

    const durationParts = movie.duration.split(" ");

    let hours = 0;
    let minutes = 0;

    durationParts.forEach(part => {
      if (part.includes("h")) {
        hours = parseInt(part);
      }

      if (part.includes("min")) {
        minutes = parseInt(part);
      }
    });

    movieCopy.duration = hours * 60 + minutes;

    return movieCopy;
  });
}

// BONUS - Iteration 8
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) return null;

  const years = [...new Set(moviesArray.map(movie => movie.year))];

  let bestYear = 0;
  let bestAvg = 0;

  years.forEach(year => {
    const moviesOfYear = moviesArray.filter(
      movie => movie.year === year
    );

    const avg = scoresAverage(moviesOfYear);

    if (
      avg > bestAvg ||
      (avg === bestAvg && year < bestYear)
    ) {
      bestYear = year;
      bestAvg = avg;
    }
  });

  return `The best year was ${bestYear} with an average score of ${bestAvg}`;
}