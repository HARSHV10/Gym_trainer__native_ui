import {View , Text, StyleSheet} from 'react-native';
import Icon from '@/components/Icon'
import { GlobalStyle } from '@/constants/GlobalStyling';
export default function Review(){
    return (
        <View style={styles.container}>
            <Text style={GlobalStyle.heading}>Reviews</Text>

            <View style={{flex:1 , flexDirection:'row',paddingTop:20 ,alignItems:'center'}}>
                <Text style={[styles.subHeading ,{fontWeight:400}]}>4.9</Text>
                <View style={[{paddingHorizontal:7}]}>
                <Icon name="star" size={15} color="black" solid={true}/>
                </View>
                <Text style={[styles.subHeading]}>(100+)</Text>
            </View>

            <Text style={{textDecorationLine:'underline', paddingTop:20,fontSize:17, fontWeight:500 }}>See all reviews</Text>

        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        marginVertical:7,
        padding:20,
        flex:1,
        backgroundColor:'white'
    },
    subHeading:{
        fontWeight:400,
        fontSize:24
    },
}) 