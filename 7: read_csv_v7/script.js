// v5以降では、Promiseを返すため、.then()を使用してデータを処理する必要がある

d3.csv("mydata.csv").then(function(data){
  let dataSet = [];
  for(let i=0; i<data.length; i++){
    dataSet.push(data[i].item1);
  }
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
})
// Compare this snippet from 7%3A%20read_csv%20copy_v7/script.js: