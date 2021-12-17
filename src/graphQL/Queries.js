import { gql } from '@apollo/client';

const GET_CHARACTERS = gql`

query Root($first: Int, $after: String) {
  allPeople(first: $first, after: $after ) {
    people {
      name
      eyeColor
      hairColor
      skinColor
      birthYear
      homeworld {
        name
      }
      species {
        name
      }
      vehicleConnection {
        vehicles {
          name
        }
      }
    }
    pageInfo {
      endCursor
    } 
  }
}

`;

export default GET_CHARACTERS;
