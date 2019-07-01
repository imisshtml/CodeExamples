import gql from 'graphql-tag';

const newReservation = gql`
    mutation newReservation($data:ReservationCreateInput!){
        createReservation(data: $data){
            id
        }
    }
`;

export default newReservation;