import { useContext } from 'react';
import Spline from '@splinetool/react-spline';
import GlobalContext from '../context/GlobalContext';
import { memo } from 'react';

const RoboArm = () => {
  const { breakpoint } = useContext(GlobalContext);

  const isMobile = breakpoint('mobile');
  const isTablet = breakpoint('tab');

  const modelSize = isMobile
    ? { height: '100vh', width: '100%' }
    : isTablet
    ? { height: '100vh', width: '100%' }
    : { height: '100vh', width: '100%' };

  return (
    <main style={{ height: modelSize.height, width: modelSize.width }} className='p-0 flex justify-center items-center'>
      <Spline
        scene="https://prod.spline.design/UTI28fXxLxIml8Lv/scene.splinecode"
      />
    </main>
  );
};

// Memoize the component to avoid unnecessary re-renders
export default memo(RoboArm);
