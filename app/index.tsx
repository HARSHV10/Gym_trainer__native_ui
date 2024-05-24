import { Text, View,SafeAreaView, ScrollView, useColorScheme,StyleSheet } from "react-native";
import Header from '@/components/Header/Header';
import Crousal from "@/components/Crousal/Crousal";
import InformationPage from "@/components/InformationPage/InformationPage";
import Review from "@/components/Review/Review";
import CancellationPolicy from "@/components/CancelationPolicy/CancelationPolicy";
import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { toastConfig } from "@/constants/ToastConfig";



export default function Index() {

  return (
    
    <SafeAreaView style={style.container}>   
    <Header/>
    <ScrollView contentContainerStyle={{paddingTop: 60, paddingBottom:70 }} >
      <Crousal/>
      <InformationPage/>
      <Review/>
      <CancellationPolicy/>
      <About/>
      </ScrollView>
      <Toast config={toastConfig} />
      <Footer/>
    </SafeAreaView>
  );
}

const style= StyleSheet.create({
  container:{
    flex: 1 ,
    backgroundColor:'#EEEEEE'

  },
  toast: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    zIndex: 1000
  }
})
