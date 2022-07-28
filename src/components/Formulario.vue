<template>
    <div class="container mb-5 rounded">
        <div class="row">
            <div class="col-6 bg-cor  rounded">
                <span class="fs-4">ENTRADA DE DADOS</span>
                <hr>
                <!-- <form @submit.prevent="enviar($event)" action="">-->
                <form @reset.prevent="resetar()">
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Nome:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy.trim="form.nome">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">E-mail:</label>
                        <div class="col">
                            <input type="email" class="form-control" v-model.trim.lazy.number="form.email">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Senha:</label>
                        <div class="col">
                            <input type="password" class="form-control" v-model.lazy.trim="form.senha">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Idade:</label>
                        <div class="col">
                            <input type="number" class="form-control" v-model.number.lazy="form.idade">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Gênero:</label>
                        <div class="col">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Feminino" v-model="form.genero">
                                <label class="form-check-label">
                                    Feminino
                                </label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" value="Masculino" v-model="form.genero">
                                <label class="form-check-label">
                                    Masculino
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Licença:</label>
                        <div class="col">
                            <div class="form-check form-switch">
                                <input class="form-check-input" type="checkbox" v-model="form.licenca" true-value="SIM"
                                    false-value="NÃO">
                                <label class="form-check-label">Li e aceito os termos</label>
                            </div>
                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Interesses:</label>
                        <div class="col">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interesses"
                                    value="JavaScript">
                                <label class="form-check-label">
                                    JavaScript
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interesses" value="VueJS">
                                <label class="form-check-label">
                                    VueJS
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interesses"
                                    value="Angular">
                                <label class="form-check-label">
                                    Angular
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" v-model="form.interesses"
                                    value="NodeJS">
                                <label class="form-check-label">
                                    NodeJS
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Telefone:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.telefone"
                                v-maska="'(##) #####-####'">
                            <small class="text-muted">Formato: 00 90000-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CEP:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.cep" v-maska="'#####-###'">
                            <small class="text-muted">Formato: 00000-000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CPF:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.cpf" v-maska="'###.###.###-##'">
                            <small class="text-muted">Formato: 000.000.000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">CNPJ:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.cnpj"
                                v-maska="'##.###.###/####-##'">
                            <small class="text-muted">Formato: 00.000.000/0000-00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cartão de credito:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.cartaodecredito"
                                v-maska="'#### #### #### ####'">
                            <small class="text-muted">Formato: 0000 0000 0000 0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa veiculo:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.placaveiculo"
                                v-maska="'AAA-####'">
                            <small class="text-muted">Formato: AAA-0000</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Placa veiculo Merco Sul:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.placaveiculomercosul"
                                v-maska="'AAA#A##'">
                            <small class="text-muted">Formato: AAA0A00</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">RG:</label>
                        <div class="col">
                            <input type="text" class="form-control" v-model.lazy="form.rg" v-maska="'#*-X'">
                            <small class="text-muted">Formato: Sem padrão</small>
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data:</label>
                        <div class="col">
                            <input type="date" class="form-control" v-model.lazy="form.data">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Data/hora local:</label>
                        <div class="col">
                            <input type="datetime-local" class="form-control" v-model.lazy="form.dataHoraLocal">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Mês:</label>
                        <div class="col">
                            <input type="month" class="form-control" v-model.lazy="form.mes">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Semana:</label>
                        <div class="col">
                            <input type="week" class="form-control" v-model.lazy="form.semana">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Hora:</label>
                        <div class="col">
                            <input type="time" class="form-control" v-model.lazy="form.hora">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Cor:</label>
                        <div class="col">
                            <input type="color" class="form-color" v-model="form.cor">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Valor limite: {{ form.alcance }}</label>
                        <div class="col">
                            <input type="range" class="form-range" min="0" max="10" step="1" v-model="form.alcance">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                            <input type="hidden" class="form-control" v-model="form.escondido">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Upload:</label>
                        <div class="col">
                            <input type="file" class="form-control" multiple @change="selecionarArquivos">
                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Descrição:</label>
                        <div class="col-9">
                            <textarea name="" cols="9" rows="3" class="form-control"
                                v-model="form.descricao"></textarea>

                        </div>
                    </div>
                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">cursos:</label>
                        <div class="col-9">
                            <select name="" class="form-select" v-model="form.curso">
                                <option value="" disabled>Selecione a opção</option>
                                <option :value="curso.id" v-for="curso in cursos" :key="curso.id">
                                    {{ curso.id }} | {{ curso.curso }}</option>
                            </select>

                        </div>
                    </div>

                    <div class="mb-3 row">
                        <label class="col-3 col-form-label">Escondido:</label>
                        <div class="col">
                         <!--   <input-estrelas :numero-estrelas="5" @avaliar="form.avaliacao = $event"></input-estrelas>-->
                            <input-estrelas :numero-estrelas="5" v-model:avaliar="form.avaliacao"></input-estrelas>
                        </div>
                    </div>




                    <hr>
                    <div class="mb-3 row">
                        <div class="col d-flex justify-content-between">
                            <button class="btn btn-secondary" @click="resetar()">Limpar (btn)</button>
                            <button class="btn btn-secondary" type="reset">Limpar (reset e com dados)</button>
                            <button class="btn btn-success" type="button" @click="enviar($event)">Enviar (btn)</button>
                            <button class="btn btn-success" type="submit">Enviar (submit)</button>
                        </div>
                    </div>

                </form>
            </div>


            <div class="col-6 text-white bg-secondary rounded " :style="'background-color:' + form.cor + '!important'">
                <span class="fs-4">ESTADO DO OBJETO</span>
                <hr>
                <div class="mb-5 row">
                    <span>{{ form }}</span>
                </div>

                <span class="fs-4">SAÍDA DE DADOS</span>
                <hr>
                <div class="mb-3 row">
                    <span>Nome: {{ form.nome }}</span>
                </div>
                <div class="mb-3 row">
                    <span>E-mail: {{ form.email }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Senha: {{ form.senha }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Idade: {{ form.idade }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Gênero: {{ form.genero }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Licença: {{ form.licenca }}</span>
                </div>
                <div class="mb-3 row">
                    <span class="m-2">Interesses:</span>
                    <ul>
                        <li v-for="(lista1, index) in form.interesses" :key="index">{{ lista1 }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Telefone: {{ form.telefone }}</span>
                </div>
                <div class="mb-3 row">
                    <span>cep: {{ form.cep }}</span>
                </div>
                <div class="mb-3 row">
                    <span>cpf: {{ form.cpf }}</span>
                </div>
                <div class="mb-3 row">
                    <span>cnpj: {{ form.cnpj }}</span>
                </div>
                <div class="mb-3 row">
                    <span>cartao de credito: {{ form.cartaodecredito }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa veiculo: {{ form.placaveiculo }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Placa veiclo merco sul: {{ form.placaveiculomercosul }}</span>
                </div>
                <div class="mb-3 row">
                    <span>RG: {{ form.rg }}</span>
                </div>

                <div class="mb-3 row">
                    <span>Data: {{ form.data }} | {{ $moment(form.data).format('DD/MM/YYYY') }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Data/hora local:{{ form.dataHoraLocal }}</span>
                    <ul>
                        <li>{{ $moment(form.dataHoraLocal).format('dddd') }}</li>
                        <li>add 10 dias: {{ $moment(form.dataHoraLocal).add(10, 'days').format('LL') }}</li>
                        <li>add 10 meses: {{ $moment(form.dataHoraLocal).add(10, 'months').format('LL') }}</li>
                        <li>add 10 anos: {{ $moment(form.dataHoraLocal).add(10, 'years').format('LL') }}</li>
                        <li>remove 10 dias: {{ $moment(form.dataHoraLocal).subtract(10, 'days').format('LL') }}</li>
                        <li>remove 10 meses: {{ $moment(form.dataHoraLocal).subtract(10, 'months').format('LL') }}</li>
                        <li>remove 10 anos: {{ $moment(form.dataHoraLocal).subtract(10, 'years').format('LL') }}</li>
                        <li>Data completa: {{ $moment(form.dataHoraLocal).format('LLLL') }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Mês: {{ form.mes }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Semana: {{ form.semana }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Hora: {{ form.hora }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Cor: {{ form.cor }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Valor limite: {{ form.alcance }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Escondido:{{ form.escondido }}</span>
                </div>
                <div class="mb-3 row">
                    <span>Upload:</span>
                    <ul>
                        <li v-for="(arquivo, indexx) in form.arquivos" :key="indexx">
                            {{ arquivo.name }}</li>
                    </ul>
                </div>
                <div class="mb-3 row">
                    <span>Descricao:</span>
                    <!--<pre>{{form.descricao}}</pre> -->
                    <div style="white-space: pre">
                        {{ form.descricao }}
                    </div>
                </div>
                <div class="mb-3 row">
                    <span>cursos:</span>
                    <div>
                        {{ form.curso }}
                    </div>
                    
                </div>
                <div class="mb-3 row">
                    <span>Avaliação:</span>
                    <div>
                        {{ form.avaliacao }}
                    </div>
                    
                </div>

            </div>
        </div>

    </div>

</template>

<script>
import InputEstrelas from '@/components/InputEstrelas.vue'

export default {
    componentes: {
        InputEstrelas
    },
    name: "FormularioSite",
    data: () => ({
        cursos: [
            { id: 1, curso: "Banco de Dados Relacionais" },
            { id: 2, curso: "Desenvolvimento Web Avançado com Vue" },
            { id: 3, curso: "Desenvolvimento Web Avançado com Laravel" },
            { id: 4, curso: "Desenvolvedor NodeJS e MongoDB" },
        ],
        form: {},
        formEstadoInicial: {
            nome: "",
            email: "",
            senha: "",
            idade: "",
            licenca: "NÃO",
            interesses:'',
            genero: "Masculino",
            telefone: "",
            cep: "",
            cpf: "",
            cnpj: "",
            cartaodecredito: "",
            placaVeiculo: "",
            placaVeiculoMercosul: "",
            rg: "",
            data: "",
            dataHoraLocal: "",
            mes: "",
            semana: "",
            hora: "",
            cor: "#6c757d",
            alcance: 5,
            escondido: "Esse input está escondido",
            arquivos: {},
            descricao: "",
            curso: "",
            avaliacao:''
        },
    }),
    created() {
        this.resetar;
    },
    methods: {
        selecionarArquivos(event) {
            //console.log(event.target.files)
            this.form.arquivos = event.target.files;
        },
        enviar(e) {
            console.log(e);
            const formEnvio = Object.assign({}, this.form); //copia do form
            console.log(formEnvio);
            //uma requisição http para o back-end da aplicação
            //promise que vai nos permitir tomar ações se a requisição deu certo ou errado
        },
        resetar() {
            this.form = Object.assign({}, this.formEstadoInicial);
        }
    },
    components: { InputEstrelas }
}
</script>
<style scoped>
.bg-cor{
    background-color:rgba(0, 0, 0, 0.286);
}
</style>
