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
