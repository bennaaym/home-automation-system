import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import { controlLight,getLampState } from '../redux/actions/lamps';
import { controlWindow,getWindowState } from "../redux/actions/servos";
import { getTemperature } from "../redux/actions/temperature";

const channelNo = "1580471";

const useThingSpeak = (lampNo=null,windowNo=null) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(lampNo != null)dispatch(getLampState(lampNo,channelNo));
        if(windowNo != null && windowNo != undefined)dispatch(getWindowState(windowNo,channelNo));
        dispatch(getTemperature(3,channelNo));
    });
}

export default useThingSpeak;

