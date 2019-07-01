import gql from 'graphql-tag';

const reservationsQuery = gql `
    query reservationsQuery {
        reservations{
            id
            name
            hotelName
            arrivalDate
            departureDate
        }
    }
`;

export default reservationsQuery;