import React, { Component } from 'react'; 
import {StyleSheet, AppRegistry, ScrollView, Image, Text,Alert,View,TouchableOpacity} from 'react-native';
import { WebView } from 'react-native-webview';


export default class Ini extends Component{

	constructor(props){

		super(props)

		this.state={

			view:'ini',

			'secciones':{
				'ini':{src:"https:\//www.visitezitalie.fr/"},
				'boton1':{src:'https:\//www.visitezitalie.fr/'},
				'boton2':{src:'https:\//www.visitezitalie.fr/add-listing/'},
				'boton3':{src:'https:\//www.visitezitalie.fr/contact/'},


			}
		}

		
	}

	render(){

		console.log(this.state.secciones[this.state.view].src)

		return(

			<View style={{width:'100%',height:'100%',padding:0,margin:0}}>
				<WebView source={{ uri: this.state.secciones[this.state.view].src }} style={{ marginTop: 20, width:'100%',height:'90%' }} />

				<View style={{ width:'100%',height:'10%',backgroundColor:'white',display:'flex',justifyContent:'center',flexDirection:'row'}}>

					<TouchableOpacity  style={{width:'33%',height:'100%'}}
						onPress={

							()=>{

								this.state.view="boton1";

								this.forceUpdate()

							}
						}

					>
                      <View style={{display:'flex',justifyContent:'center',alignItems:'center', width:'100%', color:'white',height:'100%',borderStyle:'solid',borderColor:'white',borderWidth:3,backgroundColor:'black'}}>

                      	<Text style ={{color:'white'}}>Boton1</Text>
                       
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'33%',height:'100%'}}

                    	onPress={

							()=>{

								this.state.view="boton2";

								this.forceUpdate()
								
							}
						}

                    >

                    	<View style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'white',backgroundColor:'black',height:'100%',borderStyle:'solid',borderColor:'white',borderWidth:3,backgroundColor:'black'}}>
                       		<Text style ={{color:'white'}}>Boton2</Text>
                      	</View>
                     
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'33%',height:'100%'}}

                    	onPress={

							()=>{

								this.state.view="boton3";

								this.forceUpdate()
								
							}
						}

                    >

                    	<View style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'white',height:'100%',borderStyle:'solid',borderColor:'white',borderWidth:3,backgroundColor:'black'}}>
                       		<Text style ={{color:'white'}}>Boton3</Text>
                      	</View>
                     
                    </TouchableOpacity>
				</View>

			</View>
			
		)

	}


}