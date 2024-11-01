
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
    getVantagens(){
        return apiClient.get('/vantagem/todas');
    },
    getAlunos() {
        return apiClient.get('/aluno/todos');
    },
    getRankingAlunos() {
        return apiClient.get('/ranking/todos');
    },
    comprarBeneficio(requestData){
        return apiClient.post('/transacao/aluno/compra',requestData);
    }

}
