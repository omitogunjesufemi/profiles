import axios from 'axios'
import {
    SPOTIFY_CLIENT_SECRET,
    SPOTIFY_CLIENT_ID,
    SPOTIFY_API_BASE,
    SPOTIFY_TOKEN_URL,
    SPOTIFY_REDIRECT_URI
} from '../../SpotifyConfig.js';


let accessToken = null;
async function getAccessToken() {
    if (accessToken) {
        return accessToken;
    }

    const response = await axios.post(
        SPOTIFY_TOKEN_URL,
        'grant_type=client_credentials',
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Authorization: `Basic ${btoa(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)}`
            }
        }
    );

    accessToken = response.data;
    return accessToken;
}

export async function searchArtists(query='JayMikee', offset=0){
    const token = await getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE}/search`,{
        headers: {
            Authorization: `Bearer ${token.access_token}`
        },
        params: {
            q: query,
            offset: offset,
            type: 'artist',
            limit: 20,
        }
    });

    return response.data;
}

export async function getCategories(limit=20){
    const token = await getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE}/browse/categories`, {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        },
        params: {
            limit: limit,
        }
    });
    return response.data;
}

export async function getArtists(limit=20) {
    const token = await getAccessToken();
    const response = await axios.get(`${SPOTIFY_API_BASE}/artists`, {
        headers: {
            Authorization: `Bearer ${token.access_token}`
        },
        params: {
            limit: limit,
        }
    });
    return response.data;
}

