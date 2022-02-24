const dropdown = document.getElementsByClassName("menu-content");

for (let i = 0; i < dropdown.length; i++) {
    dropdown[i].addEventListener("click", function () {
        var dropdownContent = this.nextElementSibling;
        // console.log(dropdownContent);
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    });
}

const addItem = document.getElementsByClassName('increment-item');
const decrementItem = document.getElementsByClassName('decrement-item');

function wrapper1() {

    // console.log(addItem);
    // console.log(decrementItem);
    
    for(let i=0;i<addItem.length;i++) {
        let count=0;
        addItem[i].addEventListener('click', function() {
            const div = this.previousElementSibling;
            count++;
    
            div.innerText = `${count}`;
            
        })

        decrementItem[i].addEventListener('click', function() {
            const div = this.nextElementSibling;
            count--;
            count = Math.max(count, 0);
            if(count <= 0)
                div.innerText='ADD';
            else
            div.innerText = `${count}`;
        })
    }

}

wrapper1();


