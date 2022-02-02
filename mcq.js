const topic = document.getElementById('topic')
const questionTypeDiv = document.getElementById('questionType')
const addMoreButtoneMCQ = document.getElementById('addMoreMCQ');
const mcqParentDiv = document.getElementById('mcqParent');
const addButton = document.getElementById('add');
const addButtonRadio = document.getElementById('addRadio');
const removeButton = document.getElementById('remove');
const removeButtonRadio = document.getElementById('removeRadio');
const mainDiv = document.getElementById('optionDiv');
const mainDivRadio = document.getElementById('optionDivRadio');
const selectType = document.getElementById('type');
const addQuestionMCQButton = document.getElementById('addQuestionMCQ');
const addQuestionRadioButton = document.getElementById('addQuestionRadio');
const addQuestionGapButton = document.getElementById('addQuestionGap');
const addQuestionDescButton = document.getElementById('addQuestionDesc');


const mcqDiv = document.getElementById('mcq');
const radioDiv = document.getElementById('radio');
const gapDiv = document.getElementById('gap');
const descDiv = document.getElementById('desc');



addQuestionMCQButton.style.display = 'none'
addQuestionRadioButton.style.display = 'none'
addQuestionGapButton.style.display = 'none'
addQuestionDescButton.style.display = 'none'
questionTypeDiv.style.display = 'none'



removeButton.style.display = 'none';



mcqDiv.style.display = 'none'
radioDiv.style.display = 'none'
gapDiv.style.display = 'none'
descDiv.style.display = 'none'

let i = 2;
let j = 2;





//Topic Select Event
topic.addEventListener('change', function () {
    questionTypeDiv.style.display = 'block'



})


//Question Type  Select Event

selectType.addEventListener('change', function (event) {






    if (selectType.value.localeCompare('mcq') == 0) {
        mcqDiv.style.display = 'block'
        radioDiv.style.display = 'none'
        gapDiv.style.display = 'none'
        descDiv.style.display = 'none'

        addQuestionMCQButton.style.display = 'inline-block'
        addQuestionRadioButton.style.display = 'none'
        addQuestionGapButton.style.display = 'none'
        addQuestionDescButton.style.display = 'none'



        console.log('i :' + i)


        if (i <= 2) {
            removeButton.style.display = 'none'
        }


    }
    if (selectType.value.localeCompare('radio') == 0) {
        radioDiv.style.display = 'block'
        mcqDiv.style.display = 'none'
        gapDiv.style.display = 'none'
        descDiv.style.display = 'none'

        addQuestionMCQButton.style.display = 'none'
        addQuestionRadioButton.style.display = 'inline-block'
        addQuestionGapButton.style.display = 'none'
        addQuestionDescButton.style.display = 'none'




        console.log('j :' + j)





        if (j <= 2) {
            removeButtonRadio.style.display = 'none'
        }
    }
    if (selectType.value.localeCompare('gap') == 0) {
        radioDiv.style.display = 'none'
        mcqDiv.style.display = 'none'
        gapDiv.style.display = 'block'

        descDiv.style.display = 'none'

        addQuestionMCQButton.style.display = 'none'
        addQuestionRadioButton.style.display = 'none'
        addQuestionGapButton.style.display = 'inline-block'
        addQuestionDescButton.style.display = 'none'



    }
    if (selectType.value.localeCompare('desc') == 0) {
        radioDiv.style.display = 'none'
        mcqDiv.style.display = 'none'
        gapDiv.style.display = 'none'
        descDiv.style.display = 'block'

        addQuestionMCQButton.style.display = 'none'
        addQuestionRadioButton.style.display = 'none'
        addQuestionGapButton.style.display = 'none'
        addQuestionDescButton.style.display = 'inline-block'

        
     



    }












});

//////////////////////////MCQ Add Button Click Handeler\\\\\\\\\\\\\\\\\\\

addButton.addEventListener('click', function (event) {
    i += 1;
    console.log('i :' + i)


    const div = document.createElement('div');
    const externalHTML = `<label for="option2" >` + i + `</label>
                  <input type="text" name="option`+ i + `" id="" placeholder="Enter Option"
                      class="p-2 px-4 ml-2  lg:w-2/6 w-4/6 bg-green-200 shadow-xl rounded-lg"> OR
                      <input type="file" name="figure`+ i + `" id="figure" class="inline ml-4 relative rounded text-center w-full lg:w-4/12 p-4 sm:mt-4 ">`;
    div.innerHTML = externalHTML;
    div.classList.add('mb-2');
    div.classList.add('p-2');

    mainDiv.appendChild(div);
    removeButton.style.display = 'inline';

});
//////////////////////////END MCQ Add Button Click Handeler\\\\\\\\\\\\\\\\\\\


//////////////////////////MCQ Remove Button Click Handeler\\\\\\\\\\\\\\\\\\\
removeButton.addEventListener('click', function () {
    if (i > 2) {
        mainDiv.removeChild(mainDiv.lastChild)
        i -= 1;
        console.log('i :' + i)

    }
    if (i <= 2) {
        removeButton.style.display = 'none'

    }



});
//////////////////////////END MCQ Remove Button Click Handeler\\\\\\\\\\\\\\\\\\\

//////////////////////////Radio Add Button Click Handeler\\\\\\\\\\\\\\\\\\\

addButtonRadio.addEventListener('click', function (event) {
    j += 1;
    console.log('j :' + j)


    const div = document.createElement('div');
    const externalHTML = `<label for="option2" >` + j + `</label>
                  <input type="text" name="option`+ j + `" id="" placeholder="Enter Option"
                      class="p-2 px-4 ml-2  lg:w-2/6 w-4/6 bg-blue-300 shadow-xl rounded-lg">
                      OR <input type="file" name="figure`+ j + `" id="figure" class="inline ml-4  rounded text-center w-full lg:w-4/12 p-4 sm:mt-4 ">`;
    div.innerHTML = externalHTML;
    div.classList.add('mb-2');
    div.classList.add('p-2');

    mainDivRadio.appendChild(div);
    removeButtonRadio.style.display = 'inline';

});
////////////////////////// END Radio Add Button Click Handeler\\\\\\\\\\\\\\\\\\\


//////////////////////////Radio Remove Button Click Handeler\\\\\\\\\\\\\\\\\\\
removeButtonRadio.addEventListener('click', function () {
    if (j > 2) {
        mainDivRadio.removeChild(mainDivRadio.lastChild)
        j -= 1;
        console.log('j :' + j)

    }
    if (j <= 2) {
        removeButtonRadio.style.display = 'none'

    }



});

//////////////////////////END Radio Remove Button Click Handeler\\\\\\\\\\\\\\\\\\\









// END  Question Type Select Event


///////////////////////////// Add more option or Remove option\\\\\\\\\\\\\\\\\\\\\



//////////////////// END  Add more option or Remove option\\\\\\\\\\\\\\\\\\\


