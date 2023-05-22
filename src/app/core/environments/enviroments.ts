export class Environment {
    production: boolean = false
    apiUrl: string = 'https://v3.football.api-sports.io'
    host: string = 'v3.football.api-sports.io'
    apikey: string = '2c95c67415223cd5ab9a38e9f9ec531b'
    private static instance: Environment;

    private constructor() { }

    static getInstance() {
        if (!Environment.instance) {
            Environment.instance = new Environment();
        }
        return Environment.instance;
    }

    static getApiUrl() {
        return Environment.getInstance().apiUrl;
    }

    static getHost() {
        return Environment.getInstance().host;
    }
}
