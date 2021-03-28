
const INSERT = 1;
const DELETE = -1;
const EQUAL = 0;

const NODE_SPACING = 150;
const NODE_WIDTH = 100;

//using the constants for the keys was causing a problem, no idea why
const OPColors = {"-1": "pink", "1": "lightgreen", "0": "lightgray"};
const OPTop = {"-1": 10, "1": 100, "0": 50};




/**
 * Helper function get fetch json data from a URL
 * 
 * @param {string} url URL to get JSON data from 
 * @param {*} callback called when data is back
 */
function getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
    xhr.send();
}



/**
 * Helper function get fetch XML data from a URL
 * 
 * @param {string} url URL to get JSON data from 
 * @param {*} callback called when data is back
 */
 function getXML(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'text';
  xhr.onload = function() {
      var status = xhr.status;
      if (status === 200) {
          callback(null, xhr.response);
      } else {
          callback(status, xhr.response);
      }
  };
  xhr.send();
}


/**
 * Populates a given listbox with data from JSON
 * 
 * @param {JSON Label records} data 
 */
function populateListFromJSON(data, list) {

    let option;

    for (let i = 0; i < data.length; i++) {
        option = document.createElement("option");
        option.text = data[i].content;
        option.value = data[i].id;
        list.add(option);
    }
}



/**
 * Diffs two string and outputs the formatted text to a div
 * 
 * @param {element} diffDivElement Where to output the formatted diff text
 * @param {string} text1 
 * @param {string} text2 
 */
function diffText(diffDivElement, text1, text2) {
    
    let dmp = new diff_match_patch();

    //compute the diff
    dmp.Diff_Timeout = 5;
    dmp.Diff_EditCost = 4;

    let diffNodes = dmp.diff_main(text1, text2);
    dmp.diff_cleanupSemantic(diffNodes);
    diffDivElement.innerHTML = dmp.diff_prettyHtml(diffNodes) + "<br><br>";

    //removing for now, questionable value
    //diagrapDiff(diffNodes);
    
  }



  function diagrapDiff(diffNodes) {


    //build the data for the visualization
    let nodeDataArray = []; // array of data for the nodes
    let linkDataArray = []; // array of data for the links between nodes

    //track the X location for each node
    //the chart does not layout the nodes how I want them
    let currentX = 0;

    //run through each diff node and add it to the nodeDataArray.  This will get the data into the format needed by the charting library.
    for (let index = 0; index < diffNodes.length; index++) {
      let op = diffNodes[index][0];    // Operation (insert, delete, equal)
      let data = diffNodes[index][1];  // Text of change.


      //add the data and set the location - x defaults to 0 and will get set later
      nodeDataArray.push({ id: index, color: OPColors[op], label: data, y: OPTop[op], x: 0, widthConstraint: { maximum: NODE_WIDTH } });

      //next section is to build the links and set the x position

      if ((op == EQUAL) && (index != diffNodes.length - 1)) {
        
        //x position - we want INSERT and DELETE node to be at the same x when
        //we they both appear between two EQUAL nodes
        //to control this, we always advance the x position on a new EQUAL
        //we also advance it after the EQUAL node since we know this is either the last node
        //or the next node will be an INSERT or DELETE
        //this set the currentX to be the right value for the next INSERT or DELETE node
        //and we just use that vlaue below
        currentX += NODE_SPACING;
        nodeDataArray[nodeDataArray.length -1].x = currentX;
        currentX += NODE_SPACING;

        //loop through adding the next items until you hit an item that did not change        
        for (let i = index+1; i < diffNodes.length; i++) {          
          if(diffNodes[i][0] != EQUAL) {
            //we know we will point to the next node
            linkDataArray.push({ from: index, to: i});
          }
          else {
            break;
          }
        }
      }
      else {
        //see giant comment above, x location is controlled by the location of the EQUALS nodes
        nodeDataArray[nodeDataArray.length - 1].x = currentX;

        //insert or delete always points to just one node, find the next EMPTY node
        for (let i = index+1; i < diffNodes.length; i++) {
          if(diffNodes[i][0] == EQUAL) {
            linkDataArray.push({ from: index, to: i});
            break;
          }
        }
      }
    }

    //one more pass to find the case or EMPTY -> INSERT|DELETE -> EMPTY
    //need a link from the first EMPTY node to the second EMPTY node
    for (let index = 0; index < diffNodes.length-2; index++) {
      let op = diffNodes[index][0];    // Operation (insert, delete, equal)

      if((op == EQUAL) && (diffNodes[index+2][0] == EQUAL)) {
          linkDataArray.push({ from: index, to: index + 2});
      }
    }

    var container = document.getElementById("diagramDiv");
    var data = {
      nodes: nodeDataArray,
      edges: linkDataArray
    };
  
    var options = {
        edges: {
          font: { size: 12 },
          widthConstraint: { maximum: 90 },
        },
        nodes: {
          shape: "box",
          margin: 10,
          widthConstraint: { maximum: 200 },
        },
        physics: { enabled: false },
      };
    var network = new vis.Network(container, data, options);

  }



  /**
   * Grabs the timeline and populates the two list boxes and timeline visualizaion
   * @param {div element} container 
   * @param {div element} listA
   * @param {div element} listB
   */
  function loadTimeline(container, listA, listB) {

    getJSON("timeline1.json",
    function(err, data) {
      if (err !== null) {
        alert("Something went wrong: " + err);
      } else {

        //console.log("data", data);
        //populateListFromJSON(data, document.getElementById("drugLabelListA"));
        //populateListFromJSON(data, document.getElementById("drugLabelListB"));
        populateListFromJSON(data, listA);
        populateListFromJSON(data, listB);

        var items = new vis.DataSet();
        items.add(data);

        // Configuration for the Timeline
        const options = { selectable: true, multiselect: true };

        // Create a Timeline
        const timeline = new vis.Timeline(container, items, options);

        timeline.fit();

        timeline.on("click", function (properties) {
        
          let selectedItemCount = timeline.getSelection().length;

          //if we already have 3 items selected we really just want the last item clicked to be selected
          if (selectedItemCount == 3) {
            timeline.setSelection(properties.item);
            selectedItemCount = timeline.getSelection().length;
          }

          if (selectedItemCount == 1) {
            let listA = document.getElementById("drugLabelListA");
            listA.value = properties.item;
          }
          else {
            let listB = document.getElementById("drugLabelListB");
            listB.value = properties.item;
          }
        });
      }
    });
  }
