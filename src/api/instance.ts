import axios from 'axios';

export const mainInstance = axios.create({
    baseURL: 'https://hcateringback-dev.unitbeandev.com',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTcxMjc4MjgwMH0.HVB0WHIquHlu8k7qKVVPW1ies5uVtqOyHqW3Bjsuuq36Ks-Z12GPdN2-kuv7DE2WGYk51pQq0bUfzvsREcOoWQ'
    },
    withCredentials: true,
});
