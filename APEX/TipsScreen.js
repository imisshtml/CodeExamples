import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Dimensions, ScrollView, AsyncStorage } from 'react-native';
import Ad from './Ad';
import * as data from './constants/tips.json';
import Tips from './Tips';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;

class TipsScreen extends Component {
	renderTip(item){
		return(
			<View key={item.id} style={{ backgroundColor:'rgba(0,0,0, .5)', width:'100%', marginBottom:10, 
									shadowColor:'#000000', shadowOffset:{ width: 0, height: 2 }, shadowOpacity:.5, 
									flexDirection: 'row',shadowRadius:2,}}>
				<View style={{width:'100%'}}>
					<View style={{flexDirection: 'row', paddingLeft: 5, marginBottom: 5, marginTop:5}}>
						<View>
							<Text style={{color:'#fff', fontSize:12, fontWeight: 'bold', padding:5}}>{item.title}</Text>
							<View style={{flexDirection: 'row', padding:5, paddingTop:0}}>
								<Text style={{color:'#fff', fontSize:10}}>LEGENDS </Text>
								<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}>{item.legends}</Text>
							</View>
							<Text style={{color:'#fff', fontSize:12, padding:5, paddingTop:0}}>{item.desc}</Text>
						</View>
					</View>
				</View>
			</View>
		);
	}


    render() {
		return (
			<ImageBackground
                style={{width: '100%', height: '100%', backgroundColor: '#231f20'}}
                source={require('../assets/bg_red.jpg')} 
            >
				<Ad />
				<View>
						<ScrollView style={{}}>
							<Image
									style={{width: winWidth, height: winWidth*.31, marginBottom: 5}}
									source={require('../assets/protips_banner.jpg')} 
							/>
							<Tips 
								data={data.TIPS}
								renderTip={this.renderTip.bind(this)}
							/>
							<View style={{ backgroundColor:'rgba(0,0,0, .5)', width:'100%', marginBottom:10, 
									shadowColor:'#000000', shadowOffset:{ width: 0, height: 2 }, shadowOpacity:.5, 
									flexDirection: 'row',shadowRadius:2,}}>
								<View style={{width:'100%'}}>
									<View style={{flexDirection: 'row', paddingLeft: 5, marginBottom: 5, marginTop:5}}>
										<View>
											<Text style={{color:'#fff', fontSize:12, fontWeight: 'bold', padding:5}}></Text>
											<View style={{flexDirection: 'row', padding:5, paddingTop:0}}>
												<Text style={{color:'#fff', fontSize:10}}> </Text>
												<Text style={{color:'#fff', fontSize:10, fontWeight:'bold'}}></Text>
											</View>
											<Text style={{color:'#fff', fontSize:12, padding:5, paddingTop:0}}></Text>
										</View>
									</View>
								</View>
							</View>
						</ScrollView>

				</View>
			</ImageBackground>
		);
	}
}

export default TipsScreen;