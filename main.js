para = [];
function para_1(){
    var display_para_array=[];
    for(var j=1; j<=4;j++){
    var para =document.getElementById("name_of_the_para_"+j).Value;
    console.log(name_of_the_para);
    para.push(name_of_the_para);
    }
    console.log(para);
    var length=para.length;
    console.log(length);
    for(var k=0; k<length; k++){
        display_para_array.push("<h4>name-"+para[k]+"</h4>");
        console.log(display_para_array);
    }
    console.log(display_para_array);
    document.getElementById("name_of_the_para").innerHTML=display_para_array;
var paragrafe=display_para_array.join("name_of_the_para_"+j);
console.log(paragrafe);
document.getElementById("para_1").style.display="none";
document.getElementById("para_2").style.display="inline-block";
  
}