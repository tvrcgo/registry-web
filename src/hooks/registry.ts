import React, { useState } from 'react'
import { useRequest } from 'umi'

export default () => {

  const [stat, updateStat] = useState({
    ok: 0
  })

  return stat
}
