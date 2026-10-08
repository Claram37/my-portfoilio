import { Outlet } from 'react-router';
import Nav from '@/components/Nav';

// Shared page shell; the current route renders into <Outlet />
const App = () => {
  return (
    <>
      <Nav />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default App;
