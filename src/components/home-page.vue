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
                {key: "7", content: "Easy tab", path: "to-do"},
                {key: "8", content: "Easy JS Almanac", path: "to-do"},
                {key: "9", content: "Single button show/hide a playlist contraction expansion", path: "to-do"},
                {key: "10", content: "Prompt box effect", path: "to-do"},
                {key: "11", content: "Move the mouse over and modify the image path", path: "to-do"},
                {key: "12", content: "Checkbox (checkbox) select all / all not selected / back", path: "to-do"},
            ]},
        {key:"3", show: false, infoList:[
                {key: "1", content: "View data types with typeof", path: "to-do"},
                {key: "2", content: "Parse the numbers with parseInt and sum", path: "to-do"},
                {key: "3", content: "Accumulate button, add 1", path: "to-do"},
                {key: "4", content: "Enter two numbers and compare sizes", path: "to-do"},
                {key: "5", content: "After the page is loaded, add 1", path: "to-do"},
                {key: "6", content: "Determine if the number is a two-digit number", path: "to-do"},
                {key: "7", content: "Web calculator", path: "to-do"},
                {key: "8", content: "Simple web clock", path: "to-do"},
                {key: "9", content: "Countdown clock (100 seconds)", path: "to-do"},
            ]},
        {key:"4", show: false, infoList:[
                {key: "1", content: "SetTimeout application", path: "to-do"},
                {key: "2", content: "Automatically play a slideshow effect", path: "to-do"},
                {key: "3", content: "Automatically change direction and slide effect", path: "to-do"},
                {key: "4", content: "Agruments application one to find the sum of the function parameters", path: "to-do"},
                {key: "5", content: "CSS function one set / read the properties of the object", path: "to-do"},
                {key: "6", content: "The current input box is highlighted", path: "to-do"},
                {key: "7", content: "Array exercises: the use of various array methods", path: "to-do"},
                {key: "8", content: "Event Exercise: Encapsulation function to add and delete events", path: "to-do"},
                {key: "9", content: "Star rating system", path: "to-do"},
            ]},
        {key:"5", show: false, infoList:[
                {key: "1", content: "Simulate the select control", path: "to-do"},
                {key: "2", content: "Click on the page to display the coordinates of the click", path: "to-do"},
                {key: "3", content: "The user presses the keyboard to display the keyCode", path: "to-do"},
                {key: "4", content: "Block the right-click menu (block the default event)", path: "to-do"},
                {key: "5", content: "Follow the mouse movement (large picture display)", path: "to-do"},
                {key: "6", content: "Custom right-click menu", path: "to-do"},
                {key: "7", content: "Control Div with keyboard", path: "to-do"},
                {key: "8", content: "Div flashes", path: "to-do"},
            ]},
        {key:"6", show: false, infoList:[
                {key: "1", content: "Perfect drag", path: "to-do"},
                {key: "2", content: "Imitation Tencent microblogging effect", path: "to-do"},
                {key: "3", content: "Custom multi-level right-click menu", path: "to-do"},
            ]},
        {key:"7", show: false, infoList:[
                {key: "1", content: "Automatic carousel advertising (buffer effect)", path: "to-do"},
                {key: "2", content: "Picture switching (Loading effect)", path: "to-do"},
                {key: "3", content: "Move effect (moving by track)", path: "to-do"},
            ]},
        {key:"8", show: false, infoList:[
                {key: "1", content: "IPhone unlock effect", path: "to-do"},
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