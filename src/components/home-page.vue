<template>
    <lessons :lesson-list='lessonList'></lessons>
</template>

<script>
    import lessons from "./lessons"

    let lessonList = [
        {key:"1", show: true, infoList:[
                {key: "1", content: "Control the Div attribute", path: "div-control"},
                {key: "2", content: "Web page skinning", path: "web-skin"},
                {key: "3", content: "Invoke function with the input parameters", path: "func-invoke"},
                {key: "4", content: "Mouse move in/out to change style", path: "mouse-over"},
                {key: "5", content: "Tooltip use", path: "tool-tip"},
            ]},
        {key:"2", show: false, infoList:[
                {key: "1", content: "Dropdown use", path: "dropdown"},
                {key: "2", content: "Access innerHTML and popover", path: "inner-html"},
                {key: "3", content: "Sum of all the numbers", path: "sum-array"},
                {key: "4", content: "Pop-up dialog", path: "popup-dialog"},
                {key: "5", content: "Modify the css of the div", path: "css-modify"},
                {key: "6", content: "Picture list and picture transparency", path: "picture-opacity"},
                {key: "7", content: "Easy nav tab", path: "easy-nav-tab"},
                {key: "8", content: "Easy JS Almanac", path: "js-almanac"},
                {key: "9", content: "Move the mouse over and modify the image path", path: "beauty-girl"},
                {key: "10", content: "Checkbox (checkbox) use", path: "checkbox-use"},
            ]},
        {key:"3", show: false, infoList:[
                {key: "1", content: "Count down", path: "count-down"},
                {key: "2", content: "Web calculator", path: "web-calculator"},
                {key: "3", content: "Simple web clock", path: "web-clock"},
            ]},
        {key:"4", show: false, infoList:[
                {key: "1", content: "Sub nav tab", path: "sub-nav-tab"},
                {key: "2", content: "Automatically play slide(in-out)", path: "autoplay-slide"},
                {key: "3", content: "The current input box is highlighted", path: "focus-highlight"},
                {key: "4", content: "Star rating system", path: "star-rating"},
            ]},
        {key:"5", show: false, infoList:[
                {key: "1", content: "Show the coordinates of the mouse", path: "mouse-coordinates"},
                {key: "2", content: "The user presses the keyboard to display the keyCode", path: "key-code"},
                {key: "3", content: "Block the right-click menu", path: "block-context-menu"},
                {key: "4", content: "Follow the mouse movement", path: "mouse-move"},
                {key: "5", content: "Custom right-click menu", path: "custom-context-menu"},
                {key: "6", content: "Control box with keyboard", path: "control-box"},
                {key: "7", content: "Div flash", path: "div-flash"},
            ]},
        {key:"6", show: false, infoList:[
                {key: "1", content: "div drag", path: "div-drag"},
                {key: "2", content: "Imitation Tencent blog effect", path: "tencent-blog"},
                {key: "3", content: "Custom multi-level context menu", path: "multi-level-context-menu"},
            ]},
        {key:"7", show: false, infoList:[
                {key: "1", content: "Automatically play slide(up-down)", path: "autoplay-slide-updown"},
                {key: "2", content: "Picture switching (Loading animation)", path: "pic-load-animation"},
                {key: "3", content: "Move character by track", path: "move-character"},
            ]},
        {key:"8", show: false, infoList:[
                {key: "1", content: "IPhone unlock effect", path: "iphone-unlock"},
                {key: "2", content: "Custom scroll bar", path: "to-do"},
                {key: "3", content: "Drag and drop a Clone", path: "to-do"},
                {key: "4", content: "Drag and drop and change size", path: "to-do"},
            ]},
        {key:"9", show: false, infoList:[
                {key: "1", content: "Imitation Apple Computer Taskbar Menu", path: "to-do"},
                {key: "2", content: "Puzzle game", path: "to-do"},
                {key: "3", content: "Simulation form control", path: "to-do"},
            ]},
        {key:"10", show: false, infoList:[
                {key: "1", content: "Add a method to the array (sum, maximum)", path: "to-do"},
                {key: "2", content: " Automated Carousel (Object-Oriented Edition)", path: "to-do"},
                {key: "3", content:  "Motion Framework (Object-Oriented Edition)", path: "to-do"},
                {key: "4", content:  "Photo wall one multi-instance demo (object-oriented version)", path: "to-do"},
                {key: "5", content:  "Drag and drop library (object-oriented version)", path: "to-do"},
                {key: "6", content:  "Seamless scrolling (object-oriented version)", path: "to-do"},
                {key: "7", content:  "Delayed loading (object-oriented version)", path: "to-do"},
                {key: "8", content:  "Imitation Tencent game Hero Kill official website Flash effect", path: "to-do"},
                {key: "9", content:  "Baidu has a bar display effect", path: "to-do"},
                {key: "10", content: "Fireworks effect (object-oriented version)", path: "to-do"},
                {key: "11", content: "Crossing the FireWire official website navigation menu", path: "to-do"},
                {key: "12", content: "Baidu Billboard TAB switch", path: "to-do"},
                {key: "13", content: "IBM official website navigation bar effect", path: "to-do"},
                {key: "14", content: "Interview Questions - Dynamic Generation Form", path: "to-do"},
            ]},
    ];

    export default {
        name: "home-page",
        data: function(){
            return {
                lessonList,
            }
        },
        components:{
            lessons
        }
    }
</script>

<style scoped>

</style>