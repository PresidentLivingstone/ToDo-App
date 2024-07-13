$(document).ready(function() {
    // Load saved todos from localStorage
    if(localStorage.getItem("todos")) {
        $("ul").html(localStorage.getItem("todos"));
    }

    $("input").keypress(function(event) {
        if(event.which == 13) {
            var todoText = $(this).val(); // Get the value
            $(this).val(""); // Clear the input field
            var newTodo = `
                <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center p-3 rajdhani-semibold">
                    ${todoText}
                    <span><i class="bi bi-trash3-fill"></i></span>   
                </li>  
            `;
            $("ul").append(newTodo);
            saveTodos(); // Save todos to localStorage
        }
    });

    $("ul").on('click', 'span', function(event) {
        $(this).parent().fadeOut(500, function() {
            $(this).remove();
            saveTodos(); // Save todos to localStorage
        });
        event.stopPropagation();
    });

    function saveTodos() {
        localStorage.setItem("todos", $("ul").html());
    }

    function updateTime() {
        var d = new Date();
        document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
    }

    // Update the time immediately
    updateTime();
    // Update the time every second
    setInterval(updateTime, 1000);
});






// Alternate which loses data on refresh !!!!!





// $("input").keypress( function(event) {
//     if(event.which == 13){
//         var todoText = $(this).val(); // Get the value
//         $(this).val(""); // Clear the input field
//         $("ul").append(`
//             <li class="list-group-item list-group-item-success d-flex justify-content-between align-items-center p-3 rajdhani-semibold">
//               ${todoText}
//               <span><i class="bi bi-trash3-fill"></i></span>   
//             </li>  
//         `)
//     }
// });

// $("ul").on('click', 'span', function(event) {
//     $(this).parent().fadeOut(500, function(){
//         $(this).remove();
//     });
//     event.stopPropagation();
// });


// function updateTime() {
//     var d = new Date();
//     document.getElementById("currentTime").innerHTML = d.toLocaleTimeString();
// }

// // Update the time immediately
// updateTime();
// // Update the time every second
// setInterval(updateTime, 1000);