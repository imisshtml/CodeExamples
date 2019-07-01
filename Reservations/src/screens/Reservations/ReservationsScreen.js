//@flow
import React, { Component } from 'react';
import { View, SafeAreaView, FlatList, ActivityIndicator, Text, TouchableOpacity } from 'react-native';
import { Body, List, ListItem, Right, Icon, Container, Header, Item, Input } from 'native-base';
import { graphql } from 'react-apollo';

import Background from 'src/components/Background';
import AddButton from 'src/components/AddButton';
import Styles from './style';
import reservationsQuery from 'src/graphql/queries/reservationsQuery';

type Props = {
    loading: boolean,
    navigation: any,
    reservations: any,
    filter: any,
};

type State = {
    search: string,
    data: any
};

class ReservationsScreen extends Component<Props, State> {
    state = {
        search:'',
        data: []
    };

    parseData = () => {
        if(this.state.data.length > 0){
            return this.state.data;
        }
        return this.props.reservations;
    };

    renderHeader = () => {  
        return (      
        <Container style={Styles.searchbar}>
            <Header searchBar rounded>
              <Item>
                <Icon name="ios-search" />
                <Input placeholder="Search Reservations" 
                    onChangeText={text => this.searchFilterFunction(text)}
                    value={this.state.search}
                />
                <TouchableOpacity onPress={() => this.clearSearch()}>
                    <Icon name="times" type="FontAwesome5" />
                </TouchableOpacity>
              </Item>
            </Header>
          </Container>  
        );  
    };

    clearSearch() {
        this.setState({data:[], search:''});
    }; 

    searchFilterFunction = text => {    
        const newData = this.props.reservations.filter(item => {      
            const itemData = `${item.name.toUpperCase()} ${item.hotelName.toUpperCase()} 
                        ${item.arrivalDate.toUpperCase()} ${item.departureDate.toUpperCase()}`;
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;    
        });
        
        this.setState({ data: newData, search: text });  
    };

    render(){
        const { navigation, loading } = this.props;
        if(loading){ 
            return (
                <Background>
                    <SafeAreaView>
                        <View style={Styles.container}>
                                <ActivityIndicator size="large" />
                        </View>
                    </SafeAreaView>
                </Background>
            );
        };
        return (
            <Background>
                <SafeAreaView>
                    <View style={Styles.listContainer}>
                        <List style={Styles.fullWidth}>
                            <FlatList 
                                data={this.parseData()}
                                ListHeaderComponent={this.renderHeader} 
                                keyExtractor={item => item.id}
                                renderItem={({item}) => (
                                    <ListItem 
                                        onPress={() => navigation.navigate('Details', {
                                            id: item.id,
                                            name: item.name
                                        })}
                                    >
                                        <Body style={Styles.subtle}>
                                            <Text style={Styles.boldFont}>{item.name}</Text>
                                            <Text>{item.hotelName}</Text>
                                            <Text style={Styles.subFont}>
                                                {new Date(item.arrivalDate).toString().substr(4, 12)} - {new Date(item.departureDate).toString().substr(4, 12)}
                                            </Text>
                                        </Body>
                                        <Right>
                                           <Icon name="arrow-forward" style={Styles.subtle} />
                                        </Right>
                                    </ListItem>
                                )}
                            />
                        </List>
                    </View>
                    <AddButton navigation={navigation} />
                </SafeAreaView>
            </Background>
        );
    };
};

export default graphql(reservationsQuery, {
    props: ({data}) => ({...data})
})(ReservationsScreen);