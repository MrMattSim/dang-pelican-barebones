var ng;
dir = [];

///////////////////////////////////////////////
// Plain Sunburst Chart

ng = a.directive('drawing', function($compile) {

    function link(scope, element, attr) {

        updateChart(element, scope.$parent);
        /*
        scope.$parent.$watch('nestData',doStuff);

        function doStuff() { 
            if(!scope.$parent.nestData) { return }
            updateChart(element, scope.$parent);
        }
        */

    };

    function updateChart(element,pscope) {

        console.log('updating chart');

        var data = pscope.nestData;


        /////////////////////////////////////////
        // Create chart
        //
        // data has not been loaded yet.
        // start by initializing variables 
        // that don't depend on the data. 

        var el = element[0];

        var txt = $("div#drawing");


        // --------------------------
        // add display for details 
        // about current mouseover selection
        
        // assemble the tags, 
        // then compile the html
        // select element of interest with angular.element
        // and append the compiled tags
        //
        var br = $("<br />").appendTo(txt);


        var panel = $("<div />", {
                "class" : "panel panel-primary",
                "id" : "selectedPointPanel"
            });

        var panelhead = $("<div />", {
                "class" : "panel-heading"
            }).appendTo(panel);
        
        var h3 = $("<h3 />", {
                "class" : "panel-title"
            }).text("Selected Arc")
            .appendTo(panelhead);



        var panelbody = $("<div />", {
                "class" : "panel-body"
            }).appendTo(panel);

        var maindiv = $("<div />", {
                /*"ng-show" : "selectedPoint"*/
            }).appendTo(panelbody);

        var h = $("<h3 />")
            .html("Name: [[selectedPoint.name]]")
            .appendTo(maindiv);

        var p = $("<p />", {
                "class" : "lead"
            })
            .html("Frequency: [[selectedPoint.freq | number:4]]")
            .appendTo(maindiv);


        angular.element(txt).prepend($compile(panel)(pscope));




        ///////////////////////////////////
        // now draw the svg with d3

        // ---------------
        // the chart itself:

        var margin = {
            top:    10, 
            right:  40, 
            bottom: 10, 
            left:   40
        };
        
        var width   = 400 - margin.right - margin.left,
            height  = 400 - margin.top   - margin.bottom;

        var svg = d3.select("div#drawing").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + (height / 2 + 10) + ")");


        // ---------------
        // chart-specific, 
        // data-independent variables:

        var dataset = [ 5, 10, 15, 20, 25 ];

        var circles = svg.selectAll("circle")
            .data(dataset)
            .enter()
            .append("circle");

        circles.attr("cx", function(d, i) {
                     return (i * 50) + 25;
                 })
                .attr("cy", h/2)
                .attr("r", function(d) {
                     return d;
                })
                .attr("fill", "yellow")
                .attr("stroke", "orange")
                .attr("stroke-width", function(d) {
                    return d/2;
                });





    }

    return {
        link: link,
        restrict: "E",
        scope: { }
    };
});
dir.push(ng);


