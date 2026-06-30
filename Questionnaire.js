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

        //store the values

        localStorage.setItem(
            "gameName",
            document.getElementById("name").value
        );

        localStorage.setItem(
            "rogueType",
            document.querySelector('input[name="roguetype"]:checked').value
        );

        localStorage.setItem(
            "genres",
            //get the values, change it from nodelist to array
            //get each array value and store em
            JSON.stringify(
                Array.from(
                    document.querySelectorAll('input[name="genres"]:checked')
                ).map(cb => cb.value) //function(cb){return cb.value;}
            )
        );

        localStorage.setItem(
            "playtime",
            document.querySelector('input[name="playtime"]:checked').value
        );

        //move to the next window
        window.location.href = "QuestionnaireSlideTwo.html";
    });
}

const pageTwoForm = document.getElementById("questionnaireFormTwo");

if (pageTwoForm) {
    pageTwoForm.addEventListener("submit", (event) => { //function() {
        //prevent refresh
        event.preventDefault();

        //check if all required questions were answered
        if (!pageTwoForm.checkValidity()) {
            pageTwoForm.reportValidity();
            return;
        }

        //store the values

        localStorage.setItem(
            "classes",
            document.querySelector('input[name="classes"]:checked').value
        );

        localStorage.setItem(
            "perma_upgrades",
            document.querySelector('input[name="perma_upgrades"]:checked').value
        );

        localStorage.setItem(
            "equippable_items",
            document.querySelector('input[name="equippable_items"]:checked').value
        );

        localStorage.setItem(
            "unlockable_items",
            document.querySelector('input[name="unlockable_items"]:checked').value
        );

        //move to results page
        window.location.href = "QuestionnaireResults.html";
    });

const resultForm = document.getElementById("QuestionnaireResults");


}