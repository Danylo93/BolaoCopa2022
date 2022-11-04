import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { PlusCircle, SoccerBall} from 'phosphor-react-native'
import { useTheme } from 'native-base';
import React from 'react';
import { New } from '../screens/New';
import { Pools } from '../screens/Pools';
import { Platform} from 'react-native';
import { Find } from '../screens/Find';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const { colors, sizes} = useTheme();

  const size = sizes[6];
  return(
    <Navigator screenOptions={{
      headerShown: false,
      tabBarLabelPosition: 'beside-icon',
      tabBarActiveTintColor: colors.yellow[500],
      tabBarInactiveTintColor: colors.gray[500],
      tabBarStyle: {
        position: 'absolute',
        height: 80,
        borderTopWidth: 0,
        backgroundColor: colors.gray[800]
      },
      tabBarItemStyle: {
        position: 'relative',
        top: Platform.OS === 'android' ? -20 : 0
      }
      
    }}>
      <Screen 
      name='new'
      component={New}
      options={{
        tabBarIcon: ({color}) => <PlusCircle color={color} size={size}/>,
        tabBarLabel: 'Novo bolão'
      }}
      />

      <Screen 
      name='pools'
      component={Pools}
      options={{
        tabBarIcon: ({color}) => <SoccerBall color={color} size={size}/>,
        tabBarLabel: 'Meus Bolões'
      }}
      />

    <Screen 
      name='find'
      component={Find}
      options={{ tabBarButton: () => null}}
      />
    </Navigator>
  )
}