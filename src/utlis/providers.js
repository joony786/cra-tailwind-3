import React from "react";

//doesn't work with react query
export const combineProviders = (provider) => provider.reduce(
    (Combined, Provider) => ({children}) => {
        return (
        <Combined>
            <Provider>
                {children}
            </Provider>
        </Combined>
    ) }
)

export const ContextProviderComposer = ({contextProviders, children}) => {
    return contextProviders.reduceRight((children, parent, index) => React.cloneElement(parent, { children }), children);
};
