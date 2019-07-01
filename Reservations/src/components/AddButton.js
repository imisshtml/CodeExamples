import React from 'react';
import { Fab, Icon } from 'native-base';
import Styles from './style';

const AddButton = props => {
    return ( 
        <Fab
            style={Styles.primaryBackground}
            onPress={() => props.navigation.navigate('Create')}
        >
            <Icon name="plus" type="FontAwesome5" />
        </Fab>
    );
};

export default AddButton;