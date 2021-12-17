import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import useThingSpeak from "../hooks/useThingSpeak";
import { VictoryBar, VictoryChart, VictoryTheme,VictoryPie, VictoryLabel,VictoryAnimation} from "victory-native";
import { StyleSheet, Text, View, Button, TouchableOpacity,ScrollView } from 'react-native';
import { roomStyles } from '../styles/RoomStyle';

const HumidityDisplay= () => {
  useThingSpeak()
  const humidity = useSelector(state => state.humidityReducer.humidity)
 const data=[
    { x: "", y: (humidity*220)/100,radius:121,innerRadius:109},
    { x: "", y: 220-(humidity*220)/100,radius:120,innerRadius:110}
  ]
  return (
    <View  style={roomStyles.display}>
        <Text style={roomStyles.displayTitle}>Humidity</Text>
        <VictoryPie
            data={data}
            height={300}
            radius={({ datum }) => datum.radius}
            innerRadius={({ datum }) => datum.innerRadius}
            startAngle={-110}
            endAngle={110}
            labels={() => null}
            labelComponent={
              <VictoryLabel
                      textAnchor="middle" verticalAnchor="middle"
                      x={180} y={135}
                      text={`${humidity} %`}
                      style={{ fontSize: 40, fontFamily:'OpenSans-SemiBold'}}
                      
              />             
            }
            labelPosition={"centroid"}
            colorScale={["#6096BA", "#C6D9E6" ]}
        />

    </View>
  );
}



export default HumidityDisplay;