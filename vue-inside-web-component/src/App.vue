<template>
    <div id="app">
        <ChartView type="pie"></ChartView>
    </div>
</template>

<script lang="ts">
    import ChartView from './components/ChartView.vue';
    import { Component, Vue } from 'vue-property-decorator';
    @Component({
        components: {
            ChartView,
        },
    })
    export default class App extends Vue {
    }

</script>

<style>
    #app {
        font-family: 'Montserrat', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16pt;
    }
</style>
