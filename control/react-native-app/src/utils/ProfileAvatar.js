import { Avatar, Badge, Icon, withBadge } from 'react-native-elements';
import React from 'react';

export const ProfileAvatar = () => {
    return (
        <Avatar
            rounded
            size={45}
            icon={{name: 'user', type: 'font-awesome'}}
            onPress={() => console.log("Works!")}
            activeOpacity={0.7}
            containerStyle={{ backgroundColor: "#ccc", marginRight:10}}
        >    
        <Badge
            status="success"
            badgeStyle={{width:10,height:10}}
            containerStyle={{ position: 'absolute',top: 32, right: 35}}
        />
        </Avatar >    
    )
}
 