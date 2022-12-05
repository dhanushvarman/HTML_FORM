function foo() {
    if (document.querySelectorAll(".checkbox:checked").length >= 2) {
        var array = [];

        if (document.querySelectorAll("#cb1:checked").length === 1) {
            array.push(document.querySelector("#cb1").value);
        }
        if (document.querySelectorAll("#cb2:checked").length === 1) {
            array.push(document.querySelector("#cb2").value);
        }
        if (document.querySelectorAll("#cb3:checked").length === 1) {
            array.push(document.querySelector("#cb3").value);
        }
        if (document.querySelectorAll("#cb4:checked").length === 1) {
            array.push(document.querySelector("#cb4").value);
        }
        if (document.querySelectorAll("#cb5:checked").length === 1) {
            array.push(document.querySelector("#cb5").value);
        }
        // console.log(document.querySelector(".checkbox").value);
        console.log(array);
        var res = document.querySelector("#first").value;
        // console.log(res);

        var res1 = document.querySelector("#last").value;
        // console.log(res1);

        var res2 = document.querySelector("#address").value;
        // console.log(res2);

        var res3 = document.querySelector("#pin").value;
        // console.log(res3);

        if (document.querySelector("#male").checked) {
            var res4 = "Male";
        }
        else {
            res4 = "Female";
        }

        var res5 = document.querySelector("#state").value;
        console.log(res5);

        var res6 = document.querySelector("#country").value;
        console.log(res6);

        var row = document.querySelector("#table");
        row.innerHTML += `
        <tr >          
        <td>${res}</td>
        <td>${res1}</td>
        <td>${res2}</td>
        <td>${res3}</td>
        <td>${res4}</td>
        <td id="array">${array.join(",")}</td>
        <td>${res5}</td>
        <td>${res6}</td>
        </tr>`;

    }
    else {
        window.alert("Select atleast two food choice!!!")
    }
}

document.body.style.backgroundColor = "lavender";
