//@flow
import React, { Component } from 'react';
import { Text } from 'react-native';
import { Form, Label, Item, Input, DatePicker, Button, Toast } from 'native-base';
import Styles from './style';

type Props = {
    onSubmit: Function
}

type State = {
    name: string,
    hotelName: string,
    arrivalDate: string,
    departureDate: string
}

export default class ReservationForm extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            name: "",
            hotelName: "",
            arrivalDate: "",
            departureDate: "",
        }
    }

    submitForm = () => {
        const { name, hotelName, arrivalDate, departureDate } = this.state;
        if (name != "" && hotelName != "" && arrivalDate != "" && departureDate != "") {
            this.props.onSubmit({
                name: this.state.name,
                hotelName: this.state.hotelName,
                arrivalDate: this.state.arrivalDate,
                departureDate: this.state.departureDate
            })
        } else {
            Toast.show({
                text: 'Please Fill Out All Fields',
                buttonText: 'Okay',
                duration: 3000,
                type: "danger",
            });
        }
    }

    setArrival = (newDate: String) => {
        this.setState({ arrivalDate: String(newDate) });
    }

    setDeparture = (newDate: String) => {
        this.setState({ departureDate: String(newDate) });
    }

    render() {
        let customDateFormatter = date => [
            date.getMonth() + 1,
            date.getDate(),
            date.getFullYear(),
            ].join('-');

        let tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);

        return (
            <Form style={Styles.fullWidth}>
                <Item floatingLabel>
                    <Label>
                        Guest Name
                    </Label>
                    <Input
                        onChangeText={text => this.setState({ name: text })}
                        value={this.state.name}
                    />
                </Item>

                <Item floatingLabel>
                    <Label>
                        Hotel Name
                    </Label>
                    <Input
                        onChangeText={text => this.setState({ hotelName: text })}
                        value={this.state.hotelName}
                    />
                </Item>

                <Item style={Styles.pushUp}>
                    <Label>
                        Arrival:
                    </Label>
                    <DatePicker
                    defaultDate={new Date()}
                    minimumDate={new Date()}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select Date"
                    textStyle={Styles.black}
                    placeHolderTextStyle={Styles.secondary}
                    onDateChange={this.setArrival}
                    disabled={false}
                    formatChosenDate={customDateFormatter}
                />
                </Item>

                <Item style={Styles.pushUp}>
                    <Label>
                        Departure:
                    </Label>
                    <DatePicker
                    defaultDate={tomorrow}
                    minimumDate={tomorrow}
                    locale={"en"}
                    timeZoneOffsetInMinutes={undefined}
                    modalTransparent={false}
                    animationType={"fade"}
                    androidMode={"default"}
                    placeHolderText="Select Date"
                    textStyle={Styles.black}
                    placeHolderTextStyle={Styles.secondary}
                    onDateChange={this.setDeparture}
                    disabled={false}
                    formatChosenDate={customDateFormatter}
                />
                </Item>
                <Button block large
                    onPress={this.submitForm}
                    style={Styles.button}
                >
                    <Text style={Styles.buttonText}>Save Reservation</Text>
                </Button>
            </Form>
        )
    }
}