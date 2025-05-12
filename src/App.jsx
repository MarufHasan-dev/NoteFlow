import Header from "./components/sections/Header";
import Hero from "./components/sections/Hero";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";

export default function App() {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
    </Page>
  );
}
