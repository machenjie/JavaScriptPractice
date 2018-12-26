<template>
    <div id="root">
        <div id="news"
             ref="news"
             v-for="onenew in news"
             class="news"
             data-toggle="popover"
             data-placement="bottom"
             title="popover title"
             :data-content="onenew.tip">
            <strong>{{onenew.title}}</strong> <br/>
            {{onenew.content}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "inner-html",
        data: function(){
            let news = [
                {
                    title: "BBC - Home",
                    content: `The best of the BBC, with the latest news and sport headlines, weather, TV & radio
                    highlights and much more from across the whole of BBC Online`,
                    tip: "",
                },
                {
                    title: "World - BBC News",
                    content: `Get the latest BBC World News: international news, features and analysis from Africa,
                    the Asia-Pacific, Europe, Latin America, the Middle East, South`,
                    tip: "",
                },
                {
                    title: "BBC - World Service - Home",
                    content: `International, analysis and information from the BBC World Service.`,
                    tip: "",
                },
            ]
            return {
                news,
            }
        },
        mounted() {
            this.$nextTick(function () {
                $('[data-toggle="popover"]').popover({trigger:"hover"});
                let news = this.$refs.news;
                for (let i=0; i<this.news.length; i++){
                    this.news[i].tip = news[i].innerHTML;
                }
                this.news=Object.assign({}, this.news);
            });
        }
    }
</script>

<style scoped>
    .news{
        display: inline-block;
        width: 100%;
        padding: 5px 5px 5px 5px;
        margin: 5px auto 5px auto;
        border: 1px solid #707070;
        border-radius: 2px;
        text-align: left;
    }
</style>
<style>
    .popover{
        opacity: 1 !important; /*Make the entire tooltip not transparent*/
        border: 3px solid #fac41a !important; /*add border*/
    }
    .bs-popover-top .arrow::before, .bs-popover-auto[x-placement^="top"] .arrow::before {
        border-top-color: #fac41a !important; /*change the triangle outside border color when data-placement="top"*/
    }
    .bs-popover-top .arrow::after,.bs-popover-auto[x-placement^="top"] .arrow::after {
        border-top-color: #fac41a !important; /*change the triangle color when data-placement="top"*/
    }
    .bs-popover-right .arrow::before, .bs-popover-auto[x-placement^="right"] .arrow::before {
        border-right-color: #fac41a !important; /*change the triangle outside border color when data-placement="right"*/
    }
    .bs-popover-right .arrow::after,.bs-popover-auto[x-placement^="right"] .arrow::after {
        border-right-color: #fac41a !important; /*change the triangle color when data-placement="right"*/
    }
    .bs-popover-bottom .arrow::before, .bs-popover-auto[x-placement^="bottom"] .arrow::before {
        border-bottom-color: #fac41a !important; /*change the triangle outside border color when data-placement="bottom"*/
    }
    .bs-popover-bottom .arrow::after,.bs-popover-auto[x-placement^="bottom"] .arrow::after {
        border-bottom-color: #fac41a !important; /*change the triangle color when data-placement="bottom"*/
    }
    .bs-popover-left .arrow::before, .bs-popover-auto[x-placement^="left"] .arrow::before {
        border-left-color: #fac41a !important; /*change the triangle outside border color when data-placement="left"*/
    }
    .bs-popover-left .arrow::after,.bs-popover-auto[x-placement^="left"] .arrow::after {
        border-left-color: #fac41a !important; /*change the triangle color when data-placement="left"*/
    }
    .bs-popover-top .popover-header::before, .bs-popover-auto[x-placement^="top"] .popover-header::before {
        border-top-color: #fac41a !important; /*change the border color before the triangle when data-placement="top"*/
    }
    .bs-popover-right .popover-header::before, .bs-popover-auto[x-placement^="right"] .popover-header::before {
        border-right-color: #fac41a !important; /*change the border color before the triangle when data-placement="right"*/
    }
    .bs-popover-bottom .popover-header::before, .bs-popover-auto[x-placement^="bottom"] .popover-header::before {
        border-bottom-color: #fac41a !important; /*change the border color before the triangle when data-placement="bottom"*/
    }
    .bs-popover-left .popover-header::before, .bs-popover-auto[x-placement^="left"] .popover-header::before {
        border-left-color: #fac41a !important; /*change the border color before the triangle when data-placement="left"*/
    }
    .popover-header{
        background-color: #fac41a !important; /*modify background color*/
        text-align: center !important; /*Font left aligned*/
        color:#363636 !important; /*font color*/
        font-size: 1.5rem !important; /*font size*/
        border-color: #fac41a #fac41a #fac41a #fac41a !important; /*Modify border*/
        border-radius: 0px !important; /*Modify radius*/
        max-width: 400px !important; /*Modify width*/
    }
    .popover-body{
        background-color: #fac41a !important; /*modify background color*/
        text-align: center !important; /*Font left aligned*/
        color:#363636 !important; /*font color*/
        max-width: 400px !important; /*Modify width*/
    }
</style>