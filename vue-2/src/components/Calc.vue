<template>
    <b-row class="mt-4">
        <b-col sm="6" offset="3">
            <b-container>
                <b-row class="mt-1">
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(1)">1</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(2)">2</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(3)">3</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="info" @click="prevSelected">&#60;</b-button>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(4)">4</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(5)">5</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(6)">6</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="info" @click="nextSelected">&#62;</b-button>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(7)">7</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(8)">8</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="outline-secondary" @click="write(9)">9</b-button>
                    </b-col>
                    <b-col sm="3">
                        <b-button pill variant="info" @click="skipTask" >&#32;&#63;&#32;</b-button>
                    </b-col>

                </b-row>
                <b-row class="mt-2">
                    <b-col sm="3" offset="3">
                        <b-button pill variant="outline-secondary" @click="write(0)">0</b-button>
                    </b-col>

                    <b-col sm="3" offset="3">
                        <b-button pill variant="info" @click="checkResult">&#61;</b-button>
                    </b-col>
                </b-row>
            </b-container>
        </b-col>
    </b-row>
</template>
<script>
    import {mapActions} from "vuex";

    export default{
        data(){
            return {}
        },
        methods:{
            ...mapActions(['setSelectedInputPrev','setSelectedInputNext','writeLetter']),
            prevSelected(){
                this.setSelectedInputPrev();
            },
            nextSelected(){
                this.setSelectedInputNext();
            },
            write(val){
                //this.writeLetter(val);
                //this.$emit('write-Letter',val);
                this.$eventBus.$emit('writeDisplay',val);
            },
            checkResult(){
                this.$eventBus.$emit('checkResult');
                },
            skipTask(){
                this.$eventBus.$emit('checkResult','skipTask');
            }
        }
    }
</script>
