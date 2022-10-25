

function SendMail(e){
e.preventDefault();

    var params={
        name:document.getElementById('name'),
        email:document.getElementById('email'),
        message:document.getElementById('message')
    }
    alert(params);

    emailjs.send('service_mt8bsjv','template_zk6pbtl',params).then(function(res){
        alert("Sucess!" +res.statut);
    })

    
}