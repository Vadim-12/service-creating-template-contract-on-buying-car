import type { AppProps } from 'next/app'
import '../styles/main.scss'
import { Provider } from 'react-redux'
import store, { persistor } from '@/store/dynamic/index'
import { PersistGate } from 'redux-persist/integration/react'
import Loader from '@/components/Loader'
import { FC } from 'react'

const App: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loader/>} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  )
}

export default App