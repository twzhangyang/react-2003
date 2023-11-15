declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_OMDB_API: string;
            // ... add other environment variables as needed
        }
    }

    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: boolean;
    }

}

export {};
