<template>
    <b-container>
        <b-row>
            <b-col sm="12">
                <p>
                    Добро пожаловать на {{getDay}} тренировочный день,
                    Ваш последний результат - решено {{lastStats.countTrue}} из {{lastStats.countTask}}.
                    Общая точность {{getPrecision}}%.
                </p>
                <h1>Настройки</h1>
                <hr>
                <vue-slider v-model="time"  :min=1 :max=15 :width=200 @change="onChangeTime($event)" />
                <p>Длительность</p>
                <vue-slider v-model="dificult"  :min=1 :max=10 :width=200 @change="onChangeDificult($event)" />
                <p>Сложность</p>
                <b-form-group >
                    <b-form-checkbox-group
                            id="checkbox-group-1"
                            v-model="selectedArr"
                            :options="options"
                            name="flavour-1"
                            switches
                            stacked
                            size="lg"
                            @change="onOptionsChange($event)"
                    ></b-form-checkbox-group>
                </b-form-group>


            </b-col>
        </b-row>
        <b-row>
            <div class="col-12">

            </div>
        </b-row>
    </b-container>
</template>
<script>
import {mapGetters,mapActions } from 'vuex'
export default {
    data(){
        return {
            time:1,
            dificult:1,
            //selected: [], // Must be an array reference!
            options: [
                { text: 'Суммирование', value: 'summ',disabled:false },
                { text: 'Разность', value: 'diff',disabled:false },
                { text: 'Умножение', value: 'multiplication',disabled:false },
                { text: 'Деление', value: 'division',disabled:false },
                { text: 'Возведение в степень', value: 'exp',disabled:false }
            ]
        }
    },
    methods: {
        ...mapActions(['updateSettings','updateDificult','updateTime','updateOptions']),
        onChangeDificult(event) {
            this.updateDificult(event);
        },
        onChangeTime(event) {
            this.updateTime(event);
        },
        onOptionsChange(event){
            if(!event.length){
                event.push('summ');
            }
            this.updateOptions(event);
        }
    },
    computed:{
        ...mapGetters(['allSettings','getDay','selected','lastStats','fullStats']),
        selectedArr:{
            get() {
                return this.selected;
            },
            set(newSelectedArr){
                return newSelectedArr;
            }
        },
        getPrecision(){
            if(this.fullStats.countTask>0 && this.fullStats.countTrue>0) {
                return  (Number(this.fullStats.countTrue) / Number(this.fullStats.countTask) * 100).toFixed()
            }else{
                return 0
            }

        },
    },
    mounted(){
       this.dificult = this.allSettings.dificult;
       this.time = this.allSettings.time;
      // this.selected=this.allSettings.selected;
    }
}
</script>
