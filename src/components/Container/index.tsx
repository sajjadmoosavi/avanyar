import React from "react"
import { Layout, Provider, themes } from '@stardust-ui/react'

export const Container = ({ children }) => (
  <Provider theme={themes.base}>
    <Layout main={children} />
  </Provider>
)