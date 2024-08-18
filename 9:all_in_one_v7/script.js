let dataSet = [];

d3.csv("mydata.csv").then(function(data){
    for(let i=0; i<data.length; i++){
        dataSet.push(data[i].item1);
    }
    d3.select("#myGraph")
      .selectAll("rect")
      .data(dataSet)
      .enter()
      .append("rect")
      .attr("x", 10)
      .attr("y", function(d, i){
        return i * 25;
      })
      .on("click", function(){
        d3.select(this)
          .style("fill", "cyan")
      })
      .attr("height", "20px")
      .attr("width", "0px")
      .transition()
      .delay(function(d, i){
        return i * 500;
      })
      .duration(2500)
      .attr("width", function(d, i){
        return d + "px";
      });

    /* 目盛りを表示するためのリニアスケールを設定 */
    let xScale = d3.scaleLinear()
        .domain([0, 300])
        .range([0, 300]);

    /* 目盛りを表示 */
    d3.select("#myGraph")
      .append("g")
      .attr("class", "axis")
      .attr("transform", "translate(10, " + ((1+dataSet.length) * 20+5) + ")")
      .call(d3.axisBottom(xScale).ticks(6));
});

// ボタンクリック時の処理
d3.select("#updateButton")
  .on("click", function(){
    for(let i=0; i<dataSet.length; i++){
        dataSet[i] = Math.floor(Math.random() * 320); // 0~320の乱数
    }
    d3.select("#myGraph")
      .selectAll("rect")
      .data(dataSet)
      .transition()
      .duration(2500)
      .attr("width", function(d, i){
        return d + "px";
    });
  });
