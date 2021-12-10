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

/**
 * @param {array} contextProviders all context
 * @param {{ children: JSX.Element}} [Props]
 * parse error response
 */

export const ContextProviderComposer = ({contextProviders, children}) => {
    return contextProviders.reduceRight((children, parent, index) => React.cloneElement(parent, { children }), children);
};
