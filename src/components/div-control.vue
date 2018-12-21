<template>
    <div>
        <div id="btn-area">
            <button id="double-height" class="btn bg-info" @click="doubleHeight">double height</button>
            <button id="double-width" class="btn bg-info" @click="doubleWidth">double width</button>
            <button id="change-color" class="btn bg-info" @click="changeColor">change color</button>
            <button id="hide-show" class="btn bg-info" @click="showExample=!showExample">{{showExample?"hide":"show"}}</button>
            <button id="reset" class="btn bg-info" @click="reset">reset</button>
        </div>
        <div id="example-area" v-if="showExample">
            <div ref="example" id="example" :style="exampleStyle">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "div-control",
        data: function () {
            let exampleStyle = {
                display: "inline-block",
                width: "50px",
                height: "50px",
                backgroundColor: "#000000"
            };
            let showExample = true;
            let rememberExampleStyle = Object.assign({}, exampleStyle);
            return {
                exampleStyle,
                showExample,
                rememberExampleStyle,
            }
        },
        methods:{
            doubleHeight(){
                this.exampleStyle.height = 2*this.$refs.example.clientHeight+"px";
            },
            doubleWidth(){
                this.exampleStyle.width = 2*this.$refs.example.clientWidth+"px";
            },
            changeColor(){
                this.exampleStyle.backgroundColor = '#'+Math.floor(Math.random()*255).toString(6)
            },
            reset(){
                this.showExample = true;
                this.exampleStyle = Object.assign({}, this.rememberExampleStyle);
            }
        }
    }
</script>

<style scoped>

    #btn-area{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
    #btn-area .btn{
        width: 150px;
        color: #19155d;
    }
    #example-area{
        margin-top: 10px;
        margin-bottom: 10px;
        text-align: center;
    }
</style>