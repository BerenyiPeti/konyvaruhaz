class KonyvModel {
    #konyvekTomb = [];

    constructor() {
       //console.log("KonyvModel");
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                //console.log('Success:', data);
                this.#konyvekTomb = data.konyv;
                //console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    adatModosit(adat) {
        console.log("módosítok!", adat);
    }

    adatTorol(adat) {
        console.log("törlök!", adat);
    }
}

export default KonyvModel;