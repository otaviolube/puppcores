const puppeteer = require("puppeteer");

const getCores = async () => {
    
    let vetorCores = [];

    try{
        const browser = await puppeteer.launch({headless: false});
        const page = await browser.newPage();
        await page.goto('https://www.w3schools.com/colors/colors_names.asp');

        let i = 1;

        await page.waitForNetworkIdle(100);

        while(true){
            elementoTexto = await page.$(`#box${i} > span > a`);
            if(!elementoTexto) break;
            const texto = await page.evaluate(element => element.textContent, elementoTexto)
            vetorCores.push(texto);
            i++;
        } 
        
        await browser.close();
    }catch(erro){
        console.log(erro);
    }finally{
        return vetorCores;
    }
}

module.exports = getCores;