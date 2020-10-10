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

				<View style={{ width:'100%',height:'10%',backgroundColor:'rgba(52, 52, 52, alpha)',display:'flex',justifyContent:'center',flexDirection:'row'}}>

					<TouchableOpacity  style={{width:'33%',height:'100%'}}
						onPress={

							()=>{

								this.state.view="boton1";

								this.forceUpdate()

							}
						}

					>
                      <View style={{display:'flex',justifyContent:'center',alignItems:'center', width:'100%', color:'white',height:'100%',opacity:1}}>

                      	<Image source={require('./assets/accueil.png')} style={{width:50,height:50}}>

                      
                       
                      	</Image>
                       
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

                    	<View style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',height:'100%',color:'white',backgroundColor:'white'}}>
                       		<Image source={require('./assets/adherer.png')} style={{width:50,height:50}}>

                      
                       
                      		</Image>
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

                    	<View style={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',color:'white',height:'100%',backgroundColor:'white'}}>
                       		<Image source={require('./assets/Contact.png')} style={{width:50,height:50}}>

                      
                       
                      		</Image>
                      	</View>
                     
                    </TouchableOpacity>
				</View>

			</View>
			
		)

	}


}