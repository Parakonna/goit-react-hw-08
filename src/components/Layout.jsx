/* import { Suspense } from 'react'; */
import AppBar from './AppBar/AppBar';

const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      {children}
      {/*  <Suspense fallback={null}>{children}</Suspense> */}
    </div>
  );
};

export default Layout;
