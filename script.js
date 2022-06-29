var dataset = [2, 4, 5, 5, 7, 9, 12, 9, 10];
var chartWidth = 500, chartHeight = 300, barPadding = 5;
var barWidth = (chartWidth / dataset.length);

var svg = d3.select('svg')
.attr("width", chartWidth)
.attr("height", chartHeight);

var yScale = d3.scaleLinear()
  .domain([0, d3.max(dataset)])
  .range([0, chartHeight])

var barChart = svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("y", function(d) {
    return chartHeight - yScale(d);})
.attr("height", function(d){
    return yScale(d);})
.attr("width", barWidth - barPadding)
.attr("fill", '#F2BF23')
.attr("transform", function(d, i){
    var translate = [barWidth * i, 0];
    return "translate("+ translate +")";
});

var text = svg.selectAll("text")
.data(dataset)
.enter()
.append("text")
.text(function(d){
    return d;
})
.attr("y", function(d, i){
    return chartHeight - yScale(d) - 2;
})
.attr("x", function(d, i){
    return barWidth * i + 10;
})
.attr("fill", "#A64C38");