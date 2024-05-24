import {View , Text,  TouchableOpacity, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import ImageCrousal from './Image';
import { useRef, useState,useEffect } from 'react';

const Windowheight= Dimensions.get('window').height;
const WindowWidth =Dimensions.get('window').width;


const data = [
    "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://t4.ftcdn.net/jpg/03/17/72/47/360_F_317724775_qHtWjnT8YbRdFNIuq5PWsSYypRhOmalS.jpg",
    "https://t3.ftcdn.net/jpg/04/29/35/62/240_F_429356296_CVQ5LkC6Pl55kUNLqLisVKgTw9vjyif1.jpg",
    "https://t4.ftcdn.net/jpg/03/18/07/17/240_F_318071706_6YXAMsVDPmuTisfwcrdBnuOAOYyK5Uq1.jpg",
    "https://t4.ftcdn.net/jpg/02/86/09/83/240_F_286098390_D2J4jLbOkCzikuSXxQBh26IxhR7t4i28.jpg"
]



export default function Crousal() : JSX.Element{
    const [index , setCurrentIndex]= useState(0);
    const scrollViewRef = useRef();    


    const handelPress = (event) =>{
        const x_pos = event.nativeEvent.locationX;
        const fraction= x_pos/WindowWidth

        fraction<0.5? setCurrentIndex(Math.floor((index-1+data.length) % (data.length))): setCurrentIndex(Math.floor((index+1) % (data.length)))
    }

    // const handelScroll = (event) =>{
    //     const x = event.nativeEvent.contentOffset.x;
    //     // console.log(x);
    // }

    // useEffect(() => {
    // // @ts-ignore
    // //    scrollViewRef.current.scrollTo({x:WindowWidth*(index), y: 0,animated:true})
    // },[index])

    return(
      
        <TouchableOpacity style={[{zIndex:-1}]} onPress={handelPress} activeOpacity={1}>
        {/* // <ScrollView horizontal ref={scrollViewRef} onScroll ={handelScroll} > */}
            {/* {data.map((item,index) => (
                <ImageCrousal key={index} address={item}/>
            ))} */}
            <ImageCrousal key={index} address={data[index]} Currindex={index} totalImage={data.length} />
            
        {/* </ScrollView> */}
        </TouchableOpacity>

        
    
    )
}

const styles = StyleSheet.create({
    ImageDensions:{
        width: '50%', 
        height: Windowheight*0.40
    }
})