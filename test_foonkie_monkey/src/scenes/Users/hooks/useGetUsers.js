import {useEffect, useState} from 'react';

const useGetUsers = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [offset, setOffset] = useState(1);

  const handleGetUser = () => {
    setLoading(true);
    fetch('https://reqres.in/api/users?page=' + offset)
      .then(response => response.json())
      .then(({data, total_pages}) => {
        if (offset <= total_pages) {
          setOffset(offset + 1);
          setUsers([...users, ...data]);
        }
      })
      .catch(error => {
        console.error(error);
      });
    setLoading(false);
  };

  useEffect(() => {
    handleGetUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {loading, users, handleGetUser};
};

export default useGetUsers;
