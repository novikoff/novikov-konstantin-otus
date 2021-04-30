declare global {
    namespace NodeJS {
        interface ProcessEnv {
            REACT_APP_BACKEND_SERVER: string;
            NODE_ENV: 'development' | 'production';
            PORT?: string;
            PWD: string;
        }
    }
}

export {}
