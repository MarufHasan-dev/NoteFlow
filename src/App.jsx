import Header from "./components/sections/Header";
import Navigation from "./components/sections/Navigation";
import Page from "./components/sections/Page";

export default function App() {
  return (
    <Page>
      <Header>
        <Navigation />
      </Header>
    </Page>
  );
}
