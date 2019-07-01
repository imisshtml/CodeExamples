import React from 'react';
import { Fab, Icon } from 'native-base';
import Styles from './style';

const BackButton = props => {
    return ( 
        <Fab
            style={Styles.whiteBackground}
            onPress={() => props.navigation.navigate('Reservations')}
        >
            <Icon name="chevron-left" type="FontAwesome5" style={Styles.buttonIcon} />
        </Fab>
    );
};

export default BackButton;