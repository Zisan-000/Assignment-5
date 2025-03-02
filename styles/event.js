// date 
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayName = days[today.getDay()];
document.getElementById('day').innerText = dayName;
// month
const date = new Date(); 
const month = date.toLocaleString('en-US', { month: 'long' });
const day = date.getDate();
const year = date.getFullYear();
const formattedDate = `${month} ${day} ${year}`;
document.getElementById('month').innerText = formattedDate;

//time
const time = new Date().toLocaleTimeString();

// clear history
document.getElementById('clear').addEventListener('click',function(){
    const commentContainer = document.getElementById('comment-container');
    commentContainer.innerHTML = '';
})



// btn-1
document.getElementById('btn-1').addEventListener('click',function(){
    alert('Board Updated Successfully');
    document.getElementById('btn-1').disabled = true;
    const taskLeft = document.getElementById('task-left').innerText;
    document.getElementById('task-left').innerText = parseInt(taskLeft) - 1;
    const taskComeplete = document.getElementById('task-complete').innerText;
    document.getElementById('task-complete').innerText = parseInt(taskComeplete) + 1;
    // msg
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = `You have Complete The Task ${document.getElementById('fix').innerText} at ${time}`;
    commentContainer.appendChild(commentElement);
    check += 1;
    
})

// btn-2
document.getElementById('btn-2').addEventListener('click',function(){
    alert('Board Updated Successfully');
    document.getElementById('btn-2').disabled = true;
    const taskLeft = document.getElementById('task-left').innerText;
    document.getElementById('task-left').innerText = parseInt(taskLeft) - 1;
    const taskComeplete = document.getElementById('task-complete').innerText;
    document.getElementById('task-complete').innerText = parseInt(taskComeplete) + 1;
    // msg
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = `You have Complete The Task ${document.getElementById('dark').innerText} at ${time}`;
    commentContainer.appendChild(commentElement);
    check += 1;
})
// btn-3
document.getElementById('btn-3').addEventListener('click',function(){
    alert('Board Updated Successfully');
    document.getElementById('btn-3').disabled = true;
    const taskLeft = document.getElementById('task-left').innerText;
    document.getElementById('task-left').innerText = parseInt(taskLeft) - 1;
    const taskComeplete = document.getElementById('task-complete').innerText;
    document.getElementById('task-complete').innerText = parseInt(taskComeplete) + 1;
    // msg
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = `You have Complete The Task ${document.getElementById('home').innerText} at ${time}`;
    commentContainer.appendChild(commentElement);
    check += 1;
})
// btn-4
document.getElementById('btn-4').addEventListener('click',function(){
    alert('Board Updated Successfully');
    document.getElementById('btn-4').disabled = true;
    const taskLeft = document.getElementById('task-left').innerText;
    document.getElementById('task-left').innerText = parseInt(taskLeft) - 1;
    const taskComeplete = document.getElementById('task-complete').innerText;
    document.getElementById('task-complete').innerText = parseInt(taskComeplete) + 1;
    // msg
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = `You have Complete The Task ${document.getElementById('emoji').innerText} at ${time}`;
    commentContainer.appendChild(commentElement);
    check += 1;
   
})
// btn-5
document.getElementById('btn-5').addEventListener('click',function(){
    alert('Board Updated Successfully');
    document.getElementById('btn-5').disabled = true;
    const taskLeft = document.getElementById('task-left').innerText;
    document.getElementById('task-left').innerText = parseInt(taskLeft) - 1;
    const taskComeplete = document.getElementById('task-complete').innerText;
    document.getElementById('task-complete').innerText = parseInt(taskComeplete) + 1;
    // msg
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = `You have Complete The Task ${document.getElementById('api').innerText} at ${time}`;
    commentContainer.appendChild(commentElement);
    check += 1;
   
})
// btn-6
document.getElementById('btn-6').addEventListener('click',function(){
    alert('Board Updated Successfully');
    document.getElementById('btn-6').disabled = true;
    const taskLeft = document.getElementById('task-left').innerText;
    document.getElementById('task-left').innerText = parseInt(taskLeft) - 1;
    const taskComeplete = document.getElementById('task-complete').innerText;
    document.getElementById('task-complete').innerText = parseInt(taskComeplete) + 1;
    // msg
    const commentContainer = document.getElementById('comment-container');
    const commentElement = document.createElement('p');
    commentElement.classList.add('comment');
    commentElement.innerText = `You have Complete The Task ${document.getElementById('job').innerText} at ${time}`;
    commentContainer.appendChild(commentElement);
    check += 1;
    clicked(check);
})

// all button clicked
let check = 0;
function clicked(check){
    if (check===6){
        alert('Congrates!!! You have completed all the current task');
    }
   
}

// discover

document.getElementById('discover').addEventListener('click',function(){
    window.location.href='blog.html';
})

// theme
document.getElementById('theme').addEventListener('click',function(){
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16); 
    console.log(randomColor);
    document.getElementById('body').style.backgroundColor = randomColor;
})