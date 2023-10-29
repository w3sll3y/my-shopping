import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";

import HomeSvg from '@assets/newHome.svg';
import AddListSvg from '@assets/newCartTeste.svg';
import UploadSvg from '@assets/newUpload.svg';
import HistorySvg from '@assets/newHistory.svg';
import ProfileSvg from '@assets/newProfile.svg';

import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { ListShopping } from "@screens/ListShopping";
import { Profile } from "@screens/Profile";
import { Receipts } from "@screens/Receipts";
import { Upload } from "@screens/Upload";
import { AddList } from "@screens/AddList";

type AppRoutes = {
  home: undefined;
  addList: undefined;
  history: undefined;
  listShopping: undefined;
  profile: undefined;
  receipts: undefined;
  upload: undefined;
}

type AppNavigatorRouteProps = BottomTabNavigationProp<AppRoutes>

const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

export function AppRoutes() {

  const { sizes, colors } = useTheme();

  const iconSizes = sizes[6];

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.orange[800],
        tabBarInactiveTintColor: colors.white,
        tabBarStyle: {
          backgroundColor: '#3BBFA7',
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 'auto' : 96,
          paddingBottom: sizes[6],
          paddingTop: sizes[6],
          zIndex: 1000
        }
      }}
    >
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSizes} height={iconSizes} />
          )
        }}
      />
      <Screen
        name="addList"
        component={AddList}
        options={{
          tabBarIcon: ({ color }) => (
            <AddListSvg fill={color} width={iconSizes} height={iconSizes} />
          )
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSizes} height={iconSizes} />
          )
        }}
      />
      <Screen
        name="listShopping"
        component={ListShopping}
        options={{
          // tabBarIcon: ({ color }) => (
          //   <HomeSvg fill={color} width={iconSizes} height={iconSizes} />
          // )
          tabBarButton: () => null
        }}
      />
      <Screen
        name="upload"
        component={Upload}
        options={{
          tabBarIcon: ({ color }) => (
            <UploadSvg fill={color} width={iconSizes} height={iconSizes} />
          )
        }}
      />

      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSizes} height={iconSizes} />
          )
        }}
      />
      <Screen
        name="receipts"
        component={Receipts}
        options={{
          // tabBarIcon: ({ color }) => (
          //   <HomeSvg fill={color} width={iconSizes} height={iconSizes} />
          // )
          tabBarButton: () => null
        }}
      />
    </Navigator>
  )
}