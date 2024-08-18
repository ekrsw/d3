let dataSet = [125, 3, 55, 199, 223];

d3.select("#myGraph")
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("x", 10)
  .attr("y", function(d, i){
    return i * 25;
  })
  .attr("height", "20px")
  .attr("width", function(d, i){
    return d + "px";
  })

  /* 目盛りを表示するためのリニアスケールを設定 */
  let xScale = d3.scale.linear()
    .domain([0, 300])
    .range([0, 300])
  /* 目盛りを表示 */
  d3.select("#myGraph")
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(10, " + ((1+dataSet.length) * 20+5)+")")  // 軸の位置を調整
    .call(d3.svg.axis()
            .scale(xScale)
            .orient("bottom")
        )
