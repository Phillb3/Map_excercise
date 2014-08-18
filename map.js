
//map JS
svg.append("path")
    .datum(topojson.feature(shape, shape.objects.states))
    .attr("class", "border border--state")
    .attr("d", path);