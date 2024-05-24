import {View, Text, StyleSheet, BackHandler, TouchableOpacity} from 'react-native';
import Icon from "@/components/Icon";
import Review from '@/components/Review'
import { GlobalStyle } from '@/constants/GlobalStyling';

export default function InformationPage():JSX.Element{
      

    return(
        <View style={[styles.container]}>
            <Text style={[styles.headingText]}>HIIT Bootcamp VondelPark</Text>
            <View style={{flex:1 , flexDirection:'row' ,alignItems:'center'}}>
                <Text style={[styles.subHeading ,{fontWeight:700}]}>4.9</Text>
                <View style={[{paddingHorizontal:7}]}>
                <Icon name="star" size={15} color="black" solid={true}/>
                </View>
                <Text style={[styles.subHeading]}>(100+)</Text>
                <Text style={[styles.subHeading,{fontWeight:'500',paddingHorizontal:10}]}>Excellent</Text>
            </View>
            <View style={styles.hidden}></View>
            <Text style={[{fontSize:17, fontWeight:300}]}>Strength Training, Outdoors</Text>

            <Text style={[styles.date]} >Sun,May 19 . 9:00 AM - 9:45 AM</Text>
            <View style={styles.hidden}></View>
            <View style={[styles.subContainer]}>
            <Icon name="info-circle" size={20} />
            <Text style={[{paddingLeft:5, fontSize:15, fontWeight:500}]}>Not at the partner's usual location.</Text>
            </View>
            <View style={[styles.subContainer , {width:'100%' , justifyContent:'space-between' }]}>
                <TouchableOpacity style={[styles.actionButton]}>
                   
                        <Icon name="user-plus" size={24} />
                        <Text style={{paddingHorizontal:5, fontSize:15}}>Invite</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.actionButton ]}>
                <Icon name="calendar" size={24} />
                <Text style={{paddingHorizontal:5, fontSize:15}}>Add</Text>
                </TouchableOpacity>
            </View>
            <View>
                
            <Text style={{fontSize:15 ,
        marginTop:15,
        color:'rgba(0,0,0,0.3)',
        fontWeight:400}}>
                OutDoor BootCamp : BodyWeight, Band Work & Beats.
            </Text>
            </View>
        <Text style={{paddingTop:15, fontSize:17, textDecorationLine:'underline', fontWeight:'bold'}}>Read more</Text>


        </View>
    )
}

const styles = StyleSheet.create({

    container:{
        flex:1,
        width:'100%',
        justifyContent:'center',
        alignItems:'flex-start',
        padding:20,
        backgroundColor:'white',
        
      },  
    subContainer:{
        flex:1 ,
        flexDirection:'row',
        paddingTop:10, 
    },

    headingText:{
        fontSize:30,
        fontWeight:'bold',
        // marginBottom:20,
    },
    subHeading:{
        fontSize:17
    },
    hidden:{
        width:'45%',
        height:30,
        marginTop:7,
        marginBottom:5,
        borderColor:'black',
        borderWidth:4
    },
    date:{
        fontSize:19 ,
        marginTop:20,
        fontWeight:400
    },
    actionButton:{
        flex:1,
        flexDirection:'row',
        alignContent:'center',
        margin:5,
        paddingHorizontal:10,
        paddingVertical:10,
        width:'100%' ,
        borderRadius:10,
        borderColor:'rgba(0,0,0,0.1)',
        borderWidth:2,
        alignItems:'center',
        justifyContent:'center'
    }

})