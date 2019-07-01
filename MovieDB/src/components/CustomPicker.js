import React, { PureComponent } from "react";
import { Text, View, TouchableOpacity, Platform, Picker, ActionSheetIOS, Image } from 'react-native';
import { connect } from 'react-redux';
import Styles from '../constants/style';
import { changeView } from '../redux/actions';

class CustomPicker extends PureComponent {
    showActionSheet = () => {
        ActionSheetIOS.showActionSheetWithOptions({
            options: ['Now Playing', 'Popular', 'Top Rated', 'Coming Soon', 'Cancel'],
            cancelButtonIndex: 5,
        },
        (buttonIndex) => {
            this.checkData(buttonIndex);
        });
    };

    checkData(selection) {
        if(selection === 0 && this.props.viewState !== 'now_playing'){
            this.props.changeView('now_playing');
        }else if(selection === 1 && this.props.viewState !== 'popular'){
            if(this.props.popular.length == 0){
                this.props.loadMore('popular');
            }else{
                this.props.changeView('popular');
            }
        }else if(selection === 2 && this.props.viewState !== 'top_rated'){
            if(this.props.topRated.length == 0){
                this.props.loadMore('top_rated');
            }else{
                this.props.changeView('top_rated');
            }
        }else if(selection === 3 && this.props.viewState !== 'coming_soon'){
            if(this.props.comingSoon.length == 0){
                this.props.loadMore('coming_soon');
            }else{
                this.props.changeView('coming_soon');
            }
        }
    }

    viewLabel = () => {
        return this.props.viewState.replace('_', ' ').toUpperCase();
    }

    render() {
        if(this.props.viewState === 'search_results'){
            return null;
        }else{
            if(Platform.OS === 'ios'){
                return (
                    <TouchableOpacity
                        onPress={this.showActionSheet}
                    >
                        <View style={Styles.customPickerWrapper}>
                            <Text style={Styles.customPickerLabel}>{this.viewLabel()}</Text>
                            <Image 
                                source={require('../../assets/dropdown_icon.png')}
                                style={Styles.customPickerIcon}
                            />
                        </View>
                    </TouchableOpacity>
                );
            }else{
                return (
                    <Picker
                        selectedValue={this.props.viewState}
                        style={Styles.maxWidth}
                        onValueChange={(itemValue, itemIndex) =>
                            this.checkData(itemIndex)
                        }>
                        <Picker.Item label="Now Playing" value="now_playing" />
                        <Picker.Item label="Popular" value="popular" />
                        <Picker.Item label="Top Rated" value="top_rated" />
                        <Picker.Item label="Coming Soon" value="coming_soon" />
                    </Picker>
                )
            }
        }
    }
};

const mapStateToProps = state => ({
    viewState: state.movieReducer.viewState,
    popular: state.movieReducer.popular,
    topRated: state.movieReducer.topRated,
    comingSoon: state.movieReducer.comingSoon,
});

const mapDispatchToProps = (dispatch) => ({
    changeView: view => dispatch(changeView(view)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CustomPicker);