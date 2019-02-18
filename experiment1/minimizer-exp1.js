//(if collecting data with php/server instead of MTurk)
// var experimentName = "snpi-pnq-exp1-demo";
// var submitAddress = "https://web.stanford.edu/~sunwooj/cgi-bin/process.php";


// List of stimuli

var stimuliList = shuffle([ 

["minimizer", "lift", "James", "My friend Susan organised a party and asked everyone to help out by bringing some food.", ["neutral", "supported", "incons-O", "incons-U"], ["", "One person brought some nuts, and one person brought a small bottle of wine, but nobody brought anything substantial.", "Everyone brought something really delicious.", "But nobody remembered to bring anything."], ["everyone", "anyone"], ["the end of the party, Susan thanked everyone who had lifted a finger to help.", "the end of the party, Susan thanked anyone who had lifted a finger to help."], ["At ", "Still, at ", "At ", "At "]],

["minimizer", "sleep", "Cam", "The participants of the medical study were not allowed to sleep the night before.", ["supported", "incons-O", "incons-U", "neutral"], ["Nobody fell asleep, though a few people dozed off for split seconds.", "All of them followed the instructions and stayed awake through the night.", "However, all of them forgot about it and went to bed.", ""], ["anyone", "everyone"], ["Anyone who slept a wink was excluded from the test phase.", "Everyone who slept a wink was excluded from the test phase."], ["", "", "", ""]],

["nonmin-UL", "prison", "Andrew", "Our school recently did a survey on teacher-student relationships.", ["incons", "incons", "neutral", "supported"], ["I live in a very safe neighborhood in San Francisco, where all kids are well-behaved.", "I live in a very safe neighborhood in San Francisco, where all kids are well-behaved.", "", "I live in a very violent suburb of Detroit, where many kids are involved in serious crime."], ["everyone", "anyone"], ["Everyone in my class who has been to prison is treated badly by the teachers.", "Anyone in my class who has been to prison is treated badly by the teachers."], ["", "", "", ""]],

["nonmin-UL", "million", "Lily", "Unicef organised a fundraising campaign.", ["incons", "neutral", "supported", "incons"], ["The most generous contribution came from someone who donated two thousand dollars.", "", "The most generous contribution came from someone who donated twenty million dollars.", "The most generous contribution came from someone who donated two thousand dollars."], ["anyone", "everyone"], ["Anyone who donated more than ten million dollars got a special gift.", "Everyone who donated more than ten million dollars got a special gift."], ["", "", "", ""]],

["nonmin-NU", "assignment", "Paul", "I took a class on biology.", ["neutral", "supported", "incons", "incons"], ["", "Most students managed to complete the final assignment.", "All students studied hard but no one managed to complete the final assignment.", "All students studied hard but no one managed to complete the final assignment."], ["everyone", "anyone"], ["Everyone who turned in the assignment passed the class.", "Anyone who turned in the assignment passed the class."], ["", "", "", ""]],

["nonmin-NU", "bike", "Minta", "The local government is trying to reduce car traffic.", ["supported", "incons", "incons", "neutral"], ["In our neighborhood, many kids have a bike.", "In our neighborhood, there are no kids who own a bike.", "In our neighborhood, there are no kids who own a bike.", ""], ["anyone", "everyone"], ["Anyone who biked to school today got a free snack.", "Everyone who biked to school today got a free snack."], ["", "", "", ""]],

["control", "library", "Prue", "Susan called the library yesterday but it was closed.", ["NA", "NA", "NA", "NA"], ["", "", "", ""], ["true", "false"], ["She was surprised that it was closed.", " She was surprised that it was open."], ["", "", "", ""]],

["control", "theater", "Jasper", "In my town, there is a recreation center and an art gallery, but no theater.", ["NA", "NA", "NA", "NA"], ["", "", "", ""], ["false", "true"], ["The mayor wants to convert the theater into a museum.", "The mayor wants to convert the art gallery into a museum."], ["", "", "", ""]],

["control", "teacher", "Nancy", "We have a physics teacher and a chemistry teacher, but no math teacher at school.", ["NA", "NA", "NA", "NA"], ["", "", "", ""], ["true", "false"], ["The physics teacher is very bright.", "The math teacher is very bright."], ["", "", "", ""]],

["control", "offer", "Augustus", "The company offered Sally a job but she turned it down.", ["NA", "NA", "NA", "NA"], ["", "", "", ""], ["false", "true"], ["Two weeks later, she regretted having accepted the offer.", "Two weeks later, she regretted not having accepted the offer."], ["", "", "", ""]]

]);

// Fillers that set baselines in the first two trials
// var baseStimVector = ["Prue", "filler-base1c-true-c1", ["filler-base1c-res-true", "filler-base1c-res-false"]];



var data = {}; 
var trialnum = 0;


$(document).ready(function() {
    showSlide("intro");
    $('#gotoInstructions').click(function() {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide('instructions');
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
var stimRandom = Math.floor(Math.random() * 4);
var quantRandom = Math.floor(Math.random() * 2);



function stepExperiment () {
    if (trialnum == 10) { // end the experiment. 
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        showSlide("language");
        $('#lgsubmit').click(function() {
            var eval = $('.ev:checked').val();
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

        stimuliVector = stimuliList[trialnum-1];
        trialtype = stimuliVector[0];
        itemtype = stimuliVector[1];
        nameStim = stimuliVector[2];
        cont1Stim = stimuliVector[3];

        cont2typeVector = stimuliVector[4];
        cont2type = cont2typeVector[stimRandom];
        cont2Vector = stimuliVector[5];
        cont2Stim = cont2Vector[stimRandom];

        quanttypeVector = stimuliVector[6];
        quanttype = quanttypeVector[quantRandom];
        quantVector = stimuliVector[7];
        quantStim = quantVector[quantRandom];

        stillVector = stimuliVector[8];
        stillStim = stillVector[stimRandom];

               
        $(".item_number").html(trialnum);  
        $(".currentName1").html(nameStim);

        $(".currentCont1").html(cont1Stim);
        $(".currentCont2").html(cont2Stim);
        $(".currentSent").html(quantStim);
        $(".currentStill").html(stillStim);


        document.body.scrollTop = document.documentElement.scrollTop = 0;

        showSlide('stage'); 
        $('#nextpart').show();

        $('#responseForm2').hide();
        $('#optional1').hide();
        $('#commentBox1').hide();
        $('#continue').hide();

        $('#nextpart').click(function() {

            $("#nextpart").unbind('click');
            $('#nextpart').hide();

            $('#responseForm2').show();
            $('#optional1').show();
            $('#commentBox1').show();
            $('#continue').show();

        });


        $('#continue').click(function() {
            document.body.scrollTop = document.documentElement.scrollTop = 0;

            var choiceResponse = $('.likertN:checked').val();

            var commentResponse1 = $('#commentBox1').val();
            commentResponse1 = commentResponse1.replace (/,/g, "");


            if  ($('.likertN:checked').length > 0) {
                // ensure that likert options are unticked for the next problems 
                $(".likertN").prop('checked', false);
                // make continue button available for re-use
                $("#continue").unbind('click');
                // ensure that the comment box is emptied as well
                $(".commentBox").val("");
                // erase warnings 
                $("#warning2").html("");

                trial = {};
                trial.name1 = nameStim;
                trial.tritype = trialtype;
                trial.item = itemtype;
                trial.quantifier = quanttype;
                trial.presupposition = cont2type;
                trial.naturalness = choiceResponse;
                //trial.naturalness2 = sliderResponse2;
                trial.comment = commentResponse1;
                // cont2Stim = cont2Stim.replace (/,/g, "");
                //trial.cont2 = cont2Stim;
                // quantStim = quantStim.replace (/,/g, "");
                // trial.targetSent = quantStim;
                data["trial" + trialnum] = trial;

            
                // Move on to the next trial
                stepExperiment();
     
                    }

            else { // If any of the questions is not answered:
                warning2 = "Please answer the question to continue. Make sure that you have dragged or clicked on the slider button so that the slider is colored and the button displays a numeric value.";
                $("#warning2").html(warning2);
                document.body.scrollTop = document.body.scrollHeight;
            }
        });
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