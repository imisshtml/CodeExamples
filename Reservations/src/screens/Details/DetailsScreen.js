//@flow
import React, { PureComponent } from 'react';
import { View, SafeAreaView, ActivityIndicator, Text } from 'react-native';
import { List, ListItem, Body, Left, Icon } from 'native-base';
import { graphql } from 'react-apollo';

import Background from 'src/components/Background';
import BackButton from 'src/components/BackButton';
import Styles from './style';
import detailsQuery from 'src/graphql/queries/detailsQuery';

type Props ={
    loading: string,
    navigation: any,
    reservation: any
};

class DetailsScreen extends PureComponent<Props> {
    render() {
        const { loading, reservation, navigation } = this.props;
        if (loading) {
            return (
                <Background>
                    <SafeAreaView>
                        <View style={Styles.container}>
                            <ActivityIndicator size="large" />
                        </View>
                    </SafeAreaView>
                </Background>
            );
        }
        return (
            <Background>
                <SafeAreaView>
                    <View style={Styles.tallContainer}>
                        <List style={Styles.fullWidth}>
                            <ListItem icon>
                                <Left>
                                    <Icon name="person" style={Styles.subtle} />
                                </Left>
                                <Body>
                                    <Text style={Styles.boldFont}>{reservation.name}</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="hotel" type="FontAwesome5" style={[Styles.subtle, Styles.mediumFont]} />
                                </Left>
                                <Body>
                                    <Text style={Styles.boldFont}>{reservation.hotelName}</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="calendar-plus" type="FontAwesome5" style={Styles.subtle} />
                                </Left>
                                <Body>
                                    <Text style={Styles.boldFont}>{new Date(reservation.arrivalDate).toString().substr(4, 12)}</Text>
                                </Body>
                            </ListItem>

                            <ListItem icon>
                                <Left>
                                    <Icon name="calendar-minus" type="FontAwesome5" style={Styles.subtle} />
                                </Left>
                                <Body>
                                    <Text style={Styles.boldFont}>{new Date(reservation.departureDate).toString().substr(4, 12)}</Text>
                                </Body>
                            </ListItem>
                        </List>
                        <BackButton navigation={navigation} />
                    </View>
                </SafeAreaView>
            </Background>
        );
    }
};

export default graphql(detailsQuery, {
    props: ({ data }) => ({ ...data }),
    options: ({ navigation }) => ({
        variables: {
            where: {
                id: navigation.state.params.id
            }
        }
    })
})(DetailsScreen);