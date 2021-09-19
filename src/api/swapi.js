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
