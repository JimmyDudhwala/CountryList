import CountryContainer from "../Country/CountryContainer/CountryContainer";
import Header from "../Header/Header";
import { ContextQueryProvider } from "../contextQuery/ContextQuery";

function HomePage() {
  return (
    <ContextQueryProvider>
      <Header />
      <CountryContainer />
    </ContextQueryProvider>
  );
}

export default HomePage;