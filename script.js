// array of images
const images = [
    "src/img1.jpg",
    "src/img2.jpg",
    "src/img3.jpg",
    "src/img4.jpg",
    "src/img5.jpg",
    "src/img6.jpg",
    "src/img7.jpg",
    "src/img8.jpg",
    "src/img9.jpg",
    "src/img10.jpg"
]

// array for book names
const book_name = [
    "I Want to Eat Your Pancreas ",
    "Your Name ",
    "Look Back ",
    "Goodbye, Eri ",
    "The Garden of Words ",
    "5 Centimeters per Second ",
    "Go For It, Nakamura!! ",
    "Weathering with You ",
    "A Silent Voice ",
    "Classroom of the Elite "
]

// array for author names
const author_name = [
    "Novel by Yoru Sumino",
    "Makoto Shinkai",
    "Book by Tatsuki Fujimoto",
    "Book by Tatsuki Fujimoto",
    "Makoto Shinkai",
    "Makoto Shinkai",
    "Book by Syundei",
    "Makoto Shinkai",
    "Yoshitoki Ōima ",
    "Shōgo Kinugasa "
]

// array for quote of the book 
const quote = [
    '"Living means having someone you care about."',
    '"I’m always searching for something, for someone. This feeling has possessed me, I think, from that day… ."',
    '"If I could go back, I’d tell you... that it’s okay to take a break."',
    '"You don \'t stop watching movies because they have a bad ending. You keep watching to see how they end."',
    '"A faint clap of thunder. Even if rain comes not, I will stay here, together with you."',
    '"The speed at which cherry blossoms fall… Five centimeters per second."',
    '"I’m gonna confess my love to him… and we’ll live happily ever after!"',
    '"Who cares if we can’t see the sun? I want you more than any blue sky."',
    '"I wanted to say, ‘Can we be friends?’ But I couldn’t even manage that."',
    '"In this world, the strong eat the weak."'
]

//array for summary of book
const summary = [
    "Haruki befriends Sakura, a terminally ill classmate, and learns to embrace life through their bond. Her sudden, unrelated death leaves him cherishing her memory and life lessons.",
    "In Your Name, two teens, Taki and Mitsuha, mysteriously swap bodies across time and distance. Their connection leads to love, a race to prevent disaster, and eventual reunion.",
    "Look Back follows Fujino, a talented artist, reflecting on her bond with Kyomoto, a reclusive peer. Their shared passion and Kyomoto's tragic fate shape Fujino's growth and artistry.",
    "Goodbye, Eri follows Yuta, a teen filmmaker, as he processes grief and creativity through a film about his dying mother and his mysterious bond with Eri, a girl who inspires him.",
    "The Garden of Words follows Takao, a teen aspiring shoemaker, and Yukari, a mysterious woman, who form a deep bond through rainy-day meetings in a Tokyo park, healing each other’s emotional wounds.",
    "5 Centimeters per Second follows Takaki and Akari, childhood friends separated by distance. As years pass, their connection fades, highlighting themes of love, longing, and the inevitability of change.",
    "Go For It, Nakamura! follows Nakamura, a shy high school boy with a crush on his classmate, Aira. The story explores his awkward attempts to confess his feelings and navigate his emotions.",
    "Weathering with You follows Hodaka, a runaway teen, who meets Hina, a girl with the ability to control the weather. As they grow closer, they face challenges balancing their love with the consequences of her powers.",
    "A Silent Voice follows Shoya, a former bully, as he seeks redemption by reconnecting with Shoko, a deaf girl he once tormented. The story explores themes of guilt, forgiveness, and healing.",
    "Classroom of the Elite follows Kiyotaka Ayanokoji, a student at an elite school where students are ranked based on merit. He navigates complex social dynamics, competition, and manipulation to survive."
]


//array of background :
const background = [
    'rgb(189,236,255),rgb(253,208,215)',
    'blue,orange',
    'white,greenyellow',
    'red,black',
    'rgb(255,183,195),rgb(36,194,36)',
    'rgb(28,113,249),skyblue',
    'to bottom,pink,yellow',
    'skyblue,rgb(0,60,188)',
    'rgb(253,188,23),rgb(255,171,69)',
    'white,white'
]

// count for current page
let currentPage = 0;
 

// function to change the page when click up and down
function changeImage(direction){
    const summsec = document.getElementById('sum');
    const center = document.getElementById('center');

    //add and remove class for animation
    summsec.classList.remove('inleft');
    summsec.classList.add('outleft');
    center.classList.remove('inanimation');
    center.classList.add('outanimation');
    
    //when we press down arrow
    setTimeout(() => {
    if(direction === 'down'){
            currentPage = (currentPage + 1) % images.length;
    }

    //when we press up arrow
    else if(direction === 'up'){
       if(currentPage === 0){
            currentPage = images.length -1;
       }
       else{
        currentPage = (currentPage - 1)% images.length;
       }
    }
    if(currentPage === 11){
        currentPage = 0;
    }

    //changes as per the id
    document.getElementById('inimg').src = images[currentPage];
    document.getElementById('bookname').innerHTML = `<h2>${book_name[currentPage]}</h2>`
    document.getElementById('author').innerText = author_name[currentPage];
    document.getElementById('quote').innerText = quote[currentPage];
    document.getElementById('summary').innerText = summary[currentPage];
    
    //add and remove animation
    summsec.classList.remove('outleft');
    summsec.classList.add('inleft');

    center.classList.remove('outanimation');
    center.classList.add('inanimation');


    // to change the number
    const number = document.getElementsByClassName('sidename');
    const numArray = Array.from(number);

    numArray.forEach(text => text.style.fontWeight = 'normal');
    
    let totalManga = 10;
    let lastManga = totalManga - 1 - currentPage;
    if(numArray[lastManga]){
        numArray[lastManga].style.fontWeight = 900;
    }

    //to change the background color
    let body = document.getElementById('body');
    body.style.transition = 'background 0.5s ease-in-out';
    body.style.background = `linear-gradient(${background[currentPage]})`
    if(currentPage === 0 || currentPage === 2 || currentPage === 6 || currentPage === 8 || currentPage === 9){
        body.style.color = 'black';
    } 
    else{
        body.style.color = 'white';
    }

},500);
}

// event listener for changing the page
document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowDown'){
        changeImage('down')
    }
    else if(event.key === 'ArrowUp'){
        changeImage('up');
    }
});

let scrollflag = false;

document.addEventListener('wheel', function(event){
    if(!scrollflag){
        scrollflag = true;
        if(event.deltaY > 0){
            changeImage('down')
        }
        else if(event.deltaY < 0){
            changeImage('up')
        }
        setTimeout(()=>{
            scrollflag = false;
        },1500)
    }
})

document.getElementById('img').addEventListener('mousedown',function(){
    changeImage('down');
})

