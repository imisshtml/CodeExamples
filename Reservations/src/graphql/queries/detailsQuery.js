import gql from 'graphql-tag';

const detailsQuery = gql`
    query Reservation($where:ReservationWhereUniqueInput!){
        reservation(where: $where){
            id
            name
            hotelName
            arrivalDate
            departureDate
        }
    }
`;

export default detailsQuery;