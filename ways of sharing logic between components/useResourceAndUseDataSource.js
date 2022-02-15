import { useState, useEffect } from "react";
import axios from "axios";

export const useDataSource = (getDataFunc) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const result = await getDataFunc();
      setResource(result);
    })();
  }, [getDataFunc]);

  return resource;
};

export const useResource = (resourceUrl) => {
  const [resource, setResource] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await axios.get(resourceUrl);
      setResource(response.data);
    })();
  }, [resourceUrl]);

  return resource;
};

const serverResource = (url) => async () => {
  const response = await axios.get(url);
  return response.data;
};

export const UserInfo = ({ userId }) => {
  // const user = useResource(`/users/${userId}`);
  //   const user = useDataSource(async () => {
  //     const response = await axios.get(`/users/${userId}`);
  //     return response.data;
  //   });
  const user = useDataSource(serverResource(`/users/${userId}`));

  const { name, age, hairColor, hobbies } = user || {};

  return user ? (
    <>
      <h3>{name}</h3>
      <p>Age: {age} years</p>
      <p>Hair Color: {hairColor}</p>
      <h3>Hobbies:</h3>
      <ul>
        {hobbies.map((hobby) => (
          <li key={hobby}>{hobby}</li>
        ))}
      </ul>
    </>
  ) : (
    <p>Loading...</p>
  );
};

function App() {
  return (
    <>
      <UserInfo userId="123" />
    </>
  );
}
