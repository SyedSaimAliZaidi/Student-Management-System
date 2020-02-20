$(document).ready(function(){

    console.log('links');
    var link = null;

    $('.collection-item').on('click',function(){
        console.log($(this).attr('id'))
        link = './'+$(this).attr('id')+'.html';
        console.log(link)
        window.location.href = link;
    })

});