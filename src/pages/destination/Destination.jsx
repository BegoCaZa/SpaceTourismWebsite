import { useState } from 'react';
import { DESTINATIONS } from '../../constants/destinations';

const Destination = () => {
  const [activeDestination, setActiveDestination] = useState(1); //que empiece con la luna
  const currentDestination = DESTINATIONS[activeDestination];
  return (
    <>
      <h2>DESTINATION:l</h2>
    </>
  );
};
export default Destination;
