// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then(function(data) {
   
    // get the metadata field
    var metadata = data.metadata;

    // Filter the metadata for the object with the desired sample number
    var resultArray = metadata.filter(obj => obj.id == sample);
    var result = resultArray[0];

    // Use d3 to select the panel with id of `#sample-metadata`
    var panel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    panel.html("");

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    Object.entries(result).forEach(([key, value]) => {
      panel.append("h6").text(`${key}: ${value}`);
    });
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    var samples = data.samples;

    // Filter the samples for the object with the desired sample number
    var resultArray = samples.filter(obj => obj.id == sample);
    var result = resultArray[0];

    // Get the otu_ids, otu_labels, and sample_values
    var otuIds = result.otu_ids;
    var otuLabels = result.otu_labels;
    var sampleValues = result.sample_values;

    // Build a Bubble Chart
    var trace = [{
      x: otuIds,
      y: sampleValues,
      text: otuLabels,
      mode: 'markers',
      marker: {
        size: sampleValues,
        color: otuIds,
        colorscale: 'Viridis',
        opacity: 0.6
      }
    }];
  
    var data = [trace];
  
    // Define the layout for the Bubble Chart
    var bubbleLayout = {
      title: 'Bubble Chart for OTU Samples',
      xaxis: { title: 'OTU ID' },
      yaxis: { title: 'Sample Values' }
    };

    // Render the Bubble Chart
    Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    // For the Bar Chart, map the otu_ids to a list of strings for your yticks
    var yticks = otuIds.slice(0, 10).map(otuId => `OTU ${otuId}`).reverse();

    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    var trace = {
      x: topSampleValues,
      y: topOtuIds.map(otuId => `OTU ${otuId}`),
      text: topOtuLabels,
      type: 'bar',
      orientation: 'h'
    };
  
    var data = [trace];
  
    // Define the layout for the Bar Chart
    var layout = {
      title: 'Top 10 OTUs',
      xaxis: { title: 'Sample Values' },
      yaxis: { title: 'OTU ID' }
    };

    // Render the Bar Chart
    Plotly.newPlot('bar', data, layout); });}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
