import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader/HomeHeader';
import { Center, Text, VStack } from 'native-base';
import { MyList } from './Components/MyList';

import * as Styled from './Components/BeforeAndAfter/styles'

export function Home() {
  return (
    <VStack flex={1}>
      <HomeHeader />
      <MyList />
      {/* <Group name="costas" /> */}
    </VStack>
  )
}