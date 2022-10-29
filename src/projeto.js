const getCores = require('./getCores');

(async () => {
    vetorCores = await getCores();
    console.log(vetorCores);
})();
