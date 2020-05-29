<template>
    <b-container>
        <b-row>
            <b-col sm="2" offset="9">
                <Timer v-bind:timeString="timer"  />
            </b-col>
        </b-row>
        <Loader v-if="loading"/>
        <Display v-else v-bind:letter="letter" v-bind:task="task" @returnTask="returnTask" />
        <Calc @write-Letter="writeLetter" />
        <b-modal ref="my-modal" hide-footer title="Результаты теста">
            <div class="d-block text-center">
                <p>
                    Решено {{lastStats.countTrue}} из {{lastStats.countTask}}.<br>
                    Точность {{getPrecision}}%.
                </p>
            </div>
            <b-button class="mt-3" variant="outline-secondary" block @click="hideModal">OK</b-button>
        </b-modal>
    </b-container>
</template>
<script>
    import Timer from '@/components/Timer'
    import Display from '@/components/Display'
    import Calc from '@/components/Calc'
    import Loader from '@/components/Loader'
    import {mapGetters,mapActions } from 'vuex'
    export default{

        components:{
            Timer,Display,Calc,Loader
        },
        data(){
            return{
                loading:true,
                task:null,
                time:60,
                dificult:1,
                displayElements:[],
                selectedInput:null,
                letter:null,
            }
        },
        methods: {
            ...mapActions(['generateTask','updateStats','newLastStat','writeLastStat']),
            countDown() {
                if (this.time) {
                    return setTimeout(() => {
                        --this.time
                        this.countDown()
                    }, 1000)
                }else{
                    this.writeLastStat();
                    this.showModal();
                }
            },
            writeLetter(letter){
                this.letter=letter;
            },
            returnTask(result){
                this.updateStats(result);
                this.loading=true;
                this.generateTask().then(()=>{
                    setTimeout(()=>{
                        this.loading=false;
                        this.task=this.taskNow;
                    },500);
                });
            },
            showModal() {

                this.$refs['my-modal'].show();
            },
            hideModal() {
                this.$refs['my-modal'].hide();
                this.$router.push({ path: '/' })
            },
        },
        computed:{
            ...mapGetters(['allSettings','countVars','taskNow','lastStats']),
            timer:{
                get() {
                    let min = String(Math.floor(this.time/60));
                    let sec = String(this.time%60);
                    min.length===1?min="0"+min:min;
                    sec.length===1?sec="0"+sec:sec;
                    return min+':'+sec;
                }
            },
            getPrecision(){
                if(this.lastStats.countTask>0 && this.lastStats.countTrue>0) {
                    return  (Number(this.lastStats.countTrue) / Number(this.lastStats.countTask) * 100).toFixed()
                }else{
                    return 0
                }

            },
        },
        mounted(){

            this.time=this.allSettings.time*60;
            this.dificult=this.allSettings.dificult;
            this.countDown();
            this.newLastStat();
            this.generateTask().then(()=>{
                this.loading=false;
                this.task=this.taskNow;
            });
        },
    }
</script>
