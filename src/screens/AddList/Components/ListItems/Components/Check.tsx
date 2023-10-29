import { Image } from "native-base";
import React, { useEffect, useState } from "react";

import Checked from '@assets/check.png'
import UnCheck from '@assets/unCheck.png'

export default function Check(data) {

  const [dataTeste, setDataTeste] = useState(data.data)

  function forceUpdate() {
    return dataTeste
  }

  useEffect(() => {
    forceUpdate()
  }, [dataTeste]);

  return (
    <>
      {
        data.data === true && (
          <Image
            source={Checked}
            width="25px"
            height="25px"
            alt="item checked"
          />
        )
      }
      {
        data.data === false && (
          <Image
            source={UnCheck}
            width="25px"
            alt="item unchecked"
            height="25px"
          />
        )
      }
    </>
  )
}