import React, { useState } from 'react'
import { useAragonApi } from '@aragon/api-react'
import { Main, Button, SidePanel } from '@aragon/ui'
import styled from 'styled-components'

function App() {
  const { api, appState } = useAragonApi()
  const { count, syncing } = appState
  const [opened, setOpened] = useState(false)
  return (
    <Main>
      <BaseLayout>
        {syncing && <Syncing />}
        <Count>Count: {count}</Count>
        <Buttons>
          <Button mode="secondary" onClick={() => api.decrement(1)}>
            Decrement
          </Button>
          <Button mode="secondary" onClick={() => api.increment(1)}>
            Increment
          </Button>
          <Button mode="secondary" onClick={() => setOpened(true)}>
            Open SidePanel
          </Button>
        </Buttons>
      </BaseLayout>
      <SidePanel title="Menu" opened={opened} onClose={() => setOpened(false)}>
        Sidepanel content
      </SidePanel>
    </Main>
  )
}

const BaseLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
`

const Count = styled.h1`
  font-size: 30px;
`

const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
  margin-top: 20px;
`

const Syncing = styled.div.attrs({ children: 'Syncing…' })`
  position: absolute;
  top: 15px;
  right: 20px;
`

export default App
