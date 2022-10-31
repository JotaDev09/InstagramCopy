let posts = [
    {
        'img_profil': 'developer/user_logo.png',
        'user': 'J.developer',
        'loc': 'Berlin, Deutschland',
        'img': 'developer/developer1.jpg',
        'utitle': 'The life is a circuit with the way that you like',
        'likes': 1289,
        'heart': 'icons/like.png',
        'heartR': 'icons/likered.png',
        'save': 'icons/save.png',
        'saveB': 'icons/save2.png',
        'friend': 'Developer Akademie',
        'comment':'Deine Zukunft hängt nur von dir ab.',
    },
    {
        'img_profil': 'food/food_user.jpeg',
        'user': 'LeckerEssen',
        'loc': 'Mexiko Stadt, Mexiko',
        'img': 'food/IMG_3222.jpeg',
        'utitle': 'Miniburger und pizza-waffle',
        'likes': 9721,
        'heart': 'icons/like.png',
        'heartR': 'icons/likered.png',
        'save': 'icons/save.png',
        'saveB': 'icons/save2.png',
        'friend': 'Alex87',
        'comment': 'Tienes que llevarme a comer ahí',
    },
    {
        'img_profil': 'bike/user_bike.jpeg',
        'user': 'Fahrrad_world',
        'loc': 'Segovia, Spain',
        'img': 'bike/IMG_3280.jpeg',
        'utitle': 'Das neue Canyon commuter 6',
        'likes': 234,
        'heart': 'icons/like.png',
        'heartR': 'icons/likered.png',
        'save': 'icons/save.png',
        'saveB': 'icons/save2.png',
        'friend': 'Gele10',
        'comment': 'Vamos de ruta?',
    },
    {
        'img_profil': 'developer/user_logo.png',
        'user': 'J.developer',
        'loc': 'Berlin, Deutschland',
        'img': 'developer/developer2.jpg',
        'utitle': 'Üben üben üben',
        'likes': 439,
        'heart': 'icons/like.png',
        'heartR': 'icons/likered.png',
        'save': 'icons/save.png',
        'saveB': 'icons/save2.png',
        'friend': 'JavaS',
        'comment': 'Weiter lernen!!',
    },
    {
        'img_profil': 'world_travel/IMG_2187.jpeg',
        'user': 'Travel9',
        'loc': 'Holbox, Mexiko',
        'img': 'world_travel/IMG_9659.jpeg',
        'utitle': 'Holbox',
        'likes': 1000,
        'heart': 'icons/like.png',
        'heartR': 'icons/likered.png',
        'save': 'icons/save.png',
        'saveB': 'icons/save2.png',
        'friend': 'Alex87',
        'comment': 'Unglaubliches Paradise'
    }
]


let stories = [

    {
        'img': 'bike/user_bike.jpeg',
        'name': 'Fahrrad_world',
    },
    {
        'img': 'developer/user_logo.png',
        'name': 'J.developer',
    },
    {
        'img': 'world_travel/world_user.jpeg',
        'name': 'Travel9',
    }
];


let otherUsers = [
    {
        'img': 'other_users/auto.jpeg',
        'name': 'Audi_Deu',
    },
    {
        'img': 'other_users/mountain.jpeg',
        'name': 'NaturLife',
    },
    {
        'img': 'other_users/lego.jpeg',
        'name': 'Lego_Museum',
    },
    {
        'img': 'other_users/music.jpeg',
        'name': 'Music2022',
    },
    {
        'img': 'other_users/xperience.jpeg',
        'name': 'Xperience9721',
    },
]


//render necessary functions at startup
function render() {
    renderPosts();
    renderStories();
    renderOtherUsers();
    commentsOfPost();
}


//show Post
function renderPosts() {
    let PostContent = document.getElementById('newPost');
    PostContent.innerHTML = '';

    for (let i = 0; i < posts.length; i++) {
        let newPost = posts[i];
        PostContent.innerHTML += generatePosts(newPost, i);
    }
}


//generate full Post
function generatePosts(newPost, i) {
    return /*html*/ `
    <div class="all_posts">
        <div class="posts" id="posts">
            <div class="post_header">
                <div class="profil_img_post">
                    <img class="img_user" src="${newPost['img_profil']}">
                    <div class="user_info">
                        <div class="name_user">${newPost['user']}</div>
                        <div class="loc_user">${newPost['loc']}</div>
                    </div>
                </div>
                <div class="points">
                    <img class="icon_points" src="icons/points.png">
                </div>
            </div>
            <div class="post_img">
                <img class="img_post" src="${newPost['img']}">
            </div>
            <div class="img_bottom">
                <div class="left">
                    <img class="icons_img" src="${newPost['heart']}" id="nolike${i}" onclick="like(${i})">
                    <img class="icons_like d-none" src="${newPost['heartR']}" id="like${i}" onclick="noLike(${i})">
                    <img class="icons_img2" src="icons/comment.png" alt="">
                    <img class="icons_img" src="icons/senden.png" alt="">
                </div>
                <div class="right">
                    <img class="icons_img" src="${newPost['save']}" id="nosave${i}" onclick="save(${i})">
                    <img class="icons_img d-none" src="${newPost['saveB']}" id="save${i}" onclick="noSave(${i})">
                </div>
            </div>
            <div class="like">
                <b class="likes" id="likes${i}">Gefällt ${newPost['likes']} Personen</b>
            </div>
            <div class="untertitle">
                <b class="utitle">${newPost['user']}</b>&nbsp;
                <div class="utitle">${newPost['utitle']}</div>
            </div>
            <div class="comments">
                    <div class="comments_people" id="commentsPeople${i}"></div>
                    <div class="new_comments" >
                </div>
            </div>
        </div>
    </div>
        `
}


//show comments of the post
function commentsOfPost(i) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];
        document.getElementById(`commentsPeople${i}`).innerHTML +=`
        <div class="all_comments">
            <b>${post['friend']}</b> ${post['comment']}
        <div class="new_comments" id="commentsNew${i}"></div>
        </div>
        <div class="new_comment">
        <div class=input>
        <input class="inputName" id="inputName${i}" placeholder="Name">
        <input class="inputComment" id="inputComment${i}" placeholder="Kommentar">
        </div>
        <button class="add" onclick="add(${i})">Posten</button></div>
            `;
    }
}


//add a new comment
function add(i) {
    let name = document.getElementById(`inputName${i}`).value;
    let comment = document.getElementById(`inputComment${i}`).value;

    document.getElementById(`commentsNew${i}`).innerHTML += `
    <div><b> ${name}</b> ${comment} </div>`
    
    document.getElementById(`inputName${i}`).value = '';
    document.getElementById(`inputComment${i}`).value = '';
}


// show stories of users
function renderStories() {
    let storieContent = document.getElementById('stories');
    storieContent.innerHTML = '';

    for (let i = 0; i < stories.length; i++) {
        let newStory = stories[i];
        storieContent.innerHTML += generateStories(newStory, i);
    }
}


// show stories of users in the page
function generateStories(newStory, i) {
    return /*html*/`
    <div class="new_story">
        <img class="user" src="${newStory['img']}">
        <div class="user_name">${newStory['name']}</div>
    </div>
    `
}


//other users to find
function renderOtherUsers() {
    let otherUser = document.getElementById('array_users');
    otherUser.innerHTML = '';

    for (let i = 0; i < otherUsers.length; i++) {
        let otherContent = otherUsers[i];
        otherUser.innerHTML += generateOtherUsers(otherContent, i);
    }
}


//other users to find in the page
function generateOtherUsers(otherContent, i) {
    return /*html*/ `
    <div class="new_Users">
        <div class="other_User">
            <img class="other_Img" src="${otherContent['img']}">
            <div class="other_Name">${otherContent['name']}</div>
        </div>
        <div class="folg">
            <a class="folgen">Folgen</a>
        </div>
    </div>
    `
}


//show red heart, like
function like(i) {
    document.getElementById(`nolike${i}`).classList.add('d-none');
    document.getElementById(`like${i}`).classList.remove('d-none');
    posts[i].likes++;
    document.getElementById(`likes${i}`).innerHTML = `
    Gefällt ${posts[i].likes} Personen`;
}


//show heart, no like
function noLike(i) {
    document.getElementById(`nolike${i}`).classList.remove('d-none');
    document.getElementById(`like${i}`).classList.add('d-none');
    posts[i].likes--;
    document.getElementById(`likes${i}`).innerHTML = `
    Gefällt ${posts[i].likes} Personen`;
}


//save the post
function save(i) {
    document.getElementById(`nosave${i}`).classList.add('d-none');
    document.getElementById(`save${i}`).classList.remove('d-none');
}


//don´t save the post
function noSave(i) {
    document.getElementById(`nosave${i}`).classList.remove('d-none');
    document.getElementById(`save${i}`).classList.add('d-none');
}


//show templates
function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}