(function () {
    const quoteElement = document.getElementById('quote');
    const quoteItem = localStorage.getItem('quote');

    //현재시간
    const nowDate = new Date();
    const month = nowDate.getMonth() + 1;
    const date = nowDate.getDate();

    const setQuote = (result) => {
        let quote = { createDate: `${month}-${date}`, quoteData: result };
        localStorage.setItem('quote', JSON.stringify(quote));
        quoteElement.textContent = `"${result}"`;
    };

    const fixedQuote = "에러 없는 프로그램을 만드는 데는 두 가지 방법이 있다. 그런데 세 번째 것만 작동한다. -앨런 펄리스-";

    if (quoteItem) {
        //localstorage에 quote가 있다면
        let { createDate, quoteData } = JSON.parse(quoteItem);
        if (createDate === `${month}-${date}`) {
            quoteElement.textContent = `"${quoteData}"`;
        } else {
            setQuote(fixedQuote);
        }
    } else {
        //localstorage에 quote가 없다면
        setQuote(fixedQuote);
    }
})();
