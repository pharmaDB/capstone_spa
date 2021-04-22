
const INSERT = 1;
const DELETE = -1;
const EQUAL = 0;

const NODE_SPACING = 250;
const NODE_WIDTH = 200;

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
function diffText(diffDivElement, dmp, diffNodes) {
  //diffDivElement.innerHTML = dmp.diff_prettyHtml(diffNodes) + "<br><br>";    

  let output = "";

  for (let index = 0; index < diffNodes.length; index++) {
    let op = diffNodes[index][0];    // Operation (insert, delete, equal)
    let data = diffNodes[index][1];  // Text of change.

    if (op == DELETE) {          
      output += "<span class='text-delete'>" + data +"</span>";
    }

    if (op == INSERT) {          
      output += "<span class='text-insert'>" + data +"</span>";
    }

    if (op == EQUAL) {
      output += data;
    }

  }

  diffDivElement.innerHTML = output;
}


  /**
   * 
   * @param {*} diffNodes 
   */
  function diagrapDiff(container, diffNodes) {

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
  function loadTimeline(container, listA, listB, listSection) {

    getJSON("timeline1.json", function(err, data) {
      if (err !== null) {
        alert("Something went wrong: " + err);
      } else {

        //console.log("data", data);
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

        getJSON("sections.json", function(err, data) {
          if (err !== null) {
            alert("Something went wrong: " + err);
          } else {
            populateListFromJSON(data, listSection);
          }
        });
      }
    });
  }



  function fetchAndDiffSelectedLabels() {

    document.getElementById('diffTextDiv').innerHTML = "";
    document.getElementById('diffTextDivA').innerHTML = "";
    document.getElementById('diffTextDivB').innerHTML = "";
    document.getElementById("diagramDiv").innerHTML = "";
    document.getElementById("diagramDiv").style.height = "0px";

    fileAName = document.getElementById("drugLabelListA").value
    fileBName = document.getElementById("drugLabelListB").value

    
    
    let section = document.getElementById("sectionList").value
    
    getXML("labels/" + fileAName + ".xml", function(err, data) {
      if (err !== null) {
        alert("Something went wrong: " + err);
      } else {

        let textA = getSectionText(data, section);

        getXML("labels/" + fileBName + ".xml", function(err, data) {
          if (err !== null) {
            alert("Something went wrong: " + err);
          } else {

            let textB = getSectionText(data, section);
            
            //diff the two text blocks
            let dmp = new diff_match_patch();

            //compute the diff
            dmp.Diff_Timeout = 5;
            dmp.Diff_EditCost = 4;
          
            let diffNodes = dmp.diff_main(textA, textB);
            dmp.diff_cleanupSemantic(diffNodes);


            //grab the radio buttons so we know what type of visualization to use
            let sideBySideElement = document.getElementById("sideBySide");
            let diagramElement = document.getElementById("diagram");

            if (sideBySideElement.checked == true) {
              diffTextSideBySide(document.getElementById('diffTextDivA'), document.getElementById('diffTextDivB'), diffNodes);
            }
            else {
              if (diagramElement.checked == true) {
                let container = document.getElementById('diagramDiv');
                container.style.height = "1200px";
                diagrapDiff(container, diffNodes);
              }
              else {
                diffText(document.getElementById("diffTextDiv"), dmp, diffNodes);
              }              
            }
            
          }
        });
        
      }
    });
  }



  /**
   * Diff givven text and display in two different divs.
   * 
   * @param {div element} diffDivElementA 
   * @param {div element} diffDivElementB 
   * @param {String} text1 
   * @param {String} text2 
   */
  function diffTextSideBySide(diffDivElementA, diffDivElementB, diffNodes) {

    let outputA = "";
    let outputB = "";

    for (let index = 0; index < diffNodes.length; index++) {
      let op = diffNodes[index][0];    // Operation (insert, delete, equal)
      let data = diffNodes[index][1];  // Text of change.

      if (op == DELETE) {          
        outputA += "<span class='text-delete'>" + data +"</span>";
      }

      if (op == INSERT) {          
        outputB += "<span class='text-insert'>" + data +"</span>";
      }

      if (op == EQUAL) {
        outputA += data;
        outputB += data;
      }

    }

    diffDivElementA.innerHTML = outputA;
    diffDivElementB.innerHTML = outputB;    
  }



  function getSectionText(data, section) {

    var parser = new DOMParser().parseFromString(data, "text/xml");

    if (!parser.querySelector('document > component > structuredBody > component:nth-child(' + section + ') > section > title')) {
      return "Error reading label";
    }


    let sectionTitle = parser.querySelector('document > component > structuredBody > component:nth-child(' + section + ') > section > title').innerHTML;
    sectionTitle = sectionTitle.concat("<br/><br/>");
    
    //scrape sections
    var sectionText = "";

    var sections = parser.querySelectorAll('document > component > structuredBody > component:nth-child(' + section + ') > section > component > section');

    for (i = 0; i < sections.length; i++) {
      section = sections[i];
      sectionText +=  section.querySelector('title').innerHTML; // scrape the title of section
      sectionText += "<br/><br/>";

      text_element = section.querySelector('text');
      paragraphs = text_element.querySelectorAll('paragraph'); //scrape paragraphs
      for (var y = 0; y < paragraphs.length; y++) {
        sectionText +=  (paragraphs[y].innerHTML);//.replace(/(<([^>]+)>)/gi, "");
        sectionText += "<br/><br/>";
      }
    }

    return sectionTitle.concat(sectionText);
  }