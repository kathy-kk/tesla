const proxyURL = 'https://cors-anywhere.herokuapp.com/';
const API_ENDPOINT = 'http://bct-recruitment.s3-website-ap-southeast-2.amazonaws.com/battery-data.json';

export async function getTeslaResponse() {
    
    const response = await fetch(`${proxyURL}${API_ENDPOINT}`, {
        method: 'GET',
        Accept: 'application/json'
    });
    if (!response.ok) {
        throw new Error(
            `searchTeslaResponse failed, HTTP status ${
                response.status
            }`
        );
    }
    const data = await response.json();
    console.log(data);
    return data;
}