<template>

    <div>
        <button class="btn btn-warning my-2" type="button" data-bs-toggle="modal"
            :data-bs-target="'#' + id_str + 'Modal'">
            <i class="fa fa-plus"></i>
            Add Block
        </button>

        <!-- Modal -->
        <div class="modal fade" :id="id_str + 'Modal'" tabindex="-1" :aria-labelledby="id_str + 'ModalLabel'"
            aria-hidden="true">
            <div class="modal-dialog ">
                <div class="modal-content shadow-2xl shadow-indigo-500/50">
                    <div class="modal-header p-1 px-2 bg-blue-500">
                        <h5 class="modal-title font-semibold text-white" :id="id_str + 'ModalLabel'">Components</h5>
                        <a @click="modalToggle" class="" data-bs-dismiss="modal" aria-label="Close">
                            <i class="fas fa-times-circle text-xl text-white"></i>
                        </a>
                    </div>

                    <div class="modal-body p-2 bg-blue-50">
                        <div class="row">
                            <div class="col-12 col-sm-4 col-md-3" v-for="(record, r_index) in records"
                                :key="r_index">
                                <div class="rounded-lg bg-white max-w-sm my-2">
                                    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                        <div v-if="record.image" class=" h-48 overflow-hidden">
                                            <img class="rounded-t-lg" :src="record.image" alt="" />
                                        </div>

                                        <div v-else class="w-full flex items-center flex-col h-48 overflow-hidden">
                                            <div class="w-full h-full flex bg-white shadow-md p-4 rounded-md">
                                                <div data-placeholder
                                                    class="mr-2 h-20 w-20 rounded-full overflow-hidden relative bg-gray-200">

                                                </div>
                                                <div class="flex flex-col justify-between">
                                                    <div data-placeholder
                                                        class="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">
                                                    </div>
                                                    <div data-placeholder
                                                        class="mb-2 h-5 w-40 overflow-hidden relative bg-gray-200">
                                                    </div>
                                                    <div data-placeholder
                                                        class="h-10 w-40 overflow-hidden relative bg-gray-200">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                    <div>

                                        <div class="flex justify-between px-2">
                                            <h5 class="text-gray-900 text-xl font-medium">{{ record.name }}</h5>
                                            <button type="button" v-on:click="addComponent(record.name)"
                                                class=" inline-block p-2 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add</button>
                                        </div>
                                        <div class="h-10 px-2 overflow-hidden">
                                            <p v-if="record.description" class="text-gray-600 text-xs text-left">
                                                {{ truncate(record.description, 80) }}
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>



<script>
import { Modal } from 'bootstrap/dist/js/bootstrap.bundle.js';

export default {
    name: 'ModalPopper',
    props: {
        id_str: String,
    },

    data() {
        return {
            message: '',
            records: [],
            is_recordpicker: true
        }
    },
    mounted() {
        const myModalEl = document.getElementById(this.id_str + 'Modal');

        myModalEl.addEventListener('hidden.bs.modal', event => {
            this.modalToggle();
        });

        this.fetchRecords();
    },

    methods: {
        modalToggle() {
            console.log('sdfsdf');
        },
        truncate(value, length) {
            if (value.length > length) {
                return value.substring(0, length) + "...";
            } else {
                return value;
            }
        },

        addComponent(name) {
            var component = { name: name, id_str: this.id_str };

            Modal.getOrCreateInstance(document.getElementById(this.id_str + 'Modal')).hide()
            
            this.$emit('updateChange', component);
        },
        fetchRecords() {
            const getdata = async (t,) => {
                await window.axios.get(window.$compURL, {
                    withCredentials: false,
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'crossDomain': true,
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                    }
                })
                    .then(
                        response => {

                            t.records = response.data;


                        })
                    .catch(
                        response => {
                            if (response.status === 401) {
                                console.log('Issues Fetching Data.');
                            }
                        });
            };
            getdata(this);
        },
        recordPicker() {
            this.modalToggle();

            //Modal(document.getElementById(this.id_str + 'Modal')).hide();
            Modal.getOrCreateInstance(document.getElementById(this.id_str + 'Modal')).hide()

        },
    }

};
</script>

