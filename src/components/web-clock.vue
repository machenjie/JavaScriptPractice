<template>
    <div id="root">
        <div id="hour">{{hour}}</div>
        <div id="minute">{{minute}}</div>
        <div id="second">{{second}}</div>
    </div>
</template>

<script>
    function getTime() {
        let day = new Date();
        day.setTime(Date.now());
        let hour = day.getHours();
        let minute = day.getMinutes();
        let second = day.getSeconds();
        return {
            hour,
            minute,
            second,
        };
    }
    export default {
        name: "web-clock",
        data: function () {
            let {hour, minute, second} = getTime();
            return {
                hour,
                minute,
                second,
            };
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                setInterval(function () {
                    let {hour, minute, second} = getTime();
                    _this.hour = hour;
                    _this.minute = minute;
                    _this.second = second;
                }, 1000)
            });
        }
    }
</script>

<style scoped>
    #root{
        display: inline-block;
        margin: 0px;
        padding: 0px 0px 20px 20px;
        background-color: #000000;
        width: 410px;
        font-size: 0px;
    }
    #hour, #minute, #second{
        display: inline-block;
        margin: 20px 20px 0px 0px ;
        padding: 0px;
        width: 110px;
        border: 3px solid #a5a5a5;
        border-radius: 3px;
        font-size: 1rem;
        font-weight: bold;
        background-color: #e7e7e7;
    }
</style>