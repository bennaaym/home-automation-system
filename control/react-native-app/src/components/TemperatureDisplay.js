import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import {VictoryPie, VictoryLabel} from "victory-native";
import { StyleSheet, Text, View  } from 'react-native';
import { roomStyles } from '../styles/RoomStyle';
import useThingSpeak from '../hooks/useThingSpeak';
const TemperatureDisplay= () => {
  useThingSpeak()
  const temperature = useSelector(state => state.temperatureReducer.temperature)

  useEffect(() => {
    console.log(temperature);
  })

 const data=[
    { x: "temperature", y: (temperature*220)/100,radius:121,innerRadius:109},
    { x: "", y: 180-(temperature*220)/100,radius:120,innerRadius:110}
  ]
  return (
    <View style={roomStyles.display}>
        <Text style={roomStyles.displayTitle}>Temperature</Text>
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
                      text={`${temperature}°C`}
                      style={{ fontSize: 40, fontFamily:'OpenSans-SemiBold'}}
                      
              />             
            }
            labelPosition={"centroid"}
            colorScale={["#E3170A", "#FA9189" ]}
        >

          </VictoryPie>

    </View>
  );
}



export default TemperatureDisplay;


