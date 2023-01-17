import pb from '../lib/pocketbase'
import { useState } from 'react'
import { useMutation } from 'react-query'

export default function useLogin() {


    async function login(data) {
        try {
            const authData = await pb
                .collection('users')
                .authWithPassword(data.email, data.password);
        } catch (e) {
            alert(e)
        }
    }

    return useMutation(  login)
}