import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions, TouchableOpacity, Image } from 'react-native';
import { Image as ExpoImage } from 'expo';
import Ad from './Ad';

import * as data from './constants/data.json';
import Images from './constants/images';
import { Button } from 'react-native-elements';

const winHeight = Dimensions.get('window').height;
const winWidth = Dimensions.get('window').width;
const iconWidth = winWidth;
const iconHeight = iconWidth; 


const tableWidth = winWidth;
const tableHeight = tableWidth*.62; 

const cardWidth = winWidth*.2;
const cardHeight = cardWidth*1.4; 

const cardSelectWidth = winWidth*.12;
const cardSelectHeight = cardSelectWidth*1.4; 

const bttnOp = .1;

class TrainScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			table: 6, //6,9
			currView: 'stats', //cards, stats
			firstCard: 'clover_king',
			secondCard: 'clover_ace',
			hand: 'AA',
			pos: 'btn',
			tmpCard1: '',
			tmpCard2: '',

		}
	}

	changePos(pos) {
		this.setState({pos, tmpCard1: '', tmpCard2: ''});
	}

	renderBody() {
		//console.log('>'+data[this.state.hand][this.state.table]['win_per']);
		console.log('HAND: '+this.state.hand);
		if(this.state.currView === 'stats'){
			return(
				<View>
					<Ad />
					<Text style={{fontWeight: 'bold', padding:5, color: '#ffffff', fontSize: 16}}>Position & Probability</Text>
					<Text style={{color: '#ffffff', paddingLeft: 5}}>Select your seat position to get advice</Text>
					<View>
						<Image
							style={{width: tableWidth, height: tableHeight}}
							source={require('../assets/table_6_seats.png')}
						/>

						<Image
							style={{width: tableWidth, height: tableHeight, position: 'absolute', top: 0}}
							source={require('../assets/t6_b1.png')}
						/>

						<Image
							style={{width: tableWidth, height: tableHeight, position: 'absolute', top: 0}}
							source={Images['t6_'+this.state.pos]}
						/>

						<TouchableOpacity style={{position: 'absolute', top: tableHeight*.05, left:tableWidth*.296}}
							onPress={() => this.changePos('co')}>
							<View style={{alignContent:'center',justifyContent:'center',height:winWidth*.11, width: winWidth*.11, backgroundColor:'rgba(23, 96, 147, '+bttnOp+')'}}>
								<Text style={{width: winWidth*.11, textAlign:'center', color:'#fff', fontWeight: 'bold'}}></Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{position: 'absolute', top: tableHeight*.05, right:tableWidth*.296}}
							onPress={() => this.changePos('btn')}>
							<View style={{alignContent:'center',justifyContent:'center',height:winWidth*.11, width: winWidth*.11, backgroundColor:'rgba(23, 96, 147, '+bttnOp+')'}}>
								<Text style={{width: winWidth*.11, textAlign:'center', color:'#fff', fontWeight: 'bold'}}></Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{position: 'absolute', bottom: tableHeight*.05, left:tableWidth*.296}}
							onPress={() => this.changePos('utg')}>
							<View style={{alignContent:'center',justifyContent:'center',height:winWidth*.11, width: winWidth*.11, backgroundColor:'rgba(23, 96, 147, '+bttnOp+')'}}>
								<Text style={{width: winWidth*.11, textAlign:'center', color:'#fff', fontWeight: 'bold'}}></Text>
							</View>
						</TouchableOpacity>
						<TouchableOpacity style={{position: 'absolute', bottom: tableHeight*.05, right:tableWidth*.296}}
							onPress={() => this.changePos('bb')}>
							<View style={{alignContent:'center',justifyContent:'center',height:winWidth*.11, width: winWidth*.11, backgroundColor:'rgba(23, 96, 147, '+bttnOp+')'}}>
								<Text style={{width: winWidth*.11, textAlign:'center', color:'#fff', fontWeight: 'bold'}}></Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={{position: 'absolute', left: tableWidth*.035, top:tableHeight*.413}}
							onPress={() => this.changePos('mp1')}>
							<View style={{alignContent:'center',justifyContent:'center',height:winWidth*.11, width: winWidth*.11, backgroundColor:'rgba(23, 96, 147, '+bttnOp+')'}}>
								<Text style={{width: winWidth*.11, textAlign:'center', color:'#fff', fontWeight: 'bold'}}></Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity style={{position: 'absolute', right: tableWidth*.035, top:tableHeight*.413}}
							onPress={() => this.changePos('sb')}>
							<View style={{alignContent:'center',justifyContent:'center',height:winWidth*.11, width: winWidth*.11, backgroundColor:'rgba(23, 96, 147, '+bttnOp+')'}}>
								<Text style={{width: winWidth*.11, textAlign:'center', color:'#fff', fontWeight: 'bold'}}></Text>
							</View>
						</TouchableOpacity>
					</View>
					<View style={{flexDirection: 'row', alignContent: 'left', alignItems: 'left', justifyContent: 'left'}}>
						<TouchableOpacity style={{}}
							onPress={() => this.setState({currView: 'cards'})}>
							<Image source={Images[this.state.firstCard]} style={{width: cardWidth, height: cardHeight, margin: 5}} />
						</TouchableOpacity>
						<TouchableOpacity style={{}}
							onPress={() => this.setState({currView: 'cards'})}>
							<Image source={Images[this.state.secondCard]} style={{width: cardWidth, height: cardHeight, margin: 5}} />
						</TouchableOpacity>
						<View style={{alignContent: 'center', width: winWidth*.5}}>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 16}}>Best Hand</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 10}}>
								{data[this.state.hand][this.state.table]['win_per']}
							</Text>

							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 16}}>Position Play</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 18, fontWeight: 'bold'}}>
								{data[this.state.hand][this.state.table]['rec_'+this.state.pos]}
							</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 10}}>
								{data[this.state.hand][this.state.table]['dsc_'+this.state.pos]}
							</Text>
						</View>
					</View>
					<View>
						<Text style={{margin:5,color:'#ffffff', alignSelf: 'center', fontSize: 12, fontWeight: 'bold'}}>Odds based on Players left in pot</Text>
					</View>
					<View style={{flexDirection: 'row'}}>
						<View style={{width:winWidth*.2, alignContent: 'center'}}>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 10}}>Heads Up</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 12, fontWeight: 'bold'}}>
								{data[this.state.hand]['odds']['win_per_2']}
							</Text>
						</View>
						<View style={{width:winWidth*.2, alignContent: 'center'}}>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 10}}>3 Players</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 12, fontWeight: 'bold'}}>
								{data[this.state.hand]['odds']['win_per_3']}
							</Text>
						</View>
						<View style={{width:winWidth*.2, alignContent: 'center'}}>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 10}}>4 Players</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 12, fontWeight: 'bold'}}>
								{data[this.state.hand]['odds']['win_per_4']}
							</Text>
						</View>
						<View style={{width:winWidth*.2, alignContent: 'center'}}>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 10}}>5 Players</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 12, fontWeight: 'bold'}}>
								{data[this.state.hand]['odds']['win_per_5']}
							</Text>
						</View>
						<View style={{width:winWidth*.2, alignContent: 'center'}}>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 10}}>6 Players</Text>
							<Text style={{color:'#ffffff', alignSelf: 'center', fontSize: 12, fontWeight: 'bold'}}>
								{data[this.state.hand]['odds']['win_per_6']}
							</Text>
						</View>
					</View>
				</View>
			);
		}else if(this.state.currView === 'cards'){
			return(
				<View>
					<View style={{flexDirection: 'row'}}>
						<Text style={{fontWeight: 'bold', padding:5, color: '#ffffff', fontSize: 16}}>Select your starting hand</Text>
						
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around', marginBottom: 5}}>
						{this.renderCard('clover_ace')}
						{this.renderCard('clover_king')}
						{this.renderCard('clover_queen')}
						{this.renderCard('clover_jack')}
						{this.renderCard('clover_10')}
						{this.renderCard('clover_9')}
						{this.renderCard('clover_8')}
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around',marginBottom: 5}}>
						{this.renderCard('clover_7')}
						{this.renderCard('clover_6')}
						{this.renderCard('clover_5')}
						{this.renderCard('clover_4')}
						{this.renderCard('clover_3')}
						{this.renderCard('clover_2')}
						<Image source={Images['blank']} style={{width: cardSelectWidth, height: cardSelectHeight}} />
					</View>
					
					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around', marginBottom: 5}}>
						{this.renderCard('heart_ace')}
						{this.renderCard('heart_king')}
						{this.renderCard('heart_queen')}
						{this.renderCard('heart_jack')}
						{this.renderCard('heart_10')}
						{this.renderCard('heart_9')}
						{this.renderCard('heart_8')}
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around',marginBottom: 5}}>
						{this.renderCard('heart_7')}
						{this.renderCard('heart_6')}
						{this.renderCard('heart_5')}
						{this.renderCard('heart_4')}
						{this.renderCard('heart_3')}
						{this.renderCard('heart_2')}
						<Image source={Images['blank']} style={{width: cardSelectWidth, height: cardSelectHeight}} />
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around', marginBottom: 5}}>
						{this.renderCard('spade_ace')}
						{this.renderCard('spade_king')}
						{this.renderCard('spade_queen')}
						{this.renderCard('spade_jack')}
						{this.renderCard('spade_10')}
						{this.renderCard('spade_9')}
						{this.renderCard('spade_8')}
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around',marginBottom: 5}}>
						{this.renderCard('spade_7')}
						{this.renderCard('spade_6')}
						{this.renderCard('spade_5')}
						{this.renderCard('spade_4')}
						{this.renderCard('spade_3')}
						{this.renderCard('spade_2')}
						<Image source={Images['blank']} style={{width: cardSelectWidth, height: cardSelectHeight}} />
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around', marginBottom: 5}}>
						{this.renderCard('diamond_ace')}
						{this.renderCard('diamond_king')}
						{this.renderCard('diamond_queen')}
						{this.renderCard('diamond_jack')}
						{this.renderCard('diamond_10')}
						{this.renderCard('diamond_9')}
						{this.renderCard('diamond_8')}
					</View>

					<View style={{flexDirection: 'row', alignContent: 'space-between', alignItems: 'center', justifyContent: 'space-around',marginBottom: 5}}>
						{this.renderCard('diamond_7')}
						{this.renderCard('diamond_6')}
						{this.renderCard('diamond_5')}
						{this.renderCard('diamond_4')}
						{this.renderCard('diamond_3')}
						{this.renderCard('diamond_2')}
						<Image source={Images['blank']} style={{width: cardSelectWidth, height: cardSelectHeight}} />
					</View>
					
				</View>
			);
		}
	}

	renderCard(card){
		if(this.state.tmpCard1 === card || this.state.tmpCard2 === card){
			return(
				<TouchableOpacity style={{borderColor:'lime', borderWidth: 0, borderRadius: 5}}
					onPress={() => this.selectCard(card)}>
					<Image source={Images[card]} style={{opacity: 0.3, width: cardSelectWidth, height: cardSelectHeight}} />
				</TouchableOpacity>
			);
		}else{
			return(
				<TouchableOpacity style={{}}
					onPress={() => this.selectCard(card)}>
					<Image source={Images[card]} style={{width: cardSelectWidth, height: cardSelectHeight}} />
				</TouchableOpacity>
			);
		}
	}

	selectCard(card){
		if(this.state.tmpCard1 === card){
			this.setState({tmpCard1: ''});
		}else if(this.state.tmpCard2 === card){
			this.setState({tmpCard2: ''});
		}else if(this.state.tmpCard1 === ''){
			this.setState({tmpCard1: card});
		}else if(this.state.tmpCard2 === ''){
			tmp1 = this.state.tmpCard1.split('_');
			tmp2 = card.split('_');
			pst = '';
			if(tmp1[1] === tmp2[1]){
				pst = '';
			}else if(tmp1[0] === tmp2[0]){
				pst = 's';
			}else{
				pst = 'o';
			}
			h1 = '';
			h2 = '';
			if(tmp1[1] === 'ace'){h1 = 'A'}
			else if(tmp1[1] === 'king'){h1 = 'K'}
			else if(tmp1[1] === 'queen'){h1 = 'Q'}
			else if(tmp1[1] === 'jack'){h1 = 'J'}
			else if(tmp1[1] === '10'){h1 = 'T'}
			else {h1 = tmp1[1]}
			if(tmp2[1] === 'ace'){h2 = 'A'}
			else if(tmp2[1] === 'king'){h2 = 'K'}
			else if(tmp2[1] === 'queen'){h2 = 'Q'}
			else if(tmp2[1] === 'jack'){h2 = 'J'}
			else if(tmp2[1] === '10'){h2 = 'T'}
			else {h2 = tmp2[1]}

			if(h1 === 'K' && h2 === 'A'){h1='A';h2='K'}
			else if(h1 === 'Q' && (h2 === 'A' || h2 === 'K')){h1=h2;h2='Q'}
			else if(h1 === 'J' && (h2 === 'A' || h2 === 'K' || h2 === 'Q')){h1=h2;h2='J'}
			else if(h1 === 'T' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J')){h1=h2;h2='T'}
			else if(h1 === '9' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T')){h1=h2;h2='9'}
			else if(h1 === '8' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9')){h1=h2;h2='8'}
			else if(h1 === '7' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9'|| h2 === '8')){h1=h2;h2='7'}
			else if(h1 === '6' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9'|| h2 === '8' || h2 === '7')){h1=h2;h2='6'}
			else if(h1 === '5' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9'|| h2 === '8' || h2 === '7' || h2 === '6')){h1=h2;h2='5'}
			else if(h1 === '4' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9'|| h2 === '8' || h2 === '7' || h2 === '6' || h2 === '5')){h1=h2;h2='4'}
			else if(h1 === '3' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9'|| h2 === '8' || h2 === '7' || h2 === '6' || h2 === '5' || h2 === '4')){h1=h2;h2='3'}
			else if(h1 === '2' && (h2 === 'A' || h2 === 'K' || h2 === 'Q' || h2 === 'J' || h2 === 'T' || h2 === '9'|| h2 === '8' || h2 === '7' || h2 === '6' || h2 === '5' || h2 === '4' || h2 === '3')){h1=h2;h2='2'}

			tmpHand = h1+''+h2+''+pst;
			this.setState({hand: tmpHand, tmpCard2: '', tmpCard1: '', firstCard: this.state.tmpCard1, secondCard: card, currView: 'stats'});
		}	
	}

    render() {
		return (
			<ImageBackground
                style={{width: '100%', height: '100%', backgroundColor: '#231f20'}}
                source={require('../assets/bg_hearts.png')} 
            >
				{this.renderBody()}
			</ImageBackground>
		);
	}
}

export default TrainScreen;