//Q1
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// answer
table = document.createElement("TABLE");
table.setAttribute("id", "infoTable");
document.getElementById("Q1").appendChild(table);
// create thead and tbody
const thead = table.createTHead();
const tbody = table.createTBody();
tbody.setAttribute("id", "tableBody");
const headRow = thead.insertRow(0);
// insert head content and set id
tableInfo.tableHeader.forEach((ele, index) => {
  const th = document.createElement("th");
  th.innerText = ele;
  th.setAttribute("id", ele);
  headRow.appendChild(th);
});
// insert body content
tableInfo.tableContent.forEach((obj) => {
  const newRow = tbody.insertRow(-1);
  newRow.insertCell().innerText = obj["Student Name"];
  newRow.insertCell().innerText = obj.Age;
  newRow.insertCell().innerText = obj.Phone;
  newRow.insertCell().innerText = obj.Address;
});

// update by the form
const tableSubmit = document.getElementById("TableInfoSubmit");
tableSubmit.onclick = () => {
  // get the new row data
  const newRowData = tableInfo.tableHeader.map(
    (head) => document.getElementById(head).value
  );
  // reset forms to be empty
  tableInfo.tableHeader.forEach((head) => {
    document.getElementById(head).value = null;
  });
  let table = document.getElementById("infoTable");
  // create new row and append to the end of tbody
  const newRow = document.getElementById("tableBody").insertRow(-1);
  newRowData.forEach((ele, index) => {
    newRow.insertCell(index).innerText = ele;
  });
};

// Q2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

//answer
const ul = document.createElement("UL");
const ol = document.createElement("OL");
list.forEach((ele) => {
  const uli = document.createElement("li");
  const oli = document.createElement("li");
  uli.innerText = ele;
  oli.innerText = ele;
  ul.appendChild(uli);
  ol.appendChild(oli);
});
document.getElementById("Q2").appendChild(ul);
document.getElementById("Q2").appendChild(ol);

////////////////// Q3 //////////////////////////////////
const dropDownList = [
  { value: "", content: "Please select" },
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

// answer
const dropDown = document.createElement("SELECT");
dropDown.setAttribute("class", "dropdown");
dropDownList.forEach(({ value, content }) => {
  const option = document.createElement("option");
  option.value = value;
  option.text = content;
  dropDown.appendChild(option);
});
dropDown.onchange = () => {
  console.log(dropDown.value);
};
document.getElementById("Q3").appendChild(dropDown);
