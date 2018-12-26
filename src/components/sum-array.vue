<template>
    <div id="root" class="form-group">
        <input id="number-array" class="form-control" type="text" v-model="numberArray">
        <label id="number-array-label" for="number-array">sep all number with ","</label>
        <tween-number id="sum-result" :number="sumResult" :duration="300"></tween-number>
    </div>
</template>

<script>
    import TweenNumber from "./tween-number";
    import _ from "lodash"

    export default {
        name: "sum-array",
        data: function () {
            return {
                numberArray: "1,2,3",
                sumResult: 6,
            }
        },
        watch: {
            numberArray: _.debounce(function (val) {
                let numbers = val.split(',');
                let sumResult = 0;
                for(let number of numbers){
                    if (typeof(number) === "string" && number.trim() !== "") {
                        sumResult += parseInt(number);
                    }
                }
                this.sumResult = sumResult;
            }, 500),
        },
        components: {
            TweenNumber
        }
    }
</script>

<style scoped>

    #root{
        display: inline-block;
        text-align: left;
    }
    #number-array{
        display: inline-block;
        width: 50%;
        margin-right: 10px;
    }
    #number-array-label{
        font-size: 0.9rem;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.3);
    }
    #sum-result{
        text-align: left;
        font-size: 1.2rem;
        font-weight: bold;
        color: #ff5514;
    }
</style>