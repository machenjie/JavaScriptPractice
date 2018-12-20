<template>
    <div id="lessons">
        <div class="lesson-item" v-for="ll in lessonList" :key="ll.key">
            <a class="lesson-item-title" data-toggle="collapse" :href="'#lesson-'+ll.key">
                Lesson {{ll.key}} ({{ll.infoList.length}})
            </a>

            <div :id="'lesson-'+ll.key" class="collapse" :class="{show: ll.show}" data-parent="#lessons">
                <a class="lesson-item-info" v-for="info in ll.infoList" :key="info.key" @click="$router.push(info.path)">
                    [{{info.key}}] {{info.content}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lessons",
        props: {
            lessonList: {
            },
        },
    }
</script>

<style scoped>

    #lessons {
        display: inline-block;
        width: 40em;
        vertical-align: middle;
    }
    .lesson-item {
        display: block;
        text-align: left;
    }
    .lesson-item-title{
        display: block;
        margin-bottom: 2px;
        padding-left: 4px;
        border-radius: 2px;
        font-size: 1.1em;
        font-weight: bold;
        cursor: pointer;
        text-decoration: none;
        color: white;
        background-color: #a7b851;
    }
    .lesson-item-info {
        display:block;
        margin-bottom: 2px;
        padding-left: 16px;
        border-radius: 2px;
        font-size: 1em;
        cursor: pointer;
        text-decoration: none;
        color: white;
        background-color: #ffb023;
    }
</style>