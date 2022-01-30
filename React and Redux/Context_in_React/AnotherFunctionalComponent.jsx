import React from 'react';
import AppContext from './AppContext';
import DedicatedContext from './contexts/DedicatedContext';

const AnotherFunctionalComponent = () => {
    // USING THIS RE-RENDER THE WHOLE COMPONENT IF ANY VALUE CHANGES IN AppContext. Better use AppContext.Consumer
    // const appContext = React.useContext(AppContext);

    // React.useEffect(() => {
    //     console.log('appContext: ', appContext);
    // }, [appContext]);

    // React.useEffect(() => {
    //     console.log('appContext?.greeting: ', appContext?.greeting);
    // }, [appContext?.greeting]);

    // React.useEffect(() => {
    //     console.log('appContext?.dummyString: ', appContext?.dummyString);
    // }, [appContext?.dummyString]);

    return (
        <>
            <AppContext.Consumer>
                {(context) => (
                    <div>
                        {console.log(
                            'Inside AnotherFunctionalComponent, AppContext.Consumer (greeting and component) re-rendered',
                        )}
                        Inside AnotherFunctionalComponent, Method 1 (greeting and component):
                        {context?.greeting ? `${context?.greeting} from ${context?.component}` : ''}
                    </div>
                )}
            </AppContext.Consumer>

            <AppContext.Consumer>
                {(context) => (
                    <div>
                        {console.log(
                            'Inside AnotherFunctionalComponent, AppContext.Consumer (dummyString) re-rendered',
                        )}
                        Inside AnotherFunctionalComponent, Method 1 (dummyString):
                        {context?.dummyString}
                    </div>
                )}
            </AppContext.Consumer>

            <AppContext.Consumer>
                {(context) => (
                    <div>
                        {console.log(
                            'Inside AnotherFunctionalComponent, AppContext.Consumer (someOperation) re-rendered',
                        )}
                        Inside AnotherFunctionalComponent, Method 1 (someOperation):
                        {context?.someOperation?.()}
                    </div>
                )}
            </AppContext.Consumer>

            <DedicatedContext.Consumer>
                {(context) => {
                    console.log('Inside AnotherFunctionalComponent, DedicatedContext.Consumer doSomethingNew called');
                    context?.doSomethingNew?.();
                }}
            </DedicatedContext.Consumer>

            <div>
                Inside AnotherFunctionalComponent, Method 2:
                {console.log('Inside AnotherFunctionalComponent, div re-rendered')}
                {/* {appContext?.greeting ? `${appContext?.greeting} from ${appContext?.component}` : ''} */}
            </div>

            <section>{console.log('Inside AnotherFunctionalComponent, section re-rendered')}</section>
        </>
    );
};

export default AnotherFunctionalComponent;
