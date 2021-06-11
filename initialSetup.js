function preload() {
    // music = loadSound("Favorite-Audio.mp3");
    whiteImg = loadImage("images/whitepiece.png");
    blackImg = loadImage("images/blackpiece.png");
    queenImg = loadImage("images/queenpiece.png");
    strikerImg = loadImage("images/striker.png");
}

function setup() {
    canvas = createCanvas(600, 750);
    // music.play();
    strikerReady = true;
    points = "not-initialized";
    gameState = 0;
    // Game state legend - 0 = Home screen || 1 = Playing || 2 = Player 1 won || 3 = Player2 won
    showOptions = {
        currentOpt: 0,
        showButtons: function () {
            showOptions.currentOpt = 1;
        },
        goNeutral: function () {
            showOptions.currentOpt = 0;
        },
        hideButtons: function () {
            showOptions.currentOpt = -1;
        }
    };
    // Show options legend - 0 = neutral || 1 = Show || -1 = Hide
    var aboutTxt = createElement("h2").html("About").position(35, 100).hide();
    var aboutInfo = createElement("p").attribute("class", "info").html("<i> This is a very popular game named carrom. <br> It is mainly about aiming on a point and acting according to it. <br> The aim and target of the person should be determined. <br> This game helps people be determined on their aims. <br> This game sends awareness amongst people <br> and tells an important story of </i> <strong> UNAWARENESS </strong> <i> <br> of their own motive. </i>").position(35, 150).hide();
    var doc_link = createElement("h2").html(" <a href='Peeyush Agarwal - Project 43 - Answered - Project+Questionairre.html'  target='_blank'> View Game Detail Document </a>").position(50, 470).hide();
    queenTxt = createElement("h3").position(40, 705).html("Come on, you just need a cover for the queen to be safe!!!").style("background-color", "green").hide();
    startButtons = [
        (createButton("About / How to play / Learnings").attribute("class", "button").position(150, 200).style("background-color", "red")).mousePressed(() => {
            startButtons[0].hide();
            startButtons[1].hide();
            startButtons[2].show();
            aboutTxt.show();
            aboutInfo.show();
            doc_link.show();

        }),
        (createButton("Play").attribute("class", "button").position(150, 335).style("background-color", "blue").mousePressed(() => {
            startButtons[0].hide();
            startButtons[1].hide();
            aboutTxt.hide();
            aboutInfo.hide();
            doc_link.hide();
            gameState = 1;
            startGame();
            startButtons[3].show();
        })),
        (createButton("<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Back_Arrow.svg/1200px-Back_Arrow.svg.png' draggable=false width='50' height='50'/>").attribute("class", "button").style("width", "50px").style("height", "50px").style("background-color", rgb(255, 250, 220)).position(520, 690).mousePressed(() => {
            startButtons[0].show();
            startButtons[1].show();
            startButtons[2].hide();
            aboutTxt.hide();
            aboutInfo.hide();
            doc_link.hide();
            doc_link.hide();
        }).hide()),
        (createButton("<img src='images/menu.png' draggable=false width='50' height='50'/>").attribute("class", "button").style("width", "50px").style("background-color", rgb(155, 210, 220)).style("height", "50px").position(545, 710).mousePressed(() => {
            showOptions.showButtons();
        }).hide()),
        (createButton("Give up").attribute("class", "button").style("width", "140px").style("height", "50px").style("font-size", "20px").style("background-color", "red").position(465, 640).mousePressed(() => {
            resetGame(aboutTxt, aboutInfo, doc_link);
        }).hide()),
        (createButton("New Game").attribute("class", "button").style("width", "140px").style("height", "50px").style("font-size", "20px").style("background-color", "red").position(465, 580).mousePressed(() => {
            resetGame(aboutTxt, aboutInfo, doc_link);
        }).hide()),
        (createButton("Cancel").attribute("class", "button").style("width", "140px").style("height", "50px").style("font-size", "20px").style("background-color", "red").position(465, 520).mousePressed(() => {
            showOptions.hideButtons();
        }).hide()),
    ];
}