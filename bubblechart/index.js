d3 = require("d3@5")
data = FileAttachment("flare-2.json").json()

width = 932
height = width
format = d3.format(",d")
color = d3.scaleLinear()
    .domain([0, 5])
    .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
    .interpolate(d3.interpolateHcl)
chart = {
    const root = pack(data);
    let focus = root;
    let view;



    return svg.node();
}