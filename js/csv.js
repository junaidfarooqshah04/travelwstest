    function countManager() {

        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
            localStorage.clickcount = 1;
        }
    }
    // let a = localStorage.getItem("clickcount");
    // let doc = document.getElementsByClassName('count')
    // console.log(doc, doc[0]);
    // // doc.innerHTML = `Visit Counts - ${a}`