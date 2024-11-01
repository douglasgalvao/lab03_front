
import axios from 'axios';
import environments from '../enviroment/enviroments.js';

const apiClient = axios.create({
    baseURL: environments.prod.API_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {

    consultaExtrato(){
        return apiClient.get('/transacao/aluno/todas/' + localStorage.getItem('userId'));
    },

    getAlunos() {
        return apiClient.get('/aluno/todos');
    },
    getRankingAlunos() {
        return apiClient.get('/ranking/todos');
    },
}
