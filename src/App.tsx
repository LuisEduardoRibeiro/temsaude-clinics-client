import React from 'react'
import { Provider } from 'react-redux'
import GlobalStyles, { ContainerFixed } from './styles/global'
import Map from './patterns/Map'
import PanelNewClinic from './patterns/PanelNewClinic'
import PanelSearchClinic from './patterns/PanelSearchClinic'
import PanelListClinic from './patterns/PanelListClinic'

import store from './store'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <GlobalStyles />

        <ContainerFixed className='flex flex-col justify-between' style={{ 'margin': '32px 48px' }}>

          <ContainerFixed className="z-0">
            <Map />
          </ContainerFixed>

          <div className="flex flex-col sm:flex-row sm:items-start gap-2 md:gap-10">

            <div className="z-10 flex-1 sm:flex-auto">
              <PanelNewClinic />
            </div>

            <div className="z-10 flex-1 sm:flex-auto md:w-3/5">
              <PanelSearchClinic />
            </div>

          </div>

          <div className="z-10 flex items-end justify-around">
            <PanelListClinic />
          </div>

        </ContainerFixed>
      </div>
    </Provider>
  )
}

export default App
