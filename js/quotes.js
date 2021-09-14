const quotes = [
    {
        quote: '처음 아닌 길 어디 있던가 당신 만나러 가던 그날처럼',
        author: '고두현',
    },
    {
        quote: '한 곳만 죽어라 팠는데 그게 내 무덤이 될 수도 있다는 게 무서웠어.',
        author: '송민호',
    },
    {
        quote: '자세히 보아야 예쁘다. 오래보아야 사랑스럽다. 너도 그렇다.',
        author: '나태주',
    },
    {
        quote: '넌 머지않아 예쁜 꽃이 될 테니까',
        author: '박치성',
    },
    {
        quote: '네 눈물이 내게 닿으면 난 무너지는 우주가 된다.',
        author: '조병화',
    },
    {
        quote: '잘 살아라. 그게 최고의 복수다.',
        author: '탈무드',
    },
    {
        quote: '그대여 아무 걱정하지 말아요. 지난간 것은 지난간 대로 그런 의미가 있죠. 우리 다 함께 노래합시다. 후회 없이 꿈을 꿨다 말해요.',
        author: '들국화',
    },
    {
        quote: '나는 신발이 없음을 한탄했는데 거리에서 발이 없는 사람을 만났다.',
        author: '데일 카네기',
    },
    {
        quote: '우리 맘이 꽃으로 피어난다면 바로 너겠구나. 온종일 턱을 괴고 바라보게 한 그대 닮은 꽃병',
        author: '양희은',
    },
    {
        quote: '나보다 땀을 더 흘린 선수가 있다면, 금메달을 가져가도 좋다.',
        author: '김현우',
    },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
