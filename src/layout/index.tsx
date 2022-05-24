import Floating from './Floating';
import Header from './Header';
import Main from './Main';

const Layout = () => {
  return (
    <div className="text-base">
      <Header className="h-header"></Header>
      <div className="h-main">
        <Main></Main>
      </div>
      <Floating className="hh"></Floating>
    </div>
  );
};

export default Layout;
