<template>
    <div id="lessons">
        <div class="lesson-item" v-for="cl in classList" :key="cl.key">
            <a class="lesson-item-title" data-toggle="collapse" :href="'#lesson-'+cl.key">
                Lesson {{cl.key}} ({{cl.infoList.length}})
            </a>

            <div :id="'lesson-'+cl.key" class="collapse" :class="{show: cl.show}" data-parent="#lessons">
                <a class="lesson-item-info" v-for="info in cl.infoList" :key="info.key" href="#">
                    [{{info.key}}] {{info.content}}
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "lessons",
        data: function () {
            let classList = [
                {key:"1", show: true, infoList:[
                        {key: "1", content: "Control the Div attribute"},
                        {key: "2", content: "Web page skinning"},
                        {key: "3", content: "The function receives the parameters and pops up"},
                        {key: "4", content: "Turn three Divs into red with a loop"},
                        {key: "5", content: "Mouse move in/out to change style"},
                        {key: "6", content: "Remember the password prompt box"},
                        ]},
                {key:"2", show: false, infoList:[
                        {key: "1", content: "Baidu input method"},
                        {key: "2", content: "Click on Div to display its innerHTML"},
                        {key: "3", content: "Find the sum of all the numbers in the array"},
                        {key: "4", content: "Pop-up layer effect"},
                        {key: "5", content: "Function arguments, changing the value of any Div attribute"},
                        {key: "6", content: "Picture list: mouse movement in/out to change picture transparency"},
                        {key: "7", content: "Easy tab"},
                        {key: "8", content: "Easy JS Almanac"},
                        {key: "9", content: "Single button show/hide a playlist contraction expansion"},
                        {key: "10", content: "Prompt box effect"},
                        {key: "11", content: "Move the mouse over and modify the image path"},
                        {key: "12", content: "Checkbox (checkbox) select all / all not selected / back"},
                        ]},
                {key:"3", show: false, infoList:[
                        {key: "1", content: "View data types with typeof"},
                        {key: "2", content: "Parse the numbers with parseInt and sum"},
                        {key: "3", content: "Accumulate button, add 1"},
                        {key: "4", content: "Enter two numbers and compare sizes"},
                        {key: "5", content: "After the page is loaded, add 1"},
                        {key: "6", content: "Determine if the number is a two-digit number"},
                        {key: "7", content: "Web calculator"},
                        {key: "8", content: "Simple web clock"},
                        {key: "9", content: "Countdown clock (100 seconds)"},
                        ]},
                {key:"4", show: false, infoList:[
                        {key: "1", content: "SetTimeout application"},
                        {key: "2", content: "Automatically play a slideshow effect"},
                        {key: "3", content: "Automatically change direction and slide effect"},
                        {key: "4", content: "Agruments application one to find the sum of the function parameters"},
                        {key: "5", content: "CSS function one set / read the properties of the object"},
                        {key: "6", content: "The current input box is highlighted"},
                        {key: "7", content: "Array exercises: the use of various array methods"},
                        {key: "8", content: "Event Exercise: Encapsulation function to add and delete events"},
                        {key: "9", content: "Star rating system"},
                        ]},
                {key:"5", show: false, infoList:[
                        {key: "1", content: "Simulate the select control"},
                        {key: "2", content: "Click on the page to display the coordinates of the click"},
                        {key: "3", content: "The user presses the keyboard to display the keyCode"},
                        {key: "4", content: "Block the right-click menu (block the default event)"},
                        {key: "5", content: "Follow the mouse movement (large picture display)"},
                        {key: "6", content: "Custom right-click menu"},
                        {key: "7", content: "Control Div with keyboard"},
                        {key: "8", content: "Div flashes"},
                        ]},
                {key:"6", show: false, infoList:[
                        {key: "1", content: "Perfect drag"},
                        {key: "2", content: "Imitation Tencent microblogging effect"},
                        {key: "3", content: "Custom multi-level right-click menu"},
                        ]},
                {key:"7", show: false, infoList:[
                        {key: "1", content: "Automatic carousel advertising (buffer effect)"},
                        {key: "2", content: "Picture switching (Loading effect)"},
                        {key: "3", content: "Move effect (moving by track)"},
                        ]},
                {key:"8", show: false, infoList:[
                        {key: "1", content: "IPhone unlock effect"},
                        {key: "2", content: "Custom scroll bar"},
                        {key: "3", content: "Drag and drop a Clone"},
                        {key: "4", content: "Drag and drop and change size"},
                        ]},
                {key:"9", show: false, infoList:[
                        {key: "1", content: "Imitation Apple Computer Taskbar Menu"},
                        {key: "2", content: "Puzzle game"},
                        {key: "3", content: "Simulation form control"},
                        ]},
                {key:"10", show: false, infoList:[
                        {key: "1", content: "Add a method to the array (sum, maximum)"},
                        {key: "2", content: " Automated Carousel (Object-Oriented Edition)"},
                        {key: "3", content:  "Motion Framework (Object-Oriented Edition)"},
                        {key: "4", content:  "Photo wall one multi-instance demo (object-oriented version)"},
                        {key: "5", content:  "Drag and drop library (object-oriented version)"},
                        {key: "6", content:  "Seamless scrolling (object-oriented version)"},
                        {key: "7", content:  "Delayed loading (object-oriented version)"},
                        {key: "8", content:  "Imitation Tencent game Hero Kill official website Flash effect"},
                        {key: "9", content:  "Baidu has a bar display effect"},
                        {key: "10", content: "Fireworks effect (object-oriented version)"},
                        {key: "11", content: "Crossing the FireWire official website navigation menu"},
                        {key: "12", content: "Baidu Billboard TAB switch"},
                        {key: "13", content: "IBM official website navigation bar effect"},
                        {key: "14", content: "Interview Questions - Dynamic Generation Form"},
                        ]},
                ];
            return {
                classList
            }
        },
        methods: {
            change: function () {
                console.log('change');
                console.log(this.classList);
                for(let i=0; i<this.classList.length; i++){
                    this.classList[i].backgroundColor = this.classList[i].show? 'blue':'aqua';
                    for(let j=0; j<this.classList[i].infoList.length; j++) {
                        this.classList[i].infoList[j].backgroundColor = this.classList[i].show? 'darkblue':'chocolate';
                    }
                }
                this.classList = Object.assign({}, this.classList);
            }
        }
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