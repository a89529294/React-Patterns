useEffect(() => {
  let active = true;

  fetch(`https://swapi.dev/api/people/?search=${search}`)
    .then((res) => res.json())
    .then(({ results }) => {
      if (active) setResults(results);
    })
    .catch((err) => console.error(err));

  return () => (active = false);
}, [search]);
