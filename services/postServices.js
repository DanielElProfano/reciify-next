import { GET_ALL_POSTS, } from "../config/calls/postCall";
import { getSessionStore } from "../utils";



const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ2YWx1ZSI6eyJ1c2VySWQiOiIyYWZhODI4Yi0zZmFhLTRhODItYjFiZS1jMjUxN2QwZmM5MzIiLCJlbWFpbCI6ImFycmliYUBhYmFqby5jb20ifSwiaWF0IjoxNjM5OTUzODAzfQ.BpC5ZBFYV8oW4E6lNW7I-WoJzsCcIdjlsHH2OcQ2LEY'
}

export const getAllPost = async (token) => {
    const request = await fetch(GET_ALL_POSTS, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Authorization': `Bearer ${token}`
        },
        credentials: 'include',
        // body: JSON.stringify(userId)
    })
    const response = await request.json()
    console.log(response)
    return response
}