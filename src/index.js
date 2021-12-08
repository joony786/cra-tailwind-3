import React from "react";
import ReactDOM from "react-dom";
import "tailwindcss/tailwind.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";



import {QueryClientProvider,} from 'react-query'
import {queryClient} from "./react-query/client";
import Providers from "./utlis/combineProviders";


const providers = [<QueryClientProvider client={queryClient} />]

ReactDOM.render(
    <React.StrictMode>
        <Providers providers={providers}>
            <App/>

        </Providers>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
