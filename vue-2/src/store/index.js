import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
let initialStateFromLocalStorage= ()=>{
    let settings;
    let day;

    let now_date= new Date();
    let ddNow = now_date.getDate();
    let mmNow = now_date.getMonth() + 1;
    let yyyyNow = now_date.getFullYear();
    let days=[];
    let fullStats={};
    let lastStats={};

    if(localStorage.getItem('days')){
        days=JSON.parse(localStorage.getItem('days'));
       if(!days.includes(ddNow+'/'+mmNow+'/'+yyyyNow)) {
           days.push(ddNow+'/'+mmNow+'/'+yyyyNow);
           localStorage.setItem('days',JSON.stringify(days))
       }

    }else{
            days.push(ddNow+'/'+mmNow+'/'+yyyyNow);
            localStorage.setItem('days',JSON.stringify(days))
    }
    day=days.length;

    if(localStorage.getItem('settings')){
        settings=  JSON.parse(localStorage.getItem('settings'));
    }else{
        settings ={
            time:1,
            dificult:1,
            countVars:2,
            selected:['summ'],

        }
        localStorage.setItem('settings',JSON.stringify(settings));
    }

    if(localStorage.getItem('fullStats')){
        fullStats =  JSON.parse(localStorage.getItem('fullStats'));
    }else{
        fullStats={
            countTask:0,
            countTrue:0,
            countFalse:0
        }
        localStorage.setItem('fullStats',JSON.stringify(fullStats));
    }


    if(localStorage.getItem('lastStats')){
        lastStats =  JSON.parse(localStorage.getItem('lastStats'));
    }else{
        lastStats={
            countTask:0,
            countTrue:0,
            countFalse:0
        }

    }

    return {
        day,
        settings,
        taskNow:{
            nums:[],
            op:[],
            result:null,
        },
        display:{
            inputElements:[],
            selectedInput:null,
        },
        todayStats:{
            countTask:0,
            countTrue:0,
            countFalse:0
        },
        lastStats,
        fullStats,
    }
}

export default new Vuex.Store({
    state: initialStateFromLocalStorage,
    actions :{
        updateSettings({commit},settings){
            commit('setSettings',settings)
        },
        updateDificult({commit},dificult){
            let selected;
            let count_vars;
            switch(dificult){
                case 1:
                    selected = ['summ'];
                    count_vars = 2;
                    break;
                case 2:
                    selected = ['summ'];
                    count_vars = 3;
                    break;
                case 3:
                    selected = ['summ','diff'];
                    count_vars = 2;
                    break;
                case 4:
                    selected = ['summ','diff'];
                    count_vars = 3;
                    break;
                case 5:
                    selected = ['summ','diff','multiplication'];
                    count_vars = 2;
                    break;
                case 6:
                    selected = ['summ','diff','multiplication'];
                    count_vars = 3;
                    break;
                case 7:
                    selected = ['summ','diff','multiplication','division'];
                    count_vars = 2;
                    break;
                case 8:
                    selected = ['summ','diff','multiplication','division'];
                    count_vars = 3;
                    break;
                case 9:
                    selected = ['summ','diff','multiplication','division','exp'];
                    count_vars = 2;
                    break;
                case 10:
                    selected = ['summ','diff','multiplication','division','exp'];
                    count_vars = 3;
                    break;
                default:
                    dificult=1;
                    selected = ['summ']
                    count_vars = 2;
            }
            commit('setDificult',dificult);
            commit('setOptions',selected);
            commit('setCountVars',count_vars);
            commit('updateLocalStorageSettings',this.state.settings);
        },
        updateTime({commit},time){
            commit('setTime',time);
            commit('updateLocalStorageSettings',this.state.settings);
        },
        updateOptions({commit},selected){

            commit('setOptions',selected);
            commit('updateLocalStorageSettings',this.state.settings);
        },
        generateTask({commit}) {
            return new Promise((resolve) => {
                let nums = [];
                let op = [];
                let result = 0;

                while (result <= 0) {
                    nums = [];
                    op = [];
                    for (let i = 0; i < this.state.settings.countVars; i++) {
                        nums.push(Math.floor(Math.random() * Math.floor(10)))
                    }
                    // for (let i = 1; i < nums.length; i++) {
                    //     op.push(this.state.settings.selected[Math.floor(Math.random() * Math.floor(this.state.settings.selected.length))])
                    // }
                    result = nums[0];
                    for (let i = 1; i < nums.length; i++) {
                        let new_op = this.state.settings.selected[Math.floor(Math.random() * Math.floor(this.state.settings.selected.length))]
                        op.push(new_op);
                        switch (new_op) {
                            case 'summ':
                                result = result + nums[i];
                                break;
                            case 'diff':
                                result = result - nums[i];
                                break;
                            case 'multiplication':
                                result = result * nums[i];
                                break;
                            case 'division':
                                result = Math.floor(result / nums[i]);
                                break;
                            case 'exp':
                                for (i = 1; i < nums[i]; i++) {
                                    result = result * result;
                                }
                                break;

                        }

                    }
                }

                let xArr = [];
                for (let key in nums) {
                    xArr.push((Number(key)+1).toString());
                }
                xArr.push('result');
                let xVar = xArr[Math.floor(Math.random() * Math.floor(xArr.length))];

                let task = {
                    nums,
                    op,
                    result,
                    xVar
                }
                commit('setGetTask', task);
                resolve();
            })
        },
        setInputElement({commit},elementArray){
            commit('setInputElement',elementArray);
        },
        setSelectedInput({commit},selectedInput){
            commit('setSelectedInput',selectedInput);
        },
        setSelectedInputNext({commit}){
            const currentIndex = this.state.display.inputElements.indexOf(this.state.display.selectedInput);
            const nextIndex = (currentIndex + 1) % this.state.display.inputElements.length;

            const next=this.state.display.inputElements[nextIndex];
            commit('setSelectedInput',next);
        },
        setSelectedInputPrev({commit}){
            const currentIndex = this.state.display.inputElements.indexOf(this.state.display.selectedInput);
            let prevIndex = (currentIndex - 1)
            if(prevIndex===-1){
                prevIndex=this.state.display.inputElements.length-1;
            }
            const prev=this.state.display.inputElements[prevIndex];
            commit('setSelectedInput',prev);
        },
        updateStats({commit},resultTask){
            commit('updateTodayStats',resultTask);
            commit('updateFullStats',resultTask);
            commit('updateLastStats',resultTask);
            localStorage.setItem('fullStats',JSON.stringify(this.state.fullStats));
        },
        newLastStat({commit}){
            commit('newLastStat');
        },
        writeLastStat(){
            localStorage.setItem('lastStats',JSON.stringify(this.state.lastStats));
        }
},
    mutations: {
        updateLocalStorageSettings(state,settings){
            localStorage.setItem('settings',JSON.stringify(settings));
        },
        setDificult(state,dificult){
            state.settings.dificult=dificult;
        },
        setTime(state,time){
            state.settings.time=time;
        },
        setSettings(state,settings){
            state.settings=settings;
        },
        setOptions(state,selected){
            state.settings.selected=selected;
        },
        setCountVars(state,CountVars){
            state.settings.countVars=CountVars;
        },
        setGetTask(state,task){
            state.taskNow=task;
        },
        setInputElement(state,elementArray){
            state.display.inputElements=elementArray;
        },
        setSelectedInput(state,selectedInput){
            state.display.selectedInput=selectedInput;
        },
        updateTodayStats(state,resultTask){
            state.todayStats.countTask++;
            if(resultTask===true){
                state.todayStats.countTrue++;
            }else{
                state.todayStats.countFalse++;
            }
        },
        updateFullStats(state,resultTask){
            state.fullStats.countTask++;
            if(resultTask===true){
                state.fullStats.countTrue++;
            }else{
                state.fullStats.countFalse++;
            }
        },
        updateLastStats(state,resultTask){
            state.lastStats.countTask++;
            if(resultTask===true){
                state.lastStats.countTrue++;
            }else{
                state.lastStats.countFalse++;
            }
        },
        newLastStat(state){
            state.lastStats={
                countTask:0,
                countTrue:0,
                countFalse:0,
            }
        }
    },

    getters:{
        allSettings(state){
            return state.settings;
        },
        getDay(state){
            return state.day;
        },
        selected(state){
            return state.settings.selected;
        },
        countVars(state){
            return state.settings.countVars;
        },
        taskNow(state){
            return state.taskNow;
        },
        selectedInput(state){
            return state.display.selectedInput;
        },
        lastStats(state){
            return state.lastStats;
        },
        fullStats(state){
            return state.fullStats;
        }
    }
})
