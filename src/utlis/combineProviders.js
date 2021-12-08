import React from "react";
import {ContextProviderComposer} from "./providers";


export default  function Providers ({providers,children,}) {
    return (
    <ContextProviderComposer contextProviders={providers}>
        {children}
    </ContextProviderComposer>
)
}