import React from 'react';
import { View, Text, Image} from 'react-native';
import { Button } from 'native-base';

var myBackgroud = require('../assets/landing.jpg');

class Landing extends React.Component{
	render(){
		return(
			<View style={{flex: 1}}>
				<Image source={myBackgroud} style={{position: 'absolute'}}/>
			  		<View style={styles.viewStyles}>
			    		<Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
					    <Button
					      block={true}
					      style={styles.buttonStyles}
					      onPress={() => this.props.switchScreen("search")}
					    >
					      <Text style={styles.buttonText}>Start Searching</Text>
					    </Button>
				  </View>
			</View>

		)
	}
}

const styles = {
  viewStyles:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle:{
    fontSize: 30,
    color: 'blue',
    alignItems: 'center'
  },
  buttonStyles:{
    margin: 10
  },
  buttonText: {
    color: 'white'
  }
}


export default Landing;