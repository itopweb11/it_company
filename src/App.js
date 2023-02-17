import './scss/App.scss';
import Header from "./shared/components/homePage/header";
import Main from "./shared/components/homePage/main";
import Content from "./shared/components/homePage/content";
import content from "./shared/Data/content";
import ContentBlock from "./shared/components/homePage/contentBlock";
import DataBlocks from "./shared/components/homePage/dataBlocks";
import dataBlocksArr from "./shared/Data/dataBlocks"
import FooterComp from "./shared/components/homePage/footerComp";

function App() {
  return (
    <div className="App">
        <Header />
        <Main />
        <Content content={content}/>
        <ContentBlock />
        <DataBlocks dataBlocksArr={dataBlocksArr}/>
        <FooterComp />
    </div>
  );
}

export default App;
