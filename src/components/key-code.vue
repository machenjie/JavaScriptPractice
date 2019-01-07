<template>
    <div id="root">
        <p v-if='keyCode !== ""'>
            keycode: {{keyCode}}
        </p>
        <p v-else>
            press the keyboard to see the keycode
        </p>
    </div>
</template>

<script>
    export default {
        name: "key-code",
        data: function () {
            let keyCode = "";
            return {
                keyCode,
            }
        },
        mounted() {
            let _this = this;
            this.$nextTick(function () {
                document.onkeydown = function (event) {
                    let eventTmp = event || window.event;
                    _this.keyCode = eventTmp.keyCode;
                }
            })
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