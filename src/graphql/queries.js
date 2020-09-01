import { gql } from 'apollo-boost';

export const GET_BOOKS = gql`{
    bookCollection{
        items {
            title
            author
            image { 
                title
                url
            }
            description
        }
    }
}`;