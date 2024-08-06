function message(text){
    alert(text)
}
function displaydate(){
    document.write(Date())
}
function introreveal(){
    var text=document.getElementById("intros");
    text.classList.remove("hide");
    var button=document.getElementById("introduction");
    button.classList.remove("introduction");
    button.classList.add("hide")
}
function changeimg(newsrc){
    document.getElementById("edu").src=newsrc
}
function reload(){
    location.reload()
}
function randomquotes(){
    quotes=[
        "The only thing we have to fear is fear itself.",
        "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.",
        "Do one thing every day that scares you.",
        "Well done is better than well said.",
        "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        "It is during our darkest moments that we must focus to see the light.",
        "Do not go where the path may lead; go instead where there is no path and leave a trail.",
        "Be yourself; everyone else is already taken.",
        "You will face many defeats in life, but never let yourself be defeated.",
        "Go confidently in the direction of your dreams! Live the life you've imagined.",
        "In the end, it's not the years in your life that count. It's the life in your years.",
        "Life is a succession of lessons which must be lived to be understood.",
        "Never let the fear of striking out keep you from playing the game.",
        "Life is never fair, and perhaps it is a good thing for most of us that it is not.",
        "The only impossible journey is the one you never begin.",
        "In this life, we cannot do great things. We can only do small things with great love.",
        "Only a life lived for others is a life worthwhile.",
        "The purpose of our lives is to be happy.",
        "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        "You only live once, but if you do it right, once is enough.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "Don't worry when you are not recognized but strive to be worthy of recognition.",
        "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        "Life is really simple, but we insist on making it complicated.",
        "May you live all the days of your life.",
        "Life itself is the most wonderful fairy tale.",
        "Do not let making a living prevent you from making a life.",
        "Try not to become a man of success. Rather become a man of value.",
        "Don't be afraid to give up the good to go for the great.",
        "Leave nothing for tomorrow which can be done today.",
        "Success is walking from failure to failure with no loss of enthusiasm.",
        "When you undervalue what you do, the world will undervalue who you are.",
        "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
        "If you genuinely want something, don't wait for it — teach yourself to be impatient.",
        "The only place where success comes before work is in the dictionary.",
        "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        "Before anything else, preparation is the key to success.",
        "In playing ball and in life, a person occasionally gets the opportunity to do something great. When that time comes, only two things matter: being prepared to seize the moment and having the courage to take your best swing.",
        "You miss 100% of the shots you don't take.",
        "Whether you think you can or you think you can't, you're right.",
        "I have learned over the years that when one's mind is made up, this diminishes fear.",
        "I alone cannot change the world, but I can cast a stone across the water to create many ripples.",
        "Keep smiling, because life is a beautiful thing and there's so much to smile about.",
        "In the depth of winter, I finally learned that within me there lay an invincible summer.",
        "In three words, I can sum up everything I've learned about life: it goes on.",
        "So we beat on, boats against the current, borne back ceaselessly into the past.",
        "Life is either a daring adventure or nothing.",
        "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        "Life is made of ever so many partings welded together.",
        "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking.",
        "Life is trying things to see if they work.",
        "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "Believe you can, and you're halfway there.",
        "The only person you are destined to become is the person you decide to be.",
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "The question isn't who is going to let me; it's who is going to stop me.",
        "Winning isn't everything, but wanting to win is.",
        "You become what you believe.",
        "The most difficult thing is the decision to act; the rest is merely tenacity.",
        "How wonderful it is that nobody need wait a single moment before starting to improve the world.",
        "An unexamined life is not worth living.",
        "Everything you've ever wanted is on the other side of fear."
    ];
    var randquote=quotes[Math.floor(Math.random()*quotes.length)];
    document.getElementById("quote").innerHTML="Quote: <br>"+randquote;
}