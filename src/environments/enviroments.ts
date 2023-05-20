export class Environment {
    production: boolean = false
    apiUrl: string = 'http://localhost:3000'

    private static instance: Environment;

    private constructor() {}

    static getInstance() {
        if (!Environment.instance) {
            Environment.instance = new Environment();
        }
        return Environment.instance;
    }

    static getApiUrl() {
        return Environment.getInstance().apiUrl;
    }
};
