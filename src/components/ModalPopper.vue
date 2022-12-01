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

                    <div class="modal-body p-0">
                        <div v-for="(record, r_index) in records" :key="r_index">
                            {{ record.name }}
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

