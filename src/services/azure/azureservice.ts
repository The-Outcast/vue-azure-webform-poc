export interface RailpassRequest {
    readonly Insz: string,
    readonly Email: string,
    readonly Firstname: string,
    readonly Lastname: string
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

export function postRailpassRequest(request: RailpassRequest): void {
    postData("https://nmbs-func.azurewebsites.net/api/Railpass?code=tY0Wj1aEwHYgDS3RGEGor4sDk2ar94LMEMgCY3E1HumuOMFJJl9iFA==", request);
}

export async function getRailpassRequests(): Promise<RailpassRequest[]> {
    return await fetch("https://nmbs-func.azurewebsites.net/api/GetRailpassRequests?code=SmQd7QZHDAR5eW25wl5nCv3gTVaLuHvWmid//qD1kQv9jPjqfr5bqA==")
        .then(result => result.json());
}
