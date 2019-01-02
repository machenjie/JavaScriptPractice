<template>
    <div id="root">
        {{count}}
    </div>
</template>

<script>
    export default {
        name: "count-down",
        data: function () {
            return {
                count: 10,
            }
        },
        mounted: function () {
            this.$nextTick(function () {
                let _this = this;
                setInterval(function () {
                    if (_this.count === 1){
                        _this.count = "BOOM!!!";
                    }
                    else if(_this.count === "BOOM!!!"){
                        _this.count = 10;
                    }
                    else{
                        _this.count--;
                    }
                }, 1000)
            });
        }
    }
</script>

<style scoped>
    #root{
        margin: 0px 0px 0px 0px;
        padding: 0px 0px 0px 0px;
        font-size: 10rem;
        font-weight: bold;
        line-height: 60vh;
        color: #ff0000;
    }
</style>