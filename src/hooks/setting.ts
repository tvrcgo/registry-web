import React, { useState, useEffect } from 'react'

export default ():[any, (updates: any) => void] => {

  const [setting, updateSetting] = useState({
    registry_host: 'https://192.168.1.1:5000'
  })

  const storageKey = 'registry_setting'

  const updater = (values: any) => {
    if (window.localStorage) {
      updateSetting(stat => {
        const newStat = {
          ...stat,
          ...values
        }
        window.localStorage.setItem(storageKey, JSON.stringify(newStat))
        return newStat
      })
    }
  }

  useEffect(() => {
    if (window.localStorage) {
      const localSetting = window.localStorage.getItem(storageKey)
      if (localSetting) {
        updater(JSON.parse(localSetting))
      }
    }
  }, [])

  return [setting, updater]
}
