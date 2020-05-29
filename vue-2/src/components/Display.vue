<template>
        <b-row class="mt-5"  v-if="countVars===3">
                <b-col sm="2">
                        <b-form-input id="input_1" size="sm" placeholder="" v-model="var1" :ref="'var1'" @click="InputClick($event)" class="sm-1 number_input input_1"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>{{opSymb(op1)}}</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="input_2" size="sm" placeholder="" v-model="var2" :ref="'var2'" @click="InputClick($event)" class="sm-1 number_input input_2" ></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>{{opSymb(op2)}}</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="input_3" size="sm" placeholder="" v-model="var3" :ref="'var3'" @click="InputClick($event)" class="sm-1 number_input input_3"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>=</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="result" size="sm" placeholder="" v-model="result" :ref="'result'" @click="InputClick($event)" class="sm-1 number_input input_4"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>{{testResult}}</b>
                </b-col>
        </b-row>
        <b-row class="mt-5"  v-else>

                <b-col sm="2" offset="1">
                        <b-form-input id="input_1" size="sm" placeholder="" v-model="var1" @click="InputClick($event)" class="sm-1 number_input input_1" ></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>{{opSymb(taskNow.op[0])}}</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="input_2" size="sm" placeholder="" v-model="var2" @click="InputClick($event)" class="sm-1 number_input input_2"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>=</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="result"  size="sm" placeholder="" v-model="result" @click="InputClick($event)" class="sm-1 number_input input_3"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b >{{testResult}}</b>
                </b-col>
        </b-row>
</template>

<script>

    import {mapGetters,mapActions } from 'vuex'
    export default{
            props:['letter','task'],
            data(){
                return {
                        var1:null,
                        var2:null,
                        var3:null,
                        op1:null,
                        op2:null,
                        result:null,
                        xVar:null,
                        testResult:"?",
                        returnResultVal:false,
                }
            },
            computed:{
                ...mapGetters(['countVars','selected','taskNow','selectedInput']),
                    testResultUpdate:{
                        get(){
                                return this.testResult;
                        },
                        set(val){
                                this.testResult=val;
                                return this.testResult;

                        }
                    }
            },
            watch:{

                    task:function(){

                        if(this.task!=null){
                                this.var1=(this.task.xVar!=='1')?((this.task.nums[0]!==undefined)?this.task.nums[0]:null):null;
                                this.var2=(this.task.xVar!=='2')?((this.task.nums[1]!==undefined)?this.task.nums[1]:null):null;
                                this.var3=(this.task.xVar!=='3')?((this.task.nums[2]!==undefined)?this.task.nums[2]:null):null;
                                this.result=(this.task.xVar!=='result')?(this.task.result):null;
                                this.op1=(this.task.op[0]!==undefined)?this.task.op[0]:null;
                                this.op2=(this.task.op[1]!==undefined)?this.task.op[1]:null;
                        }
                },
                    selectedInput:function(){
                         const val='#'+this.selectedInput.trim();

                        this.$el.querySelector(val).focus();
                    },
                    /*letter:function(){
                        if(this.letter!=='') {
                                const val = '#' + this.selectedInput.trim();
                                this.$el.querySelector(val).value += this.letter.valueOf();
                                this.letter = '';
                        }
                    }*/
            },
            methods:{
                ...mapActions(['setInputElement','setSelectedInput']),
                opSymb(opString) {
                            let ret;
                            switch(opString){
                                    case 'summ':
                                            ret='+';
                                            break;
                                    case 'diff':
                                            ret='-';
                                            break;
                                    case 'multiplication':
                                            ret='*';
                                            break;
                                    case 'division':
                                            ret='/';
                                            break;
                                    case 'exp':
                                            ret='^';
                                            break;
                            }
                            return ret;
                },
                write(letter){

                        switch(this.selectedInput.trim()){
                                case "input_1":
                                        this.var1+=  letter;
                                        break;
                                case "input_2":
                                        this.var2+=  letter;
                                        break;
                                case "input_3":
                                        this.var3+=  letter;
                                        break;
                                case "result":
                                        this.result+=  letter;
                                        break;
                        }

                },
                equalValsResult(val1,val2){
                        if(val1===val2){

                                this.testResult="OK";
                                this.returnResultVal=true;
                        }else{
                                this.testResult="ERROR";
                                this.returnResultVal=false;
                        }
                        setTimeout(()=>{
                                this.$emit('returnTask',this.returnResultVal);
                        },1500);
                },
                InputClick(event){
                        this.setSelectedInput(event.target.id);
                }
            },
            mounted(){
                    if(this.task!=null){
                            this.var1=(this.task.xVar!=='1')?((this.task.nums[0]!==undefined)?this.task.nums[0]:null):null;
                            this.var2=(this.task.xVar!=='2')?((this.task.nums[1]!==undefined)?this.task.nums[1]:null):null;
                            this.var3=(this.task.xVar!=='3')?((this.task.nums[2]!==undefined)?this.task.nums[2]:null):null;
                            this.result=(this.task.xVar!=='result')?(this.task.result):null;
                            this.op1=(this.task.op[0]!==undefined)?this.task.op[0]:null;
                            this.op2=(this.task.op[1]!==undefined)?this.task.op[1]:null;
                    }

                    this.setInputElement([...this.$el.querySelectorAll('.number_input')].map(input=>{
                            return input.id;
                    }));
                    this.$el.querySelector('#input_1').focus();
                    this.setSelectedInput('input_1');

                    this.$eventBus.$on('writeDisplay', this.write);
                    this.$eventBus.$on('checkResult',(val)=> {
                            if (val === 'skipTask') {
                                    this.$emit('returnTask',false);
                            }else{
                                    switch (this.taskNow.xVar.toString()) {
                                            case '1':
                                                    this.equalValsResult(this.taskNow.nums[0], Number(this.var1));
                                                    break;
                                            case '2':
                                                    this.equalValsResult(this.taskNow.nums[1], Number(this.var2));
                                                    break;
                                            case '3':
                                                    this.equalValsResult(this.taskNow.nums[2], Number(this.var3));
                                                    break;
                                            case 'result':
                                                    this.equalValsResult(this.taskNow.result, Number(this.result));
                                                    break;
                                    }
                            }
                    });
            },

    }
</script>
<style scoped>
        .number_input{
                border:none;
                border-bottom:1px solid #ccc;
                padding:0.25rem 0.1rem;
                text-align: center;
        }
        .event_input{
                text-align: center;
        }
</style>
