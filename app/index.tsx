import { Text, View,SafeAreaView, ScrollView, useColorScheme,StyleSheet } from "react-native";
import Header from '@/components/Header';
import Crousal from "@/components/Crousal";
import InformationPage from "@/components/InformationPage";
import Review from "@/components/Review";
import CancellationPolicy from "@/components/CancelationPolicy";
import About from "@/components/About";
import Footer from "@/components/Footer";
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
