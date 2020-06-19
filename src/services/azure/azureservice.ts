import axios from 'axios'

export interface RailpassRequest {
    readonly Insz: string,
    readonly Email: string,
    readonly Firstname: string,
    readonly Lastname: string
}

export function postRailpassRequest(request: RailpassRequest): void {
    console.log('request', request);
    axios.post("https:\\nmbs-func.azurewebsites.net/api/Railpass?code=tY0Wj1aEwHYgDS3RGEGor4sDk2ar94LMEMgCY3E1HumuOMFJJl9iFA==", request);
}
