


function success(){
    let subject = document.getElementById('subject').value;
    let fname = document.getElementById('fname').value;
    let lname = document.getElementById('lname').value;
    let pnum = document.getElementById('pnum').value;
    let mail = document.getElementById('mail').value;
    let msg = document.getElementById('msg').value;

    if (subject.length == 0 || fname.length == 0 || lname.length == 0 || pnum.length == 0 || mail.length == 0 || msg.length == 0)
    {
        alert('Fill all the boxes!');
    }
    else if (parseInt(pnum).length == 0)
    {
        alert('Enter a number');
    }
    else
    {
        summ(subject,fname, lname, pnum, mail, msg);
            alert('Successfully Submitted!');

    }
    
}

function summ(subject,fname, lname, pnum, mail, msg){
    document.getElementById('subject').innerHTML = subject;
    document.getElementById('first').innerHTML = fname;
    document.getElementById('last').innerHTML = lname;
    document.getElementById('phone').innerHTML = pnum;
    document.getElementById('maill').innerHTML = mail;
    document.getElementById('sms').innerHTML = msg;


    
}

