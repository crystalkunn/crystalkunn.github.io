
let sentence = document.getElementById('catagory');

Array =[]

function start(event) {
    const randomNumber = Math.floor(Math.random()*10);
    let change = '';
    switch(randomNumber) {
        case 0:
            change = '自由な愛';
            break;
        case 1:
            change = '幸せな日々';
            break;
        case 2:
            change = '愛の喜び';
            break;
        case 3:
            change = '自分を愛せる';
            break;
        case 3:
            change = '幸せが訪れる';
            break;
        case 4:
            change = '楽しい思い出';
            break;
        case 5:
            change = '心休まる場所';
            break;
        case 6:
            change = '未来は明るい';
            break;
        case 7:
            change = '優しい心';
            break;
        case 8:
            change = '強い信念と決意';
            break;
        case 9:
            change = '今を生きる';
            break;
        }
    sentence.innerHTML = change;
    }


sentence.onclick = start;
