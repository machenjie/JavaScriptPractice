<template>
    <div id="root" @mousemove="mouseMove()">
        screenX:{{screenX}} screenY:{{screenY}}
    </div>
</template>

<script>
    export default {
        name: "mouse-coordinates",
        data: function () {
            let screenX=0;
            let screenY=0;
            return {
                screenX,
                screenY,
            }
        },
        methods: {
            mouseMove: function () {
                this.screenX = event.screenX;
                this.screenY = event.screenY;
            }
        }
    }
</script>

<style scoped>
    #root{
        display: block;
        margin: 0px;
        padding: 0px;
        height: 85vh;
        line-height: 85vh;
        font-size: 1.5rem;
        font-weight: bold;
        color: #ff3f41;
    }
</style>