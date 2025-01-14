import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

const headerLinks = [
  { id: 1, label: "characters", url: "#", active: false },
  { id: 2, label: "comics", url: "#", active: true },
  { id: 3, label: "movies", url: "#", active: false },
  { id: 4, label: "tv", url: "#", active: false },
  { id: 5, label: "games", url: "#", active: false },
  { id: 6, label: "collectibles", url: "#", active: false },
  { id: 7, label: "videos", url: "#", active: false },
  { id: 8, label: "fans", url: "#", active: false },
  { id: 9, label: "news", url: "#", active: false },
  { id: 10, label: "shop", url: "#", active: false }
];

const FooterMenuData = [
  {
    id: 1,
    title: "DC comics",
    items: [
      "characters",
      "comics",
      "movies",
      "TV",
      "Games",
      "Videos",
      "News"
    ]
  },
  {
    id: 2,
    title: "shop",
    items: [
      "Shop DC",
      "Shop DC Collectibles"
    ]
  },
  {
    id: 3,
    title: "dc",
    items: [
      "term of use",
      "privacy policy (new)",
      "ad choices",
      "advertising",
      "jobs",
      "subscription",
      "talent workshops",
      "CPSC certificates",
      "ratings",
      "shop help",
      "contact us"
    ]
  },
  {
    id: 4,
    title: "sites",
    items: [
      "DC",
      "MAD magazines",
      "DC Kids",
      "DC Universe",
      "DC Power Visa"
    ]
  }
];



const App = () => {
  return (
    <>
      <Header links={headerLinks} />
      <Main />
      <Footer links={FooterMenuData} />
    </>
  )
}

export default App
