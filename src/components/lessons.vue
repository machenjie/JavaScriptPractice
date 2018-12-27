<template>
    <div id="lessons">
        <div class="lesson-item" v-for="ll in lessonList" :key="ll.key">
            <a class="lesson-item-title" data-toggle="collapse" :href="'#lesson-'+ll.key">
                Lesson {{ll.key}} ({{ll.infoList.length}})
            </a>

            <div :id="'lesson-'+ll.key" class="collapse" :class="{show: ll.show}" data-parent="#lessons">
                <a class="lesson-item-info" v-for="info in ll.infoList" :key="info.key" @click="$router.push(info.path)"
                   :style="lessonItemStyleList[ll.key-1][info.key-1]"
                   @mouseover='mouseOverLesson(ll, info)'
                   @mouseout='mouseOutLesson()'>
                    [{{info.key}}] {{info.content}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>

    const INIT_LESSON_STYLE = {
        backgroundColor: "#ffb023",
        color: "#ffffff",
        fontWeight: "normal",
    }

    const HOVER_LESSON_STYLE = {
        backgroundColor: "#576eff",
        color: "#ff7c66",
        fontWeight: "bold",
    }

    function initLessonStyleFromLessonList(val) {
        let lessonItemStyleList = new Array(val.length);
        for (let i = 0; i < val.length; i++) {
            lessonItemStyleList[i] = new Array(val[i].infoList.length);
            for (let j = 0; j < val[i].infoList.length; j++) {
                lessonItemStyleList[i][j] = INIT_LESSON_STYLE;
            }
        }
        return lessonItemStyleList;
    }

    export default {
        name: "lessons",
        props: {
            lessonList: {},
        },
        data: function () {
            return {
                lessonItemStyleList: initLessonStyleFromLessonList(this.lessonList),
            }
        },
        watch: {
            lessonList: function () {
                this.lessonItemStyleList = Object.assign({}, initLessonStyleFromLessonList(this.lessonList));
            }
        },
        methods: {
            mouseOverLesson: function (ll, info) {
                this.lessonItemStyleList = initLessonStyleFromLessonList(this.lessonList);
                this.lessonItemStyleList[ll.key-1][info.key-1] = HOVER_LESSON_STYLE;
                this.lessonItemStyleList = Object.assign({}, this.lessonItemStyleList);
            },
            mouseOutLesson: function () {
                this.lessonItemStyleList = Object.assign({}, initLessonStyleFromLessonList(this.lessonList));
            }
        },
    }
</script>

<style scoped>

    #lessons {
        display: inline-block;
        width: 40rem;
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
        font-size: 1.1rem;
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
        font-size: 1rem;
        cursor: pointer;
        text-decoration: none;
        color: white;
        background-color: #ffb023;
    }
</style>