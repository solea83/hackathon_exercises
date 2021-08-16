const news = [true, false, false, true, false, false, false, true, true, true];

const fakeNews = newsArray => {
    let counter = 0;
    newsArray.forEach(element => {
        if (!element) {
            counter++;
        }
    });
    console.log(`There is ${counter} fake news !`);
};
fakeNews(news);
