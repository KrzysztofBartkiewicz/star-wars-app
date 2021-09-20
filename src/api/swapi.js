import axios from 'axios';

export const fetchCharacters = (url) => {
  return axios
    .get(url)
    .then((res) => res.data)
    .then((data) => {
      const page = data.next
        ? parseInt(data.next.substr(data.next.length - 1)) - 1
        : parseInt(data.previous.substr(data.previous.length - 1)) + 1;
      return {
        ...data,
        page,
      };
    })
    .catch((err) => console.error('people', err));
};

export const fetchSearchedCharacters = (fraze, page) => {
  const url = page ? fraze : `https://swapi.dev/api/people/?search=${fraze}`;
  return axios
    .get(url)
    .then((res) => res.data)
    .then((data) => {
      if (data.count === 0) {
        return {
          page: 0,
        };
      } else {
        let page;
        if (data.next) {
          page = parseInt(data.next.substr(data.next.length - 1)) - 1;
        } else if (data.previous) {
          page = parseInt(data.previous.substr(data.previous.length - 1)) + 1;
        } else {
          page = 1;
        }

        return {
          ...data,
          page,
        };
      }
    })
    .catch((err) => console.error('search', err));
};

export const fetchFilms = (films) => {
  return new Promise((resolve, reject) => {
    let promisesArr = [];

    films.forEach((film) => promisesArr.push(axios.get(film)));

    Promise.all(promisesArr)
      .then((res) => {
        const mappedFilms = res.map(({ data }) => {
          const { title, producer, director, release_date } = data;
          return {
            title,
            producer,
            director,
            release_date,
          };
        });

        resolve(mappedFilms);
      })
      .catch((err) => reject(err));
  });
};

// export const fetchFilms = (films) => {
//   let promisesArr = [];
//   let filmsArr = [];

//   films.forEach((film) => promisesArr.push(axios.get(film)));

//   Promise.all(promisesArr)
//     .then((res) => {
//       const mappedFilms = res.map(({ data }) => {
//         const { title, producer, director, release_date } = data;
//         return {
//           title,
//           producer,
//           director,
//           release_date,
//         };
//       });
//       filmsArr = mappedFilms;
//     })
//     .catch((err) => console.error(err));

//   return filmsArr;
// };
