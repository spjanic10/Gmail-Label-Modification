function labelAlteration() {
// Defining the search query
const query = "label:Paused";

while (GmailApp.search(query).length!=0){

// Retrieving the threads that match the condition in the query
var threads = GmailApp.search(query,0,50);

//Retrieving the desired label object
var label = GmailApp.getUserLabelByName("Paused");
if (!label) {label = GmailApp.createLabel("Paused")}

//Removing the label from the threads and moving them into the inbox
label.removeFromThreads(threads);
GmailApp.moveThreadsToInbox(threads);
}
}
