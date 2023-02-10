import {Footer} from "./components/footer/footer";
import {Header} from "./components/header/header";
import {Layout} from "./components/layout/layout";
import {Board} from "./components/board/board";

function App() {
  return (
      <Layout>
          <Header/>
          <main>
              <Board/>
          </main>
          <Footer activeTaskCount={10} finishedTaskCount={20}/>
      </Layout>
  );
}

export default App;
