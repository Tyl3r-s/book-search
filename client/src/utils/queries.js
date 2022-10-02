// importing graphQL from Apollo
import { gql } from '@apollo/client';

//query to GET_ME when using the saveBooks functions
export const GET_ME = gql`
  {
    me {
        _id
        username
        email
        bookCount 
        savedBooks {
            bookId
            authors
            description
            title
            image
            link
        }
    }
  }
`;