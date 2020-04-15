//event handler which handles submit event from our form
Document.getElementById('issueInputForm')

//function to get the even from submit and to save issues to the local storage
function saveIssue(e) {
  let issueDesc = document.getElementById('issueDesc').value;
  let issueimportance = document.getElementById('issueImp').value;
  let issueAssignedTo = document.getElementById('issueAssd').value;
  let issueId = chance.guid();
  let issueStatus = 'Open';

  const issue = {
    id: issueId,
    description: issueDesc,
    importance: issueimportance,
    assignedTo: issueAssignedTo,
    status: issueStatus
  }

  if (localStorage.getItem('issues') == null) {
    let issues = [];
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  } else {
    let issues = JSON.parse(localStorage.getItem('issues'));
    issues.push(issue);
    localStorage.setItem('issues', JSON.stringify(issues));
  }

  document.getElementById('issueInputForm').reset();

  fetchIssues();

  e.preventDefault();
}


//function to fetch the issues
//which are available
//and are stored in the browsers localstore.
function fetchIssues(){
  let issues = JSON.parse(localStorage.getItem('issues'));
  let issuesList = document.getElementById('issuesList');

  issuesList.innerHtml = '';

  for (let i = 0; i < issues.length; i++){
    let id = issues[i].id;
    let desc = issues[i].descrption;
    let importance = issues[i].importance;
    let assignedTo = issues[i].assignedTo;
    let status = issues[i].status;

    issuesList.innerHTML +=   '<div class="well">'+
                             '<h6>Issue ID: ' + id + '</h6>'+
                             '<p><span class="label label-info">' + status + '</span></p>'+
                             '<h3>' + desc + '</h3>'+
                             '<p><span class="glyphicon glyphicon-time"></span> ' + importance + '</p>'+
                             '<p><span class="glyphicon glyphicon-user"></span> ' + assignedTo + '</p>'+
                             '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a> '+
                             '<a href="#" onclick="deleteIssue(\''+id+'\')" class="btn btn-danger">Delete</a>'+
                             '</div>';
  }
}
