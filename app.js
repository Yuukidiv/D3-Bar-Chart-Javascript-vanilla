
const api_url = "https://disease.sh/v3/covid-19/countries?sort=casesPerOneMillion"
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    const countryData = data.map((country) => country["casesPerOneMillion"]);
    console.log(countryData)
    const countryName = data.map((country) => country['country']);
    console.log(countryName)

    const w = 1500;
    const h = 700;
    const padding = 60;
const xScale = d3.scaleLinear()
                .domain([0, d3.max(countryData)])
                .range([padding, w - padding]);
const yScale = d3.scaleLinear()
                    .domain([0, d3.max(countryData)])
                    .range([h - padding, padding]);
console.log(xScale)



const svg = d3.select("body")
                .append("svg")
                .attr("width", w)
                .attr("height", h);

svg.selectAll("rect")
            .data(countryData)
            .enter()
            .append("rect")
            .attr("x", (d, i) => i *6)
            .attr("y", (d) => yScale(d))
            .attr("width", 5)
            .attr("height", (d, i) => d)
            .attr("class", "bar")
            .attr("fill", "navy")
            
            svg.selectAll("rect")
            .data(countryName)
            .enter()
            .append("title")
            .text(countryName)


}
getData();


