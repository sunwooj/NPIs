//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp1-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList1 = shuffle([ 

["Part 1", "mountaineer-H", 
    ["whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI"],
    ["Which Dutch mountaineer has ever climbed mount Everest twice within one month?", "Who has ever climbed mount Everest twice within one month?", "Which Dutch mountaineer has climbed mount Everest twice within one month?", "Who has climbed mount Everest twice within one month?", "Three Dutch mountaineers have ever climbed mount Everest twice within one month.", "No Dutch mountaineer has ever climbed mount Everest twice within one month."]],

["Part 1", "astronaut-H",
    ["who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi"],
    ["Who has ever landed on Mars and stayed there for a year?", "Which Russian astronaut has landed on Mars and stayed there for a year?", "Who has landed on Mars and stayed there for a year?", "Four Russian astronauts have ever landed on Mars and stayed there for a year.", "No Russian astronaut has ever landed on Mars and stayed there for a year.", "Which Russian astronaut has ever landed on Mars and stayed there for a year?"]],

["Part 1", "baker-H", 
    ["whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi"],
    ["Which French baker has baked 3000 croissants within one day?", "Who has baked 3000 croissants within one day?", "Two French bakers have ever baked 3000 croissants within one day.", "No French baker has ever baked 3000 croissants within one day.", "Which French baker has ever baked 3000 croissants within one day?", "Who has ever baked 3000 croissants within one day?"]],

["Part 1", "artist-H", 
    ["who-Q-nonpi", "infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi"],
    ["Who has painted a 1000 yards long mural in one day?", "Two German artists have ever painted a 1000 yards long mural in one day.", "No German artist has ever painted a 1000 yards long mural in one day.", "Which German artist has ever painted a 1000 yards long mural in one day?", "Who has ever painted a 1000 yards long mural in one day?", "Which German artist has painted a 1000 yards long mural in one day?"]],

["Part 1", "tenor-H", 
    ["infel-P-NPI", "feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi"],
    ["Two Italian tenors have ever sung a full aria underwater.", "No Italian tenor has ever sung a full aria underwater.", "Which Italian tenor has ever sung a full aria underwater?", "Who has ever sung a full aria underwater?", "Which Italian tenor has sung a full aria underwater?", "Who has sung a full aria underwater?"]],

["Part 1", "skater-H", 
    ["feli-P-NPI", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "infel-P-NPI"],
    ["No Korean skater has ever completed 10 figure skating turns within a single jump.", "Which Korean skater has ever completed 10 figure skating turns within a single jump?", "Who has ever completed 10 figure skating turns within a single jump?", "Which Korean skater has completed 10 figure skating turns within a single jump?", "Who has completed 10 figure skating turns within a single jump?", "Two Korean skaters have ever completed 10 figure skating turns within a single jump."]]

]);


var stimuliList2 = shuffle([ 

["Part 2", "mountaineer-H",
    ["whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler1", "filler2"],
    ["Which Dutch mountaineer has ever climbed mount Everest twice within one month?", "Who has ever climbed mount Everest twice within one month?", "Which Dutch mountaineer has climbed mount Everest twice within one month?", "Who has climbed mount Everest twice within one month?", "Filler1.", "Filler2."], 
    ["Dutch mountaineer who has climbed mount Everest twice within one month", "person who has climbed mount Everest twice within one month", "Dutch mountaineer who has climbed mount Everest twice within one month", "person who has climbed mount Everest twice within one month", "filler1", "filler2"]],

["Part 2", "astronaut-H", 
    ["who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler1", "filler2", "whnp-Q-npi"],
    ["Who has ever landed on Mars and stayed there for a year?", "Which Russian astronaut has landed on Mars and stayed there for a year?", "Who has landed on Mars and stayed there for a year?", "Filler1.", "Filler2.", "Which Russian astronaut has ever landed on Mars and stayed there for a year?"], 
    ["person who has landed on Mars and stayed there for a year", "Russian astronaut who has landed on Mars and stayed there for a year", "person who has landed on Mars and stayed there for a year", "filler1", "filler2", "Russian astronaut who has landed on Mars and stayed there for a year"]],

["Part 2", "baker-H", 
    ["whnp-Q-nonpi", "who-Q-nonpi", "filler1", "filler2", "whnp-Q-npi", "who-Q-npi"],
    ["Which French baker has baked 3000 croissants within one day?", "Who has baked 3000 croissants within one day?", "Filler1.", "Filler2.", "Which French baker has ever baked 3000 croissants within one day?", "Who has ever baked 3000 croissants within one day?"], 
    ["French baker who has baked 3000 croissants within one day", "person who has baked 3000 croissants within one day", "filler1", "filler2", "French baker who has baked 3000 croissants within one day", "person who has baked 3000 croissants within one day"]],

["Part 2", "artist-H", 
    ["who-Q-nonpi", "filler1", "filler2", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi"],
    ["Who has painted a 1000 yards long mural in one day?", "Filler1.", "Filler2.", "Which German artist has ever painted a 1000 yards long mural in one day?", "Who has ever painted a 1000 yards long mural in one day?", "Which German artist has painted a 1000 yards long mural in one day?"], 
    ["person who has painted a 1000 yards long mural in one day", "filler1", "filler2", "German artist who has painted a 1000 yards long mural in one day", "person who has painted a 1000 yards long mural in one day", "German artist who has painted a 1000 yards long mural in one day"]],

["Part 2", "tenor-H", 
    ["filler1", "filler2", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi"],
    ["Filler1.", "Filler2.", "Which Italian tenor has ever sung a full aria underwater?", "Who has ever sung a full aria underwater?", "Which Italian tenor has sung a full aria underwater?", "Who has sung a full aria underwater?"], 
    ["filler1", "filler2", "Italian tenor who has sung a full aria underwater", "person who has sung a full aria underwater", "Italian tenor who has sung a full aria underwater", "person who has sung a full aria underwater"]],

["Part 2", "skater-H", 
    ["filler2", "whnp-Q-npi", "who-Q-npi", "whnp-Q-nonpi", "who-Q-nonpi", "filler1"],
    ["Filler2.", "Which Korean skater has ever completed 10 figure skating turns within a single jump?", "Who has ever completed 10 figure skating turns within a single jump?", "Which Korean skater has completed 10 figure skating turns within a single jump?", "Who has completed 10 figure skating turns within a single jump?", "Filler1."], ["filler2", "Korean skater who has completed 10 figure skating turns within a single jump", "person who has completed 10 figure skating turns within a single jump", "Korean skater who has completed 10 figure skating turns within a single jump", "person who has completed 10 figure skating turns within a single jump", "filler1"]]

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
    if (trialnum == 12) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
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

        if (trialnum < 7) {
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

        // else if (trialnum = 7) {

            //     $(".item_number").html(trialnum);
            //     $(".item_number2").html(trialnum);

            //     $('#responseForm1').hide();
            //     //Inserted
            //     $('#transition').show();
            //     // $('#responseForm2').show();

            //     $('#continue').click(function () {
            //         $('#transition').hide();
            //         $('#responseForm2').show();
            //     });

            //     trialnum += 1;
            //     stepExperiment;

            // }



        else {

            $('#responseForm1').hide();
            // $('#transition').hide();
            $('#responseForm2').show();
            
            stimuliVector2 = stimuliList2[trialnum - 7];

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