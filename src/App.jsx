import Layout from './components/Layout'
import Hero from './components/Hero'
import Programs from './components/Programs'
import { About, WhyUs } from './components/Sections'

function App() {
  return (
    <Layout>
      <Hero/>
      <About/>
      <Programs/>
      <WhyUs/>
    </Layout>
  )
}

export default App
