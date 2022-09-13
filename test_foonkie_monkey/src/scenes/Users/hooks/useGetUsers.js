import {useEffect, useState} from 'react';

const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [offset, setOffset] = useState(1);

  useEffect(() => getUsers(), []);

  const getUsers = () => {
    setLoading(true);
    //Service to get the data from the server to render
    fetch('https://reqres.in/api/users?page=' + offset)
      //Sending the currect offset with get request
      .then(response => response.json())
      .then(({data, total_pages}) => {
        if (total_pages <= offset) {
          setOffset(offset + 1);
          setUsers([...users, ...data]);
        }
      })
      .catch(error => {
        console.error(error);
      });
    setLoading(false);
  };

  return {loading, users};
};

export default useGetUsers;
