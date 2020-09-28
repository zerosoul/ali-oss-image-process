import React, { useState } from 'react';
import StyledWrapper from './styled';
import UrlInput from './components/UrlInput';
import ImagePreview from './components/ImagePreview';
import Dashboard from './components/Dashboard';
function App() {
  // useEffect(() => {
  //   effect
  // }, [])
  const [currentUrl, setCurrentUrl] = useState(
    'https://file.1d1d100.com/2020/9/14/0d1fea31fb3a4bad9a58ad35bc7359b8.png'
  );
  return (
    <StyledWrapper>
      <UrlInput url={currentUrl} updateUrl={setCurrentUrl} />
      <ImagePreview src={currentUrl} />
      <Dashboard />
    </StyledWrapper>
  );
}

export default App;
