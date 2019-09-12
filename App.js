import React, {Component} from 'react';
import {Platform, 
		StyleSheet, 
		Text, 
		View,
		StatusBar} from 'react-native';
		

		import Login from './src/pages/Login';
		import Signup from './src/pages/Signup';
		import Categories from './src/pages/Categories';
		import Lunch from './src/pages/Lunch';
		import Scroll from './src/pages/Scroll';
				
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
	
	Login:Login,
	Signup:Signup,
	Categories:Categories,
	Lunch:Lunch,
	Scroll:Scroll,


	
	
}, {	
	
	defaultNavigationOptions:{
		headerStyle:{
			backgroundColor:'#455a64'
			},
			
			headerTintColor: 'white',
			
			headerTitleStyle: {
				fontSize:17,
				flex:1,
				
			}
		}
		
	}


);

const App = createAppContainer(AppNavigator);

export default App;