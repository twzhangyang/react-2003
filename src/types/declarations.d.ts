declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_OMDB_API: string;
            // ... add other environment variables as needed
        }
    }
}

export {};
