import { useDispatch, useSelector } from "react-redux";
import React  from 'react';
import {useEffect, useState} from 'react';
import { getLampState } from '../redux/actions/lamps';
import { getWindowState } from "../redux/actions/servos";
import { getTemperature } from "../redux/actions/temperature";
import { getHumidity } from "../redux/actions/humidity";

const channelNo = "1580471";

const useThingSpeak = (lampNo=null,windowNo=null) => {
    const dispatch = useDispatch();
    useEffect(() => {
        if(lampNo != null)dispatch(getLampState(lampNo,channelNo));
        if(windowNo != null && windowNo != undefined)dispatch(getWindowState(windowNo,channelNo));
        dispatch(getTemperature(3,channelNo));
        dispatch(getTemperature(7,channelNo));
        dispatch(getHumidity(6,channelNo));
        dispatch(getHumidity(8,channelNo));
    });
}

export default useThingSpeak;

