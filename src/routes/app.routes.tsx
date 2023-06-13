import { Platform } from "react-native";
import { createBottomTabNavigator, BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { useTheme } from "native-base";
import { MaterialIcon } from '@expo/'

import HomeSvg from '@assets/home.svg';
import UploadSvg from '@assets/upload.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';

import { Home } from "@screens/Home";
import { History } from "@screens/History";
import { ListShopping } from "@screens/ListShopping";
import { Profile } from "@screens/Profile";
import { Receipts } from "@screens/Receipts";
import { Upload } from "@screens/Upload";

type AppRoutes = {
  home: undefined;
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
        tabBarActiveTintColor: colors.blue[800],
        tabBarInactiveTintColor: colors.gray[200],
        tabBarStyle: {
          backgroundColor: colors.blue[500],
          borderTopWidth: 0,
          height: Platform.OS === "android" ? 'auto' : 96,
          paddingBottom: sizes[6],
          paddingTop: sizes[6]
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