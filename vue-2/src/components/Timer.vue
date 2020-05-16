<template>

        <b-form-input  placeholder="1:00" v-model="timeString" ></b-form-input>

</template>
<script>
    export default{
        props:['timeString'],
        date(){
                return{

                }
        }
    }
</script>
