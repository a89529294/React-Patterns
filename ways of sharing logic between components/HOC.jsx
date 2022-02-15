import { useState, useEffect } from "react";
import axios from "axios";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

//If you don't need to edit data just remove
// originalData/setOriginalData
// onChange/onSave,onReset
//usage: UserInfoEditable = withEditableResource(Component, 'user', '/users/123')
export const withEditableResource = (Component, resourceName, resourcePath) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const response = await axios.get(resourcePath);
        setOriginalData(response.data);
        setData(response.data);
      })();
    }, []);

    const onChange = (changes) => {
      setData({ ...data, ...changes });
    };

    const onSave = async (e) => {
      e.preventDefault();
      const response = await axios.post(resourcePath, { [resourceName]: data });
      setOriginalData(response.data);
      setData(response.data);
    };

    const onReset = (e) => {
      e.preventDefault();
      setData(originalData);
    };

    const resourceProps = {
      [resourceName]: data,
      ["onChange" + capitalize(resourceName)]: onChange,
      ["onSave" + capitalize(resourceName)]: onSave,
      ["onReset" + capitalize(resourceName)]: onReset,
    };

    return <Component {...props} {...resourceProps} />;
  };
};
