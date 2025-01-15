import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import headerLinks from "./data/menuHeader";
import { footerInfo, FooterMenuDataOne, FooterMenuDataTwo, FooterMenuDataThree } from './data/menusFooter'

const App = () => {
  return (
    <>
      <Header links={headerLinks} />
      <Main />
      <Footer footerInfo={footerInfo} linksOne={FooterMenuDataOne} linksTwo={FooterMenuDataTwo} linksThree={FooterMenuDataThree} />
    </>
  )
}

export default App
