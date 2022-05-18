import MobileNav from './components/mobile';
import PcNav from './components/pc';
import { isMobileTerminal } from '@/utils/flexiable';
const Navigation = () => {
  const isMT = isMobileTerminal();
  return isMT ? <MobileNav></MobileNav> : <PcNav></PcNav>;
};

export default Navigation;
