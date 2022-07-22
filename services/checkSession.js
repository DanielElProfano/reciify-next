import { CHECK_SESSION } from "../config/calls/userCalls"

export const checkSession = async () => {
    try {
        const request = await fetch(CHECK_SESSION,
            {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true
                },
                credentials: 'include'
            })
        const response = await request.json()
        return response
    } catch (error) {
        console.log(error)
    }
}