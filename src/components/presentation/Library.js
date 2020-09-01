import React from 'react';
import { useQuery } from '@apollo/react-hooks';
//This is the GraphQL query we created earlier
import { GET_BOOKS } from '../../graphql/queries';
import { Book } from './';

const Library = () => {
    const { loading, error, data } = useQuery(GET_BOOKS);
    if(loading)
      return <p>Loading...</p>;
    if(error) {
      return <p>Error fetching books</p>;
    }
    return (
      <div className="library-container">
        {
            data.bookCollection.items.map((book) => (
              <Book key={book.title} {...book} />
            ))
        }
      </div>
    )
};

export default Library;