<template>
        <b-row class="mt-5">


                <b-col sm="2">
                <b-form-input id="" size="sm" placeholder="" value="10" class="sm-1 number_input"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>-</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="" size="sm" placeholder="" value="10" class="sm-1 number_input" ></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>-</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="" size="sm" placeholder="" value="10" class="sm-1 number_input"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>=</b>
                </b-col>
                <b-col sm="2">
                        <b-form-input id="" size="sm" placeholder="" value="10" class="sm-1 number_input"></b-form-input>
                </b-col>
                <b-col sm="1" class="event_input">
                        <b>?</b>
                </b-col>
        </b-row>
</template>

<script>
    export default{

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