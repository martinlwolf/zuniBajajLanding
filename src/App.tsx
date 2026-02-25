import { Routes, Route } from 'react-router-dom'
import Navbar from './shared/Navbar'
import HomePage from './features/home/HomePage'
import MotoModeloPage from './features/motos/MotoModeloPage'
import { getMotoDataByKey } from './features/motos/motoData'
import MotoLineupPage from './features/motos/MotoLineupPage'
import { dominarLineup, pulsarNsLineup, streetLineup } from './features/motos/motoLineupData'
import AboutPage from './features/about/AboutPage'
import FloatingWhatsApp from './shared/FloatingWhatsApp'
import ServicePage from './features/service/ServicePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* DOMINAR */}
        <Route path="/dominar" element={<MotoLineupPage data={dominarLineup} />} />
        <Route
          path="/dominar/d250"
          element={<MotoModeloPage data={getMotoDataByKey('dominar-d250')} />}
        />
        <Route path="/dominar/400" element={
          <MotoModeloPage
            data={getMotoDataByKey('dominar-d400-ug')}
          />
        } />

        {/* PULSAR NS */}
        <Route path="/pulsar-ns" element={<MotoLineupPage data={pulsarNsLineup} />} />
        <Route
          path="/pulsar-ns/ns-125"
          element={<MotoModeloPage data={getMotoDataByKey('rouser-ns-125')} />}
        />
        <Route
          path="/pulsar-ns/ns-160"
          element={<MotoModeloPage data={getMotoDataByKey('rouser-ns-160')} />}
        />
        <Route
          path="/pulsar-ns/ns-200"
          element={<MotoModeloPage data={getMotoDataByKey('rouser-ns-200')} />}
        />
        <Route
          path="/pulsar-ns/n-250"
          element={<MotoModeloPage data={getMotoDataByKey('rouser-n250')} />}
        />
        <Route
          path="/pulsar-ns/ns-400"
          element={<MotoModeloPage data={getMotoDataByKey('rouser-ns-400')} />}
        />

        {/* STREET */}
        <Route path="/street" element={<MotoLineupPage data={streetLineup} />} />
        <Route
          path="/street/p150"
          element={<MotoModeloPage data={getMotoDataByKey('rouser-p150')} />}
        />
        <Route
          path="/street/boxer-150"
          element={<MotoModeloPage data={getMotoDataByKey('boxer-150-at')} />}
        />
        <Route
          path="/street/boxer-ct-100"
          element={<MotoModeloPage data={getMotoDataByKey('boxer-ct-100')} />}
        />

        {/* Otras secciones */}
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/financiacion" element={<></>} />
        <Route path="/service-oficial" element={<ServicePage />} />
        <Route path="/contacto" element={<></>} />
      </Routes>
      <FloatingWhatsApp />
    </>
  )
}

export default App
