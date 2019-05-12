import React from 'react'
import { useAragonApi } from '@aragon/api-react'
import { Main, Button } from '@aragon/ui'
import styled from 'styled-components'
import { useTranslation, withTranslation } from 'react-i18next'

function App() {
  const { api, appState } = useAragonApi()
  const { count, syncing } = appState
  console.log(syncing)
  const { t, i18n } = useTranslation()
  return (
    <Main>
      <BaseLayout>
        {syncing && <Syncing />}
        <Count>{t('count', { count })}</Count>
        <Buttons>
          <Button mode="secondary" onClick={() => api.decrement(1)}>
            {t('decrement')}
          </Button>
          <Button mode="secondary" onClick={() => api.increment(1)}>
            {t('increment')}
          </Button>
          {i18n.languages[0] === 'en' ? (
            <Button onClick={() => i18n.changeLanguage('es')}>ES</Button>
          ) : (
            <Button onClick={() => i18n.changeLanguage('en')}>EN</Button>
          )}
        </Buttons>
      </BaseLayout>
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

const Syncing = withTranslation()(
  styled.div.attrs(({ t }) => ({ children: t('sync.syncing') }))`
    position: absolute;
    top: 15px;
    right: 20px;
  `
)

export default App
