import axios from 'axios'

export interface RailpassRequest {
    readonly Insz: string,
    readonly Email: string,
    readonly Firstname: string,
    readonly Lastname: string
}

export function postRailpassRequest(request: RailpassRequest): void {
    axios.post("https:\\nmbs-func.azurewebsites.net/api/Railpass?code=tY0Wj1aEwHYgDS3RGEGor4sDk2ar94LMEMgCY3E1HumuOMFJJl9iFA==", request);
}

export async function getRailpassRequests(): Promise<RailpassRequest[]> {
    return await axios.get<RailpassRequest[]>("https:\\nmbs-func.azurewebsites.net/api/GetRailpassRequests?code=SmQd7QZHDAR5eW25wl5nCv3gTVaLuHvWmid//qD1kQv9jPjqfr5bqA==")
        .then(result => result.data);
}
