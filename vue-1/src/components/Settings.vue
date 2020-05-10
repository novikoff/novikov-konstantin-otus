<template>
    <b-container>
        <b-row>
            <b-col sm="12">
                <p>
                    Добро пожаловать на 24 тренировочный день,
                    Ваш последний результат - решено 10 из 25.
                    Общая точность 80%.
                </p>
                <h1>Настройки</h1>
                <hr>
                <vue-slider v-model="time"  :min=1 :max=15 :width=200 />
                <p>Длительность</p>
                <vue-slider v-model="dificult"  :min=1 :max=10 :width=200 />
                <p>Сложность</p>
                <b-form-group >
                    <b-form-checkbox-group
                            id="checkbox-group-1"
                            v-model="selected"
                            :options="options"
                            name="flavour-1"
                            stacked
                            size="lg"
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
export default {
    data(){
        return {
            time:1,
            dificult:1,
            selected: [], // Must be an array reference!
            options: [
                { text: 'Суммирование', value: 'summ' },
                { text: 'Разность', value: 'diff' },
                { text: 'Умножение', value: 'multiplication' },
                { text: 'Деление', value: 'division' },
                { text: 'Возведение в степень', value: 'exp' }
            ]
        }
    },
}
</script>