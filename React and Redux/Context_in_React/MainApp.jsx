import React from 'react';

import { AppContextStore } from './AppContext';
import { DedicatedContextStore } from './contexts/DedicatedContext';
import FunctionalComponent from './FunctionalComponent';
import AnotherClassComponent from './AnotherClassComponent';
import ClassComponent from './ClassComponent';
import AnotherFunctionalComponent from './AnotherFunctionalComponent';

const MainApp = () => {
    return (
        <div>
            <AppContextStore>
                <DedicatedContextStore>
                    <FunctionalComponent />
                    <br />
                    <ClassComponent />
                    <br />
                    <AnotherClassComponent />
                    <br />
                    <AnotherFunctionalComponent />
                </DedicatedContextStore>
            </AppContextStore>
        </div>
    );
};

export default MainApp;
