//@flow
import React, { PureComponent } from 'react';
import { View, SafeAreaView, ActivityIndicator } from 'react-native';
import { Toast } from 'native-base';
import { graphql } from 'react-apollo';

import Background from 'src/components/Background';
import BackButton from 'src/components/BackButton';
import ReservationForm from 'src/components/ReservationForm';
import Styles from './style';
import newReservation from 'src/graphql/mutations/newReservation';

type Props ={
    newReservation: any,
    navigation: any
};

type State = {
    loading: boolean
};

class CreateScreen extends PureComponent<Props, State> { 
    state = {
        loading: false
    };
    
    newReservation = ({ name, hotelName, arrivalDate, departureDate }) => {
        this.setState({ loading: true });
        const { newReservation, navigation } = this.props;
        newReservation({
            variables: {
                data:{
                    name,
                    hotelName,
                    arrivalDate,
                    departureDate
                }
            }
        })
        .then(() => {
            navigation.goBack();
            Toast.show({
                text: 'Reservation Created',
                buttonText: 'Okay',
                duration: 3000,
                type: "success",
            });
        })
        .catch(error => {
            console.error(error);
        });
    };

    render(){
        return (
            <Background>
                <SafeAreaView>
                    <View style={Styles.container}>
                        {this.state.loading ? (
                            <ActivityIndicator size="large" />
                        ) : (
                            <ReservationForm onSubmit={this.newReservation} />
                        )}
                    </View>
                    <BackButton navigation={this.props.navigation}/>
                </SafeAreaView>
            </Background>
        );
    };
};

export default graphql(newReservation, {
    name: "newReservation",
    options: {
        refetchQueries: ["reservationsQuery"]
    }
})(CreateScreen);