<template>
    <div id="root">
        <div id="input-area" class="form-group">
            <label for="first">First:</label>
            <input id="first" type="text" class="form-control" v-model="firstPara" name="first-para"/>
            <label for="second">Second:</label>
            <input id="second" type="text" class="form-control" v-model="secondPara" name="second-para"/>
            <sapn id="equal" :style='{visibility: concat !== ""?"visible":"hidden"}'>
                =
            </sapn>
            <div id="result" :style='{visibility: concat !== ""?"visible":"hidden"}'>
                {{concat}}
            </div>
        </div>
        <button id="concat" type="submit" class="btn bg-info" @click="together(firstPara, secondPara)">concat</button>
    </div>
</template>

<script>
    export default {
        name: "func-invoke",
        data: function () {
            return {
                firstPara:"",
                secondPara:"",
                concat:"",
            }
        },
        methods:{
            together:function (firstPara, secondPara) {
                this.concat = firstPara+secondPara;
            }
        }
    }
</script>

<style scoped>

    #input-area{
        text-align: center;
        font-weight: bold;
    }

    #input-area input{
        display: inline-block;
        width: 150px;
        margin: 10px 10px 10px 10px;
    }

    #equal{
        margin: 10px 10px 10px 10px;
    }

    #result{
        display: inline-block;
        margin: 10px 10px 10px 10px;
        width: 150px;
        text-align: left;
    }

</style>