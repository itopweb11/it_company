import './scss/App.scss';
import Header from "./shared/components/header";
import Main from "./shared/components/main";
import Content from "./shared/components/content";
import content from "./shared/Data/content";
import ContentBlock from "./shared/components/contentBlock";
import DataBlocks from "./shared/components/dataBlocks";
import dataBlocksArr from "./shared/Data/dataBlocks"
import FooterComp from "./shared/components/footerComp";

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
