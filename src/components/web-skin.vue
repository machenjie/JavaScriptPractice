<template>
    <div>
        <div>
            <div class="skin" v-for="skin in skinList" :key="skin.key" :style="skin.style">
            </div>
        </div>
        <div>
            <div class="tab" v-for="tab in tabList" :key="tab.key" :style="tab.style">
                <a>{{tab.text}}</a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "web-skin",
        data: function () {
            let skinList = [
                {key: 1, style: {
                        backgroundColor: "#FF0000",
                    }},
                {key: 2, style: {
                        backgroundColor: "#00FF00",
                    }},
                {key: 3, style: {
                        backgroundColor: "#0000FF",
                    }},
            ];
            let tabList = [
                {key: 1, text: 'News', style: {
                        backgroundColor: "#FF0000",
                    }},
                {key: 2, text: 'Amuse', style: {
                        backgroundColor: "#FF0000",
                    }},
                {key: 3, text: 'Sports', style: {
                        backgroundColor: "#FF0000",
                    }},
                {key: 4, text: 'Film', style: {
                        backgroundColor: "#FF0000",
                    }},
                {key: 5, text: 'Music', style: {
                        backgroundColor: "#FF0000",
                    }},
                {key: 6, text: 'Travel', style: {
                        backgroundColor: "#FF0000",
                    }},
            ];
            return {
                skinList,
                tabList,
            }
        }
    }
</script>

<style scoped>

    .skin{
        display: inline-block;
    }
    .tab{
        display: inline-block;
    }
</style>