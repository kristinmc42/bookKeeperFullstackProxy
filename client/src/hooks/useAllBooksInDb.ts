import { useQuery, UseQueryResult } from "react-query";
import axios from "axios";

// hook gets all book from db for current user

export default function useAllBooksInDb(): UseQueryResult<any, unknown> {
  const getAllUsersBooks = async () => {
    return await axios
      .get(`books/`)

      // .get(`https://${process.env.REACT_APP_API_URL}/api/books/`)
      .then((res) => {
        return res.data;
      });
  };

  return useQuery("dbBooks", getAllUsersBooks);
}
