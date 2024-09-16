import React, { useEffect, useRef, useState } from 'react';
import ReactPopup from 'reactjs-popup';

const ClientWrapperForReactPopup = (props) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
    setHasMounted(true);
    }, []);

    if (!hasMounted) {
    return props?.trigger ?? null;
    }

    return <ReactPopup {...props} />;
};

export default ClientWrapperForReactPopup;