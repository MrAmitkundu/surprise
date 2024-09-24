

let text = document.getElementById('parralox_texts');
let Lleaf = document.getElementById('Lleaf');
let Rleaf = document.getElementById('Rleaf');
let BottomFlower = document.getElementById('BottomFlower');
let LTopFlower = document.getElementById('LTopFlower');
let RTopFlower = document.getElementById('RTopFlower');


let textPP = document.getElementById('parralox_texts_pp');

// window.addEventListener('load', () => {

//     text.classList.toggle('active-text');
//     textPP.classList.toggle('active-text-pp');
//     Lleaf.classList.toggle('active-Lleaf');
//     Rleaf.classList.toggle('active-Rleaf');
//     BottomFlower.classList.toggle('active-BottomFlower');
//     LTopFlower.classList.toggle('active-LTopFlower');
//     RTopFlower.classList.toggle('active-RTopFlower');


// });

document.addEventListener('DOMContentLoaded', () => {

    function getCurrentPageName() {
        const pathname = window.location.pathname;
        // Extract the page name from the pathname
        return pathname.substring(pathname.lastIndexOf('/') + 1);
    }


    // Execute code conditionally
    if (getCurrentPageName() === "index.html" || getCurrentPageName() === "questionStartingPage.html" || getCurrentPageName() === "questionEndingPage.html") {
        console.log(getCurrentPageName());
        window.addEventListener('load', () => {
            console.log("hello");
            text.classList.toggle('active-text');  //ACTIVE CLASS 30%
            Lleaf.classList.toggle('active-Lleaf');
            Rleaf.classList.toggle('active-Rleaf');
            BottomFlower.classList.toggle('active-BottomFlower');
            LTopFlower.classList.toggle('active-LTopFlower');
            RTopFlower.classList.toggle('active-RTopFlower');


        });
    } else if (getCurrentPageName() === "questionPage2.html" || getCurrentPageName() === "questionPage3.html" || getCurrentPageName() === "questionPage4.html" || getCurrentPageName() === "questionPage5.html") {
        window.addEventListener('load', () => {

            textPP.classList.toggle('active-text-1'); //ACTIVE CLASS 35%
            Lleaf.classList.toggle('active-Lleaf');
            Rleaf.classList.toggle('active-Rleaf');
            BottomFlower.classList.toggle('active-BottomFlower');
            LTopFlower.classList.toggle('active-LTopFlower');
            RTopFlower.classList.toggle('active-RTopFlower');


        });
    } else {
        window.addEventListener('load', () => {

            textPP.classList.toggle('active-text-2'); //ACTIVE CLASS 42%
            Lleaf.classList.toggle('active-Lleaf');
            Rleaf.classList.toggle('active-Rleaf');
            BottomFlower.classList.toggle('active-BottomFlower');
            LTopFlower.classList.toggle('active-LTopFlower');
            RTopFlower.classList.toggle('active-RTopFlower');


        });
    }

});


// QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  
// QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  
// QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  QUESTIONS HANDELER  

if (getCurrentPageName() === "passowardPage.html") {

    // PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   PASSWORD PAGE JAVA SCRIPT   

    document.getElementById('password_input').addEventListener('input', function (event) {
        const value = event.target.value;
        if (value.length > 4) {
            event.target.value = value.slice(0, 4);
        }
    });

    document.addEventListener('DOMContentLoaded', () => {
        const submitButton = document.getElementById('password_button');
        const passwordInput = document.getElementById('password_input');

        const correctPassword = '2509';

        submitButton.addEventListener('click', () => {
            const enteredValue = passwordInput.value;

            passwordInput.value = '';

            if (enteredValue === correctPassword) {
                window.location.href = 'questionStartingPage.html';
            } else if (enteredValue === '') {
                alert('Please enter a password first.');
            } else {
                alert('Please enter the password correctly.');
            }
        });
    });
} else if (getCurrentPageName() === "questionPage1.html") {
    // QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    QUESTION PAGE 1 STYILING    



    document.addEventListener('DOMContentLoaded', () => {

        const changeButton = document.getElementById('questionHints1');
        const inputBox = document.getElementById('questionPage1_input');

        changeButton.addEventListener('click', () => {

            const selectBox = document.createElement('select');
            selectBox.id = 'questionPage1_input';
            selectBox.classList.add('selectBox');


            const options = [
                { value: 'white', text: 'White' },
                { value: 'pink', text: 'Pink' },
                { value: 'blue', text: 'Blue' },
                { value: 'red', text: 'Red' }
            ];

            options.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                selectBox.appendChild(option);
            });


            inputBox.parentNode.replaceChild(selectBox, inputBox);
        });



        const submitButton = document.getElementById('questionPage1_button');

        const correctAnswer = "Pink";

        submitButton.addEventListener('click', () => {

            const AnswerInput1 = document.getElementById('questionPage1_input');

            let enteredValue = AnswerInput1.value;

            enteredValue = enteredValue.toLowerCase().replace(/[^a-z0-9]/g, '');



            AnswerInput1.value = '';

            if (enteredValue === correctAnswer.toLowerCase()) {
                window.location.href = 'questionPage2.html';
            } else if (enteredValue === '') {
                alert('Please enter The Answer first.');
            } else {
                alert('Please enter the Answer correctly.');
            }
        });





    });

} else if (getCurrentPageName() === "questionPage2.html") {
    // QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   QUESTION PAGE 2 SCRIPT   


    document.addEventListener('DOMContentLoaded', () => {

        const changeButton = document.getElementById('questionHints2');
        const inputBox = document.getElementById('questionPage2_input');

        changeButton.addEventListener('click', () => {

            const selectBox = document.createElement('select');
            selectBox.id = 'questionPage2_input';
            selectBox.classList.add('selectBox');


            const options = [
                { value: 'Honney Singh', text: 'Honney Singh' },
                { value: 'Badshah', text: 'Badshah' },
                { value: 'Neha Kakkar', text: 'Neha Kakkar' },
                { value: 'Arijit Singh', text: 'Arijit Singh' }
            ];

            options.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                selectBox.appendChild(option);
            });


            inputBox.parentNode.replaceChild(selectBox, inputBox);
        });



        const submitButton = document.getElementById('questionPage2_button');

        const correctAnswer = "ArijitSingh";

        submitButton.addEventListener('click', () => {

            const AnswerInput1 = document.getElementById('questionPage2_input');

            let enteredValue = AnswerInput1.value;

            enteredValue = enteredValue.toLowerCase().replace(/[^a-z0-9]/g, '');



            AnswerInput1.value = '';

            if (enteredValue === correctAnswer.toLowerCase()) {
                window.location.href = 'questionPage3.html';
            } else if (enteredValue === '') {
                alert('Please enter The Answer first.');
            } else {
                alert('Please enter the Answer correctly.');
            }
        });
    });

} else if (getCurrentPageName() === "questionPage3.html") {
    // QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   QUESTION PAGE 3 SCRIPT   


    document.addEventListener('DOMContentLoaded', () => {

        const changeButton = document.getElementById('questionHints3');
        const inputBox = document.getElementById('questionPage3_input');

        changeButton.addEventListener('click', () => {

            const selectBox = document.createElement('select');
            selectBox.id = 'questionPage3_input';
            selectBox.classList.add('selectBox');


            const options = [
                { value: 'Milkybar', text: 'Milkybar' },
                { value: 'Dairy Milk', text: 'Dairy Milk' },
                { value: 'Kit Kat', text: 'Kit Kat' },
                { value: 'Cadbury Silk', text: 'Cadbury Silk' }
            ];

            options.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                selectBox.appendChild(option);
            });


            inputBox.parentNode.replaceChild(selectBox, inputBox);
        });



        const submitButton = document.getElementById('questionPage3_button');

        const correctAnswer = "Milkybar";

        submitButton.addEventListener('click', () => {

            const AnswerInput1 = document.getElementById('questionPage3_input');

            let enteredValue = AnswerInput1.value;

            enteredValue = enteredValue.toLowerCase().replace(/[^a-z0-9]/g, '');



            AnswerInput1.value = '';

            if (enteredValue === correctAnswer.toLowerCase()) {
                window.location.href = 'questionPage4.html';
            } else if (enteredValue === '') {
                alert('Please enter The Answer first.');
            } else {
                alert('Please enter the Answer correctly.');
            }
        });
    });

} else if (getCurrentPageName() === "questionPage4.html") {
    // QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   QUESTION PAGE 4 SCRIPT   


    document.addEventListener('DOMContentLoaded', () => {

        const changeButton = document.getElementById('questionHints4');
        const inputBox = document.getElementById('questionPage4_input');

        changeButton.addEventListener('click', () => {

            const selectBox = document.createElement('select');
            selectBox.id = 'questionPage4_input';
            selectBox.classList.add('selectBox');


            const options = [
                { value: 'Rohit Sharma', text: 'Rohit Sharma' },
                { value: 'Virat Kohli', text: 'Virat Kohli' },
                { value: 'Mahendra Singh Dhoni', text: 'Mahendra Singh Dhoni' },
                { value: 'Hardik Pandya', text: 'Hardik Pandya' }
            ];

            options.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                selectBox.appendChild(option);
            });


            inputBox.parentNode.replaceChild(selectBox, inputBox);
        });



        const submitButton = document.getElementById('questionPage4_button');

        const correctAnswer1 = "MSDhoni";
        const correctAnswer2 = "MahendraSinghDhoni";

        submitButton.addEventListener('click', () => {

            const AnswerInput1 = document.getElementById('questionPage4_input');

            let enteredValue = AnswerInput1.value;

            enteredValue = enteredValue.toLowerCase().replace(/[^a-z0-9]/g, '');



            AnswerInput1.value = '';

            if (enteredValue === correctAnswer1.toLowerCase() || enteredValue === correctAnswer2.toLowerCase()) {
                window.location.href = 'questionPage5.html';
            } else if (enteredValue === '') {
                alert('Please enter The Answer first.');
            } else {
                alert('Please enter the Answer correctly.');
            }
        });
    });

} else if (getCurrentPageName() === "questionPage5.html") {
    // QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   QUESTION PAGE 5 SCRIPT   


    document.addEventListener('DOMContentLoaded', () => {

        const changeButton = document.getElementById('questionHints5');
        const inputBox = document.getElementById('questionPage5_input');

        changeButton.addEventListener('click', () => {

            const selectBox = document.createElement('select');
            selectBox.id = 'questionPage5_input';
            selectBox.classList.add('selectBox');


            const options = [
                { value: 'Chole Bhature', text: 'Chole Bhature' },
                { value: 'Biryani', text: 'Biryani' },
                { value: 'Tandoori Chicken', text: 'Tandoori Chicken' },
                { value: 'Chili Chicken', text: 'Chili Chicken' }
            ];

            options.forEach(optionData => {
                const option = document.createElement('option');
                option.value = optionData.value;
                option.textContent = optionData.text;
                selectBox.appendChild(option);
            });


            inputBox.parentNode.replaceChild(selectBox, inputBox);
        });



        const submitButton = document.getElementById('questionPage5_button');

        const correctAnswer1 = "Biryani";
        const correctAnswer2 = "Biriani";

        submitButton.addEventListener('click', () => {

            const AnswerInput1 = document.getElementById('questionPage5_input');

            let enteredValue = AnswerInput1.value;

            enteredValue = enteredValue.toLowerCase().replace(/[^a-z0-9]/g, '');



            AnswerInput1.value = '';

            if (enteredValue === correctAnswer1.toLowerCase() || enteredValue === correctAnswer2.toLowerCase()) {
                window.location.href = 'questionEndingPage.html';
            } else if (enteredValue === '') {
                alert('Please enter The Answer first.');
            } else {
                alert('Please enter the Answer correctly.');
            }
        });
    });

}









