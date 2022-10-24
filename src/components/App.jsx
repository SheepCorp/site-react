import Header from './Header/Header'
import HomePage from './web/src/components/Main/HomePage/HomePage'
import ForUs from './web/src/components/Main/ForUs/ForUs'
import Projetos from './web/src/components/Main/Projetos/Projetos'
import ContactUs from './web/src/components/Main/ContactUs/ContactUs'
import Footer from './Footer/Footer'
import Float from './web/src/components/Main/Float/Float'

function App() {
  return (
    <>
      <Header />
      <HomePage />
      <ForUs />
      <Projetos />
      <ContactUs />
      <Footer />
      <Float />
    </>
  )
}

export default App