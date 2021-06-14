import { api } from 'boot/axios'

export function createVoter ({ commit }, voter){
    return new Promise((resolve, reject) => {
        api
        .post('/auth/signup', voter)
        .then(response => {
            const { voter } = response.data

            commit('createVoter', { voter })
            resolve(user)
        })
        .catch(err => {
            console.log(err)
            reject(err)
        })
    })
}