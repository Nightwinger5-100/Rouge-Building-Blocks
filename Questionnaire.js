const pageOneForm = document.getElementById("questionnaireForm");

if (pageOneForm) {
    const nextBtn = document.getElementById("nextBtn");

    //when the next button is clicked
    nextBtn.addEventListener("click", () => { //function() {
        //check if all required questions were answered
        if (!pageOneForm.checkValidity()) {
            pageOneForm.reportValidity();
            return;
        }

        const selectedGenres = document.querySelectorAll('input[name="genres"]:checked');

        if (selectedGenres.length === 0) {
            alert("Please select at least one genre.");
            return;
        }

        if (selectedGenres.length > 3) {
            alert("Please select no more than 3 genres.");
            return;
        }

    //store the values via getting the checked option(s) and storing that value

    localStorage.setItem("gameName", document.getElementById("name").value)

    localStorage.setItem("rogueType", document.querySelector('input[name="roguetype"]:checked').value)

    localStorage.setItem(
        "genres",
        //get the values, change it from nodelist to array
        //get each array value and store em
        JSON.stringify(
            Array.from(document.querySelectorAll('input[name="genres"]:checked')).map(cb => cb.value) //function(cb){return cb.value;}
        )
    )

    localStorage.setItem("playtime", document.querySelector('input[name="playtime"]:checked').value)

    //move to the next window
    window.location.href = "QuestionnaireSlideTwo.html";
    })
}

const pageTwoForm = document.getElementById("questionnaireFormTwo");

if (pageTwoForm) {
    const nextBtn = document.getElementById("nextBtn");

    //when the next button is clicked
    nextBtn.addEventListener("click", () => { //function() {
        //prevent refresh
        event.preventDefault();

        //check if all required questions were answered
        if (!pageTwoForm.checkValidity()) {
            pageTwoForm.reportValidity();
            return;
        }

        //store the values

        localStorage.setItem(
            "classes", document.querySelector('input[name="classes"]:checked').value
        )

        localStorage.setItem(
            "perma_upgrades", document.querySelector('input[name="perma_upgrades"]:checked').value
        )

        localStorage.setItem(
            "equippable_items", document.querySelector('input[name="equippable_items"]:checked').value
        )

        localStorage.setItem(
            "unlockable_items", document.querySelector('input[name="unlockable_items"]:checked').value
        )

        //move to results page
        window.location.href = "QuestionnaireSlideThree.html";
    })

}

//calcs the brightness of the pixels
function calculateBrightness(imageData) {

    //get an array of the pixel rgb data
    const pixels = imageData.data;

    let totalBrightness = 0;

    for (let i = 0; i < pixels.length; i += 4) {

        const r = pixels[i];
        const g = pixels[i + 1];
        const b = pixels[i + 2];

        totalBrightness +=
            (r + g + b) / 3;
    }

    return totalBrightness /
        (pixels.length / 4);
}

//gets the brightness of each file and stores it
function analyzeImage(file, intensity) {

    const img = new Image();

    img.onload = () => { //function () {

        //make a canvas allowing the ability to check the pixels
        const canvas =
            document.createElement("canvas");

        //return the drawing context allowing pixel operations
        const ctx =
            canvas.getContext("2d");

        //match the canvas width/height to the file
        canvas.width = img.width;
        canvas.height = img.height;

        //copy the image
        ctx.drawImage(img, 0, 0);

        const imageData =
            ctx.getImageData(
                0,
                0,
                canvas.width,
                canvas.height
            );

        const brightness =
            calculateBrightness(imageData);
        
        //store the brightness
        localStorage.setItem(
            intensity + "_brightness",
            brightness
        );

        console.log(
            intensity,
            "brightness:",
            brightness
        );
    };

    //get the image as a url to be able to be loaded
    img.src = URL.createObjectURL(file);
}

//sends each image to be analzyed
function processUploadedImages() {

    const lowFile =
        document.getElementById("lowImage").files[0];

    const medFile =
        document.getElementById("medImage").files[0];

    const highFile =
        document.getElementById("highImage").files[0];

    //if any are missing don't continue
    if (!lowFile || !medFile || !highFile) {
        console.log("No images uploaded");
        return;
    }

    analyzeImage(lowFile, "low");
    analyzeImage(medFile, "med");
    analyzeImage(highFile, "high");
}

function handleImageCalcs() {

    // Analyze uploaded screenshots
    processUploadedImages();

    console.log("Page Three Complete");
}

const pageThreeForm = document.getElementById("questionnaireFormThree")

if(pageThreeForm){
    const skipBtn = document.getElementById("skipBtn");
    pageThreeForm.addEventListener("submit", (event) => { //function() {
        //prevent refresh
        event.preventDefault();

        //check if all required questions were answered
        if (!pageThreeForm.checkValidity()) {
            pageThreeForm.reportValidity();
            return;
        }

        //calls function and stores it
        handleImageCalcs();

        //move to results page
        window.location.href = "QuestionnaireResults.html";
        
    })
    skipBtn.addEventListener("click", () => { //function() {
        //prevent refresh
        event.preventDefault();

        //move to results page
        window.location.href = "QuestionnaireResults.html";
        
    })

    
}

const improveForm = document.getElementById("improveForm");
if (improveForm) {
    improveForm.addEventListener("submit", (event) => { //function() {
        //prevent refresh
        event.preventDefault();

        //check if all required questions were answered
        if (!improveForm.checkValidity()) {
            improveForm.reportValidity();
            return;
        }

        //store the value
        localStorage.setItem("improvement", document.querySelector('input[name="improvement"]:checked').value)


        //move to results page
        window.location.href = "AdviceSlide.html";
    })

}