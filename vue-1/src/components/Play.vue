<template>
    <b-container>
        <b-row>
            <b-col sm="2" offset="9">
                <Timer />
            </b-col>
        </b-row>
        <Display />
        <Calc />
    </b-container>
</template>
<script>
    import Timer from '@/components/Timer'
    import Display from '@/components/Display'
    import Calc from '@/components/Calc'
    export default{
        components:{
            Timer,Display,Calc
        }
    }
</script>