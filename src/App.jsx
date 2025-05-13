// Page
import Page from "./components/sections/Page";

// Header
import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Hero from "./components/sections/Hero";
import Reviews from "./components/sections/Reviews";

// Main
import Main from "./components/sections/Main";
import Logos from "./components/sections/Logos";
import Features from "./components/sections/Features";

export default function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
        <Reviews />
      </Header>
      <Main>
        <Logos />
        <Features />
      </Main>
    </Page>
  );
}
