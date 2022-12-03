var index =1;

var data = [
    {
        "Q":"In Norse mythology, what is the name of the world tree, a giant ash supporting the universe?",
        "QA1":"Urdarbrunnr",
        "QA2":"Nidhogg",
        "QA3":"Mímisbrunnr",
        "QA4":"Yggdrasill"
    },
    {
        "Q":"What is the name of Odin`s magical horse?",
        "QA1":"Alsvin",
        "QA2":"Sleipnir",
        "QA3":"Gleipnir",
        "QA4":"Huginn"
    },
    {
        "Q":"What is the cold dark misty world of the dead, ruled by the goddess Hel?",
        "QA1":"Niflheim",
        "QA2":"Hnitbǫrg",
        "QA3":"Birgir",
        "QA4":"Yggdrasill"
    },
    {
        "Q":"What is the name of the horn of the watchman of the gods?",
        "QA1":"Grídarvöl",
        "QA2":"Gjallarhorn",
        "QA3":"Mjollnir",
        "QA4":"Eldhrímnir"
    },
    {
        "Q":"In Norse mythology, who is the giant created from the drops of water that formed when the ice of Niflheim met the heat of Muspelheim?",
        "QA1":"Aesir",
        "QA2":"Aurgelmir",
        "QA3":"Jötun",
        "QA4":"Tyr"
    }
    ];
function getJsonData(){
    
    if (index<5) {
        document.getElementById("question").innerText = data[index].Q;
        document.getElementById("lblq1").innerText = data[index].QA1
        document.getElementById("lblq2").innerText = data[index].QA2
        document.getElementById("lblq3").innerText = data[index].QA3
        document.getElementById("lblq4").innerText = data[index].QA4
        index++;
        var radios = document.getElementsByName('question');

        for (var i = 0, length = radios.length; i < length; i++)
        {
            if (radios[i].checked)
            {
                radios[i].checked = false;
            }
        }
    }
    if (counter == 5)
    {
        document.getElementById("btn_gradient").innerText = "Save to JSON";

        var radios = document.getElementsByName('question');

        for (var i = 0, length = radios.length; i < length; i++) {
            if (radios[i].checked) {


                break;
            }
          }
    }
   
}