//(if collecting data with php/server instead of MTurk)
var experimentName = "test";
var submitAddress = "test";

// var experimentName = "npis-pres-pilot-prolific";
// var submitAddress = "https://sunwoojeong.com/cgi-bin/process-prolific.php";


// List of stimuli

var stimuliList1 = shuffle([ 

["Part 1", "mountaineer-H", 
    ["whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI"],
    ["Which Dutch mountaineer has ever climbed mount Everest twice within one month?", "Who has ever climbed mount Everest twice within one month?", "Which Dutch mountaineer has climbed mount Everest twice within one month?", "Who has climbed mount Everest twice within one month?", "More than three Dutch mountaineers have ever climbed mount Everest twice within one month.", "No Dutch mountaineer has ever climbed mount Everest twice within one month."]],

["Part 1", "astronaut-H",
    ["who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi"],
    ["Who has ever landed on Mars and stayed there for a year?", "Which Russian astronaut has landed on Mars and stayed there for a year?", "Who has landed on Mars and stayed there for a year?", "More than four Russian astronauts have ever landed on Mars and stayed there for a year.", "No Russian astronaut has ever landed on Mars and stayed there for a year.", "Which Russian astronaut has ever landed on Mars and stayed there for a year?"]],

["Part 1", "baker-H", 
    ["whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi"],
    ["Which French baker has baked 3000 croissants within one day?", "Who has baked 3000 croissants within one day?", "More than three French bakers have ever baked 3000 croissants within one day.", "No French baker has ever baked 3000 croissants within one day.", "Which French baker has ever baked 3000 croissants within one day?", "Who has ever baked 3000 croissants within one day?"]],

["Part 1", "artist-H", 
    ["who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi"],
    ["Who has painted a 1000 yards long mural in one day?", "More than four German artists have ever painted a 1000 yards long mural in one day.", "No German artist has ever painted a 1000 yards long mural in one day.", "Which German artist has ever painted a 1000 yards long mural in one day?", "Who has ever painted a 1000 yards long mural in one day?", "Which German artist has painted a 1000 yards long mural in one day?"]],

["Part 1", "tenor-H", 
    ["infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi"],
    ["More than three Italian tenors have ever sung a full aria underwater.", "No Italian tenor has ever sung a full aria underwater.", "Which Italian tenor has ever sung a full aria underwater?", "Who has ever sung a full aria underwater?", "Which Italian tenor has sung a full aria underwater?", "Who has sung a full aria underwater?"]],

["Part 1", "skater-H", 
    ["feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI"],
    ["No Korean skater has ever completed 10 figure skating turns within a single jump.", "Which Korean skater has ever completed 10 figure skating turns within a single jump?", "Who has ever completed 10 figure skating turns within a single jump?", "Which Korean skater has completed 10 figure skating turns within a single jump?", "Who has completed 10 figure skating turns within a single jump?", "More than four Korean skaters have ever completed 10 figure skating turns within a single jump."]],

["Part 1", "mountaineer-E",
    ["who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi"],
    ["Who has ever climbed mount Everest twice within one year?", "Which Dutch mountaineer has climbed mount Everest twice within one year?", "Who has climbed mount Everest twice within one year?", "More than three Dutch mountaineers have ever climbed mount Everest twice within one year.", "No Dutch mountaineer has ever climbed mount Everest twice within one year.", "Which Dutch mountaineer has ever climbed mount Everest twice within one year?"]],

["Part 1", "astronaut-E",
    ["whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi"],
    ["Which Russian astronaut has landed on Mars and stayed there for a week?", "Who has landed on Mars and stayed there for a week?", "More than four Russian astronauts have ever landed on Mars and stayed there for a week.", "No Russian astronaut has ever landed on Mars and stayed there for a week.", "Which Russian astronaut has ever landed on Mars and stayed there for a week?", "Who has ever landed on Mars and stayed there for a week?"]],

["Part 1", "baker-E",
    ["who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi"],
    ["Who has baked 300 croissants within one day?", "More than three French bakers have ever baked 300 croissants within one day.", "No French baker has ever baked 300 croissants within one day.", "Which French baker has ever baked 300 croissants within one day?", "Who has ever baked 300 croissants within one day?", "Which French baker has baked 300 croissants within one day?"]],

["Part 1", "artist-E",
    ["infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi"],
    ["More than four German artists have ever painted a 100 yards long mural in one day.", "No German artist has ever painted a 100 yards long mural in one day.", "Which German artist has ever painted a 100 yards long mural in one day?", "Who has ever painted a 100 yards long mural in one day?", "Which German artist has painted a 100 yards long mural in one day?", "Who has painted a 100 yards long mural in one day?"]],

["Part 1", "tenor-E",
    ["feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI"],
    ["No Italian tenor has ever sung a full refrain underwater.", "Which Italian tenor has ever sung a full refrain underwater?", "Who has ever sung a full refrain underwater?", "Which Italian tenor has sung a full refrain underwater?", "Who has sung a full refrain underwater?", "More than three Italian tenors have ever sung a full refrain underwater."]],

["Part 1", "skater-E",
    ["whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI"],
    ["Which Korean skater has ever completed 4 figure skating turns within a single jump?", "Who has ever completed 4 figure skating turns within a single jump?", "Which Korean skater has completed 4 figure skating turns within a single jump?", "Who has completed 4 figure skating turns within a single jump?", "More than four Korean skaters have ever completed 4 figure skating turns within a single jump.", "No Korean skater has ever completed 4 figure skating turns within a single jump."]]

]);


var stimuliList2 = shuffle([ 

["Part 2", "mountaineer-H",
    ["whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-also", "filler-nopres-cars"],
    ["Which Dutch mountaineer has ever climbed mount Everest twice within one month?", "Who has ever climbed mount Everest twice within one month?", "Which Dutch mountaineer has climbed mount Everest twice within one month?", "Who has climbed mount Everest twice within one month?", "Did Jane also come to the party?", "Are there cars in front of the house?"], 
    ["Dutch mountaineer who has climbed mount Everest twice within one month", "person who has climbed mount Everest twice within one month", "Dutch mountaineer who has climbed mount Everest twice within one month", "person who has climbed mount Everest twice within one month", "person who came to the party", "car in front of the house"]],

["Part 2", "astronaut-H", 
    ["who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-also", "filler-nopres-cars", "whnp-Q-npi"],
    ["Who has ever landed on Mars and stayed there for a year?", "Which Russian astronaut has landed on Mars and stayed there for a year?", "Who has landed on Mars and stayed there for a year?", "Did Jane also come to the party?", "Are there cars in front of the house?", "Which Russian astronaut has ever landed on Mars and stayed there for a year?"], 
    ["person who has landed on Mars and stayed there for a year", "Russian astronaut who has landed on Mars and stayed there for a year", "person who has landed on Mars and stayed there for a year", "person who came to the party", "car in front of the house", "Russian astronaut who has landed on Mars and stayed there for a year"]],

["Part 2", "baker-H", 
    ["whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-also", "filler-nopres-cars", "whnp-Q-npi", "who-Q-npi"],
    ["Which French baker has baked 3000 croissants within one day?", "Who has baked 3000 croissants within one day?", "Did Jane also come to the party?", "Are there cars in front of the house?", "Which French baker has ever baked 3000 croissants within one day?", "Who has ever baked 3000 croissants within one day?"], 
    ["French baker who has baked 3000 croissants within one day", "person who has baked 3000 croissants within one day", "person who came to the party", "car in front of the house", "French baker who has baked 3000 croissants within one day", "person who has baked 3000 croissants within one day"]],

["Part 2", "artist-H", 
    ["who-Q-nonpi", "filler-pres-also", "filler-nopres-cars", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi"],
    ["Who has painted a 1000 yards long mural in one day?", "Did Jane also come to the party?", "Are there cars in front of the house?", "Which German artist has ever painted a 1000 yards long mural in one day?", "Who has ever painted a 1000 yards long mural in one day?", "Which German artist has painted a 1000 yards long mural in one day?"], 
    ["person who has painted a 1000 yards long mural in one day", "person who came to the party", "car in front of the house", "German artist who has painted a 1000 yards long mural in one day", "person who has painted a 1000 yards long mural in one day", "German artist who has painted a 1000 yards long mural in one day"]],

["Part 2", "tenor-H", 
    ["filler-pres-also", "filler-nopres-cars", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi"],
    ["Did Jane also come to the party?", "Are there cars in front of the house?", "Which Italian tenor has ever sung a full aria underwater?", "Who has ever sung a full aria underwater?", "Which Italian tenor has sung a full aria underwater?", "Who has sung a full aria underwater?"], 
    ["person who came to the party", "car in front of the house", "Italian tenor who has sung a full aria underwater", "person who has sung a full aria underwater", "Italian tenor who has sung a full aria underwater", "person who has sung a full aria underwater"]],

["Part 2", "skater-H", 
    ["filler-nopres-cars", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-also"],
    ["Are there cars in front of the house?", "Which Korean skater has ever completed 10 figure skating turns within a single jump?", "Who has ever completed 10 figure skating turns within a single jump?", "Which Korean skater has completed 10 figure skating turns within a single jump?", "Who has completed 10 figure skating turns within a single jump?", "Did Jane also come to the party?"], 
    ["car in front of the house", "Korean skater who has completed 10 figure skating turns within a single jump", "person who has completed 10 figure skating turns within a single jump", "Korean skater who has completed 10 figure skating turns within a single jump", "person who has completed 10 figure skating turns within a single jump", "person who came to the party"]],

["Part 2", "mountaineer-E",
    ["who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-cleft", "filler-nopres-rules", "whnp-Q-npi"],
    ["Who has ever climbed mount Everest twice within one year?", "Which Dutch mountaineer has climbed mount Everest twice within one year?", "Who has climbed mount Everest twice within one year?", "Was it Jim who failed the exam?", "Did people complain about the new rules?", "Which Dutch mountaineer has ever climbed mount Everest twice within one year?"],
    ["person who has climbed mount Everest twice within one year", "Dutch mountaineer who has climbed mount Everest twice within one year", "person who has climbed mount Everest twice within one year", "person who failed the exam", "person who complained about the new rules", "Dutch mountaineer who has climbed mount Everest twice within one year"]],

["Part 2", "astronaut-E",
    ["whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-cleft", "filler-nopres-rules", "whnp-Q-npi", "who-Q-npi"],
    ["Which Russian astronaut has landed on Mars and stayed there for a week?", "Who has landed on Mars and stayed there for a week?", "Was it Jim who failed the exam?", "Did people complain about the new rules?", "Which Russian astronaut has ever landed on Mars and stayed there for a week?", "Who has ever landed on Mars and stayed there for a week?"],
    ["Russian astronaut who has landed on Mars and stayed there for a week", "person who has landed on Mars and stayed there for a week", "person who failed the exam", "person who complained about the new rules", "Russian astronaut who has landed on Mars and stayed there for a week", "person who has landed on Mars and stayed there for a week"]],

["Part 2", "baker-E",
    ["who-Q-nonpi", "filler-pres-cleft", "filler-nopres-rules", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi"],
    ["Who has baked 300 croissants within one day?", "Was it Jim who failed the exam?", "Did people complain about the new rules?", "Which French baker has ever baked 300 croissants within one day?", "Who has ever baked 300 croissants within one day?", "Which French baker has baked 300 croissants within one day?"],
    ["person who has baked 300 croissants within one day", "person who failed the exam", "person who complained about the new rules", "French baker who has baked 300 croissants within one day", "person who has baked 300 croissants within one day", "French baker who has baked 300 croissants within one day"]],

["Part 2", "artist-E",
    ["filler-pres-cleft", "filler-nopres-rules", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi"],
    ["Was it Jim who failed the exam?", "Did people complain about the new rules?", "Which German artist has ever painted a 100 yards long mural in one day?", "Who has ever painted a 100 yards long mural in one day?", "Which German artist has painted a 100 yards long mural in one day?", "Who has painted a 100 yards long mural in one day?"],
    ["person who failed the exam", "person who complained about the new rules", "German artist who has painted a 100 yards long mural in one day", "person who has painted a 100 yards long mural in one day", "German artist who has painted a 100 yards long mural in one day", "person who has painted a 100 yards long mural in one day"]],

["Part 2", "tenor-E",
    ["filler-nopres-rules", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-cleft"],
    ["Did people complain about the new rules?", "Which Italian tenor has ever sung a full refrain underwater?", "Who has ever sung a full refrain underwater?", "Which Italian tenor has sung a full refrain underwater?", "Who has sung a full refrain underwater?", "Was it Jim who failed the exam?"],
    ["person who complained about the new rules", "Italian tenor who has sung a full aria underwater", "person who has sung a full aria underwater", "Italian tenor who has sung a full aria underwater", "person who has sung a full aria underwater", "person who failed the exam"]],

["Part 2", "skater-E",
    ["whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler-pres-cleft", "filler-nopres-rules"],
    ["Which Korean skater has ever completed 4 figure skating turns within a single jump?", "Who has ever completed 4 figure skating turns within a single jump?", "Which Korean skater has completed 4 figure skating turns within a single jump?", "Who has completed 4 figure skating turns within a single jump?", "Was it Jim who failed the exam?", "Did people complain about the new rules?"],
    ["Korean skater who has completed 10 figure skating turns within a single jump", "person who has completed 10 figure skating turns within a single jump", "Korean skater who has completed 10 figure skating turns within a single jump", "person who has completed 10 figure skating turns within a single jump", "person who failed the exam", "person who complained about the new rules"]]

]);


var data = {}; 
var trialnum = 0;


$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        var consent = document.getElementById("consent").checked;
        if (consent == true) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            showSlide('instructions');
        }
        else {
            checkboxwarning = "If you would like to proceed with the experiment, please read the consent form and check the consent box.";
            $("#checkboxWarning").html(checkboxwarning);
        }
    });

    
    $('#startbutton').click(function() {
        var starttime = new Date();
        var starttimenum = Math.round(new Date().getTime() / 1000);
        data.starttime = starttime;
        stepExperiment();
    });
});

function showSlide (slideName) {
    $('.slide').hide();
    $('#' + slideName).show();
}


// var fillerRandom = Math.floor(Math.random() * 2);
var condRandom = Math.floor(Math.random() * 6);



function stepExperiment () {
    if (trialnum == 24) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        var endtime = new Date();
        var endtimenum = Math.round(new Date().getTime()/1000);
        showSlide("language");
        $('#lgsubmit').click(function() {
            var nat = $('.nat:checked').val();
            var age = $('.age:checked').val();
            var gender = $('.gen:checked').val();
            var race = $('.eth:checked').val();
			var region = $('.reg:checked').val();

            var gend_com = $('#ogen_com').val();
            gend_com = gend_com.replace (/,/g, "");
            var race_com = $('#oeth_com').val();
            race_com = race_com.replace (/,/g, "");
			var reg_com = $('#reg_com').val();
            reg_com = reg_com.replace (/,/g, "");
            var gen_com = $('#lang_com').val();
            gen_com = gen_com.replace (/,/g, "");

			if ($('.nat:checked').length > 0 && $('.age:checked').length > 0 && $('.gen:checked').length > 0 && $('.eth:checked').length > 0) {
            
            data.endtime = endtime;
            data.elapsedtime = endtimenum - starttimenum;

            data.nat = nat;
            data.age = age;
            data.gender = gender;
            data.race = race;
			data.region = region;

            data.gendCom = gend_com;
            data.raceCom = race_com;
            data.regCom = reg_com;
			data.genCom = gen_com;

			showSlide('finish');
			setTimeout(function() { turk.submit(data)}, 1000); 
                
            } 

            else {
                demoWarning = "Please complete the questionnaire in order to finish the experiment and submit the HIT.";
            $("#demoWarning").html(demoWarning);
            document.body.scrollTop = document.body.scrollHeight;
            }

            } ) }
 
    else {

        trialnum += 1;
        // $(".item_number").html(trialnum);

        if (trialnum < 13) {
            showSlide('stage');
            $('#responseForm2').hide();
            $('#transition').hide();

            stimuliVector1 = stimuliList1[trialnum - 1];

            trialtype = stimuliVector1[0];
            itemtype = stimuliVector1[1];
            condition = stimuliVector1[2][condRandom];
            textStim1 = stimuliVector1[3][condRandom];

            $(".item_number").html(trialnum);
            $(".item_number2").html(trialnum);
            $(".currentSent1").html(textStim1);
            $(".part_number").html(trialtype);

            $('#continue').click(function () {
                document.body.scrollTop = document.documentElement.scrollTop = 0;

                var naturalness = $('input[name="naturalness"]:checked').val();

                var commentResponse1 = $('#commentBox1').val();
                commentResponse1 = commentResponse1.replace(/,/g, "");
                commentResponse1 = commentResponse1.replace(/:/g, "");

                // Check for valid answers; 
                if ($('input[name=naturalness]:checked').length > 0) {
                    // ensure that likert options are unticked for the next problems 
                    $(".radio").prop('checked', false);
                    // make continue button available for re-use
                    $("#continue").unbind('click');
                    // ensure that the comment box is emptied as well
                    $(".commentBox").val("");
                    // erase warnings 
                    $("#warning").html("");

                    trial = {};
                    trial.part = trialtype;
                    trial.item = itemtype;
                    trial.condition = condition;
                    trial.stim = textStim1;
                    trial.naturalness = naturalness;
                    trial.presupposition = "NA";
                    trial.comment1 = commentResponse1;
                    trial.comment2 = "NA";

                    data["trial" + trialnum] = trial;

                    // Move on to the next trial
                    stepExperiment();
                }
                else { // If any of the questions is not answered:
                    warning = "Please answer the question to move on to the next trial.";
                    $("#warning").html(warning);
                    document.body.scrollTop = document.body.scrollHeight;
                }
            });

        }


        else {

            $('#responseForm1').hide();
            // $('#transition').hide();
            $('#responseForm2').show();
            
            stimuliVector2 = stimuliList2[trialnum - 13];

            trialtype = stimuliVector2[0];
            itemtype = stimuliVector2[1];
            condition = stimuliVector2[2][condRandom];
            textStim2 = stimuliVector2[3][condRandom];
            presStim = stimuliVector2[4][condRandom];

            $(".currentSent2").html(textStim2);
            $(".currentPres").html(presStim);

            $(".item_number").html(trialnum);
            $(".item_number2").html(trialnum-6);

            $(".part_number").html(trialtype);

            $('#continue').click(function () {
                document.body.scrollTop = document.documentElement.scrollTop = 0;

                var presupposition = $('input[name="presupposition"]:checked').val();

                var commentResponse2 = $('#commentBox2').val();
                commentResponse2 = commentResponse2.replace(/,/g, "");
                commentResponse2 = commentResponse2.replace(/:/g, "");


                // Check for valid answers; 
                if ($('input[name=presupposition]:checked').length > 0) {
                    // ensure that likert options are unticked for the next problems 
                    $(".radio").prop('checked', false);
                    // make continue button available for re-use
                    $("#continue").unbind('click');
                    // ensure that the comment box is emptied as well
                    $(".commentBox").val("");
                    // erase warnings 
                    $("#warning").html("");

                    trial = {};
                    trial.part = trialtype;
                    trial.item = itemtype;
                    trial.condition = condition;
                    trial.stim = textStim2;
                    trial.naturalness = "NA";
                    trial.presupposition = presupposition;
                    trial.comment1 = "NA";
                    trial.comment2 = commentResponse2;

                    data["trial" + trialnum] = trial;

                    // Move on to the next trial
                    stepExperiment();

                }

                else { // If any of the questions is not answered:
                    warning = "Please answer the question to move on to the next trial.";
                    $("#warning").html(warning);
                    document.body.scrollTop = document.body.scrollHeight;
                }
            });
        }



    }
}



function chooseRandom(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function shuffle(v) { // non-destructive.
    newarray = v.slice(0);
    for (var j, x, i = newarray.length; i; j = parseInt(Math.random() * i), x = newarray[--i], newarray[i] = newarray[j], newarray[j] = x);
    return newarray;
}