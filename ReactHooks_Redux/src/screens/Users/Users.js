import React, {
    useEffect, 
    Fragment,
} from 'react';
import { 
    View, 
    Text, 
    FlatList, 
    Image, 
    ActivityIndicator, 
    Linking, 
    TouchableOpacity, 
    Platform,
} from 'react-native';
import { 
    useSelector, 
    useDispatch,
} from 'react-redux';
import Icon from 'react-native-vector-icons/Feather';

import { LOADUSERS, INIT, LOADFACES } from 'src/redux/actions/types';
import { fetchJSON, fetchUIFaces } from 'src/utils/API';
import Styles from './styles';

const Users = React.memo(() => {
    const data = useSelector(state => state.dataReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUsers = async () => {
            dispatch({ type: INIT });
            const getUsers = await fetchJSON.get('/users/');
            dispatch({ type: LOADUSERS, payload: getUsers.data });
        };
        const fetchAvatars = async () => {
            const getUIFaces = await fetchUIFaces.get('/');
            dispatch({ type: LOADFACES, payload: getUIFaces.data });
        };
        fetchUsers()
        .then(fetchAvatars());
    }, []);

    renderItem = ({item, index}) => {
        return (
            <Fragment>
                <View style={Styles.itemContainer}>
                    <Image source={{uri: data.uiFaces[index]['photo']}} style={Styles.avatar} />
                    <View style={Styles.stackWrapper}>
                        <Text style={Styles.userName}>{item.name}</Text>
                        <View style={Styles.itemWrapper}>
                            <Icon name="briefcase" size={12} />
                            <Text style={[Styles.userDetail, Styles.italic]}>{item['company'].name}</Text>
                        </View>
                        <View style={Styles.itemWrapper}>
                            <Icon name="phone" size={12} />
                            <Text style={Styles.userDetail}>Phone: {item.phone}</Text>
                        </View>
                        <View style={Styles.itemWrapper}>
                            <Icon name="mail" size={12} />
                            <Text style={Styles.userDetail}>Email: {item.email}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => initPhoneCall(item.phone)}
                    >
                        <Icon name="phone" color='#007aff' size={30} />
                    </TouchableOpacity>
                </View>
                <View style={Styles.divider} />
            </Fragment>
        );
    };

    initPhoneCall = number => {
        if (Platform.OS !== 'android') {
            return Linking.openURL(`telprompt:${number}`);
        }

        return Linking.openURL(`tel:${number}`);
    };

    return (
        <View style={Styles.container}>
            {data.isLoading ? (
                <ActivityIndicator
                    style={Styles.activityIndicator}
                    size={"large"}
                    color={"#007aff"}
                />
            ) : (
                <FlatList
                    data={data.users}
                    keyExtractor={this._keyExtractor}
                    renderItem={renderItem}
                    keyExtractor={item => item.id.toString()}
                />
            )}
        </View>
    );
});

export default Users;
