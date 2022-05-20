import Floating from './Floating';
import Header from './Header';
import Main from './Main';

const Layout = () => {
  return (
    <div className="text-base">
      <Header className="h-header"></Header>
      <Main className="h-main"></Main>
      <Floating className="hh"></Floating>
    </div>
  );
};

export default Layout;
