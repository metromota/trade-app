import { Env } from '@core/environment/env';

export class Security {
    apiUrl: string = '';
    host: string = '';
    apikey: string = '';
    private static instance: Security;

    private constructor() {
        this.apiUrl = Env.API_URL;
        this.host = Env.API_HOST;
    }

    static getInstance() {
        if (!Security.instance) {
            Security.instance = new Security();
        }
        return Security.instance;
    }

    static getApiUrl() {
        return Security.getInstance().apiUrl;
    }

    static getHost() {
        return Security.getInstance().host;
    }

    static setApikey(key: string) {
        Security.getInstance().apikey = key;
    }

    static getApikey() {
        return Security.getInstance().apikey;
    }

    static removeApikey() {
        Security.getInstance().apikey = '';
    }

    static getStatus() {
        return !!Security.getInstance().apikey;
    }
}
