d3.csv("mydata.csv", function(error, data){
    if(error){
      console.log(error);
    }

    let dataSet = [];
    for(let i=0; i<data.length; i++){
        dataSet.push(data[i].item1); // item1のラベルの値だけ抽出
    }
    console.log(dataSet);

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
      .attr("width", function(d, i){
        return d + "px";
      })
});
