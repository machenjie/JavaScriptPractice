<template>
    <div id="root">
        <div id="box" :style="{opacity: boxOpacity}" @mouseover="boxMouseOver" @mouseout="boxMouseOut">
            Move mouse here
        </div>
    </div>
</template>

<script>
    export default {
        name: "div-flash",
        data: function () {
            let boxOpacity = 1;
            return {
                boxOpacity,
            }
        },
        methods: {
            boxMouseOver: function () {
                if (typeof(this.interval) === "undefined"){
                    let _this = this;
                    this.interval = setInterval(function () {
                        _this.boxOpacity = _this.boxOpacity===0?1:0;
                    }, 60);
                }
            },
            boxMouseOut: function () {
                if (typeof(this.interval) !== "undefined") {
                    clearInterval(this.interval);
                    delete this.interval;
                    this.boxOpacity = 1;
                }
            },
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px;
    }
    #box{
        display: inline-block;
        margin: 0px;
        padding: 0px;
        width: 300px;
        height: 300px;
        font-size: 1.5rem;
        font-weight: bold;
        line-height: 300px;
        color: #353334;
        background-color: #f03c04;
        border: 1px solid #7a7a7a;
        cursor: pointer;
    }
</style>