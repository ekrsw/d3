let dataSet = [300, 130, 5, 60, 240]

d3.select("#myGraph")
  .selectAll("rect")
  .data(dataSet)
  .enter()
  .append("rect")
  .attr("x", 0)
  .attr("y", function(d, i){
    return i * 25;
  })
  .attr("height", "20px")
  .attr("width", "0px") // 最初、棒グラフの横幅を0pxにする
  .transition() // 横幅をアニメーションさせる
  .delay(function(d, i){
    return i * 500; // 0.5秒ごとに描画するように遅延させる
  })
  .duration(2500) // 2.5秒かけてアニメーションさせる
  .attr("width", function(d, i){
    return d + "px";
  })

d3.select("#updateButton")
  .on("click", function(){
    for(let i=0; i<dataSet.length; i++){
      dataSet[i] = Math.floor(Math.random() * 320); //0~320の乱数
    }
    d3.select("#myGraph")
      .selectAll("rect")
      .data(dataSet)
      .transition()
      .attr("width", function(d, i){
        return d + "px";
      })
  })